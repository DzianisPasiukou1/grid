angular.module('gridTaskApp')
	.service('gridService', ['Data', function (Data) {
		this.get = function (callback) {
			var data = Data.get();

			callback(data);
		}
	}])
	.factory('Data', ['constantOfData', function (constantOfData) {
		var data = function () {
			var array = [];

			for (var i = 0; i < constantOfData.count; i++) {
				var day = Math.floor((Math.random() * 1000) + 1);
				var value = Math.floor((Math.random() * 100000) + 1);
				var trend = Math.floor((Math.random() * 100) + 1);

				var obj = {
					date: new Date(constantOfData.startDate.setDate(constantOfData.startDate.getDate() + day)).toDateString(),
					name: 'Changing the icon font location\nBootstrap assumes icon font files will be located in the ../fonts/ directory, relative to the compiled CSS files. Moving or renaming those font files means updating the CSS in one of three ways:\nChange the @icon-font-path and/or @icon-font-name variables in the source Less files.\nUtilize the relative URLs option provided by the Less compiler.\nChange the url() paths in the compiled CSS.\nUse whatever option best suits your specific development setup.',
					value: value,
					trend: trend
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