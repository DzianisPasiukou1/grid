(function () {
	'use strict';

	angular
		.module('ext.common.counter')
		.factory('counterFactory', counterFactory);

	counterFactory.$inject = [];

	/**
	 * Description
	 * @method counterFactory
	 * @return factory
	 */
	function counterFactory() {
		var factory = {};

		factory.getCounter = getCounter;

		var Counter = (function () {
			/**
			 * Description
			 * @method Counter
			 * @param {} card
			 * @return 
			 */
			function Counter(card) {
				this.card = card;
			}

			/**
			 * Description
			 * @method calculate
			 * @param {} startDate
			 * @param {} endDate
			 * @return BinaryExpression
			 */
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

		/**
		 * Description
		 * @method getCounter
		 * @param {} card
		 * @return NewExpression
		 */
		function getCounter(card) {
			return new Counter(card);
		};
	};
} ());