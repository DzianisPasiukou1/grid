angular.module('gridTaskApp')
	.controller('loadingCtrl', ['$scope', 'LOADING', function ($scope, LOADING) {
		var self = this;

		if (self.parent === undefined) {
			self.parent = LOADING.parentSelector;
		}

		self.resize = function () {
			self.element = {
				height: $(self.parent).height() + 'px',
				width: $(self.parent).width() + 'px'
			};

			self.disabled = {
				height: $(self.parent).height() + 'px',
				width: $(self.parent).width() + 'px',
				top: 0
			};
		}
	}]);