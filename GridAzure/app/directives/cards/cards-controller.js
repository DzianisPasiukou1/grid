angular.module('gridTaskApp')
	.controller('cardsCtrl', ['$scope', 'cardsFactory', function ($scope, cardsFactory) {
		cardsFactory.register($scope.cardsOptions.cards,
			$scope.contentOptions.datepickerOptions.startDate,
			$scope.contentOptions.datepickerOptions.endDate,
			$scope.cardsOptions.margin,
			$scope.contentOptions);

		angular.extend($scope, cardsFactory.getInstance());

		$scope.refresh = function (cards) {
			cardsFactory.refresh(cards);
			angular.extend($scope, cardsFactory.getInstance());
		}

		$scope.enableDebugging = function (isDebug) {
			cardsFactory.enableDebugging(isDebug);
		}

		$scope.flipAll = function () {
			cardsFactory.flipAll();
		}

		$scope.clear = function () {
			cardsFactory.clear();
		}
	}]);