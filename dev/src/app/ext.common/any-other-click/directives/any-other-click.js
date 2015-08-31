(function () {
	'use strict'

	angular
		.module('ext.common.anyOtherClick')
		.directive('anyOtherClick', anyOtherClick);

	anyOtherClick.$inject = ["$parse", 'anyOtherClickFactory'];

	function anyOtherClick($parse, anyOtherClickFactory) {
		var directiveName = "anyOtherClick";
		var anyOtherClickDirective = {
			restrict: 'A',
			link: anyOtherClickLink
		};

		return anyOtherClickDirective;

		function anyOtherClickLink(scope, element, attr, controller) {
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
		};
	};
} ());