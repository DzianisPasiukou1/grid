angular.module('gridTaskApp')
	.service('jsonService', ['$http', '$q', function ($http, $q) {
		this.get = function (url) {
			var deferred = $q.defer()

			$http.get(url).success(function (data) {
				deferred.resolve(data);
			}).error(function () {
				deferred.reject("Failed to json.");
			});;

			return deferred.promise;
		}
	}]);