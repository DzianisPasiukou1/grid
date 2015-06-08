angular.module('gridTaskApp')
	.controller('customGridCtrl', ["data", function (data) {
		$scope.data = [];

		function generator() {
			var obj = {};
			var date = data.start;

			for (var i = 0; i < data.count; i++) {
				var day = Math.floor((Math.random() * 10000) + 1);

				date.setDate(date.getDate() + day);
				obj.date = date;
				obj.name = "Some text";
				obj.value = 10122.97;
				obj.trend = 7;

				$scope.data.push(obj);
			}
		}

		generator();
	}]);