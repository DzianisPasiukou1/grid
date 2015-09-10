(function () {
	'use strict';
	
	/**
     * @ngdoc directive
     * @name global.directive:nameOfDirective
     * @scope
     * @restrict E
     *
     * @description
     * A description of the directive
     *
     * @param {object}  field   A field object
     *
     */
	angular
		.module('ext.common.anyOtherClick')
		.directive('anyOtherClick', anyOtherClick);

	anyOtherClick.$inject = ['$parse', 'anyOtherClickFactory'];

	/**
	 * Directive for handle event by click on another element
	 * @method anyOtherClick
	 * @param {Object}  $parse Angular parse service
	 * @param {anyOtherClickFactory}  anyOtherClickFactory Any other click factory
	 * @return anyOtherClickDirective
	 */
	function anyOtherClick($parse, anyOtherClickFactory) {
		var directiveName = 'anyOtherClick';
		var anyOtherClickDirective = {
			restrict: 'A',
			link: anyOtherClickLink
		};

		return anyOtherClickDirective;

		/**
		 * Link function for directive
		 * @method anyOtherClickLink
		 * @param {scope} scope
		 * @param {element} element
		 * @param {attr} element element attributes
		 * @param {controller} controller
		 */
		function anyOtherClickLink(scope, element, attr, controller) {
			var anyOtherClickFunction, documentClickHandler;

			anyOtherClickFunction = $parse(attr[directiveName]);
			
			/**
			 * Document click handler
			 * @param {event} event
			 */
			documentClickHandler = function (event) {
				var eventOutsideTarget = (element[0] !== event.target) && (0 === element.find(event.target).length);
				if (eventOutsideTarget) {
					scope.$apply(function () {
						anyOtherClickFunction(scope, {});
					});
				}
			};

			anyOtherClickFactory._register(documentClickHandler);

			scope.$on('$destroy', function () {
				anyOtherClickFactory._destroy(documentClickHandler);
			});
		}
	}
} ());