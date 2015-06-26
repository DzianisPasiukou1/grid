﻿///#source 1 1 /app/app.js
angular.module('gridTaskApp', ['ngGrid'])
	.value('templatesPath', 'app/templates/');
///#source 1 1 /app/services/grid-service.js
angular.module('gridTaskApp')
	.service('gridService', ['Data', function (Data) {
		this.get = function (callback) {
			var data = Data.get();

			callback(data);
		}
	}])
	.factory('Data', ['constantOfData', function (constantOfData) {
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
///#source 1 1 /app/directives/custom-grid/custom-grid-controller.js
angular.module('gridTaskApp')
	.controller('customGridCtrl', ['$scope', 'templatesPath', function ($scope, templatesPath) {
		//$scope.data.map(function (value) {
		//	value.action = {
		//		values: [{
		//			label: 'Action',
		//			isAction: true
		//		}, {
		//			label: 'More',
		//			options: { label: 'More', values: [{ label: 'View Report' }], isMenu: true },
		//			isMore: true
		//		}],
		//		isShow: false
		//	};
		//	value.isCheck = false;
		//});

		$scope.$watch('isFiltrate', function (value) {
			$scope.options.filterOptions.filterText = convertFilterOptions($scope.filters.filterOptions).filterText;
		});

		$scope.$watch('filters.searchValue', function (value) {
			if (!$scope.filters.show) {
				return;
			}

			if ($scope.filters.show.label == 'everywhere') {
				$scope.options.filterOptions.filterText = value;
			} else {
				$scope.options.filterOptions.filterText = $scope.filters.show.label + ':' + value;
			}
		});

		function plugin() {
			if ($scope.exportTo.label == 'Excel') {
				$scope.options.plugins.push(new ngGridCsvExportPlugin());
			}
		}

		function convertFilterOptions(options) {
			var convertOpt = { filterText: '' };

			for (var i = 0; i < options.length; i++) {

				if (options[i].filter) {
					convertOpt.filterText += options[i].label + ':' + options[i].filter + ';';
				}
			}
			return convertOpt;
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
				filters: '=',
				isFiltrate: '=',
				options: '=gridOptions',
				detailsTemplate: '='
			},
			templateUrl: templatesPath + 'custom-grid.html',
			link: function (scope, element, attrs, controller) {
				scope.$watch('filters.check', function (check) {
					if (check) {
						if (check.isAll) {
							scope.data.forEach(function (value) {
								value.isCheck = true;
							});
						}
						else if (check.isNoOne) {
							scope.data.forEach(function (value) {
								value.isCheck = false;
							});
						}
						else if (check.isMarked) {
							scope.data.forEach(function (value) {
							});
						}
						else if (check.isNotMarked) {
							scope.data.forEach(function (value) {
								value.isCheck = !value.isCheck;
							});
						}
					}
				});
			}
		};
	}]);
///#source 1 1 /app/constants/grid-constants.js
angular.module('gridTaskApp')
	 .constant("constantOfData", {
	 	count: 100,
	 	startDate: new Date(2000, 1, 1)
	 });
///#source 1 1 /app/directives/details/details.js
angular.module('gridTaskApp')
	.directive('details', [function () {
		return {
			restict: 'A',
			scope: {
				row: '=',
				rowHeight: '=',
				detailsClass: '=detailsClass',
				renderedRows: '='
			},
			link: function (scope, element, attrs) {
				element.click(function () {
					//scope.renderedRows.forEach(function (value) {
					//	if (value.$$hashKey != scope.row.$$hashKey && value.isToggle) {
					//		value.isToggle = false;

					//		value.elm.removeClass(scope.detailsClass);

					//		var step = value.elm.context.scrollHeight - scope.rowHeight;
					//		var children = $(value.elm).parent().children();
					//		var top = Math.round(value.elm.position().top);

					//		$(value.elm).css('height', scope.rowHeight + 'px');

					//		for (var i = 0; i < children.length; i++) {
					//			if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
					//				$(children[i]).css('top', parseInt($(children[i]).css('top').replace('px', '')) - step - 2 + 'px');
					//			}
					//		}
					//	}
					//});

					scope.row.isToggle = !scope.row.isToggle;

					if (scope.row.isToggle) {
						scope.row.elm.addClass(scope.detailsClass);
					}
					else {
						scope.row.elm.removeClass(scope.detailsClass);
					}

					var step = scope.row.elm.context.scrollHeight - scope.rowHeight;
					var top = Math.round(scope.row.elm.position().top);
					var children = $(scope.row.elm).parent().children();

					if (scope.row.isToggle) {
						$(scope.row.elm).css('height', scope.row.elm.context.scrollHeight + 'px');
						for (var i = 0; i < children.length; i++) {
							if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
								$(children[i]).css('top', parseInt($(children[i]).css('top').replace('px', '')) + step - 2 + 'px');
							}
						}
					} else {
						$(scope.row.elm).css('height', scope.rowHeight + 'px');

						if (!scope.row.isDetails) {
							for (var i = 0; i < children.length; i++) {
								if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
									$(children[i]).css('top', parseInt($(children[i]).css('top').replace('px', '')) - step - 2 + 'px');
								}
							}
						}
						else {

							for (var i = 0; i < children.length; i++) {
								if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
									$(children[i]).css('top', parseInt($(children[i]).css('top').replace('px', '')) - step + 'px');
								}
							}
						}
					}
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

		$scope.selected = $scope.options.values[0];

		if ($scope.options.callback) {
			$scope.options.callback($scope.selected);
		}

		$scope.select = function (action) {
			$scope.selected = action;

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
					if (!$(event.target).closest(element).length) {
						element.find('ul').hide();
						element.find('span').addClass(scope.options.hideClass);
						element.find('span').removeClass(scope.options.showClass);
					}
				})
			}
		}
	}]);
