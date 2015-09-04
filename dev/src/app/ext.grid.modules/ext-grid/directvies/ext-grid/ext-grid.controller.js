(function () {
	'use strict'

	angular
		.module('ext.grid.main')
		.controller('ExtGridController', ExtGridController);

	ExtGridController.$inject = ['extGridTemplatesPath', '$compile', '$scope', 'initGridOptionsUtils', '$element'];

	function ExtGridController(templatesPath, $compile, $scope, initGridOptionsUtils, $element) {
		$scope.options = initGridOptionsUtils.initOptions($scope.options, $scope.data, $scope.contentOptions, $compile, templatesPath);

		$scope.$watch('data', reInit)

		function reInit() {
			initGridOptionsUtils.reInit($scope.data, $scope.options, templatesPath, $compile, $scope.$parent.$parent, $scope.options.reInit);
		};
	};
} ());