angular.module('gridTaskApp')
	.directive('dynamicDropdown', ['templatesPath', '$compile', '$timeout', function (templatesPath, $compile, $timeout) {
		return {
			restrict: 'A',
			scope: {
				origOpt: '=',
				dropdownOpt: '=',
				col: '=',
				row: '=',
				reInit: '='
			},
			templateUrl: templatesPath + 'dynamic-actions.html',
			link: function (scope, element, attrs) {
				var dynamic = function () {
					scope.totalWidth = 20;

					if (scope.dropdownOpt.isVisible) {
						if (scope.dropdownOpt.label == scope.origOpt.label) {
							scope.totalWidth += scope.dropdownOpt.actWidth;
						}
						else {
							scope.totalWidth += scope.dropdownOpt.moreWidth;
						}
					}

					scope.dynamicOpt.values.forEach(function (value) {
						if (value.isVisible) {
							scope.totalWidth += value.width;
						}
					});

					if (element.parent().offset().left != 0) {
						scope.offset = element.parent().offset();
					}

					if (scope.offset) {
						if (scope.totalWidth + scope.offset.left < $('body').prop('scrollWidth')) {
							scope.dynamicOpt.values.forEach(function (value) {
								if (!value.isVisible) {
									if (scope.dropdownOpt.label == scope.origOpt.label) {
										if (scope.totalWidth + scope.offset.left + value.width - scope.dropdownOpt.actWidth + scope.dropdownOpt.moreWidth < $('body').prop('scrollWidth')) {
											scope.totalWidth += value.width;
											scope.totalWidth -= scope.dropdownOpt.actWidth;
											scope.totalWidth += scope.dropdownOpt.moreWidth;
											value.toggleVisible(true);
										}
									}
									else {
										if (scope.totalWidth + scope.offset.left + value.width < $('body').prop('scrollWidth')) {
											scope.totalWidth += value.width;
											value.toggleVisible(true);
										}
									}
								}
							})
						}
						else {

							for (var i = scope.dynamicOpt.values.length - 1; i > -1 ; i--) {
								if (scope.dynamicOpt.values[i].isVisible) {
									if (scope.totalWidth + scope.offset.left > $('body').prop('scrollWidth')) {
										scope.totalWidth -= value.width;
										scope.dynamicOpt.values[i].toggleVisible(false);
									}

								}
							}
						}

						scope.$apply();
					}
				};

				scope.dropdownOpt = angular.copy(scope.origOpt);
				scope.dropdownOpt.isVisible = true;
				scope.dropdownOpt.style = { "z-index": -1 }

				$timeout(function () {
					scope.dropdownOpt.actWidth = element.parent().find('dropdown').width();

					scope.dropdownOpt.label = "More";

					$timeout(function () {
						scope.dropdownOpt.moreWidth = element.parent().find('dropdown').width();

						scope.dynamicOpt = angular.copy(scope.origOpt);
						scope.dynamicOpt.values.splice(2);

						scope.dynamicOpt.values.forEach(function (value) {
							this.isVisible = false;

							value.toggleVisible = function (isVisible) {
								this.isVisible = isVisible;

								for (var i = 0; i < scope.dropdownOpt.values.length; i++) {
									if (isVisible) {
										if (scope.dropdownOpt.values[i].label == this.label) {
											scope.dropdownOpt.values.splice(i, 1);

											if (scope.dropdownOpt.values.length == scope.origOpt.values.length) {
												scope.dropdownOpt.label = scope.origOpt.label;
											}
											else {
												scope.dropdownOpt.label = 'More';
											}
											break;
										}
									}
									else {
										scope.dropdownOpt.values.push(this);

										if (scope.dropdownOpt.values.length == scope.origOpt.values.length) {
											scope.dropdownOpt.label = scope.origOpt.label;
										}
										else {
											scope.dropdownOpt.label = 'More';
										}
										break;
									}
								}
							}
						});

						scope.dynamicOpt.values.forEach(function (value) {
							value.toggleVisible(true);
						});

						$timeout(function () {
							for (var i = 0; i < scope.dynamicOpt.values.length; i++) {
								scope.dynamicOpt.values[i].width = element.find('.' + scope.dynamicOpt.values[i].label).width();
							}

							scope.dynamicOpt.values.forEach(function (value) {
								value.toggleVisible(false);
							});

							dynamic();
						});


						$timeout(function () {
							scope.dropdownOpt.style = { "z-index": 9 };
						})
					});
				});

				$(window).resize(function () {
					dynamic();
				});
			}
		}
	}]);