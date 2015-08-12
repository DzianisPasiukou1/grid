angular.module('gridExpressApp')
	.service('gridUploadService', ['UploadData', '$http', function (UploadData, $http) {
		this.get = function (callback, url) {
			var data = UploadData.get();

			callback(data);
		}
	}])
	.factory('UploadData', ['DATA', function (DATA) {
		var types = ['Purchase', 'Default', 'Page View', 'Krux Click Tracker', 'Ad', 'Form', 'Subscription']
		var categories = ['ecommerce', 'User Match', 'Site Visit', 'User Action', 'Form Data'];
		var conversions = ['Yes', 'No'];

		var data = function () {
			var array = [];

			for (var i = 0; i < DATA.count; i++) {
				var day = Math.floor((Math.random() * 1000) + 1);
				var value = Math.floor((Math.random() * 100000) + 1);
				var trend = Math.floor((Math.random() * 100) + 1);
				var type = types[Math.floor(Math.random() * 7)];
				var category = categories[Math.floor(Math.random() * categories.length)];
				var conversion = conversions[Math.floor(Math.random() * conversions.length)];

				var obj = {
					date: new Date(DATA.startDate.setDate(DATA.startDate.getDate() + day)).toDateString(),
					name: 'Changing the icon font location\nBootstrap assumes icon font files will be located in the ../fonts/ directory, relative to the compiled CSS files. Moving or renaming those font files means updating the CSS in one of three ways:\nChange the @icon-font-path and/or @icon-font-name variables in the source Less files.\nUtilize the relative URLs option provided by the Less compiler.\nChange the url() paths in the compiled CSS.\nUse whatever option best suits your specific development setup.',
					type: type,
					value: value,
					trend: trend,
					status: 'Enabled',
					category: category,
					conversion: conversion
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