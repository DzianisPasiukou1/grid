angular.module('gridTaskApp')
	.service('gridServiceThree', ['ThreeData', function (ThreeData) {
		this.get = function (callback) {
			var data = ThreeData.get();

			callback(data);
		}
	}])
	.factory('ThreeData', ['constantOfData', function (constantOfData) {

		var data = function () {
			var array = [];

			for (var i = 0; i < constantOfData.count; i++) {

				var obj = {
					priority: 'None',
					name: 'n1',
					ID: 'po1mke4hq',
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
		};

		return {
			get: function () {
				return data();
			}
		}
	}]);