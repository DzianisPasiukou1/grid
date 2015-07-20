angular.module('gridTaskApp')
	.directive('gridSort', ['$timeout', function ($timeout) {
		return {
			restrict: 'A',
			controller: 'gridSortCtrl',
			scope: {
				wordClass: '=',
				iconsClasses: '='
			},
			link: function (scope, element, attrs) {
				scope.$watch('isShow', function (value) {
					if (value) {
						scope.iconsClasses.forEach(function (icon) {
							element.find(icon).show();
						})
					}
					else {
						scope.iconsClasses.forEach(function (icon) {
							element.find(icon).hide();
						})
					}
				})

				$timeout(function () {

				});

				//$(document).click(function (event) {
				//	if (!$(event.target).closest(element).length) {
				//		scope.toggleSort();
				//	}
				//});
			}
		}
	}]);