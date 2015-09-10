(function () {
	'use strict';

	angular
		.module('ext.grid.filter')
		.directive('extFilterList', extFilterList);

	extFilterList.$inject = ['extFilterTemplatesPath'];

	/**
	 * Description
	 * @method extFilterList
	 * @param {} templatesPath
	 * @return directive
	 */
	function extFilterList(templatesPath) {
		var directive = {
			restrict: 'EA',
			// scope: {},
			templateUrl: templatesPath + 'ext-filter-list.html',
			controller: 'ExtFilterListController',
			controllerAs: 'vm',
			bindToController: false,
			require: ['^extFilter'],
			link: link
		};

		return directive;

		/**
		 * Description
		 * @method link
		 * @param {} scope
		 * @param {} element
		 * @param {} attrs
		 * @param {} req
		 * @return 
		 */
		function link(scope, element, attrs, req) {
		};
	};
} ());