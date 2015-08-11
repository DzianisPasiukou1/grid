angular.module('gridTaskApp')
	.controller('overlayCtrl', ['$scope', 'OVERLAY', '$timeout', function ($scope, OVERLAY, $timeout) {
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

		$scope.setToggle = function (isResize) {
			$timeout(function () {
				if ($scope.state) {
					if (getWindowWidth() + 650 > 1750) {
						$scope.style = {
							'left': '650px'
						}
					}
					else {
						$scope.style = {
							'left': '0'
						}
					}
				}
				else {
					$scope.style = {
						'left': getWindowWidth() - $scope.toggleMinWidth + 'px',
						'overflow': 'hidden'
					}

					if ($scope.state === undefined || isResize) {
						$scope.style.transition = 'none';
					}
				}

				var size = 10;
				var min = 300;

				if ($(window).height() - $($scope.selectors.heighterSelector).offset().top - size > min) {
					$scope.style.minHeight = ($(window).height() - $($scope.selectors.heighterSelector).offset().top - size) + 'px';
					$scope.style.top = $($scope.selectors.heighterSelector).offset().top + 'px';
				}
				else {
					$scope.style.minHeight = $(window).height() - $($scope.selectors.alignTopSelector).offset().top - 8 + 'px';
					$scope.style.top = $($scope.selectors.alignTopSelector).offset().top + 'px';
				}
			})
		}
	}]);