(function () {
	'use strict'

	angular
		.module('gridTaskApp')
		.controller('gridMenuCtrl', gridMenuCtrl);

	gridMenuCtrl.$inject = ['$scope', '$window', 'menuUtils'];

	function gridMenuCtrl($scope, $window, menuUtils) {
		var self = this;

		self.menu = menuUtils;
		self.menu.register($scope.columns, $scope.options.menu);
	};
} ());
