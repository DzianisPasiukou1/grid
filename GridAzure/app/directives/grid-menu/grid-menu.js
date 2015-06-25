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