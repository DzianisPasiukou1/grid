﻿angular.module('gridTaskApp')
	.directive('customUiGrid', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'E',
			scope: {
				data: '=gridData',
				options: '=gridOptions'
			},
			controller: 'customUiGridCtrl',
			templateUrl: templatesPath + 'custom-ui-grid.html',
			link: function (scope, element, attrs) {
			}
		}
	}]);