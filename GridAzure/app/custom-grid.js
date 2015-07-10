///#source 1 1 /app/app.js
angular.module('gridTaskApp', ['ngGrid'])
	.value('templatesPath', 'app/templates/')
	.value('jsonPath', 'data/');
///#source 1 1 /app/directives/page-content/page-content.js
angular.module('gridTaskApp')
	.directive('pageContent', ['templatesPath', '$compile', 'content', function (templatesPath, $compile, content) {
		return {
			restrict: 'E',
			scope: {
				data: '=gridData',
				contentOptions: '=',
				grid: '=',
				gridOptions: '='
			},
			templateUrl: templatesPath + 'page-content.html',
			link: function (scope, element) {
				var initializer = new Initializer(scope, element, content, templatesPath, $compile);
				initializer.init();

				scope.$watch('contentOptions', function (opt) {
					initializer.init();
					initializer.refreshOpt();
				});

				scope.$watch('data', function (data) {
					if (data) {
						initializer.refreshData(data);
					}
				});

				scope.$watch('data.length', function () {
					scope.grid.count = scope.data.length;
				});
			}
		}
	}]);
///#source 1 1 /app/constants/grid-constants.js
angular.module('gridTaskApp')
	 .constant("constantOfData", {
	 	count: 100,
	 	startDate: new Date(2000, 1, 1)
	 });
///#source 1 1 /app/directives/checkbox-select/checkbox-select-controller.js
angular.module('gridTaskApp')
	.controller('checkboxSelectCtrl', ['$scope', function ($scope) {
		if (!$scope.options.showClass) {
			$scope.options.showClass = 'glyphicon-menu-up'
		}
		if (!$scope.options.hideClass) {
			$scope.options.hideClass = 'glyphicon-menu-down'
		}

		if ($scope.options.selected === undefined) {
			$scope.options.selected = {};
		}

		$scope.select = function (action) {
			$scope.options.selected = action;

			if (action.isAll) {
				$scope.options.selected.check = true;
			}
			else {
				$scope.options.selected.check = false;
			}

			if ($scope.options.callback) {
				$scope.options.callback(action);
			}
		}

		$scope.checked = function (value) {
			if (value) {
				$scope.options.selected = $scope.options.actions.all;

				if ($scope.options.selected === undefined) {
					$scope.options.selected = {};
				}
				$scope.options.selected.check = true;
			}
			else {
				$scope.options.selected = $scope.options.actions.noOne;

				if ($scope.options.selected === undefined) {
					$scope.options.selected = {};
				}
				$scope.options.selected.check = false;
			}

			if ($scope.options.callback) {
				$scope.options.callback($scope.options.selected);
			}
		};
	}]);
///#source 1 1 /app/directives/checkbox-select/checkbox-select.js
angular.module('gridTaskApp')
	.directive('checkboxSelect', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				options: '='
			},
			templateUrl: templatesPath + 'checkbox-select.html',
			controller: 'checkboxSelectCtrl',
			link: function (scope, element, attrs) {
				element.find('ul').hide();
				element.find('span').addClass(scope.options.hideClass);

				element.click(function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
						element.find('.glyphicon').addClass(scope.options.hideClass);
						element.find('.glyphicon').removeClass(scope.options.showClass);
					}
					else {
						element.find('ul').show();
						element.find('.glyphicon').removeClass(scope.options.hideClass);
						element.find('.glyphicon').addClass(scope.options.showClass);
					}
				});

				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						element.find('ul').hide();
						element.find('.glyphicon').addClass(scope.options.hideClass);
						element.find('.glyphicon').removeClass(scope.options.showClass);
					}
				})

				scope.$watch('options.selected', function (value) {
					if (value) {
						if (value.isMarked || value.isNotMarked) {
							element.find('.checkbox-select__input-control__span').addClass('marked');
						}
						else {
							element.find('.checkbox-select__input-control__span').removeClass('marked');
						}

						if (value.isAll) {
							value.check = true;
						}
						else {
							value.check = false;
						}
					}
				});
			}
		}
	}]);
///#source 1 1 /app/directives/custom-grid/custom-grid-controller.js
angular.module('gridTaskApp')
	.controller('customGridCtrl', ['$scope', 'templatesPath', function ($scope, templatesPath) {
		
		function plugin() {
			//if ($scope.exportTo.label == 'Excel') {
			//	$scope.options.plugins.push(new ngGridCsvExportPlugin());
			//}
		}

		plugin();
	}]);
///#source 1 1 /app/directives/custom-grid/custom-grid.js
angular.module('gridTaskApp')
	.directive('customGrid', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			controller: 'customGridCtrl',
			scope: {
				data: '=gridData',
				exportTo: '=',
				options: '=gridOptions'
			},
			templateUrl: templatesPath + 'custom-grid.html',
			link: function (scope, element, attrs) {
			}
		};
	}]);
///#source 1 1 /app/directives/custom-grid/row-check/row-check.js
angular.module('gridTaskApp')
	.directive('rowCheck', [function () {
		return {
			restrict: 'A',
			scope: {
				value: '=rowCheck'
			},
			link: function (scope, element, attrs) {
				scope.$watch('value.orig.actions.isCheck', function (value) {
					if (value) {
						element.parent().addClass('checked');
					}
					else {
						element.parent().removeClass('checked');
					}
				});
			}
		}
	}]);
///#source 1 1 /app/directives/details/details-template.js
angular.module('gridTaskApp')
	.directive('detailsTemplate', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'A',
			compile: function (element, attrs) {
				return {
					pre: function (scope, element, attrs) {
						//scope.wthDetails = scope.$parent.$parent.options.withDetails;

						if (scope.row.orig.actions.detailsTemplate) {
							$.get(scope.row.orig.actions.detailsTemplate, function (result) {
								element.append(result);
							});
						}

						element.hide();

						scope.$watch('row.entity.isToggle', function (value) {
							if (value) {
								element.show();

								scope.row.orig.isDetails = true;

								if (scope.row.elm.height() != 0) {
									element.css('top', scope.row.elm.height() + 'px');
								}

								if (!scope.row.actions.step) {
									scope.row.orig.actions.step = 0;
								}

								scope.row.orig.actions.step = scope.row.elm.context.scrollHeight;

								scope.renderedRows.forEach(function (value) {
									if (value.$$hashKey != scope.row.$$hashKey) {
										var totalWidth = element.prop('scrollHeight');

										if (parseInt(value.$$hashKey.replace('object:', '')) > parseInt(scope.row.$$hashKey.replace('object:', ''))) {
											value.elm.css('top', value.elm.position().top + totalWidth + 'px');
										}
									}
								});
							}
							else {
								element.hide();
							}
						})
					}
				}
			}
		}
	}]);
///#source 1 1 /app/directives/details/details.js
angular.module('gridTaskApp')
	.directive('details', ['$compile', function ($compile) {
		return {
			restict: 'A',
			scope: {
				row: '=',
				detailsClass: '='
			},
			link: function (scope, element, attrs) {

				element.click(function () {
					scope.row.orig.actions.isToggle = !scope.row.orig.actions.isToggle;

					scope.row.orig.actions.setToggle(scope.row.orig, scope.row.orig.actions.isToggle, scope.detailsClass);
				});
			}
		}
	}]);

