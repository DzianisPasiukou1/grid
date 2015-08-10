angular.module('gridTaskApp')
	.directive('overlay', ['$timeout', function ($timeout) {
		return {
			restrict: 'EAC',
			scope: {
				state: '=overlayState',
				style: '=overlayStyle',
				selectors: '=',
				toggleMinWidth: '='
			},
			controller: 'overlayCtrl',
			link: function (scope, element, attrs) {
				$timeout(function () {
					scope.$watch('state', function (state) {
						if (state) {
							if (getWindowWidth() + 650 > 1750) {
								scope.style = { 'left': '650px' }
							}
							else {
								scope.style = { 'left': '0' };
							}
						}
						else {
							if (scope.style.left != getWindowWidth() - scope.toggleMinWidth + 'px') {
								scope.style = { 'left': getWindowWidth() - scope.toggleMinWidth + 'px', 'overflow': 'hidden' }
							}

							element.scrollTop(0);
						}
					});

					scope.setToggle();
				});

				$(window).resize(function () {
					if (scope.state) {
						if (getWindowWidth() + 650 > 1750) {
							scope.style = {
								'left': '650px',
								'transition': 'none'
							}
						}
						else {
							scope.style = {
								'left': '0',
								'transition': 'none'
							}
						}
					}
					else {
						scope.style = {
							'left': getWindowWidth() - scope.toggleMinWidth + 'px',
							'transition': 'none',
							'overflow': 'hidden'
						}
					}

					scope.setToggle();
					scope.$apply();
				});
			}
		}
	}]);