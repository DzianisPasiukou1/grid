angular.module('gridTaskApp')
	.controller('loadingCtrl', ['$scope', 'LOADING', function ($scope, LOADING) {
		var self = this;

		if (self.parent === undefined) {
			self.parent = LOADING.parentSelector;
		}

		self.resize = function () {
			self.element = {
				height: angular.element(self.parent).height() + 'px',
				width: angular.element(self.parent).width() + 'px'
			};

			self.disabled = {
				height: angular.element(self.parent).height() + 'px',
				width: angular.element(self.parent).width() + 'px',
				top: 0
			};
		}
	}]);