///#source 1 1 /app/directives/dropdown/dropdown-controller.js
angular.module('gridTaskApp')
	.controller('dropdownCtrl', ['$scope', function ($scope) {
		if (!$scope.options.showClass) {
			$scope.options.showClass = 'glyphicon-menu-up'
		}
		if (!$scope.options.hideClass) {
			$scope.options.hideClass = 'glyphicon-menu-down'
		}

		if (!$scope.options.isMenu) {
			$scope.options.selected = $scope.options.values[0];

			if ($scope.options.callback) {
				$scope.options.callback($scope.options.selected);
			}
		}
		else {
			$scope.options.selected = {};
		}

		$scope.select = function (action) {
			$scope.options.selected = action;

			if ($scope.options.callback) {
				$scope.options.callback(action);
			}
		}
	}]);
///#source 1 1 /app/directives/dropdown/dropdown.js
angular.module('gridTaskApp')
	.directive('dropdown', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				options: '=dropdownOptions'
			},
			controller: 'dropdownCtrl',
			templateUrl: templatesPath + 'dropdown.html',
			link: function (scope, element, attrs) {
				element.find('ul').hide();
				element.find('span').addClass(scope.options.hideClass);

				element.click(function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
						element.find('span').addClass(scope.options.hideClass);
						element.find('span').removeClass(scope.options.showClass);
					}
					else {
						element.find('ul').show();
						element.find('span').removeClass(scope.options.hideClass);
						element.find('span').addClass(scope.options.showClass);
					}
				});

				$(document).click(function (event) {
					if (element.find('ul').is(':visible')) {
						if (!$(event.target).closest(element).length) {
							element.find('ul').hide();
							element.find('span').addClass(scope.options.hideClass);
							element.find('span').removeClass(scope.options.showClass);
						}
					}
				})
			}
		}
	}]);
///#source 1 1 /app/directives/filter/filter-controller.js
angular.module('gridTaskApp')
	.controller('filterCtrl', ['$scope', function ($scope) {
		$scope.listState = false;

		$scope.filterClick = function () {
			$scope.listState = !$scope.listState;

			if ($scope.listState) {
				$scope.filterOptions.forEach(function (opt) {
					opt.filter = "";
				});
			}
		};

		$scope.showRecords = function () {
			$scope.listState = false;

			$scope.filtrate($scope.filterOptions);
		}
	}]);
///#source 1 1 /app/directives/filter/filter.js
angular.module('gridTaskApp')
	.directive('filter', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				listState: '=',
				filterOptions: '=options',
				filtrate: '='
			},
			controller: 'filterCtrl',
			templateUrl: templatesPath + 'filter.html',
			link: function (scope, element, attrs) {
				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						scope.listState = false;
						scope.$apply();
					}
				})

				element.find('span.expand').addClass('glyphicon-menu-down');

				scope.$watch('listState', function (value) {
					if (value) {
						element.addClass('filter-selected');
						element.find('span.expand').removeClass('glyphicon-menu-down');
						element.find('span.expand').addClass('glyphicon-menu-up');
					}
					else {
						element.removeClass('filter-selected');
						element.find('span.expand').addClass('glyphicon-menu-down');
						element.find('span.expand').removeClass('glyphicon-menu-up');
					}
				});
			}
		}
	}]);
///#source 1 1 /app/directives/filter/filter-list/filter-list-controller.js
angular.module('gridTaskApp')
	.controller('filterListCtrl', ['$scope', function ($scope) {
		$scope.filter = function () {
			$scope.isFiltrate = true;
		}
	}]);
///#source 1 1 /app/directives/filter/filter-list/filter-list.js
angular.module('gridTaskApp')
	.directive('filterList', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'filter-list.html',
			controller: 'filterListCtrl',
			link: function (scope, element, attrs) {
			}
		}
	}]);
///#source 1 1 /app/directives/grid-menu/grid-menu-controller.js
angular.module('gridTaskApp')
	.controller('gridMenuCtrl', ['$scope', function ($scope) {
		$scope.options = {
			isMenu: true,
			label: '',
			values: [],
			callback: function (action) {
				if (action) {
					for (var i = $scope.columns.length - 2; i > 0 ; i--) {
						if ($scope.columns[i].visible) {
							$scope.columns[i].toggleVisible();
							action.element.toggleVisible();

							this.values.splice(this.values.indexOf(action), 1);
							this.values.push({ label: $scope.columns[i].field, element: $scope.columns[i] });
							break;
						}
					}
				}
			}
		};
	}]);
///#source 1 1 /app/directives/grid-menu/grid-menu.js
angular.module('gridTaskApp')
	.directive('gridMenu', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'grid-menu.html',
			controller: 'gridMenuCtrl',
			link: function (scope, element, attrs) {

				scope.$watch('columns', function (value) {
					if (Array.isArray(value) && value.length > 0) {

						var totalWidth = value.reduce(function (a, b) {
							return a + b.minWidth;
						}, 0);

						if ($(window).width() < totalWidth) {
							for (var i = value.length - 2; i > 1; i--) {
								if (value[i].visible) {
									value[i].toggleVisible();
									totalWidth -= value[i].minWidth;
									scope.options.values.push({ label: value[i].field, element: value[i] });
								}
								if ($(window).width() > totalWidth) {
									break;
								}
							}
						}

						if (scope.options.values.length > 0) {
							scope.isShow = true;
						}

						$(window).resize(function () {
							var totalWidth = value.reduce(function (a, b) {
								if (b.visible) {
									return a + b.minWidth;
								} else {
									return a;
								}
							}, 0);

							if ($(window).width() < totalWidth) {
								for (var i = value.length - 2; i > 1; i--) {
									if (value[i].visible) {
										value[i].toggleVisible();
										totalWidth -= value[i].minWidth;
										scope.options.values.push({ label: value[i].field, element: value[i] });
									}
									if ($(window).width() > totalWidth) {
										break;
									}
								}
							}
							else {
								for (var i = 2; i < value.length - 1; i++) {
									if (!value[i].visible) {
										value[i].toggleVisible();
										totalWidth += value[i].minWidth;
										scope.options.values.splice(scope.options.values.indexOf(value[i]), 1);

										if ($(window).width() < totalWidth) {
											value[i].toggleVisible();
											totalWidth -= value[i].minWidth;

											var isExist = false;
											for (var j = 0; j < scope.options.values.length; j++) {
												if (scope.options.values[j].label == value[i].field) {
													isExist = true;
												}
											}
											if (!isExist) {
												scope.options.values.push({ label: value[i].field, element: value[i] });
											}
											else {
												scope.options.values = [];

												for (var j = 0; j < value.length; j++) {
													if (!value[j].visible) {
														scope.options.values.push({ label: value[j].field, element: value[j] });
													}
												}
											}
											break;
										}
									}

								}
							}

							if (scope.options.values.length > 0) {
								scope.isShow = true;
							}
							else {
								scope.isShow = false;
							}
						});
					}
				});
			}
		}
	}]);
