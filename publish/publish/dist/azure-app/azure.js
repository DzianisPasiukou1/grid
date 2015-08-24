angular.module('azureApp', ['gridTaskApp', 'ngRoute']);
angular.module("azureApp").config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl: "/dist/azure-app/templates/navigation.html",
	}).when("/standartOne", {
		templateUrl: "/dist/azure-app/templates/grids/grid-standart-one.html",
		controller: "gridStandartOneCtrl"
	}).when("/standartTwo", {
		templateUrl: "/dist/azure-app/templates/grids/grid-standart-two.html",
		controller: "gridStandartTwoCtrl"
	}).when("/withDetailsTemplate", {
		templateUrl: "/dist/azure-app/templates/grids/grid-with-details-template.html",
		controller: "gridWithDetailsCtrl"
	}).when("/withUpload", {
		templateUrl: "/dist/azure-app/templates/grids/grid-with-upload.html",
		controller: "gridUploadCtrl"
	}).when("/withLoading", {
		templateUrl: "/dist/azure-app/templates/grids/grid-with-loading.html",
		controller: "gridLoadingCtrl"
	}).when("/testing", {
		templateUrl: "/dist/azure-app/templates/grids/grid-testing.html",
		controller: "gridTestingCtrl",
		controllerAs: "ctrl"
	}).when("/withMenu", {
		templateUrl: "/dist/azure-app/templates/grids/grid-with-menu.html",
		controller: "gridWithMenuCtrl"
	}).when("/withCards", {
		templateUrl: "/dist/azure-app/templates/grids/grid-with-cards.html",
		controller: "gridWithCardsCtrl"
	}).when("/withDiagrams", {
		templateUrl: "/dist/azure-app/templates/grids/grid-d3.html",
		controller: "gridD3Ctrl"
	}).when("/download", {
		templateUrl: "/dist/azure-app/templates/download.html"
	}).when("/navigation", {
		templateUrl: "/dist/azure-app/templates/navigation.html"
	})
    .otherwise({
    	redirectTo: '/'
    });
	
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}]);

angular.module('gridTaskApp')
	.controller('gridD3Ctrl', ['$scope', 'gridStandartOneService', function ($scope, gridStandartOneService) {
		function getData() {
			gridStandartOneService.get(function (data) {
				$scope.data = data;
			});
		}
		getData();

		$scope.uiGridOptions = {
			showResponsMenu: true
		}

		$scope.cardsOpt = {
			margin: 525
		}

		$scope.contentOptions = {
			uploadCards: function (data) {
				$scope.cardsOpt = data;
				$scope.cardsOpt.margin = 525;
				$scope.$apply();
			},
			uploadSankey: function (data) {
				$scope.sankeyData = data;
				$scope.$apply();
			},
			uploadHistogram: function (data) {
				$scope.histogramData = data;
				$scope.$apply();
			},
			enableDebugging: true,
			debugCard: {
				//text: 'test',
				//template: 'app/templates/directive-templates/chart-segment.html'
			}
		}
	}])
angular.module('gridTaskApp')
	.controller('gridLoadingCtrl', ['templatesPath', '$scope', 'gridUploadService', function (templatesPath, $scope, gridUploadService) {
		$scope.data = [];

		function getData() {
			setTimeout(function () {
				gridUploadService.get(function (data) {
					$scope.data = data;

					$scope.grid.count = $scope.data.length;

					$scope.$apply();
				})
			}, 2000)
		}
		getData();

		$scope.grid = {
			name: 'Grid with loading',
			count: 0
		};

		$scope.contentOptions = {
			upload: function (data) {
				$scope.contentOptions.isLoading = true;

				$scope.data = data;

				$scope.grid.count = $scope.data.length;

				$scope.gridOptions.detailsCondition = undefined;

				$scope.$apply();
			},
			refresh: function () {
				$scope.contentOptions.isLoading = true;

				getData();

				$scope.grid.count = $scope.data.length;
			},
			isDynamic: true,
			loading: true
		};

		$scope.gridOptions = {
			data: 'data',
			multiSelect: false,
			init: function (grid, event) {
				$scope.contentOptions.isLoading = false;
			},
			withDetails: true,
			rowTemplate: templatesPath + 'grid-templates/row-templates/row-with-detalis.html',
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			footerTemplate: templatesPath + 'grid-templates/grid-footer.html',
			columnDefs: columnGenerator($scope.data, templatesPath),
			detailsCondition: function (entity, index) {
				if (index % 2 != 0) {
					return templatesPath + 'grid-templates/details-templates/details-example2.html';
				}
			}
		};
	}]);
