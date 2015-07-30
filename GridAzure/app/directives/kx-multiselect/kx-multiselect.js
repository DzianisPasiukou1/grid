angular.module('gridTaskApp')
	.directive('kxMultiselect', ['$timeout', function ($timeout) {
		return {
			restrict: 'A',
			scope: {
				options: '=kxMultiselect'
			},
			link: function (scope, element, attrs) {
				$timeout(function () {
					element.multiselect({
						inheritClass: true,
						//enableFiltering: true
					});
				})
			}
		}
	}]);