///#source 1 1 /app/directives/loading/loading.js
angular.module('gridTaskApp')
	.directive('loading', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'loading.html',
			link: function (scope, element, attrs) {
				element.css('height', element.parent().parent().height() + 'px');
				element.css('width', element.parent().parent().width() + 'px');

				element.find('.loading-disabled').css('top', 0);

				element.find('.loading-disabled').css('height', element.parent().parent().height() + 'px');
				element.find('.loading-disabled').css('width', element.parent().parent().width() + 'px');

				$(window).resize(function () {
					element.css('height', element.parent().parent().height() + 'px');
					element.css('width', element.parent().parent().width() + 'px');

					element.find('.loading-disabled').css('top', 0);

					element.find('.loading-disabled').css('height', element.parent().parent().height() + 'px');
					element.find('.loading-disabled').css('width', element.parent().parent().width() + 'px');
				});
			}
		}
	}]);
///#source 1 1 /app/directives/page-content/content-options/content-options-controller.js
angular.module('gridTaskApp')
	.controller('contentOptionsCtrl', ['$scope', function ($scope) {
		$scope.$watch('options.searchValue', function (value) {
			if (!$scope.options.searchOptions) {
				return;
			}

			if ($scope.options.searchOptions.selected.label == 'everywhere') {
				$scope.options.search(value);
			} else {
				$scope.options.search($scope.options.searchOptions.selected.label + ':' + value);
			}
		});

	}]);
///#source 1 1 /app/directives/page-content/content-options/content-options.js
angular.module('gridTaskApp')
	.directive('contentOptions', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			controller: 'contentOptionsCtrl',
			scope: {
				options: '='
			},
			templateUrl: templatesPath + 'content-options.html'
		}
	}]);
///#source 1 1 /app/directives/resize-on/resize-on.js
angular.module('gridTaskApp')
	.directive('resizeOn', [function () {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				element.css('width', (element.parent().position().left + element.parent().width()) + 'px');

				if (element.width() < element.css('min-width').replace('px', '')) {
					element.css('right', 'auto');
					element.css('width', '450px');
				}
				else {
					element.css('right', '0');
				}

				element.css('top', element.parent().height() + 'px');

				$(window).resize(function () {
					element.css('width', (element.parent().position().left + element.parent().width()) + 'px');

					if (element.width() < element.css('min-width').replace('px', '')) {
						element.css('right', 'auto');
						element.css('width', '450px');
					} else {
						element.css('right', '0');
					}
				});
			}
		}
	}]);
///#source 1 1 /app/directives/search/search-controller.js
angular.module('gridTaskApp')
	.controller('searchCtrl', ['$scope', function ($scope) {
		$scope.edited = false;

		$scope.focus = function () {
			$scope.edited = true;
		};

		$scope.blur = function () {
			$scope.edited = false;
		}

		$scope.clear = function () {
			$scope.searchValue = '';
		};
	}]);
///#source 1 1 /app/directives/search/search.js
angular.module('gridTaskApp')
	.directive('search', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				searchValue: '=',
				edited: '='
			},
			controller: 'searchCtrl',
			templateUrl: templatesPath + 'search.html',
			link: function (scope, element, attrs) {
				element.find('.search-clear').hide();
				element.find('.search-span').show();


				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						element.find('.search-clear').hide();
						element.find('.search-span').show();
					}
				})

				element.focusin(function () {
					element.find('.search-clear').show();
					element.find('.search-span').hide();
				})
			}
		}
	}]);
///#source 1 1 /app/directives/slider/slider.js
angular.module('gridTaskApp')
	.directive('slider', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				sliderValue: '='
			},
			templateUrl: templatesPath + 'slider.html'
		}
	}]);
///#source 1 1 /app/directives/split-button/split-button-controller.js
angular.module('gridTaskApp')
	.controller('splitButtonCtrl', ['$scope', function ($scope) {
		if (!$scope.actions) {
			$scope.actions = [];
		}
		$scope.actions.everywhere = { label: 'everywhere', isEverywhere: true };

		$scope.actions.selected = $scope.actions.everywhere;

		$scope.select = function (action) {
			$scope.actions.selected = action;
			$scope.search = '';
		}
	}]);
///#source 1 1 /app/directives/split-button/split-button.js
angular.module('gridTaskApp')
	.directive('splitButton', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				actions: '=',
				selected: '=',
				search: '='
			},
			templateUrl: templatesPath + 'split-button.html',
			controller: 'splitButtonCtrl',
			link: function (scope, element, attrs) {
				element.find('ul').hide();
				element.find('span').addClass('glyphicon-menu-down');

				element.click(function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
						element.find('span').addClass('glyphicon-menu-down');
						element.find('span').removeClass('glyphicon-menu-up');
					}
					else {
						element.find('ul').show();
						element.find('span').removeClass('glyphicon-menu-down');
						element.find('span').addClass('glyphicon-menu-up');
					}
				});

				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						element.find('ul').hide();
						element.find('span').addClass('glyphicon-menu-down');
						element.find('span').removeClass('glyphicon-menu-up');
					}
				})
			}
		}
	}]);
///#source 1 1 /app/directives/tabs/tabs-controller.js
angular.module('gridTaskApp')
	.controller('tabsCtrl', ['$scope', 'templatesPath', function ($scope, templatesPath) {
		$scope.tabs = [
			{
				header: { label: 'Overview' },
				options: {
					template: templatesPath + 'tabs-templates/overview.html'
				},
				isVisible: false
			},
		{
			header: { label: 'Details Information' },
			options: {
				template: templatesPath + 'tabs-templates/details-information.html'
			},
			isVisible: true
		}
		];

		$scope.open = function (tab) {
			$scope.tabs.forEach(function (tab) {
				tab.isVisible = false;
			})

			tab.isVisible = true;
		};
	}]);
///#source 1 1 /app/directives/tabs/tabs.js
angular.module('gridTaskApp')
	.directive('tabs', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			controller: 'tabsCtrl',
			templateUrl: templatesPath + 'tabs.html'
		}
	}])
///#source 1 1 /app/directives/tabs/tab-content/tab-content.js
angular.module('gridTaskApp')
	.directive('tabContent', [function () {
		return {
			restrict: 'E',
			scope: {
				tabOptions: '='
			},
			link: function (scope, element, attrs) {
				if (scope.tabOptions.template) {
					$.get(scope.tabOptions.template, function (result) {
						element.append(result);
					});
				}
			}
		}
	}])
///#source 1 1 /app/directives/trend-slider/trend-slider.js
angular.module('gridTaskApp')
	.directive('trendSlider', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				value: '=sliderValue',
			},
			templateUrl: templatesPath + 'trend-slider.html',
			link: function (scope, element, attrs, controller) {
				element.find('input').slider({
					min: 0,
					value: scope.value,
					max: 100,
					tooltip: 'hide'
				});
			}
		};
	}]);
///#source 1 1 /app/directives/upload/upload.js
angular.module('gridTaskApp')
	.directive('upload', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'upload.html',
			scope: {
				upload: '=uploadCallback'
			},
			link: function (scope, element, attrs) {
				element.find(':file').change(function () {
					var file = this.files[0];

					if (file.name.indexOf('json') != -1) {
						var fileReader = new FileReader();

						fileReader.readAsText(file);

						fileReader.onloadend = function () {
							var result = fileReader.result;

							scope.jsonData = JSON.parse(result);

							if (scope.upload) {
								scope.upload(scope.jsonData);
							}
						}

						element.find(':file').val("");
					}
					else {
						element.find(':file').val("");
					}
				});
			}
		}
	}]);
