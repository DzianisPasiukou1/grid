(function () {
	'use strict'

	angular
		.module('ext.common.center')
		.run(center);

	center.$inject = [];

	function center() {
		angular.element.fn.center = function () {
			this.css("position", "absolute");
			this.css("top", Math.max(0, ((angular.element(this.parent()).height() - angular.element(this).outerHeight()) / 2) +
				angular.element(this.parent()).scrollTop()) + "px");
			this.css("left", Math.max(0, ((angular.element(this.parent()).width() - angular.element(this).outerWidth()) / 2) +
				angular.element(this.parent()).scrollLeft()) + "px");
			this.css("z-index", 10000);
			return this;
		};
	};
} ());