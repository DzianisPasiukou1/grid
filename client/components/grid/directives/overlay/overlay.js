﻿angular.module('gridExpressApp')
	.directive('overlay', ['$timeout', 'templatesPath', function ($timeout, templatesPath) {
		return {
			restrict: 'EAC',
			scope: {
				selectors: '=',
				toggleMinWidth: '='
			},
			controller: 'overlayCtrl',
			templateUrl: templatesPath + 'directive-templates/overlay.html',
			transclude: true,
			replace: true,
			link: function (scope, element, attrs) {
				$timeout(function () {
					scope.$watch('state', function (state) {
						scope.setToggle();
					});
				});

				$(window).resize(function () {
					scope.setToggle(true);
					scope.style.transition = 'none';
					scope.$apply();
				});
			}
		}
	}]);