///#source 1 1 /app/plugins/center.js
jQuery.fn.center = function () {
	this.css("position", "absolute");
	this.css("top", Math.max(0, (($(this.parent()).height() - $(this).outerHeight()) / 2) +
                                                $(this.parent()).scrollTop()) + "px");
	this.css("left", Math.max(0, (($(this.parent()).width() - $(this).outerWidth()) / 2) +
                                                $(this.parent()).scrollLeft()) + "px");
	this.css("z-index", 10000);
	return this;
}
///#source 1 1 /app/plugins/columnGenerator.js
function columnGenerator(data, templatesPath) {
	var columns = [];

	columns.push({ field: '', displayName: '', cellTemplate: templatesPath + 'row-templates/details-cell.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false, width: 60, minWidth: 60, isColumn: true });

	if (data[0]) {
		for (var i = 0; i < data.length; i++) {
			if (data[i].isColumn) {
				return;
			}
		}

		for (var field in data[0]) {
			columns.push({
				field: field,
				displayName: field,
				headerCellTemplate: templatesPath + 'cell-templates/cell.html',
				isColumn: true
			})
		}
	}

	columns.push({
		field: 'action', displayName: '', cellTemplate: templatesPath + 'row-templates/action.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false, width: 150, minWidth: 150, isColumn: true
	});

	return columns;
}
///#source 1 1 /app/plugins/convertFilterOptions.js
function convertFilterOptions(options) {
	var convertOpt = { filterText: '' };

	for (var i = 0; i < options.length; i++) {

		if (options[i].filter) {
			convertOpt.filterText += options[i].label + ':' + options[i].filter + ';';
		}
	}
	return convertOpt;
}
///#source 1 1 /app/plugins/ngGridCanvasHeightPlugin.js
function ngGridCanvasHeightPlugin(opts) {
	var self = this;
	self.grid = null;
	self.scope = null;
	self.init = function (scope, grid, services) {
		self.domUtilityService = services.DomUtilityService;
		self.grid = grid;
		self.scope = scope;
		var recalcHeightForData = function () { setTimeout(innerRecalcForData, 1); };

		var innerRecalcForData = function () {
			//var step = 0;

			//if (self.grid.$canvas.height() > 5900) {
			//	self.grid.$canvas.css('height', 6000 + 'px');
			//}

			//for (var i = 0; i < self.scope.renderedRows.length; i++) {
			//	if (self.scope.renderedRows[i].actions) {
			//		if (self.scope.renderedRows[i].actions.isToggle) {
			//			step = self.scope.renderedRows[i].actions.step;

			//			if (self.grid.$canvas.height() > 5900) {
			//				self.grid.$canvas.css('height', 6300 + 'px');
			//			}
			//		}
			//		else {
			//			if (!self.scope.renderedRows[i].actions.values.isShow) {
			//				self.scope.renderedRows[i].elm.removeClass('selected');
			//			}
			//		}
			//	}
			//}

			//if (self.scope.renderedRows[self.scope.renderedRows.length - 1]) {
			//	var height = self.scope.renderedRows[self.scope.renderedRows.length - 1].offsetTop + self.scope.renderedRows[self.scope.renderedRows.length - 1].elm.height();
			//}
			//else {
			//	var height = 0;
			//}

			//self.scope.catHashKeys = function () {
			//	var hash = '',
			//		idx;
			//	for (idx in self.scope.renderedRows) {
			//		hash += self.scope.renderedRows[idx].$$hashKey;
			//	}
			//	return hash;
			//};
		}
		self.scope.$watch('catHashKeys()', innerRecalcForData);
		self.scope.$watch(self.grid.config.data, recalcHeightForData);
	}
};
///#source 1 1 /app/plugins/ngGridCsvExportPlugin.js
// Todo:
// 1) Make the button prettier
// 2) add a config option for IE users which takes a URL.  That URL should accept a POST request with a
//    JSON encoded object in the payload and return a CSV.  This is necessary because IE doesn't let you
//    download from a data-uri link
//
// Notes:  This has not been adequately tested and is very much a proof of concept at this point
function ngGridCsvExportPlugin(opts) {
	var self = this;
	self.grid = null;
	self.scope = null;
	self.init = function (scope, grid, services) {
		self.grid = grid;
		self.scope = scope;
		function showDs() {
			var keys = [];
			for (var f in grid.config.columnDefs) { keys.push(grid.config.columnDefs[f].field); }
			var csvData = '';
			function csvStringify(str) {
				if (str == null) { // we want to catch anything null-ish, hence just == not ===
					return '';
				}
				if (typeof (str) === 'number') {
					return '' + str;
				}
				if (typeof (str) === 'boolean') {
					return (str ? 'TRUE' : 'FALSE');
				}
				if (typeof (str) === 'string') {
					return str.replace(/"/g, '""');
				}

				return JSON.stringify(str).replace(/"/g, '""');
			}
			function swapLastCommaForNewline(str) {
				var newStr = str.substr(0, str.length - 1);
				return newStr + "\n";
			}
			for (var k in keys) {
				csvData += '"' + csvStringify(keys[k]) + '",';
			}
			csvData = swapLastCommaForNewline(csvData);
			var gridData = grid.data;
			for (var gridRow in gridData) {
				for (k in keys) {
					var curCellRaw;
					if (opts != null && opts.columnOverrides != null && opts.columnOverrides[keys[k]] != null) {
						curCellRaw = opts.columnOverrides[keys[k]](gridData[gridRow][keys[k]]);
					}
					else {
						curCellRaw = gridData[gridRow][keys[k]];
					}
					csvData += '"' + csvStringify(curCellRaw) + '",';
				}
				csvData = swapLastCommaForNewline(csvData);
			}
			var fp = grid.$root.find(".ngFooterPanel");
			var csvDataLinkPrevious = grid.$root.find('.ngFooterPanel .csv-data-link-span');
			if (csvDataLinkPrevious != null) { csvDataLinkPrevious.remove(); }
			var csvDataLinkHtml = "<span class=\"csv-data-link-span\">";
			csvDataLinkHtml += "<br><a href=\"data:text/csv;charset=UTF-8,";
			csvDataLinkHtml += encodeURIComponent(csvData);
			csvDataLinkHtml += "\" download=\"Export.csv\">CSV Export</a></br></span>";
			fp.append(csvDataLinkHtml);
		}
		setTimeout(showDs, 0);
		scope.catHashKeys = function () {
			var hash = '';
			for (var idx in scope.renderedRows) {
				hash += scope.renderedRows[idx].$$hashKey;
			}
			return hash;
		};
		scope.$watch('catHashKeys()', showDs);
	};
}
///#source 1 1 /app/plugins/ngGridFlexibleHeightPlugin.js
function ngGridFlexibleHeightPlugin(opts) {
	var self = this;
	self.grid = null;
	self.scope = null;
	self.init = function (scope, grid, services) {
		self.domUtilityService = services.DomUtilityService;
		self.grid = grid;
		self.scope = scope;
		var recalcHeightForData = function () { setTimeout(innerRecalcForData, 1); };
		var innerRecalcForData = function () {
			var gridId = self.grid.gridId;
			var footerPanelSel = '.' + gridId + ' .ngFooterPanel';
			var extraHeight = self.grid.$topPanel.height() + $(footerPanelSel).height();
			console.log('extra=' + extraHeight);
			var naturalHeight = self.grid.$canvas.height() + 1;
			if (opts != null) {
				if (opts.minHeight != null && (naturalHeight + extraHeight) < opts.minHeight) {
					naturalHeight = opts.minHeight - extraHeight - 2;
				}
			}

			var newViewportHeight = naturalHeight + 2;
			if (!self.scope.baseViewportHeight || self.scope.baseViewportHeight !== newViewportHeight) {
				self.grid.$viewport.css('height', newViewportHeight + 'px');
				console.log('resetting height to ' + (newViewportHeight + extraHeight));
				self.grid.$root.css('height', (newViewportHeight + extraHeight) + 'px');
				self.scope.baseViewportHeight = newViewportHeight;
				self.domUtilityService.UpdateGridLayout(self.scope, self.grid);
			}
			self.grid.$root.css('height', 600 + 'px');

		};
		self.scope.catHashKeys = function () {
			var hash = '',
                idx;
			for (idx in self.scope.renderedRows) {
				hash += self.scope.renderedRows[idx].$$hashKey;
			}
			return hash;
		};
		self.scope.$watch('catHashKeys()', innerRecalcForData);
		self.scope.$watch(self.grid.config.data, recalcHeightForData);
	};
}

///#source 1 1 /app/services/grid-standart-one-service.js
angular.module('gridTaskApp')
	.service('gridStandartOneService', ['StandartOneData', function (StandartOneData) {
		this.get = function (callback) {
			var data = StandartOneData.get();

			callback(data);
		}
	}])
	.factory('StandartOneData', ['constantOfData', function (constantOfData) {
		var types = ['Purchase', 'Default', 'Page View', 'Krux Click Tracker', 'Ad', 'Form', 'Subscription']
		var categories = ['ecommerce', 'User Match', 'Site Visit', 'User Action', 'Form Data'];
		var conversions = ['Yes', 'No'];

		var data = function () {
			var array = [];

			for (var i = 0; i < constantOfData.count; i++) {
				var day = Math.floor((Math.random() * 1000) + 1);
				var value = Math.floor((Math.random() * 100000) + 1);
				var trend = Math.floor((Math.random() * 100) + 1);
				var type = types[Math.floor(Math.random() * 7)];
				var category = categories[Math.floor(Math.random() * categories.length)];
				var conversion = conversions[Math.floor(Math.random() * conversions.length)];

				var obj = {
					date: new Date(constantOfData.startDate.setDate(constantOfData.startDate.getDate() + day)).toDateString(),
					name: 'Changing the icon font location\nBootstrap assumes icon font files will be located in the ../fonts/ directory, relative to the compiled CSS files. Moving or renaming those font files means updating the CSS in one of three ways:\nChange the @icon-font-path and/or @icon-font-name variables in the source Less files.\nUtilize the relative URLs option provided by the Less compiler.\nChange the url() paths in the compiled CSS.\nUse whatever option best suits your specific development setup.',
					type: type,
					value: value,
					trend: trend,
					status: 'Enabled',
					category: category,
					conversion: conversion
				};

				array.push(obj);
			}

			return array;
		};

		return {
			get: function () {
				return data();
			}
		}
	}]);
///#source 1 1 /app/services/grid-standart-two-service.js
angular.module('gridTaskApp')
	.service('gridStandartTwoService', ['StandartTwoData', function (StandartTwoData) {
		this.get = function (callback) {
			var data = StandartTwoData.get();

			callback(data);
		}
	}])
	.factory('StandartTwoData', ['constantOfData', function (constantOfData) {
		var names = ['Adids Originals Purchase', 'Affiliate User Match', 'Auto Trader App Visit', 'Auto Trader Home Page', 'Click Tracker Example', 'Coming to my home page', 'Contact Seller', 'Customer Registration']
		var types = ['Purchase', 'Default', 'Page View', 'Krux Click Tracker', 'Ad', 'Form', 'Subscription']
		var categories = ['ecommerce', 'User Match', 'Site Visit', 'User Action', 'Form Data'];
		var statues = ['Enabled', 'Disabled'];
		var conversions = ['Yes', 'No'];

		var data = function () {
			var array = [];

			for (var i = 0; i < constantOfData.count; i++) {
				var name = names[Math.floor(Math.random() * names.length)];
				var type = types[Math.floor(Math.random() * types.length)];
				var category = categories[Math.floor(Math.random() * categories.length)];
				var status = statues[Math.floor(Math.random() * statues.length)];
				var conversion = conversions[Math.floor(Math.random() * conversions.length)];

				var obj = {
					name: name,
					type: type,
					category: category,
					status: status,
					conversion: conversion
				};

				array.push(obj);
			}

			return array;
		};

		return {
			get: function () {
				return data();
			}
		}
	}]);
///#source 1 1 /app/services/grid-upload-service.js
angular.module('gridTaskApp')
	.service('gridUploadService', ['UploadData', '$http', function (UploadData, $http) {
		this.get = function (callback, url) {
			var data = UploadData.get();

			callback(data);
		}
	}])
	.factory('UploadData', ['constantOfData', function (constantOfData) {
		var types = ['Purchase', 'Default', 'Page View', 'Krux Click Tracker', 'Ad', 'Form', 'Subscription']
		var categories = ['ecommerce', 'User Match', 'Site Visit', 'User Action', 'Form Data'];
		var conversions = ['Yes', 'No'];

		var data = function () {
			var array = [];

			for (var i = 0; i < constantOfData.count; i++) {
				var day = Math.floor((Math.random() * 1000) + 1);
				var value = Math.floor((Math.random() * 100000) + 1);
				var trend = Math.floor((Math.random() * 100) + 1);
				var type = types[Math.floor(Math.random() * 7)];
				var category = categories[Math.floor(Math.random() * categories.length)];
				var conversion = conversions[Math.floor(Math.random() * conversions.length)];

				var obj = {
					date: new Date(constantOfData.startDate.setDate(constantOfData.startDate.getDate() + day)).toDateString(),
					name: 'Changing the icon font location\nBootstrap assumes icon font files will be located in the ../fonts/ directory, relative to the compiled CSS files. Moving or renaming those font files means updating the CSS in one of three ways:\nChange the @icon-font-path and/or @icon-font-name variables in the source Less files.\nUtilize the relative URLs option provided by the Less compiler.\nChange the url() paths in the compiled CSS.\nUse whatever option best suits your specific development setup.',
					type: type,
					value: value,
					trend: trend,
					status: 'Enabled',
					category: category,
					conversion: conversion
				};

				array.push(obj);
			}

			return array;
		};

		return {
			get: function () {
				return data();
			}
		}
	}]);
///#source 1 1 /app/services/grid-with-details-template-service.js
angular.module('gridTaskApp')
	.service('gridWithDetailsTemplateService', ['DetailsTemplateData', function (DetailsTemplateData) {
		this.get = function (callback) {
			var data = DetailsTemplateData.get();

			callback(data);
		}
	}])
	.factory('DetailsTemplateData', ['constantOfData', function (constantOfData) {

		var data = function () {
			var array = [];

			for (var i = 0; i < constantOfData.count; i++) {

				var obj = {
					priority: 'None',
					name: 'n1',
					ID: i,
					Type: 'basic',
					category: '',
					subCategory: '',
					devices: 0,
					persistent: 0,
					people: 0,
					refreshFrequency: 'daily',
					lastComputed: 'June 19, 2015',
					dateCreated: 'June 19, 2015',
					interchange: ''
				};

				array.push(obj);
			}

			return array;
		}();

		return {
			get: function () {
				return data;
			}
		}
	}]);
///#source 1 1 /app/constants/content-constants.js
angular.module('gridTaskApp')
	.constant('content', {
		checks: {
			options: {
				actions: {
					all: { label: 'All', isAll: true },
					noOne: { label: 'No one', isNoOne: true },
					marked: { label: 'Marked', isMarked: true },
					notMarked: { label: 'Not marked', isNotMarked: true }
				}
			}
		},
		mores: {
			options: {
				label: 'More',
				values: [{ label: 'View reports' }],
				isMenu: true
			}
		},
		exports: {
			options: {
				label: 'Export to: ',
				values: [{ label: 'Excel', isExcel: true }, { label: 'Pdf', isPdf: true }],
				callback: function (action) {
				}
			}
		},
		views: {
			options: {
				label: 'View: ',
				values: [{ label: 'Grid', isGrid: true, isTiles: false }, { label: 'Tiles', isGrid: false, isTiles: true }],
				callback: function (action) {
				}
			}
		},
		listSelector: '.page-content__list',
		loadingTemplate: '<loading ng-show="contentOptions.isLoading"></loading>',
		gridName: 'Default grid',
		rowTemplate: 'row-templates/row-with-detalis.html',
		rowHeight: 60,
		headerRowHeight: 40,
		showFooter: true,
		footerRowHeight: 30,
		footerTemplate: 'grid-footer.html',
		rowActions: {
			options: {
				label: 'Actions',
				values: [{ label: 'Edit', isEdit: true }, { label: 'Copy', isCopy: true }, { label: 'History', isHistory: true }, { label: 'Delete', isDelete: true }],
				isMenu: true
			},
			isShow: false
		},
		detailsTemplate: 'details.html',
		rowCheckAction: function (data) {
			var isCheckArray = data.filter(function (value) {
				if (value.actions.isCheck) {
					return true;
				}
			});

			if (isCheckArray.length == 0) {
				this.contentOptions.checks.options.selected = this.contentOptions.checks.options.actions.noOne;
			}
			else if (isCheckArray.length == data.length) {
				this.contentOptions.checks.options.selected = this.contentOptions.checks.options.actions.all;
			}
			else {
				this.contentOptions.checks.options.selected = this.contentOptions.checks.options.actions.marked;
			}
		},
		filterOptions: function (data) {
			var options = [];

			if (Array.isArray(data) && data[0])
				for (var prop in data[0]) {
					options.push({ label: prop, isColumn: true });
				}
			return options;
		},
		searchOptions: function (data) {
			var options = [];
			options.push({ label: 'everywhere', isEverywhere: true });

			if (Array.isArray(data) && data[0]) {
				for (var prop in data[0]) {
					options.push({ label: prop, isColumn: true });
				}
			}

			return options;
		}
	});
///#source 1 1 /app/plugins/columns-comparer.js
function columnsCompare(arr1, arr2) {
	if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length != arr2.length) {
		return false;
	}

	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i].field != arr2[i].field) {
			return false;
		}
	}

	return true;
}
///#source 1 1 /app/directives/page-content/initializer.js
var Initializer = (function () {
	function Initializer(scope, element, content, templatesPath, $compile) {
		this.scope = scope;
		this.element = element;
		this.content = content;
		this.templatesPath = templatesPath;
		this.$compile = $compile;
	}

	Initializer.prototype.init = function () {
		this.initContentOpt();
		this.initGrid();
		this.initGridOpt();
	}

	Initializer.prototype.initContentOpt = function () {
		if (this.scope.contentOptions === undefined) {
			this.scope.contentOptions = {};
		}

		if (this.scope.contentOptions.loading) {
			this.scope.contentOptions.isLoading = true;
			if ($('loading').length == 0) {
				this.element.find(this.content.listSelector).append(this.content.loadingTemplate);
				this.$compile($('loading'))(this.scope);
			}
		}

		if (this.scope.contentOptions.checks === undefined) {
			this.scope.contentOptions.checks = this.content.checks;
		}

		if (this.scope.contentOptions.mores === undefined) {
			this.scope.contentOptions.mores = this.content.mores;
		}

		if (this.scope.contentOptions.filtrate === undefined) {
			this.scope.contentOptions.filtrate = function (value) {
				this.scope.gridOptions.filterOptions.filterText = convertFilterOptions(value).filterText;
			}.bind(this);
		}

		if (this.scope.contentOptions.search === undefined) {
			this.scope.contentOptions.search = function (value) {
				this.scope.gridOptions.filterOptions.filterText = value;
			}.bind(this);
		}

		if (this.scope.contentOptions.refresh === undefined) {
			this.scope.contentOptions.refresh = function () {
				if (this.scope.contentOptions.loading) {
					this.scope.contentOptions.isLoading = true;
				}

				this.scope.contentOptions.refreshCallback();
			}.bind(this);
		}

		if (this.scope.contentOptions.withUpload || this.scope.contentOptions.upload !== undefined) {
			this.scope.contentOptions.isDynamic = true;

			if (this.scope.contentOptions.upload === undefined) {
				this.scope.contentOptions.upload = function (data) {
					if (this.scope.contentOptions.loading) {
						this.scope.contentOptions.isLoading = true;
					}

					this.scope.data = data;

					this.scope.grid.count = this.scope.data.length;

					this.scope.$apply();
				}.bind(this);
			}
		}

	};

	Initializer.prototype.initGrid = function () {
		if (this.scope.exports === undefined) {
			this.scope.exports = this.content.exports;
			this.scope.exports.options.callback = function (action) {
				this.scope.export = action;
			}.bind(this);
		}

		if (this.scope.views === undefined) {
			this.scope.views = this.content.views;
			this.scope.views.options.callback = function (action) {
				this.scope.view = action;
			}.bind(this);
		}

		if (this.scope.grid === undefined) {
			this.scope.grid = {};

			this.scope.grid.name = this.content.gridName;
			if (Array.isArray(this.scope.data)) {
				this.scope.grid.count = this.scope.data.length;
			}
		}

		if (this.scope.grid.name === undefined) {
			this.scope.grid.name = this.content.gridName;
		}

		if (this.scope.grid.count === undefined) {
			if (Array.isArray(this.scope.data)) {
				this.scope.grid.count = this.scope.data.length;
			}
		}
	};

	Initializer.prototype.initGridOpt = function () {
		if (this.scope.gridOptions === undefined) {
			this.scope.gridOptions = {};
		}

		if (this.scope.gridOptions.data === undefined) {
			this.scope.gridOptions.data = 'data';
		}

		if (this.scope.gridOptions.multiSelect === undefined) {
			this.scope.gridOptions.multiSelect = false;
		}

		if (this.scope.gridOptions.rowTemplate === undefined) {
			this.scope.gridOptions.rowTemplate = this.templatesPath + this.content.rowTemplate;
		}

		if (this.scope.gridOptions.filterOptions === undefined) {
			this.scope.gridOptions.filterOptions = { filterText: '' };
		}

		if (this.scope.gridOptions.rowHeight === undefined) {
			this.scope.gridOptions.rowHeight = this.content.rowHeight;
		}

		if (this.scope.gridOptions.headerRowHeight === undefined) {
			this.scope.gridOptions.headerRowHeight = this.content.headerRowHeight;
		}

		if (this.scope.gridOptions.showFooter === undefined) {
			this.scope.gridOptions.showFooter = this.content.showFooter;
		}

		if (this.scope.gridOptions.footerRowHeight === undefined) {
			this.scope.gridOptions.footerRowHeight = this.content.footerRowHeight;
		}

		if (this.scope.gridOptions.footerTemplate === undefined) {
			this.scope.gridOptions.footerTemplate = this.templatesPath + this.content.footerTemplate;
		}

		if (this.scope.gridOptions.init === undefined) {
			if (this.scope.contentOptions.loading) {
				this.scope.gridOptions.init = function (grid, event) {
					this.scope.contentOptions.isLoading = false;
				}.bind(this);
			}
		}

		if (this.scope.gridOptions.detailsTemplate === undefined && this.scope.gridOptions.withDetails) {
			this.scope.gridOptions.detailsTemplate = this.templatesPath + this.content.detailsTemplate;
		}

		if (this.scope.gridOptions.rowActions === undefined) {
			this.scope.gridOptions.rowActions = this.content.rowActions;
		}

		if (this.scope.gridOptions.rowCheckAction === undefined) {
			this.scope.gridOptions.rowCheckAction = this.content.rowCheckAction;
		}

		this.scope.pluginActionOpt = {
			values: this.scope.gridOptions.rowActions,
			detailsTemplate: this.scope.gridOptions.detailsTemplate,
			detailsCondition: this.scope.gridOptions.detailsCondition,
			onCheck: this.scope.gridOptions.rowCheckAction.bind(this.scope),
			contentOptions: this.scope.contentOptions
		}

		if (this.scope.gridOptions.plugins === undefined) {
			this.scope.gridOptions.plugins = [];
			this.scope.gridOptions.plugins.push(new ngGridActionsPlugin(this.scope.pluginActionOpt, this.$compile));

		}

		if (this.scope.gridOptions.plugins.ngGridActionsPlugin === undefined) {
		}
	};

	Initializer.prototype.refreshOpt = function () {
		this.scope.contentOptions.filterOptions = this.content.filterOptions(this.scope.data);

		this.scope.contentOptions.searchOptions = this.content.searchOptions(this.scope.data);
		this.scope.contentOptions.searchOptions.selected = this.scope.contentOptions.searchOptions[0];

		this.scope.contentOptions.searchValue = '';
		this.scope.contentOptions.checks.options.selected = this.scope.contentOptions.checks.options.actions.noOne;
	};

	Initializer.prototype.refreshData = function (data) {
		this.refreshOpt();
		this.scope.grid.count = this.scope.data.length;
		this.scope.gridOptions.filterOptions.filterText = '';

		if (this.scope.gridOptions.plugins.ngGridActionsPlugin) {
			this.scope.pluginActionOpt = {
				values: this.scope.gridOptions.rowActions,
				detailsTemplate: this.scope.gridOptions.detailsTemplate,
				detailsCondition: this.scope.gridOptions.detailsCondition,
				onCheck: this.scope.gridOptions.rowCheckAction.bind(this.scope),
				contentOptions: this.scope.contentOptions
			}
			this.scope.gridOptions.plugins.ngGridActionsPlugin.refreshOpt(this.scope.pluginActionOpt);
		}

		var oldColumns = angular.copy(this.scope.gridOptions.columnDefs);
		var newColumns = columnGenerator(data, this.templatesPath);

		if (!columnsCompare(oldColumns, newColumns)) {
			this.scope.gridOptions.columnDefs = newColumns;

			this.$compile($('custom-grid'))(this.scope);
		}

		if (this.scope.contentOptions.loading) {
			this.scope.contentOptions.isLoading = false;
		}
	};

	return Initializer;
})();

