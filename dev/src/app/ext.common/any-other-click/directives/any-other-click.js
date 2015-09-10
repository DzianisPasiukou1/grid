/**
 * @namespace directives
 * @memberOf anyOtherClick
 */
(function () {
	'use strict';
	
	/**
     * @ngdoc directive
     * @name anyOtherClick
     * @restrict A
     * @description
	 * @param {function} anyOtherClick
     * This is directive for handle function on event when click on other element
     */
	angular
		.module('ext.common.anyOtherClick')
		.directive('anyOtherClick', anyOtherClick);

	anyOtherClick.$inject = ['$parse', 'anyOtherClickFactory'];

	/**
	 * @memberOf anyOtherClick.directives
	 * @desc Directive for handle event by click on another element
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
		 * @memberOf anyOtherClick.directives
		 * @desc Link function for directive
		 * @method anyOtherClickLink
		 * @param {Object} scope
		 * @param {element} element
		 * @param {attr} element  attributes of element
		 * @param {controller} controller
		 */
		function anyOtherClickLink(scope, element, attr, controller) {
			var anyOtherClickFunction, documentClickHandler;

			anyOtherClickFunction = $parse(attr[directiveName]);
			
			/**
			 * @memberOf anyOtherClick.directives
			 * @desc Document click handler
			 * @param {Object} event
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