angular.module('gridTaskApp')
	.directive('search', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				searchValue: '=',
				edited: '='
			},
			controller: 'searchCtrl',
			templateUrl: templatesPath + 'search.html',
			link: function (scope, element, attrs) {
				element.find('.search-clear').hide();
				element.find('.search-span').show();


				$(document).click(function (event) {
					if (!$(event.target).closest(element).length) {
						element.find('.search-clear').hide();
						element.find('.search-span').show();
					}
				})

				element.focusin(function () {
					element.find('.search-clear').show();
					element.find('.search-span').hide();
				})
			}
		}
	}]);