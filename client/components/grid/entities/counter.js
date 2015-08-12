﻿var Counter = (function () {
	function Counter(card) {
		this.card = card;
	}

	Counter.prototype.calculate = function (startDate, endDate) {
		var countDays = endDate.getDate() - startDate.getDate();

		var count = Math.floor((Math.random() * 1000) + 1);

		for (var i = 0; i < this.card.graphs.length; i++) {
			var height = Math.floor((Math.random() * 60) + 1);

			this.card.graphs[i].style['height'] = height + 'px';
		}

		return count * countDays;
	}


	return Counter;
})();