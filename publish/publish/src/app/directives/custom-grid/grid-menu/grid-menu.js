angular.module('gridTaskApp')
	.directive('gridMenu', ['templatesPath', '$window', function (templatesPath, $window) {
		return {
			restrict: 'EA',
			templateUrl: templatesPath + 'directive-templates/grid-menu.html',
			controller: 'gridMenuCtrl',
			link: function (scope, element, attrs) {

				scope.$watch('columns', function (value) {
					if (Array.isArray(value) && value.length > 0) {

						scope.colCache = [];
						scope.options.values = [];

						var totalWidth = value.reduce(function (a, b) {
							return a + b.minWidth;
						}, 0);

						if (angular.element($window).width() < totalWidth) {
							for (var i = value.length - 2; i > 1; i--) {
								if (value[i].visible) {
									value[i].toggleVisible();
									totalWidth -= value[i].minWidth;
									scope.colCache.push({ label: value[i].field, element: value[i] });
								}
								if (angular.element($window).width() > totalWidth) {
									break;
								}
							}
						}

						if (scope.colCache.length > 0 || scope.$parent.options.showResponsMenu) {
							scope.isShow = true;
						}

						for (var i = 0; i < value.length; i++) {
							scope.options.values.push({ label: value[i].field, element: value[i], isVisible: value[i].visible });
						}
					}
				});

				var resize = function () {
					var totalWidth = scope.columns.reduce(function (a, b) {
						if (b.visible) {
							return a + b.minWidth;
						} else {
							return a;
						}
					}, 0);

					if (angular.element($window).width() < totalWidth) {
						for (var i = scope.columns.length - 2; i > 1; i--) {
							if (scope.columns[i].visible) {
								scope.columns[i].toggleVisible();
								totalWidth -= scope.columns[i].minWidth;
								scope.colCache.push({ label: scope.columns[i].field, element: scope.columns[i] });
							}
							if (angular.element($window).width() > totalWidth) {
								break;
							}
						}
					}
					else {
						for (var i = 0; i < scope.columns.length; i++) {
							if (!scope.columns[i].visible) {
								scope.columns[i].toggleVisible();
								totalWidth += scope.columns[i].minWidth;

								for (var j = 0; j < scope.colCache.length; j++) {
									if (scope.colCache[j].label == scope.columns[i].field) {
										scope.colCache.splice(j, 1);
									}
								}

								if (angular.element($window).width() < totalWidth) {
									scope.columns[i].toggleVisible();
									totalWidth -= scope.columns[i].minWidth;

									var isExist = false;
									for (var j = 0; j < scope.colCache.length; j++) {
										if (scope.colCache[j].label == scope.columns[i].field) {
											isExist = true;
										}
									}
									if (!isExist) {
										scope.colCache.push({ label: scope.columns[i].field, element: scope.columns[i] });
									}
									else {
										scope.colCache = [];

										for (var j = 0; j < scope.columns.length; j++) {
											if (!scope.columns[j].visible) {
												scope.colCache.push({ label: scope.columns[j].field, element: scope.columns[j] });
											}
										}
									}
									break;
								}
							}

						}
					}

					scope.options.values = [];

					for (var i = 0; i < scope.columns.length; i++) {
						scope.options.values.push({ label: scope.columns[i].field, element: scope.columns[i], isVisible: scope.columns[i].visible });
					}

					if (scope.colCache.length > 0 || scope.$parent.options.showResponsMenu) {
						scope.isShow = true;
					}
					else {
						scope.isShow = false;
					}
				}

				angular.element($window).resize(resize);

				scope.$on('$destroy', function () {
					angular.element($window).off("resize", resize);
				});
			}
		}
	}]);