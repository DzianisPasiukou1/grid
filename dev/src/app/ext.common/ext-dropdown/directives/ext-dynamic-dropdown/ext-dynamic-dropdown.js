(function () {
	'use strict'

	angular
		.module('ext.common.dropdown')
		.directive('extDynamicDropdown', extDynamicDropdown);

	extDynamicDropdown.$inject = ['extDropdownTemplatePath', '$compile', '$timeout', '$window'];

	function extDynamicDropdown(templatesPath, $compile, $timeout, $window) {
		var directive = {
			restrict: 'EA',
			scope: {
				origOpt: '=',
				dropdownOpt: '=',
				col: '=',
				row: '=',
				reInit: '=',
				toResize: '='
			},
			// controllerAs: 'vm',
			bindToController: false,
			templateUrl: templatesPath + 'ext-dynamic-dropdown.html',
			link: link
		};

		return directive;

		function link(scope, element, attrs, vm) {
			var dynamic = function () {
				for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
					if (!scope.dynamicOpt.values[i].isVisible) {
						scope.totalWidth += scope.dynamicOpt.values[i].width;
						if (scope.totalWidth + scope.offset.left > angular.element('body').prop('scrollWidth')) {
							scope.totalWidth -= scope.dynamicOpt.values[i].width;
							break;
						}
						else {
							scope.dynamicOpt.values[i].toggleVisible(true);
						}
					}
				}

				scope.$apply();

				if (scope.dropdownOpt.isVisible) {
					if (scope.dropdownOpt.width === undefined) {
						scope.dropdownOpt.width = element.parent().find('div[dropdown]').width();
					}
					scope.totalWidth += scope.dropdownOpt.width;

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
				else {
					scope.totalWidth -= scope.dropdownOpt.width;
				}

				if (scope.totalWidth + scope.offset.left > angular.element('body').prop('scrollWidth')) {
					for (var i = scope.dynamicOpt.values.length - 1; i > -1; i--) {
						if (scope.dynamicOpt.values[i].isVisible) {
							scope.dynamicOpt.values[i].toggleVisible(false);
							scope.totalWidth -= scope.dynamicOpt.values[i].width;
							if (scope.totalWidth + scope.offset.left < angular.element('body').prop('scrollWidth')) {
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
						if (scope.totalWidth + scope.offset.left < angular.element('body').prop('scrollWidth')) {
							break;
						}
					}
				}

				scope.$apply();

				if (scope.dropdownOpt.isVisible) {
					if (scope.dropdownOpt.width === undefined) {
						scope.dropdownOpt.width = element.parent().find('div[dropdown]').width();
					}
					scope.totalWidth += scope.dropdownOpt.width;

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
				else {
					scope.totalWidth -= scope.dropdownOpt.width;
				}

				if (scope.totalWidth + scope.offset.left > angular.element('body').prop('scrollWidth')) {
					for (var i = scope.dynamicOpt.values.length - 1; i > -1; i--) {
						if (scope.dynamicOpt.values[i].isVisible) {
							scope.dynamicOpt.values[i].toggleVisible(false);
							scope.totalWidth -= scope.dynamicOpt.values[i].width;
							if (scope.totalWidth + scope.offset.left < angular.element('body').prop('scrollWidth')) {
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

			scope.dropdownOpt.isVisible = true;

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

				if (scope.totalWidth + scope.offset.left < angular.element('body').prop('scrollWidth')) {
					dynamic();
				}
				else {
					undynamic();
				}

				var countVisible = 0;
				for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
					if (scope.dynamicOpt.values[i].isVisible) {
						countVisible += 1;

						if (countVisible > 2) {
							countVisible -= 1;
							scope.dynamicOpt.values[i].toggleVisible(false);
						}
					}
				}

				if (countVisible > 0) {
					scope.dropdownOpt.label = "More";
				}
				else {
					scope.dropdownOpt.label = "Actions";
				}

				scope.dropdownOpt.style = { "z-index": "9" };
			});

			var resize = function () {
				if (element.parent().offset().left != 0) {
					scope.offset = element.parent().offset();
				}

				scope.totalWidth = 20;

				for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
					if (scope.dynamicOpt.values[i].isVisible) {
						scope.totalWidth += scope.dynamicOpt.values[i].width;
					}
				}

				if (scope.dropdownOpt.isVisible) {
					scope.totalWidth += scope.dropdownOpt.width;
				}

				if (scope.totalWidth + scope.offset.left < angular.element('body').prop('scrollWidth')) {
					scope.dynamicOpt.values.sort(function (a, b) {
						if (a.priority > b.priority) {
							return -1;
						}
						if (a.priority < b.priority) {
							return 1;
						}

						return 0;
					});

					var countVisible = 0;

					for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
						if (scope.dynamicOpt.values[i].isVisible) {
							scope.totalWidth -= scope.dynamicOpt.values[i].width;
							scope.dynamicOpt.values[i].toggleVisible(false);
						}

						if (scope.totalWidth + scope.offset.left + scope.dynamicOpt.values[i].width < angular.element('body').prop('scrollWidth')) {
							scope.totalWidth += scope.dynamicOpt.values[i].width;
							scope.dynamicOpt.values[i].toggleVisible(true);
							countVisible += 1;
						}

						if (countVisible == 2) {
							break;
						}
					}

					if (countVisible > 0) {
						scope.dropdownOpt.label = "More";
					}
					else {
						scope.dropdownOpt.label = "Actions";
					}
				}
				else {
					scope.dynamicOpt.values.sort(function (a, b) {
						if (a.priority > b.priority) {
							return 1;
						}
						if (a.priority < b.priority) {
							return -1;
						}

						return 0;
					});

					var countVisible = 0;

					for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
						if (scope.dynamicOpt.values[i].isVisible) {
							scope.totalWidth -= scope.dynamicOpt.values[i].width;
							scope.dynamicOpt.values[i].toggleVisible(false);
						}

						if (scope.totalWidth + scope.offset.left + scope.dynamicOpt.values[i].width < angular.element('body').prop('scrollWidth')) {
							scope.totalWidth += scope.dynamicOpt.values[i].width;
							scope.dynamicOpt.values[i].toggleVisible(true);
							countVisible += 1;
						}

						if (countVisible == 2) {
							break;
						}
					}

					if (countVisible > 0) {
						scope.dropdownOpt.label = "More";
					}
					else {
						scope.dropdownOpt.label = "Actions";
					}
				}

				scope.dropdownOpt.values = [];

				for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
					if (!scope.dynamicOpt.values[i].isVisible) {
						scope.dropdownOpt.values.push(scope.dynamicOpt.values[i]);
					}
				}

				scope.$apply()
			};

			angular.element($window).resize(resize);

			scope.$on('$destroy', function () {
				angular.element($window).off("resize", resize);
			});
		};
	};
} ());