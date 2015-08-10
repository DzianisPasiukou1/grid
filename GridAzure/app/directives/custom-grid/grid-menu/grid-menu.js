angular.module('gridTaskApp')
	.directive('gridMenu', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
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

						if ($(window).width() < totalWidth) {
							for (var i = value.length - 2; i > 1; i--) {
								if (value[i].visible) {
									value[i].toggleVisible();
									totalWidth -= value[i].minWidth;
									scope.colCache.push({ label: value[i].field, element: value[i] });
								}
								if ($(window).width() > totalWidth) {
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
										scope.colCache.push({ label: value[i].field, element: value[i] });
									}
									if ($(window).width() > totalWidth) {
										break;
									}
								}
							}
							else {
								for (var i = 0; i < value.length; i++) {
									if (!value[i].visible) {
										value[i].toggleVisible();
										totalWidth += value[i].minWidth;

										for (var j = 0; j < scope.colCache.length; j++) {
											if (scope.colCache[j].label == value[i].field) {
												scope.colCache.splice(j, 1);
											}
										}

										if ($(window).width() < totalWidth) {
											value[i].toggleVisible();
											totalWidth -= value[i].minWidth;

											var isExist = false;
											for (var j = 0; j < scope.colCache.length; j++) {
												if (scope.colCache[j].label == value[i].field) {
													isExist = true;
												}
											}
											if (!isExist) {
												scope.colCache.push({ label: value[i].field, element: value[i] });
											}
											else {
												scope.colCache = [];

												for (var j = 0; j < value.length; j++) {
													if (!value[j].visible) {
														scope.colCache.push({ label: value[j].field, element: value[j] });
													}
												}
											}
											break;
										}
									}

								}
							}

							scope.options.values = [];

							for (var i = 0; i < value.length; i++) {
								scope.options.values.push({ label: value[i].field, element: value[i], isVisible: value[i].visible });
							}

							if (scope.colCache.length > 0 || scope.$parent.options.showResponsMenu) {
								scope.isShow = true;
							}
							else {
								scope.isShow = false;
							}
						});
					}
				});

				scope.resize = function (action) {
					var totalWidth = scope.columns.reduce(function (a, b) {
						if (b.visible) {
							return a + b.minWidth;
						} else {
							return a;
						}
					}, 0);

					for (var j = 0; j < scope.colCache.length; j++) {
						if (scope.colCache[j].label == action.label) {
							scope.colCache.splice(j, 1);
						}
					}

					if ($(window).width() < totalWidth) {
						$('.page-CONTENT').css('minWidth', totalWidth + 'px');
					}
					else {
						$('.page-CONTENT').css('minWidth', '500px');
					}
				}
			}
		}
	}]);