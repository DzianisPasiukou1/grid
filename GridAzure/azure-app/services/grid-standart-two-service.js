angular.module('gridTaskApp')
	.service('gridStandartTwoService', ['StandartTwoData', function (StandartTwoData) {
		this.get = function (callback) {
			var data = StandartTwoData.get();

			callback(data);
		}
	}])
	.factory('StandartTwoData', ['DATA', function (DATA) {
		var names = ['Adids Originals Purchase', 'Affiliate User Match', 'Auto Trader App Visit', 'Auto Trader Home Page', 'Click Tracker Example', 'Coming to my home page', 'Contact Seller', 'Customer Registration']
		var types = ['Purchase', 'Default', 'Page View', 'Krux Click Tracker', 'Ad', 'Form', 'Subscription']
		var categories = ['ecommerce', 'User Match', 'Site Visit', 'User Action', 'Form Data'];
		var statues = ['Enabled', 'Disabled'];
		var conversions = ['Yes', 'No'];

		var data = function () {
			var array = [];

			for (var i = 0; i < DATA.count; i++) {
				var name = names[Math.floor(Math.random() * names.length)];
				var type = types[Math.floor(Math.random() * types.length)];
				var category = categories[Math.floor(Math.random() * categories.length)];
				var status = statues[Math.floor(Math.random() * statues.length)];
				var conversion = conversions[Math.floor(Math.random() * conversions.length)];

				var obj = {
					name: name,
					type: type,
					category: category,
					status: status,
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