///#source 1 1 /app/directives/page/page-controller.js
angular.module('gridTaskApp')
	.controller('pageCtrl', ['$scope', function ($scope) {
	}]);
///#source 1 1 /app/directives/page/page.js
angular.module('gridTaskApp')
	.directive('page', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {},
			controller: 'pageCtrl',
			templateUrl: templatesPath + 'page.html'
		}
	}]);
///#source 1 1 /app/directives/page/page-content/page-content-controller.js
angular.module('gridTaskApp')
	.controller('pageContentCtrl', ['$scope', 'gridService', 'templatesPath', function ($scope, gridService, templatesPath) {
		function getData() {
			gridService.get(function (data) {
				$scope.data = data;
			});
		}
		getData();

		$scope.grid = {
			name: 'Grid 1',
			count: $scope.data.length
		};

		$scope.exports = {
			options: {
				label: 'Export to: ',
				values: [{ label: 'Excel', isExcel: true }, { label: 'Pdf', isPdf: true }],
				callback: function (action) {
					$scope.export = action;
				}
			}
		};
		$scope.views = {
			options:
				{
					label: 'View: ',
					values: [{ label: 'Grid', isGrid: true, isTiles: false }, { label: 'Tiles', isGrid: false, isTiles: true }],
					callback: function (action) {
						$scope.view = action;
					}
				}
		};
		$scope.selectedOptions = {};
		$scope.selectedOptions.filterOptions = function () {
			var options = [];

			if (Array.isArray($scope.data) && $scope.data[0])
				for (var prop in $scope.data[0]) {
					options.push({ label: prop });
				}
			return options;
		}();

		$scope.selectedOptions.searchOptions = function () {
			var options = [];
			options.push({ label: 'everywhere', isEverywhere: true });

			if (Array.isArray($scope.data) && $scope.data[0]) {
				for (var prop in $scope.data[0]) {
					options.push({ label: prop, isColumn: true });
				}
			}

			return options;
		}();

		$scope.isFiltrate = false;

		$scope.refresh = function () {
			getData();

			$scope.data.map(function (value) {
				value.action = {
					values: [{
						label: 'Action', isAction: true
					}, {
						label: 'More',
						isMore: true,
						options: { label: 'More', values: [{ label: 'View Report' }], isMenu: true }
					}],
					isShow: false
				};
				value.isCheck = false;
			});
		}

		$scope.gridOptions = {
			data: 'data',
			init: function (grid, $scope) {
			},
			multiSelect: false,
			rowTemplate: templatesPath + 'row-templates/row.html',
			afterSelectionChange: function (rowitem, event) {
				rowitem.entity.action.isShow = rowitem.selected;
			},
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			footerTemplate: templatesPath + 'grid-footer.html',
			columnDefs: [
				{ field: '', displayName: '', cellTemplate: templatesPath + 'row-templates/details-cell.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false, width: 60, minWidth: 60 },
			{ field: 'date', displayName: 'Date', cellTemplate: templatesPath + 'row-templates/date.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 140 },
				{
					field: 'name', displayName: 'Name', cellTemplate: templatesPath + 'row-templates/name.html',
					headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'type', displayName: 'Type', cellTemplate: templatesPath + 'row-templates/type.html',
					headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'value', displayName: 'Value', cellTemplate: templatesPath + 'row-templates/value.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'trend', displayName: 'Trend', cellTemplate: templatesPath + 'row-templates/trend.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 130
				},
				{
					field: 'status', displayName: 'Status', cellTemplate: templatesPath + 'row-templates/status.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'category', displayName: 'Category', cellTemplate: templatesPath + 'row-templates/status.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'conversion', displayName: 'Conversion', cellTemplate: templatesPath + 'row-templates/status.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 130
				},
				{
					field: 'action', displayName: '', cellTemplate: templatesPath + 'row-templates/action.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false, width: 240, minWidth: 240
				}],
			plugins: []
		};

		$scope.refresh();
	}]);
///#source 1 1 /app/directives/page/page-content/page-content.js
angular.module('gridTaskApp')
	.directive('pageContent', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'page-content.html',
		}
	}]);
