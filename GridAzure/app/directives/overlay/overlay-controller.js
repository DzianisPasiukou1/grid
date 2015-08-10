angular.module('gridTaskApp')
	.controller('overlayCtrl', ['$scope', '$element', 'OVERLAY', function ($scope, $element, OVERLAY) {
		if ($scope.selectors === undefined) {
			$scope.selectors = {};
		}

		if ($scope.selectors.overlaySelector === undefined) {
			$scope.selectors.overlaySelector = OVERLAY.overlaySelector;
		}

		if ($scope.selectors.heighterSelector === undefined) {
			$scope.selectors.heighterSelector = OVERLAY.heighterSelector;
		}

		if ($scope.selectors.alignTopSelector === undefined) {
			$scope.selectors.alignTopSelector = OVERLAY.alignTopSelector;
		}

		if ($scope.toggleMinWidth === undefined) {
			$scope.toggleMinWidth = OVERLAY.toggleMinWidth;
		}

		$scope.style = {
			left: getWindowWidth() - $scope.toggleMinWidth + 'px',
			transition: 'none',
			overflow: 'hidden'
		};

		$scope.setToggle = function () {
			var size = 10;
			var min = 300;

			if ($(window).height() - $($scope.selectors.heighterSelector).offset().top - size > min) {
				$element.css({
					'min-height': ($(window).height() - $($scope.selectors.heighterSelector).offset().top - size) + 'px',
					'top': $($scope.selectors.heighterSelector).offset().top + 'px'
				});
			}
			else {
				$element.css({
					'min-height': $(window).height() - $($scope.selectors.alignTopSelector).offset().top - 8 + 'px',
					'top': $($scope.selectors.alignTopSelector).offset().top + 'px'
				});
			}
		}
	}]);