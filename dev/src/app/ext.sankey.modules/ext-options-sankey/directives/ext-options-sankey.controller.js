(function () {
	'use strict';

	angular
		.module('ext.sankey.optionsSankey')
		.controller('ExtOptionsSankeyController', ExtOptionsSankeyController);

	ExtOptionsSankeyController.$inject = ['$scope'];

	/**
	 * Description
	 * @method ExtOptionsSankeyController
	 * @param {} $scope
	 * @return 
	 */
	function ExtOptionsSankeyController($scope) {
		$scope.$watch('options.searchValue', searchValueChanged);

		/**
		 * Description
		 * @method searchValueChanged
		 * @param {} value
		 * @return 
		 */
		function searchValueChanged(value) {
			if (!$scope.options.searchOptions) {
				return;
			}

			if ($scope.options.searchOptions.selected.label == 'everywhere') {
				$scope.options.search(value);
			} else {
				$scope.options.search($scope.options.searchOptions.selected.label + ':' + value);
			}
		};
	};
} ());