angular.module('gridTaskApp')
	.service('gridWithDetailsTemplateService', ['DetailsTemplateData', function (DetailsTemplateData) {
		this.get = function (callback) {
			var data = DetailsTemplateData.get();

			callback(data);
		}
	}])
	.factory('DetailsTemplateData', ['constantOfData', function (constantOfData) {

		var data = function () {
			var array = [];

			for (var i = 0; i < constantOfData.count; i++) {

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
			get: function () {
				return data;
			}
		}
	}]);