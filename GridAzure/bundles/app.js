///#source 1 1 /app/app.js
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
		var data = function () {
			var array = [];

			for (var i = 0; i < constantOfData.count; i++) {
				var day = Math.floor((Math.random() * 1000) + 1);

				var obj = {
					date: new Date(constantOfData.startDate.setDate(constantOfData.startDate.getDate() + day)),
					name: 'Changing the icon font location\nBootstrap assumes icon font files will be located in the ../fonts/ directory, relative to the compiled CSS files. Moving or renaming those font files means updating the CSS in one of three ways:\nChange the @icon-font-path and/or @icon-font-name variables in the source Less files.\nUtilize the relative URLs option provided by the Less compiler.\nChange the url() paths in the compiled CSS.\nUse whatever option best suits your specific development setup.',
					value: 10122.97,
					trend: 7
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
///#source 1 1 /app/directives/custom-grid/custom-grid-controller.js
angular.module('gridTaskApp')
	.controller('customGridCtrl', ['$scope', 'templatesPath', function ($scope, templatesPath) {
		$scope.data.map(function (value) {
			value.action = { values: [{ label: 'Action' }, { label: 'More' }], isShow: false };
			value.isCheck = false;
		});
		$scope.filterData = angular.copy($scope.data, []);

		$scope.options = {
			data: 'filterData',
			multiSelect: false,
			rowTemplate: templatesPath + 'row-templates/row.html',
			afterSelectionChange: function (rowitem, event) {
				rowitem.entity.action.isShow = rowitem.selected;
			},
			filterOptions: { filterText: '' },
			rowHeight: 100,
			headerRowHeight: 50,
			showFooter: true,
			columnDefs: [
				{ field: '', displayName: '', cellTemplate: templatesPath + 'row-templates/details.html', width: 100 },
			{ field: 'date', displayName: 'Date', cellTemplate: templatesPath + 'row-templates/date.html' },
				{ field: 'name', displayName: 'Name', cellTemplate: templatesPath + 'row-templates/name.html' },
				{ field: 'value', displayName: 'Value', cellTemplate: templatesPath + 'row-templates/value.html' },
				{ field: 'trend', displayName: 'Trend', cellTemplate: templatesPath + 'row-templates/trend.html' },
				{ field: 'action', displayName: '', cellTemplate: templatesPath + 'row-templates/action.html', width: 250 }],
			plugins: []
		};

		$scope.$watch('filters.searchValue', function (value) {
			if (value) {
				$scope.options.filterOptions.filterText = 'name:' + value;
			}
		});

		function plugin() {
			if ($scope.exportTo.label == 'Excel') {
				$scope.options.plugins.push(new ngGridCsvExportPlugin());
			}
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
				filters: '='
			},
			templateUrl: templatesPath + 'custom-grid.html',
			link: function (scope, element, attrs, controller) {
				scope.$watch('filters.check', function (check) {
					scope.filterData = scope.data.filter(function (value) {
						if (check) {
							if (value.isCheck == check.value) {
								return value;
							}
						}
						else {
							return value;
						}
					});
				});
			}
		};
	}]);
///#source 1 1 /app/directives/custom-grid/grid-constants.js
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
				detailsClass: '=detailsClass'
			},
			link: function (scope, element, attrs) {
				element.click(function () {
					scope.row.elm.addClass(scope.detailsClass);

					scope.row.isToggle = !scope.row.isToggle;

					var step = scope.row.elm.context.scrollHeight - scope.rowHeight;
					var top = Math.round(scope.row.elm.position().top);
					var children = $(scope.row.elm).parent().children();

					if (scope.row.isToggle) {
						$(scope.row.elm).css('height', scope.row.elm.context.scrollHeight + 'px');
						for (var i = 0; i < children.length; i++) {
							if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
								$(children[i]).css('top', parseInt($(children[i]).css('top').replace('px', '')) + step + 'px');
							}
						}
					} else {
						$(scope.row.elm).css('height', scope.rowHeight + 'px');
						scope.row.elm.removeClass(scope.detailsClass);
						for (var i = 0; i < children.length; i++) {
							if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
								$(children[i]).css('top', parseInt($(children[i]).css('top').replace('px', '')) - step + 'px');
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
		$scope.selected = $scope.actions.values[0];

		$scope.select = function (action) {
			$scope.selected = action;
		}
	}]);
///#source 1 1 /app/directives/dropdown/dropdown.js
angular.module('gridTaskApp')
	.directive('dropdown', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				actions: '=',
				selected: '=',
				label: '=startLabel'
			},
			controller: 'dropdownCtrl',
			templateUrl: templatesPath + 'dropdown.html',
			link: function (scope, element, attrs) {
				element.find('ul').hide();

				element.click(function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
					}
					else {
						element.find('ul').show();
					}
				});

				element.focusout(function () {
					if (element.find('ul').is(':visible')) {
						element.find('ul').hide();
					}
					if (element.is(":focus")) {
						if (element.find('ul').is(':visible')) {
							element.find('ul').hide();
						}
						else {
							element.find('ul').show();
						}
					}
				});
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
	.controller('pageContentCtrl', ['$scope', 'gridService', function ($scope, gridService) {
		gridService.get(function (data) {
			$scope.data = data;
		});

		$scope.grid = {
			name: 'Grid name',
			count: $scope.data.length
		};

		$scope.exports = { name: 'Export to ', values: [{ label: 'Excel' }] };
		$scope.views = { name: 'View: ', values: [{ label: 'Grid' }] };
		$scope.selectedOptions = {};

	}]);
///#source 1 1 /app/directives/page/page-content/page-content.js
angular.module('gridTaskApp')
	.directive('pageContent', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {},
			controller: 'pageContentCtrl',
			templateUrl: templatesPath + 'page-content.html'
		}
	}]);
