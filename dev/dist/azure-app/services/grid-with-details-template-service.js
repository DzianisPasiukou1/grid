angular.module('azureApp')
	.service('gridWithDetailsTemplateService', ['DetailsTemplateData', function (DetailsTemplateData) {
		/**
		 * Description
		 * @method get
		 * @param {} callback
		 * @return 
		 */
		this.get = function (callback) {
			var data = DetailsTemplateData.get();

			callback(data);
		}
	}])
	.factory('DetailsTemplateData', ['DATA', function (DATA) {

		var data = function () {
			var array = [];

			for (var i = 0; i < DATA.count; i++) {

				var obj = {
					priority: 'None',
					name: 'n1',
					ID: i,
					Type: 'basic',
					category: '',
					subCategory: '',
					devices: 0,
					persistent: 0,
					people: 0,
					refreshFrequency: 'daily',
					lastComputed: 'June 19, 2015',
					dateCreated: 'June 19, 2015',
					interchange: ''
				};

				array.push(obj);
			}

			return array;
		}();

		return {
			/**
			 * Description
			 * @method get
			 * @return data
			 */
			get: function () {
				return data;
			}
		}
	}]);