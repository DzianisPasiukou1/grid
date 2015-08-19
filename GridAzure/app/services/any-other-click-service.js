angular.module('gridTaskApp')
	.factory('anyOtherClickFactory', ['$document', function ($document) {
		var handlers = [];

		return {
			_register: function (documentClickHandler) {
				$document.on("click", documentClickHandler);
				handlers.push(documentClickHandler);
			},
			_getHandlers: function () {
				return handlers;
			},
			_getCountHandlers: function () {
				return handlers.length;
			},
			_destroy: function (documentClickHandler) {
				$document.off("click", documentClickHandler);
				handlers.splice(documentClickHandler, 1);
			}
		}
	}]);