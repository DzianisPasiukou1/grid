(function () {
	'use strict'

	angular
		.module('azureApp')
		.controller('GridTestingController', GridTestingController);

	GridTestingController.$inject = ['$scope', 'gridUploadService', 'templatesPath'];

	function GridTestingController($scope, gridUploadService, templatesPath) {
		var vm = this;

		vm.scope = $scope;
		vm.gridUploadService = gridUploadService;
		vm.templatesPath = templatesPath;

		vm.getData = function (callback) {
			var self = this;

			setTimeout(function () {
				self.gridUploadService.get(function (data) {
					self.scope.data = angular.copy(data);
					self.scope.$apply();
				})
			}.bind(this), 2000);
		}
		vm.getData();

		vm.scope.grid = {
			name: 'test grid1'
		}

		vm.scope.contentOptions = {
			loading: true,
			refreshCallback: vm.getData,
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

		vm.scope.gridOptions = {
			withDetails: true,
			detailsTemplate: vm.templatesPath + 'grid-templates/details-templates/details-example1.html',
			detailsCondition: function (entity, index) {
				var self = this;

				if (index % 2 != 0) {
					return self.templatesPath + 'grid-templates/details-templates/details-example2.html';
				}
			}
		}

		vm.scope.uiGridOptions = {
		}

		vm.scope.content = JSON.stringify({
			contentOptions: vm.scope.contentOptions, grid: vm.scope.grid, gridOptions: vm.scope.gridOptions, uiGridOptions: vm.scope.uiGridOptions
		}, function (key, value) {
			if (typeof value === 'function') {
				var temp = value.toString();
				return temp;
			} else {
				return value;
			}
		}, "\t");

		var tempContent = '';

		for (var i = 0; i < vm.scope.content.length - 1; i++) {
			if (vm.scope.content[i] == "\\") {
				if (vm.scope.content[i + 1] == "r") {
					tempContent += "\r";
					i++;
				}
				else if (vm.scope.content[i + 1] == "n") {
					tempContent += "\n";
					i++;
				}
				else if (vm.scope.content[i + 1] == "t") {
					tempContent += "\t";
					i++;
				}
				else {
					tempContent += vm.scope.content[i];
				}
			}
			else {
				tempContent += vm.scope.content[i];
			}

			if (i == vm.scope.content.length - 2) {
				tempContent += vm.scope.content[i + 1];
			}

		}


		vm.scope.content = tempContent;

		vm.scope.isValid = true;

		vm.scope.textChange = function () {
			try {
				var temp = vm.scope.content.replace(/\r/g, '').replace(/\n/g, '').replace(/\t/g, '')

				temp = JSON.parse(temp, function (key, value) {
					if (value && typeof value === "string" && value.substr(0, 8) == "function") {
						var startBody = value.indexOf('{') + 1;
						var endBody = value.lastIndexOf('}');
						var startArgs = value.indexOf('(') + 1;
						var endArgs = value.indexOf(')');

						var func = new Function(value.substring(startArgs, endArgs), value.substring(startBody, endBody));
						func = func.bind(vm);

						return func;
					}
					return value;
				});

				vm.scope.contentOptions = temp.contentOptions;
				vm.scope.grid = temp.grid;
				vm.scope.gridOptions = temp.gridOptions;
				vm.scope.uiGridOptions = temp.uiGridOptions;
				vm.scope.isValid = true;
			}
			catch (e) {
				console.log('parse error');
				vm.scope.isValid = false;
				return;
			}
		}

		vm.scope.textChange();

		vm.scope.compile = function () {
			vm.getData();
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
	};
} ());