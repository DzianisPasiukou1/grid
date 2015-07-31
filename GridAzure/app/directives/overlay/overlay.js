angular.module('gridTaskApp')
	.directive('overlay', ['$timeout', function ($timeout) {
		return {
			restrict: 'A',
			scope: {
				state: '=overlayState',
				style: '=overlayStyle'
			},
			link: function (scope, element, attrs) {
				scope.style = { 'left': $(window).width() - 30 + 'px' }

				$timeout(function () {
					scope.$watch('state', function (state) {
						if (state) {
							if ($(window).width() + 450 > 1200) {
								scope.style = { 'left': '450px' }
							}
							else {
								scope.style = { 'left': '0' };
							}
						}
						else {
							scope.style = { 'left': $(window).width() - 30 + 'px', 'overflow': 'hidden' }
						}
					});
				});

				$(window).resize(function () {
					if (scope.state) {
						if ($(window).width() + 450 > 1200) {
							scope.style = { 'left': '450px', 'transition': 'none' }
						}
						else {
							scope.style = { 'left': '0', 'transition': 'none' }
						}
					}
					else {
						scope.style = { 'left': $(window).width() - 30 + 'px', 'transition': 'none', 'overflow': 'hidden' }
					}

					scope.$apply();
				});
			}
		}
	}]);