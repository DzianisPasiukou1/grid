(function () {
	'use strict';

	angular
		.module('ext.common.json')
		.service('extJsonService', extJsonService);

	extJsonService.$inject = ['$http', '$q'];

	/**
	 * Description
	 * @method extJsonService
	 * @param {} $q
	 * @param {} $q
	 * @return 
	 */
	function extJsonService($http, $q) {
		/**
		 * Description
		 * @method get
		 * @param {} url
		 * @return MemberExpression
		 */
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