///#source 1 1 /app/directives/page/page-content/content-options/content-options-controller.js
angular.module('gridTaskApp')
	.controller('contentOptionsCtrl', ['$scope', 'checkboxSelectConstants', function ($scope, checkboxSelectConstants) {
		$scope.checks = {
			options: {
				actions: checkboxSelectConstants.values,
				callback: function (action) {
					$scope.selectedOptions.check = action;
				}
			}
		};
		$scope.mores = {
			options:
				{
					label: 'More',
					values: [{ label: 'View reports' }],
					callback: function (action) {
						$scope.more = action;
					},
					isMenu: true
				}
		};
		$scope.shows = { values: [{ label: 'Everywhere' }] };
	}]);
///#source 1 1 /app/directives/page/page-content/content-options/content-options.js
angular.module('gridTaskApp')
	.directive('contentOptions', ['templatesPath', 'checkboxSelectConstants', function (templatesPath, checkboxSelectConstants) {
		return {
			restrict: 'E',
			controller: 'contentOptionsCtrl',
			scope: {
				selectedOptions: '=',
				isFiltrate: '=',
				refresh: '='
			},
			templateUrl: templatesPath + 'content-options.html'
		}
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
///#source 1 1 /app/directives/checkbox-select/checkbox-select-controller.js
angular.module('gridTaskApp')
	.controller('checkboxSelectCtrl', ['$scope', function ($scope) {
		if (!$scope.options.showClass) {
			$scope.options.showClass = 'glyphicon-menu-up'
		}
		if (!$scope.options.hideClass) {
			$scope.options.hideClass = 'glyphicon-menu-down'
		}

		$scope.selected = $scope.options.actions.noOne;

		if ($scope.options.callback) {
			$scope.options.callback($scope.selected);
		}
		$scope.check = false;

		$scope.select = function (action) {
			$scope.selected = action;

			if (action.isAll) {
				$scope.check = true;
			}
			else {
				$scope.check = false;
			}

			if ($scope.options.callback) {
				$scope.options.callback(action);
			}
		}

		$scope.checked = function (value) {
			if (value) {
				$scope.selected = $scope.options.actions.all;
			}
			else {
				$scope.selected = $scope.options.actions.noOne;
			}

			if ($scope.options.callback) {
				$scope.options.callback($scope.selected);
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

				scope.$watch('selected', function (value) {
					if (value.isMarked || value.isNotMarked) {
						element.find('.checkbox-select__input-control__span').addClass('marked');
					}
					else {
						element.find('.checkbox-select__input-control__span').removeClass('marked');
					}
				});
			}
		}
	}]);
///#source 1 1 /app/directives/split-button/split-button-controller.js
angular.module('gridTaskApp')
	.controller('splitButtonCtrl', ['$scope', function ($scope) {
		$scope.selected = $scope.actions[0];

		$scope.select = function (action) {
			$scope.selected = action;
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
			$scope.isFiltrate = !$scope.isFiltrate;
		}
	}]);
///#source 1 1 /app/directives/filter/filter.js
angular.module('gridTaskApp')
	.directive('filter', ['templatesPath', '$compile', function (templatesPath, $compile) {
		return {
			restrict: 'E',
			scope: {
				listState: '=',
				filterOptions: '=options',
				isFiltrate: '='
			},
			controller: 'filterCtrl',
			templateUrl: templatesPath + 'filter.html',
			link: function (scope, element, attrs) {
				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						scope.listState = false;
						$compile(element.find('filter-list'))(scope);
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
///#source 1 1 /app/directives/custom-grid/row-check/row-check.js
angular.module('gridTaskApp')
	.directive('rowCheck', [function () {
		return {
			restrict: 'A',
			scope: {
				value: '=rowCheck'
			},
			link: function (scope, element, attrs) {
				scope.$watch('value.entity.isCheck', function (value) {
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
///#source 1 1 /app/constants/checkbox-select-constants.js
angular.module('gridTaskApp')
	 .constant("checkboxSelectConstants",
	 {
	 	values: {
	 		all: { label: 'All', isAll: true },
	 		noOne: { label: 'No one', isNoOne: true },
	 		marked: { label: 'Marked', isMarked: true },
	 		notMarked: { label: 'Not marked', isNotMarked: true }
	 	}
	 });
///#source 1 1 /app/directives/filter/filter-list/filter-list-controller.js
angular.module('gridTaskApp')
	.controller('filterListCtrl', ['$scope', function ($scope) {
		$scope.filter = function () {
			$scope.isFiltrate = true;
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
///#source 1 1 /app/directives/page/page-content/new-page-content-controller.js
angular.module('gridTaskApp')
	.controller('newPageContentCtrl', ['$scope', 'newGridService', 'templatesPath', function ($scope, newGridService, templatesPath) {
		function getData() {
			newGridService.get(function (data) {
				$scope.data = data;
			});
		}
		getData();

		$scope.grid = {
			name: 'Grid 2',
			count: $scope.data.length
		};

		$scope.exports = {
			options: {
				label: 'Export to: ',
				values: [{ label: 'Excel', isExcel: true }, { label: 'Pdf', isPdf: true }],
				callback: function (action) {
					$scope.export = action;
				}
			}
		};
		$scope.views = {
			options:
				{
					label: 'View: ',
					values: [{ label: 'Grid', isGrid: true, isTiles: false }, { label: 'Tiles', isGrid: false, isTiles: true }],
					callback: function (action) {
						$scope.view = action;
					}
				}
		};
		$scope.selectedOptions = {};
		$scope.selectedOptions.filterOptions = function () {
			var options = [];

			if (Array.isArray($scope.data) && $scope.data[0])
				for (var prop in $scope.data[0]) {
					options.push({ label: prop });
				}
			return options;
		}();

		$scope.selectedOptions.searchOptions = function () {
			var options = [];
			options.push({ label: 'everywhere', isEverywhere: true });

			if (Array.isArray($scope.data) && $scope.data[0]) {
				for (var prop in $scope.data[0]) {
					options.push({ label: prop, isColumn: true });
				}
			}

			return options;
		}();

		$scope.isFiltrate = false;

		$scope.refresh = function () {
			getData();

			$scope.data.map(function (value) {
				value.action = {
					values: [{
						label: 'Action', isAction: true
					}, {
						label: 'More',
						isMore: true,
						options: { label: 'More', values: [{ label: 'View Report' }], isMenu: true }
					}],
					isShow: false
				};
				value.isCheck = false;
			});
		}

		$scope.gridOptions = {
			data: 'data',
			multiSelect: false,
			rowTemplate: templatesPath + 'row-templates/row.html',
			afterSelectionChange: function (rowitem, event) {
				rowitem.entity.action.isShow = rowitem.selected;
			},
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			footerTemplate: templatesPath + 'grid-footer.html',
			columnDefs: [
				{ field: '', displayName: '', cellTemplate: templatesPath + 'row-templates/details-cell.html', width: 60, headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false, minWidth: 60 },
				{
					field: 'name', displayName: 'Name',
					headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100, cellTemplate: templatesPath + 'row-templates/name.html'
				},
				{
					field: 'type', displayName: 'Type',
					headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100, cellTemplate: templatesPath + 'row-templates/type.html'
				},
				{
					field: 'category', displayName: 'Category',
					headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'status', displayName: 'Status', cellTemplate: templatesPath + 'row-templates/status.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'conversion', displayName: 'Conversion',
					headerCellTemplate: templatesPath + 'cell-templates/cell.html', minWidth: 130
				},
				{
					field: 'action', displayName: '', cellTemplate: templatesPath + 'row-templates/action.html', headerCellTemplate: templatesPath + 'cell-templates/cell.html', sortable: false, width: 180, minWidth: 180
				}],
			plugins: []
		};

		$scope.refresh();
	}]);
///#source 1 1 /app/services/new-grid-service.js
angular.module('gridTaskApp')
	.service('newGridService', ['NewData', function (NewData) {
		this.get = function (callback) {
			var data = NewData.get();

			callback(data);
		}
	}])
	.factory('NewData', ['constantOfData', function (constantOfData) {
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
