angular.module('gridTaskApp')
	.directive('numberFormat', [function () {
		return {
			restrict: 'A',
			scope: {
				number: '=numberFormat'
			},
			link: function (scope, element, atrrs) {
				element.html(nFormatter(scope.number, 1));

				scope.$watch('number', function (num) {
					element.html(nFormatter(num, 1));
				})
			}
		}
	}]);

function nFormatter(num, digits) {
	var si = [
	  { value: 1E18, symbol: "E" },
	  { value: 1E15, symbol: "P" },
	  { value: 1E12, symbol: "T" },
	  { value: 1E9, symbol: "G" },
	  { value: 1E6, symbol: "M" },
	  { value: 1E3, symbol: "k" }
	], i;
	for (i = 0; i < si.length; i++) {
		if (num >= si[i].value) {
			return (num / si[i].value).toFixed(digits).replace(/\.?0+$/, "") + si[i].symbol;
		}
	}
	return num;
}