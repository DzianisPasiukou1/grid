angular.module('gridExpressApp')
	.service('jsonService', ['$http', '$q', function ($http, $q) {
		this.get = function (url) {
			var deferred = $q.defer()

			$http.get(url).success(function (data) {
				deferred.resolve(data);
			}).error(function () {
				def.reject("Failed to json.");
			});;

			return deferred.promise;
		}
	}]);