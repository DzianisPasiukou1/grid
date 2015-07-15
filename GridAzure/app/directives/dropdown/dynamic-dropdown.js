angular.module('gridTaskApp')
	.directive('dynamicDropdown', ['templatesPath', '$compile', function (templatesPath, $compile) {
		return {
			restrict: 'A',
			scope: {
				origOpt: '=',
				dropdownOpt: '=',
				col: '='
			},
			templateUrl: templatesPath + 'dynamic-actions.html',
			link: function (scope, element, attrs) {

				var dynamic = function () {
					if (scope.dropdownOpt.isVisible) {
						scope.totalWidth -= scope.dropdownOpt.width;
					}

					scope.dropdownOpt.isVisible = false;

					scope.$apply();

					for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
						if (!scope.dynamicOpt.values[i].isVisible) {
							scope.totalWidth += scope.dynamicOpt.values[i].width;
							if (scope.totalWidth + scope.offset.left > $('body').prop('scrollWidth')) {
								scope.totalWidth -= scope.dynamicOpt.values[i].width;
								break;
							}
							else {
								scope.dynamicOpt.values[i].toggleVisible(true);
							}
						}
					}

					scope.dropdownOpt.isVisible = !scope.dynamicOpt.values[scope.dynamicOpt.values.length - 1].isVisible;

					scope.$apply();

					if (scope.dropdownOpt.isVisible) {
						scope.totalWidth += element.parent().find('dropdown').width();
						scope.dropdownOpt.width = element.parent().find('dropdown').width();

						for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
							if (!scope.dynamicOpt.values[i].isVisible) {
								if (scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]) == -1) {
									scope.dropdownOpt.values.push(scope.dynamicOpt.values[i]);
								}
							}
							else {
								scope.dropdownOpt.values.splice(scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]), 1);
							}
						}
					}

					if (scope.totalWidth + scope.offset.left > $('body').prop('scrollWidth')) {
						for (var i = scope.dynamicOpt.values.length - 1; i > -1; i--) {
							if (scope.dynamicOpt.values[i].isVisible) {
								scope.dynamicOpt.values[i].toggleVisible(false);
								scope.totalWidth -= scope.dynamicOpt.values[i].width;
								if (scope.totalWidth + scope.offset.left < $('body').prop('scrollWidth')) {
									break;
								}
							}
						}

						for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
							if (!scope.dynamicOpt.values[i].isVisible) {
								if (scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]) == -1) {
									scope.dropdownOpt.values.push(scope.dynamicOpt.values[i]);
								}
							}
							else {
								scope.dropdownOpt.values.splice(scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]), 1);
							}
						}
					}
				}

				var undynamic = function () {
					for (var i = scope.dynamicOpt.values.length - 1; i > -1; i--) {
						if (scope.dynamicOpt.values[i].isVisible) {
							scope.dynamicOpt.values[i].toggleVisible(false);
							scope.totalWidth -= scope.dynamicOpt.values[i].width;
							if (scope.totalWidth + scope.offset.left < $('body').prop('scrollWidth')) {
								break;
							}
						}
					}

					scope.dropdownOpt.isVisible = !scope.dynamicOpt.values[scope.dynamicOpt.values.length - 1].isVisible;

					scope.$apply();

					if (scope.dropdownOpt.isVisible) {
						scope.totalWidth += element.parent().find('dropdown').width();
						scope.dropdownOpt.width = element.parent().find('dropdown').width();

						for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
							if (!scope.dynamicOpt.values[i].isVisible) {
								if (scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]) == -1) {
									scope.dropdownOpt.values.push(scope.dynamicOpt.values[i]);
								}
							}
							else {
								scope.dropdownOpt.values.splice(scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]), 1);
							}
						}
					}

					if (scope.totalWidth + scope.offset.left > $('body').prop('scrollWidth')) {
						for (var i = scope.dynamicOpt.values.length - 1; i > -1; i--) {
							if (scope.dynamicOpt.values[i].isVisible) {
								scope.dynamicOpt.values[i].toggleVisible(false);
								scope.totalWidth -= scope.dynamicOpt.values[i].width;
								if (scope.totalWidth + scope.offset.left < $('body').prop('scrollWidth')) {
									break;
								}
							}
						}

						for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
							if (!scope.dynamicOpt.values[i].isVisible) {
								if (scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]) == -1) {
									scope.dropdownOpt.values.push(scope.dynamicOpt.values[i]);
								}
							}
							else {
								scope.dropdownOpt.values.splice(scope.dropdownOpt.values.indexOf(scope.dynamicOpt.values[i]), 1);
							}
						}
					}
				}

				scope.dynamicOpt = angular.copy(scope.origOpt);
				scope.dropdownOpt = angular.copy(scope.origOpt);
				scope.dropdownOpt.values = [];
				scope.dropdownOpt.style = { "z-index": "-1" };

				for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
					scope.dynamicOpt.values[i].isVisible = true;
					scope.dynamicOpt.values[i].toggleVisible = function (value) {
						this.isVisible = value;
					}
				}

				scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
					scope.totalWidth = 20;
					scope.offset = element.parent().offset();

					for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
						scope.dynamicOpt.values[i].width = element.find('.' + scope.dynamicOpt.values[i].label).width();
						scope.totalWidth += scope.dynamicOpt.values[i].width;
					}

					if (scope.totalWidth + scope.offset.left < $('body').prop('scrollWidth')) {
						dynamic();
					}
					else {
						undynamic();
					}

					scope.dropdownOpt.style = { "z-index": "9" };
				});


				$(window).resize(function () {
					if ((element.parent().offset().left != 0) && (element.parent().width() != 0)) {
						scope.totalWidth = 20;
						scope.offset = element.parent().offset();

						for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
							if (scope.dynamicOpt.values[i].isVisible) {
								scope.totalWidth += scope.dynamicOpt.values[i].width;
							}
						}

						if (scope.dropdownOpt.isVisible) {
							scope.totalWidth += scope.dropdownOpt.width;
						}

						if (scope.totalWidth + scope.offset.left < $('body').prop('scrollWidth')) {
							dynamic();
						}
						else {
							undynamic();
						}

					}
				});
			}
		}
	}]);