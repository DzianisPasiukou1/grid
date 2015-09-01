(function () {
	'use strict'

	angular
		.module('ext.common.counter')
		.factory('counterFactory', counterFactory);

	counterFactory.$inject = [];

	function counterFactory() {
		var factory = {};

		factory.getCounter = getCounter;

		var Counter = (function () {
			function Counter(card) {
				this.card = card;
			}

			Counter.prototype.calculate = function (startDate, endDate) {
				var countDays = endDate.getDay() - startDate.getDay();

				var count = Math.floor((Math.random() * 100000) + 1);

				for (var i = 0; i < this.card.graphs.length; i++) {
					var height = Math.floor((Math.random() * 60) + 1);

					this.card.graphs[i].style['height'] = height + 'px';
				}

				return count * countDays;
			}


			return Counter;
		})();

		return factory;

		function getCounter(card) {
			return new Counter(card);
		};
	};
} ());