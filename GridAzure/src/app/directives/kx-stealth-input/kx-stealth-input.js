angular.module('gridTaskApp').directive('kxStealthInput', function () {
	return {
		restrict: "CAE",
		controller: function ($scope) { },
		link: function ($scope, elem, attrs) {
			var focus, hover, update;
			focus = false;
			hover = false;
			update = function () {
				return elem.toggleClass('stealth-mode', !(focus || hover));
			};
			elem.focus(function () {
				focus = true;
				return update();
			});
			elem.blur(function () {
				focus = false;
				return update();
			});
			elem.mouseover(function () {
				hover = true;
				return update();
			});
			elem.mouseout(function () {
				hover = false;
				return update();
			});
			return update();
		}
	};
});