(function () {
	'use strict';

	angular
		.module('ext.grid.main')
		.controller('ExtGridController', ExtGridController);

	ExtGridController.$inject = ['extGridTemplatesPath', '$compile', '$scope', 'initGridOptionsUtils', '$element'];

	/**
	 * Description
	 * @method ExtGridController
	 * @param {} templatesPath
	 * @param {} $element
	 * @param {} $element
	 * @param {} initGridOptionsUtils
	 * @param {} $element
	 * @return 
	 */
	function ExtGridController(templatesPath, $compile, $scope, initGridOptionsUtils, $element) {
		$scope.options = initGridOptionsUtils.initOptions($scope.options, $scope.data, $scope.contentOptions, $compile, templatesPath);

		$scope.$watch('data', reInit)

		/**
		 * Description
		 * @method reInit
		 * @return 
		 */
		function reInit() {
			initGridOptionsUtils.reInit($scope.data, $scope.options, templatesPath, $compile, $scope.$parent.$parent, $scope.options.reInit);
		};
	};
} ());