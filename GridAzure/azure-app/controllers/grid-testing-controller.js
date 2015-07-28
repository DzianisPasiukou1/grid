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

		$(document).delegate('.my-textarea', 'keydown', function (e) {
			var keyCode = e.keyCode || e.which;

			if (keyCode == 9) {
				e.preventDefault();
				var start = $(this).get(0).selectionStart;
				var end = $(this).get(0).selectionEnd;

				// set textarea value to: text before caret + tab + text after caret
				$(this).val($(this).val().substring(0, start)
							+ "\t"
							+ $(this).val().substring(end));

				// put caret at right position again
				$(this).get(0).selectionStart =
				$(this).get(0).selectionEnd = start + 1;
			}
		});

	}]);