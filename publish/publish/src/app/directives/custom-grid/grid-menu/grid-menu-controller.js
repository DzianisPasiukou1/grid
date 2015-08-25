(function () {
	'use strict'

	angular
		.module('gridTaskApp')
		.controller('gridMenuCtrl', gridMenuCtrl);

	gridMenuCtrl.$inject = ['menuUtils'];

	function gridMenuCtrl(menuUtils) {
		var self = this;

		self.menu = menuUtils;
		self.menu.register(self.columns, self.options);
	};
} ());