///#source 1 1 /app/directives/hotkey-formatter/hotkey-formatter.js
angular.module('gridTaskApp')
	.directive('hotkeyFormatter', [function () {
		return {
			restrict: 'A',
			scope: {
				func: '=hotkeyFormatter'
			},
			link: function (scope, element, attrs) {
				element.keypress("c", function (event) {
					if (event.ctrlKey) {
						scope.func();
					}
				});
			}
		}
	}]);
///#source 1 1 /app/plugins/ngGridActionsPlugin.js
function ngGridActionsPlugin(opts, compile) {
	var self = this;
	self.grid = null;
	self.scope = null;
	self.opts = opts;
	self.compile = compile;
	self.init = function (scope, grid, services) {
		self.domUtilityService = services.DomUtilityService;
		self.grid = grid;
		self.scope = scope;

		if (self.opts.contentOptions.checks.options.callback === undefined) {
			self.opts.contentOptions.checks.options.callback = function (check) {
				if (check) {
					if (check.isAll) {
						self.grid.rowCache.forEach(function (value) {
							value.actions.isCheck = true;
						});
					}
					else if (check.isNoOne) {
						self.grid.rowCache.forEach(function (value) {
							value.actions.isCheck = false;
						});
					}
					else if (check.isMarked) {
						self.grid.rowCache.forEach(function (value) {
						});
					}
					else if (check.isNotMarked) {
						self.grid.rowCache.forEach(function (value) {
							value.actions.isCheck = !value.actions.isCheck;
						});
					}
				};
			};
		}

		var recalcForData = function () {
			setTimeout(function () {
				self.grid.rowCache.forEach(function (row) {
					if (row) {
						row.actions = angular.copy(self.opts);
						row.actions.isCheck = false;
						row.actions.setToggle = setToggle;
						row.actions.setCheck = setCheck;
						row.actions.copyRow = copyRow;
						row.actions.deleteRow = deleteRow;
						row.actions.tab = 2;
						row.actions.values.options.callback = function (action) {
							if (action.isEdit) {
								console.log('edit');
							}
							else if (action.isCopy) {
								row.actions.copyRow(row);
							}
							else if (action.isDelete) {
								row.actions.deleteRow(row.entity, self.scope.data);
							}
						};
					}
				});

				self.scope.$apply();
			});

			if (self.scope.toggleRow) {
				closeToggleRow(self.scope.toggleRow.clone, self.scope.detailsClass, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex), self.scope.rowHeight, true);
				self.scope.toggleRow = undefined;
			}

			setTimeout(innerRecalcForData, 1);
		};

		var innerRecalcForData = function () {

			self.scope.catHashKeys = function () {
				var hash = '',
					idx;
				for (idx in self.scope.renderedRows) {
					hash += self.scope.renderedRows[idx].$$hashKey;

					if (self.scope.renderedRows[idx].orig.actions) {
						self.scope.renderedRows[idx].orig.actions.values.isShow = self.scope.renderedRows[idx].selected;
					}
				}
				return hash;
			};
		};

		self.grid.$viewport.scroll(function () {
			var isExistToggle = false;

			for (idx in self.scope.renderedRows) {
				if (self.scope.renderedRows[idx].orig.actions.isToggle) {

					if (!self.scope.renderedRows[idx].elm.hasClass('toggle')) {
						refreshToggle(self.scope.renderedRows[idx], self.scope.rowHeight, self.scope.step, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex));
					}

					isExistToggle = true;
				}
				else {
					self.scope.renderedRows[idx].elm.removeClass('toggle');
				}
			}

			if (isExistToggle) {
				self.grid.$canvas.css('height', self.scope.newCanvasHeight + 'px');
			}
			else {
				$('.details-template').parent().removeClass('toggle');
				$('.details-template').remove();
			}
		});

		var copyRow = function (row) {
			var text = JSON.stringify(row.entity);
		};

		var deleteRow = function (entity, data) {
			data.splice(data.indexOf(entity), 1);

			if (self.scope.toggleRow.entity == entity) {
				closeOrigToggleRow(self.scope.toggleRow, self.scope.toggleRow.actions.detailsTemplate, self.scope.rowHeight, true);
			}
		}

		var setToggle = function (row, isToggle, detailsClass) {
			if (isToggle) {
				if (self.scope.toggleRow) {
					var deletedRow;

					for (var i = 0; i < self.grid.rowCache.length; i++) {
						if (angular.equals(self.grid.rowCache[i], self.scope.toggleRow)) {
							deletedRow = self.grid.rowCache[i];
							break;
						}
					}

					closeOrigToggleRow(deletedRow, self.scope.detailsClass, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex), self.scope.rowHeight)
				}

				self.scope.toggleRow = row;
				self.scope.detailsClass = detailsClass;

				setRenderToggle(row.clone, self.scope.detailsClass, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex), self.scope.rowHeight);
			}
			else {
				closeToggleRow(row.clone, detailsClass, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex), self.scope.rowHeight);
				self.scope.toggleRow = undefined;
			}
		};

		var refreshToggle = function (row, rowHeight, step, template) {
			if (template) {
				var step = step;

				$.get(template, function (result) {
					$('.details-template').remove();
					var detElm = angular.element('<div class="details-template">' + result + '</div>');
					row.elm.append(detElm);
					self.compile(detElm)(self.scope);
					$('.details-template').css('top', rowHeight + 'px');
					row.elm.addClass('toggle');
					var top = Math.round(row.elm.position().top);
					var children = $(row.elm).parent().children();

					for (var i = 0; i < children.length; i++) {
						if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
							$(children[i]).css('top', step + 'px');
							step += rowHeight;
						}
					}
				});
			}
			else {
				var top = Math.round(row.elm.position().top);
				var children = $(row.elm).parent().children();
				var step = step;

				for (var i = 0; i < children.length; i++) {
					if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
						$(children[i]).css('top', step + 'px');
						step += rowHeight;
					}
				}
			}
		}

		var setRenderToggle = function (row, detailsClass, template, rowHeight) {
			row.elm.addClass(detailsClass);
			row.isToggle = true;

			if (template) {
				$.get(template, function (result) {
					var detElm = angular.element('<div class="details-template">' + result + '</div>');
					row.elm.append(detElm);
					self.compile(detElm)(self.scope);
					$('.details-template').css('top', row.elm.height() + 'px');

					var top = Math.round(row.elm.position().top);
					var children = $(row.elm).parent().children();
					var step = row.elm.position().top + row.elm.find('.details-template').height() + rowHeight;
					self.scope.step = step;

					self.canvasHeight = self.grid.$canvas.height();
					self.grid.$canvas.css('height', self.canvasHeight + row.elm.context.scrollHeight + 'px');
					self.scope.newCanvasHeight = self.canvasHeight + row.elm.context.scrollHeight;

					$(row.elm).css('height', row.elm.context.scrollHeight + 'px');

					for (var i = 0; i < children.length; i++) {
						if ($(children[i]).css('top').replace('px', '') == row.elm.position().top) {
							for (var j = i + 1; j < children.length; j++) {
								$(children[j]).css('top', step + 'px');
								step += rowHeight;
							}
						}
					}
				});

			}
			else {
				var top = Math.round(row.elm.position().top);
				var children = $(row.elm).parent().children();
				var step = row.elm.position().top + row.elm.context.scrollHeight;
				self.scope.step = step;

				self.canvasHeight = self.grid.$canvas.height();
				self.grid.$canvas.css('height', self.canvasHeight + row.elm.context.scrollHeight + 'px');
				self.scope.newCanvasHeight = self.canvasHeight + row.elm.context.scrollHeight;

				$(row.elm).css('height', row.elm.context.scrollHeight + 'px');

				for (var i = 0; i < children.length; i++) {
					if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
						$(children[i]).css('top', step + 'px');
						step += rowHeight;
					}
				}

				self.scope.toggleElm = row.elm.clone();
			}
		}

		var closeOrigToggleRow = function (row, detailsClass, template, rowHeigth, reInit) {
			if (rowHeigth === undefined) {
				rowHeigth = 60;
			}

			row.clone.elm.removeClass('toggle');
			$('.details-template').remove();
			row.actions.isToggle = false;
			self.grid.$canvas.css('height', self.canvasHeight + 'px');
			self.scope.newCanvasHeight = self.canvasHeight;

			var top = Math.round(row.clone.elm.position().top);
			var children = $(row.clone.elm).parent().children();
			var step = row.clone.elm.position().top + rowHeigth;

			$(row.clone.elm).css('height', rowHeigth + 'px');

			for (var i = 0; i < children.length; i++) {
				if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
					$(children[i]).css('top', step + 'px');
					step += rowHeigth;
				}
			}

			if (reInit) {
				self.scope.toggleRow = undefined;
			}
		}

		var closeToggleRow = function (row, detailsClass, template, rowHeigth, reInit) {
			row.elm.removeClass('toggle');
			$('.details-template').remove();
			row.orig.actions.isToggle = false;
			self.grid.$canvas.css('height', self.canvasHeight + 'px');
			self.scope.newCanvasHeight = self.canvasHeight;

			var top = Math.round(row.elm.position().top);
			var children = $(row.elm).parent().children();
			var step = row.elm.position().top + rowHeigth;

			$(row.elm).css('height', rowHeigth + 'px');

			for (var i = 0; i < children.length; i++) {
				if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
					$(children[i]).css('top', step + 'px');
					step += rowHeigth;
				}
			}

			if (reInit) {
				self.scope.toggleRow = undefined;
			}
		}

		var setCheck = function (row) {
			row.actions.onCheck(self.grid.rowCache);
		}

		var getDetailsTemplate = function (template, condition, entity, index) {
			if (condition !== undefined && condition(entity, index) !== undefined) {
				template = condition(entity, index);
			}

			return template;
		}

		self.scope.$watch('catHashKeys()', innerRecalcForData);
		self.scope.$watch(self.grid.config.data, recalcForData);
	}

	self.refreshOpt = function (otps) {
		self.opts = otps;
	}
};