angular.module('gridTaskApp')
	.controller('gridWithMenuCtrl', ['templatesPath', '$scope', 'gridUploadService', function (templatesPath, $scope, gridUploadService) {
		$scope.data = [];

		function getData() {
			setTimeout(function () {
				gridUploadService.get(function (data) {
					$scope.data = data;

					$scope.grid.count = $scope.data.length;

					$scope.$apply();
				})
			}, 2000)
		}
		getData();

		$scope.grid = {
			name: 'Grid with menu',
			count: 0
		};

		$scope.contentOptions = {
			upload: function (data) {
				$scope.contentOptions.isLoading = true;

				$scope.data = data;

				$scope.grid.count = $scope.data.length;

				$scope.$apply();
			},
			refresh: function () {
				$scope.contentOptions.isLoading = true;

				getData();

				$scope.grid.count = $scope.data.length;
			},
			isDynamic: true,
			loading: true
		};

		$scope.uiGridOptions = {
			showResponsMenu: true
		}

		$scope.gridOptions = {
			data: 'data',
			withDetails: true,
			init: function (grid, $scope) {
			},
			showResponsMenu: true,
			multiSelect: false,
			rowTemplate: templatesPath + 'grid-templates/row-templates/row.html',
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			footerTemplate: templatesPath + 'grid-templates/grid-footer.html',
			selectItem: function (itemIndex, state) {

			},
			columnDefs: [
				{ field: 'details', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/details.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 60, minWidth: 60 },
			{ field: 'date', displayName: 'Date', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/date.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 140 },
				{
					field: 'name', displayName: 'Name', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/name.html',
					headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'type', displayName: 'Type', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/type.html',
					headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'value', displayName: 'Value', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/value.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'trend', displayName: 'Trend', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/trend.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 130
				},
				{
					field: 'status', displayName: 'Status', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/status.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'category', displayName: 'Category', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/status.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'conversion', displayName: 'Conversion', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/status.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 130
				},
				{
					field: 'action', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/action.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 300, minWidth: 115
				}]
		};
	}]);
angular.module('gridTaskApp')
	.controller('gridStandartOneCtrl', ['$scope', 'gridStandartOneService', 'templatesPath', function ($scope, gridStandartOneService, templatesPath) {
		function getData() {
			gridStandartOneService.get(function (data) {
				$scope.data = data;
			});
		}
		getData();

		$scope.grid = {
			name: 'Standart grid one',
			count: $scope.data.length
		};

		$scope.contentOptions = {
			refresh: function () {
				getData();

				$scope.grid.count = $scope.data.length;
			},
			withUpload: true
		};

		$scope.uiGridOptions = {
			showResponsMenu: true,
			reInit: true
		}

		$scope.gridOptions = {
			data: 'data',
			init: function (grid, $scope) {
			},
			multiSelect: false,
			rowTemplate: templatesPath + 'grid-templates/row-templates/row.html',
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			footerTemplate: templatesPath + 'grid-templates/grid-footer.html',
			selectItem: function (itemIndex, state) {

			},
			showResponsMenu: true,
			columnDefs: [
				{ field: 'details', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/details.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 60, minWidth: 60 },
			{ field: 'date', displayName: 'Date', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/date.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 140 },
				{
					field: 'name', displayName: 'Name', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/name.html',
					headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'type', displayName: 'Type', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/type.html',
					headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'value', displayName: 'Value', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/value.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'trend', displayName: 'Trend', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/trend.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 130
				},
				{
					field: 'status', displayName: 'Status', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/status.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'category', displayName: 'Category', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/status.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'conversion', displayName: 'Conversion', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/status.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 130
				},
				{
					field: 'action', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/action.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 250, minWidth: 115
				}]
		};
	}]);
