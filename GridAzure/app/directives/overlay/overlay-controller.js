angular.module('gridTaskApp')
	.controller('overlayCtrl', ['$scope', 'OVERLAY', '$timeout', '$element', function ($scope, OVERLAY, $timeout, $element) {
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
			transition: '',
			overflow: 'hidden'
		};

		$scope.transcludeStyle = {
		}

		$scope.setToggle = function (isResize) {
			$timeout(function () {
				if ($scope.state) {
					if (getWindowWidth() + 650 > 1750) {
						$scope.style.left = '650px';
					}
					else {
						$scope.style.left = 0;
					}

					$scope.transcludeStyle.width = angular.element('body').prop('scrollWidth') - $scope.style.left.toString().replace('px', '') - $scope.toggleMinWidth + 'px';
				}
				else {
					$scope.style.left = angular.element('body').prop('scrollWidth') - $scope.toggleMinWidth + 'px';

					$scope.style.overflow = 'hidden';

					if ($scope.state === undefined || isResize) {
						$scope.style.transition = 'none';
					}
				}

				if ($scope.state !== undefined && !isResize) {
					$scope.style.transition = '';
				}

				var size = 10;
				var min = 300;

				if (angular.element(window).height() - angular.element($scope.selectors.heighterSelector).offset().top - size > min) {
					$scope.style.minHeight = (angular.element('body').prop('scrollHeight') - angular.element($scope.selectors.heighterSelector).offset().top - size) + 'px';

					$scope.style.top = 0;
				}
				else {
					$scope.style.minHeight = angular.element('body').prop('scrollHeight') - angular.element($scope.selectors.alignTopSelector).offset().top - 8 + 'px';

					if (angular.element($scope.selectors.alignTopSelector).offset().top - $element.offset().top != 0) {
						$scope.style.top = angular.element($scope.selectors.alignTopSelector).offset().top - $element.offset().top + 'px';
					}
				}
			})
		}
	}]);