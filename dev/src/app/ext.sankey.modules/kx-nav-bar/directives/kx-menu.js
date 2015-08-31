(function () {
	'use strict'

	angular
		.module('ext.sankey.navbar')
		.directive('kxMenu', kxMenu);

	kxMenu.$inject = [];

	function kxMenu() {
		var directive = {
			restrict: 'AE',
			link: link
		};

		return directive;

		function link($scope, elem, attrs) {
			var current, listItems, menuItems, selected;
			listItems = null;
			current = null;
			selected = null;
			menuItems = null;

			$scope.session = { user: { id: 1 } };

			return $scope.$watch('session.user.id', function (userId) {
				var click, close, init, mouseenter, mouseleave, navItem, _ref;
				if (userId && ((_ref = $scope.navigationTree) != null ? _ref.length : void 0) > 0) {
					listItems = elem.children('ul').children('li');
					if (sessionStorage.selectedNav) {
						navItem = JSON.parse(sessionStorage.selectedNav);
						selected = listItems.eq(1);
						selected.addClass('kx-menu-selected');
					}
					init = function () {
						listItems.mouseenter(mouseenter);
						return listItems.mouseleave(mouseleave);
					};
					mouseenter = function (event) {
						current = listItems.filter(this);
						current.addClass('kx-menu-open');
						menuItems = current.children('.kx-submenu').find('a');
						return menuItems.click(click);
					};
					mouseleave = function (event) {
						if (current) {
							return close();
						}
					};
					click = function (event) {
						if (selected) {
							selected.removeClass('kx-menu-selected');
						}
						selected = current;
						selected.addClass('kx-menu-selected');
						navItem = {
							index: _.indexOf(listItems, selected[0])
						};
						sessionStorage.selectedNav = JSON.stringify(navItem);
						return close();
					};
					close = function () {
						current.removeClass('kx-menu-open');
						current = null;
						menuItems.off('click');
						return menuItems = null;
					};
					return init();
				}
			});
		}
	}
} ());