angular.module('gridTaskApp')
	.controller('gridStandartTwoCtrl', ['$scope', 'gridStandartTwoService', 'templatesPath', function ($scope, gridStandartTwoService, templatesPath) {
		function getData() {
			gridStandartTwoService.get(function (data) {
				$scope.data = data;
			});
		}
		getData();

		$scope.grid = {
			name: 'Standart grid two',
			count: $scope.data.length
		};

		$scope.contentOptions = {
			refresh: function () {
				getData();

				$scope.grid.count = $scope.data.length;
			}
		};

		$scope.gridOptions = {
			data: 'data',
			multiSelect: false,
			rowTemplate: templatesPath + 'grid-templates/row-templates/row.html',
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			reInit: false,
			footerTemplate: templatesPath + 'grid-templates/grid-footer.html',
			columnDefs: [
				{ field: 'details', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/details.html', width: 60, headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, minWidth: 60 },
				{
					field: 'name', displayName: 'Name',
					headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100, cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/name.html'
				},
				{
					field: 'type', displayName: 'Type',
					headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100, cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/type.html'
				},
				{
					field: 'category', displayName: 'Category',
					headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'status', displayName: 'Status', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/status.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 100
				},
				{
					field: 'conversion', displayName: 'Conversion',
					headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 130
				},
				{
					field: 'action', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/action.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 300, minWidth: 115
				}]
		};
	}]);
angular.module('gridTaskApp')
	.controller('gridTestingCtrl', ['$scope', 'gridUploadService', 'templatesPath', '$compile', '$parse', function ($scope, gridUploadService, templatesPath, $compile, $parse) {
		var self = this;
		self.scope = $scope;
		self.gridUploadService = gridUploadService;
		self.templatesPath = templatesPath;

		self.getData = function (callback) {
			var self = this;

			setTimeout(function () {
				self.gridUploadService.get(function (data) {
					self.scope.data = angular.copy(data);
					self.scope.$apply();
				})
			}.bind(this), 2000);
		}
		self.getData();

		self.scope.grid = {
			name: 'test grid1'
		}

		self.scope.contentOptions = {
			loading: true,
			refreshCallback: self.getData,
			refresh: function () {
				this.scope.contentOptions.isLoading = true;
				this.getData();
				this.scope.gridOptions.detailsTemplate = this.templatesPath + 'grid-templates/details-templates/details-example1.html';
				this.scope.gridOptions.detailsCondition = function (entity, index) {
					var self = this;

					if (index % 2 != 0) {
						return self.templatesPath + 'grid-templates/details-templates/details-example2.html';
					}
				}.bind(this);
				setTimeout(function () {
					this.scope.$apply();
				}.bind(this));
			},
			checks: {
				options: {
					actions: [{
						label: 'test'
					}],
					callback: function (action) {
						console.log('check is tested');
					}
				}
			},
			upload: function (data) {
				this.scope.contentOptions.isLoading = true;
				this.scope.data = angular.copy(data);
				this.scope.gridOptions.detailsTemplate = this.templatesPath + 'grid-templates/details-templates/details-upload.html';
				this.scope.gridOptions.detailsCondition = undefined;
				this.scope.$apply();
			}
		};

		self.scope.gridOptions = {
			withDetails: true,
			detailsTemplate: self.templatesPath + 'grid-templates/details-templates/details-example1.html',
			detailsCondition: function (entity, index) {
				var self = this;

				if (index % 2 != 0) {
					return self.templatesPath + 'grid-templates/details-templates/details-example2.html';
				}
			}
		}

		self.scope.uiGridOptions = {
		}

		self.scope.content = JSON.stringify({
			contentOptions: self.scope.contentOptions, grid: self.scope.grid, gridOptions: self.scope.gridOptions, uiGridOptions: self.scope.uiGridOptions
		}, function (key, value) {
			if (typeof value === 'function') {
				var temp = value.toString();
				return temp;
			} else {
				return value;
			}
		}, "\t");

		var tempContent = '';

		for (var i = 0; i < self.scope.content.length - 1; i++) {
			if (self.scope.content[i] == "\\") {
				if (self.scope.content[i + 1] == "r") {
					tempContent += "\r";
					i++;
				}
				else if (self.scope.content[i + 1] == "n") {
					tempContent += "\n";
					i++;
				}
				else if (self.scope.content[i + 1] == "t") {
					tempContent += "\t";
					i++;
				}
				else {
					tempContent += self.scope.content[i];
				}
			}
			else {
				tempContent += self.scope.content[i];
			}

			if (i == self.scope.content.length - 2) {
				tempContent += self.scope.content[i + 1];
			}

		}


		self.scope.content = tempContent;

		self.scope.isValid = true;

		self.scope.textChange = function () {
			try {
				var temp = self.scope.content.replace(/\r/g, '').replace(/\n/g, '').replace(/\t/g, '')

				temp = JSON.parse(temp, function (key, value) {
					if (value && typeof value === "string" && value.substr(0, 8) == "function") {
						var startBody = value.indexOf('{') + 1;
						var endBody = value.lastIndexOf('}');
						var startArgs = value.indexOf('(') + 1;
						var endArgs = value.indexOf(')');

						var func = new Function(value.substring(startArgs, endArgs), value.substring(startBody, endBody));
						func = func.bind(self);

						return func;
					}
					return value;
				});

				self.scope.contentOptions = temp.contentOptions;
				self.scope.grid = temp.grid;
				self.scope.gridOptions = temp.gridOptions;
				self.scope.uiGridOptions = temp.uiGridOptions;
				self.scope.isValid = true;
			}
			catch (e) {
				console.log('parse error');
				self.scope.isValid = false;
				return;
			}
		}

		self.scope.textChange();

		self.scope.compile = function () {
			self.getData();
		}

		angular.element(document).delegate('.my-textarea', 'keydown', function (e) {
			var keyCode = e.keyCode || e.which;

			if (keyCode == 9) {
				e.preventDefault();
				var start = angular.element(this).get(0).selectionStart;
				var end = angular.element(this).get(0).selectionEnd;

				// set textarea value to: text before caret + tab + text after caret
				angular.element(this).val(angular.element(this).val().substring(0, start)
							+ "\t"
							+ angular.element(this).val().substring(end));

				// put caret at right position again
				angular.element(this).get(0).selectionStart =
				angular.element(this).get(0).selectionEnd = start + 1;
			}
		});

	}]);
angular.module('gridTaskApp')
	.controller('gridUploadCtrl', ['$scope', 'gridUploadService', function ($scope, gridUploadService) {
		function getData() {
			gridUploadService.get(function (data) {
				$scope.data = data;
			});
		}
		getData();

		$scope.contentOptions = {
			refreshCallback: getData,
			withUpload: true,
		};
	}]);
angular.module('gridTaskApp')
	.controller('gridWithCardsCtrl', ['$scope', 'gridStandartOneService', function ($scope, gridStandartOneService) {
		function getData() {
			gridStandartOneService.get(function (data) {
				$scope.data = data;
			});
		}
		getData();

		$scope.uiGridOptions = {
			showResponsMenu: true,
			enableAction: true,
			enableDetails: true,
			disableCheck: false
		}

		$scope.cardsOpt = {
			cards: [],
			startDate: '',
			endDate: ''
		}

	}])
angular.module('gridTaskApp')
	.controller('gridWithDetailsCtrl', ['$scope', 'templatesPath', 'gridWithDetailsTemplateService', function ($scope, templatesPath, gridWithDetailsTemplateService) {
		function getData() {
			gridWithDetailsTemplateService.get(function (data) {
				$scope.data = data;
			});
		}
		getData();

		$scope.grid = {
			name: 'Grid with details template',
			count: $scope.data.length
		};

		$scope.contentOptions = {
			refresh: function () {
				getData();

				$scope.grid.count = $scope.data.length;
			},
			isDynamic: true
		};

		$scope.gridOptions = {
			data: 'data',
			withDetails: true,
			init: function (grid, $scope) {
			},
			multiSelect: false,
			rowTemplate: templatesPath + 'grid-templates/row-templates/row-with-detalis.html',
			filterOptions: { filterText: '' },
			rowHeight: 60,
			headerRowHeight: 40,
			showFooter: true,
			footerRowHeight: 30,
			footerTemplate: templatesPath + 'grid-templates/grid-footer.html',
			columnDefs: [
				{ field: 'details', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/details.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 60, minWidth: 60 },
			{ field: 'priority', displayName: 'Priority', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
			{ field: 'name', displayName: 'Name', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
			{ field: 'ID', displayName: 'ID', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
			{ field: 'Type', displayName: 'Type', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
			{ field: 'category', displayName: 'Category', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
			{ field: 'subCategory', displayName: 'Sub Category', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
			{ field: 'devices', displayName: 'Devices', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
			{ field: 'persistent', displayName: 'Persistent', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
			{ field: 'people', displayName: 'People', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
			{ field: 'refreshFrequency', displayName: 'Refresh Frequency', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
			{ field: 'lastComputed', displayName: 'Last Computed', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
			{ field: 'dateCreated', displayName: 'Date Created', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
			{ field: 'interchange', displayName: 'Interchange', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', minWidth: 60 },
				{
					field: 'action', displayName: '', cellTemplate: templatesPath + 'grid-templates/cell-templates/fields/action.html', headerCellTemplate: templatesPath + 'grid-templates/cell-templates/cell.html', sortable: false, width: 300, minWidth: 150
				}]
		};
	}])
angular.module('gridTaskApp')
	.service('gridStandartOneService', ['StandartOneData', function (StandartOneData) {
		this.get = function (callback) {
			var data = StandartOneData.get();

			callback(data);
		}
	}])
	.factory('StandartOneData', ['DATA', function (DATA) {
		var types = ['Purchase', 'Default', 'Page View', 'Krux Click Tracker', 'Ad', 'Form', 'Subscription']
		var categories = ['ecommerce', 'User Match', 'Site Visit', 'User Action', 'Form Data'];
		var conversions = ['Yes', 'No'];

		var data = function () {
			var array = [];

			for (var i = 0; i < DATA.count; i++) {
				var day = Math.floor((Math.random() * 1000) + 1);
				var value = Math.floor((Math.random() * 100000) + 1);
				var trend = Math.floor((Math.random() * 100) + 1);
				var type = types[Math.floor(Math.random() * 7)];
				var category = categories[Math.floor(Math.random() * categories.length)];
				var conversion = conversions[Math.floor(Math.random() * conversions.length)];

				var obj = {
					date: new Date(DATA.startDate.setDate(DATA.startDate.getDate() + day)).toDateString(),
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
angular.module('gridTaskApp')
	.service('gridStandartTwoService', ['StandartTwoData', function (StandartTwoData) {
		this.get = function (callback) {
			var data = StandartTwoData.get();

			callback(data);
		}
	}])
	.factory('StandartTwoData', ['DATA', function (DATA) {
		var names = ['Adids Originals Purchase', 'Affiliate User Match', 'Auto Trader App Visit', 'Auto Trader Home Page', 'Click Tracker Example', 'Coming to my home page', 'Contact Seller', 'Customer Registration']
		var types = ['Purchase', 'Default', 'Page View', 'Krux Click Tracker', 'Ad', 'Form', 'Subscription']
		var categories = ['ecommerce', 'User Match', 'Site Visit', 'User Action', 'Form Data'];
		var statues = ['Enabled', 'Disabled'];
		var conversions = ['Yes', 'No'];

		var data = function () {
			var array = [];

			for (var i = 0; i < DATA.count; i++) {
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
angular.module('gridTaskApp')
	.service('gridUploadService', ['UploadData', '$http', function (UploadData, $http) {
		this.get = function (callback, url) {
			var data = UploadData.get();

			callback(data);
		}
	}])
	.factory('UploadData', ['DATA', function (DATA) {
		var types = ['Purchase', 'Default', 'Page View', 'Krux Click Tracker', 'Ad', 'Form', 'Subscription']
		var categories = ['ecommerce', 'User Match', 'Site Visit', 'User Action', 'Form Data'];
		var conversions = ['Yes', 'No'];

		var data = function () {
			var array = [];

			for (var i = 0; i < DATA.count; i++) {
				var day = Math.floor((Math.random() * 1000) + 1);
				var value = Math.floor((Math.random() * 100000) + 1);
				var trend = Math.floor((Math.random() * 100) + 1);
				var type = types[Math.floor(Math.random() * 7)];
				var category = categories[Math.floor(Math.random() * categories.length)];
				var conversion = conversions[Math.floor(Math.random() * conversions.length)];

				var obj = {
					date: new Date(DATA.startDate.setDate(DATA.startDate.getDate() + day)).toDateString(),
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
angular.module('gridTaskApp')
	.service('gridWithDetailsTemplateService', ['DetailsTemplateData', function (DetailsTemplateData) {
		this.get = function (callback) {
			var data = DetailsTemplateData.get();

			callback(data);
		}
	}])
	.factory('DetailsTemplateData', ['DATA', function (DATA) {

		var data = function () {
			var array = [];

			for (var i = 0; i < DATA.count; i++) {

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