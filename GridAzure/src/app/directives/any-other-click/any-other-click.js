var directiveName = "anyOtherClick";

angular.module('gridTaskApp')
	.directive('anyOtherClick', ["$parse", 'anyOtherClickFactory', function ($parse, anyOtherClickFactory) {
		return {
			restrict: 'A',
			link: function (scope, element, attr, controller) {
				var anyOtherClickFunction, documentClickHandler;

				anyOtherClickFunction = $parse(attr[directiveName]);
				documentClickHandler = function (event) {
					var eventOutsideTarget = (element[0] !== event.target) && (0 === element.find(event.target).length);
					if (eventOutsideTarget) {
						scope.$apply(function () {
							anyOtherClickFunction(scope, {});
						});
					}
				};
				anyOtherClickFactory._register(documentClickHandler);

				scope.$on("$destroy", function () {
					anyOtherClickFactory._destroy(documentClickHandler);
				});
			},
		}
	}]);