(function () {
	'use strict'

	angular
		.module('ext.common.json')
		.service('extJsonService', extJsonService);

	extJsonService.$inject = ['$http', '$q'];

	function extJsonService($http, $q) {
		this.get = function (url) {
			var deferred = $q.defer()

			$http.get(url).success(function (data) {
				deferred.resolve(data);
			}).error(function () {
				deferred.reject("Failed to json.");
			});;

			return deferred.promise;
		}
	};
} ());