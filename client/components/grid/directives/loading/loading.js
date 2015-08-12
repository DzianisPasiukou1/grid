﻿angular.module('gridExpressApp')
	.directive('loading', ['templatesPath', 'LOADING', function (templatesPath, LOADING) {
		return {
			restrict: 'EA',
			scope: {
				parent: '='
			},
			templateUrl: templatesPath + 'directive-templates/loading.html',
			controller: 'loadingCtrl',
			controllerAs: 'ctrl',
			link: function (scope, element, attrs, ctrl) {
				ctrl.resize();

				$(window).resize(function () {
					ctrl.resize();
				});
			}
		}
	}]);