///#source 1 1 /app/directives/page/page-content/content-options/content-options-controller.js
angular.module('gridTaskApp')
	.controller('contentOptionsCtrl', ['$scope', function ($scope) {
		$scope.checks = { values: [{ label: 'Not checked', value: false }, { label: 'Checked', value: true }] };
		$scope.mores = { values: [{ label: 'More' }] };
		$scope.shows = { values: [{ label: 'Everywhere' }] };
	}]);
///#source 1 1 /app/directives/page/page-content/content-options/content-options.js
angular.module('gridTaskApp')
	.directive('contentOptions', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				selectedOptions: '='
			},
			templateUrl: templatesPath + 'content-options.html',
			controller: 'contentOptionsCtrl'
		}
	}]);
///#source 1 1 /app/directives/search/search.js
angular.module('gridTaskApp')
	.directive('search', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				searchValue: '='
			},
			templateUrl: templatesPath + 'search.html',
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
					max: 100
				});
			}
		};
	}]);
///#source 1 1 /app/directives/checkbox-select/checkbox-select-controller.js
angular.module('gridTaskApp')
	.controller('checkboxSelectCtrl', ['$scope', function ($scope) {
		$scope.selected = $scope.actions.values[0];

		$scope.select = function (action) {
			$scope.selected = action;
		}
	}]);
///#source 1 1 /app/directives/checkbox-select/checkbox-select.js
angular.module('gridTaskApp')
	.directive('checkboxSelect', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				actions: '=',
				selected: '='
			},
			templateUrl: templatesPath + 'checkbox-select.html',
			controller: 'checkboxSelectCtrl'
		}
	}]);
///#source 1 1 /app/directives/split-button/split-button-controller.js
angular.module('gridTaskApp')
	.controller('splitButtonCtrl', ['$scope', function ($scope) {
		$scope.selected = $scope.actions.values[0];

		$scope.select = function (action) {
			$scope.selected = action;
		}
	}]);
///#source 1 1 /app/directives/split-button/split-button.js
angular.module('gridTaskApp')
	.directive('splitButton', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				actions: '=',
				selected: '='
			},
			templateUrl: templatesPath + 'split-button.html',
			controller: 'splitButtonCtrl'
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
