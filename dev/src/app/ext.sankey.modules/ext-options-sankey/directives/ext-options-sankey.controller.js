(function () {
	'use strict'

	angular
		.module('ext.sankey.optionsSankey')
		.controller('ExtOptionsSankeyController', ExtOptionsSankeyController);

	ExtOptionsSankeyController.$inject = ['$scope'];

	function ExtOptionsSankeyController($scope) {
		$scope.$watch('options.searchValue', searchValueChanged);

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