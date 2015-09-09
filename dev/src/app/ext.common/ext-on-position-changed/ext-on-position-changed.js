(function () {
	'use strict'

	angular
		.module('ext.common.onPositionChanged')
		.run(onPositionChanged);

	onPositionChanged.$inject = [];

	function onPositionChanged() {
		angular.element.fn.onPositionChanged = function (trigger, millis) {
			if (millis == null) millis = 100;
			var o = angular.element(this[0]);
			if (o.length < 1) return o;

			var lastPos = null;
			var lastOff = null;
			setInterval(function () {
				if (o == null || o.length < 1) return o;
				if (lastPos == null) lastPos = o.position();
				if (lastOff == null) lastOff = o.offset();
				var newPos = o.position();
				var newOff = o.offset();
				if (lastPos.top != newPos.top || lastPos.left != newPos.left) {
					angular.element(this).trigger('onPositionChanged', { lastPos: lastPos, newPos: newPos });
					if (typeof (trigger) == "function") trigger(lastPos, newPos);
					lastPos = o.position();
				}
				if (lastOff.top != newOff.top || lastOff.left != newOff.left) {
					angular.element(this).trigger('onOffsetChanged', { lastOff: lastOff, newOff: newOff });
					if (typeof (trigger) == "function") trigger(lastOff, newOff);
					lastOff = o.offset();
				}
			}, millis);

			return o;
		};
	};
} ());