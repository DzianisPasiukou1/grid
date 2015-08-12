angular.module('gridExpressApp')
	.controller('coreDiagramCtrl', ['$scope', function ($scope) {
		$scope.mouseOverInit = function (d) {
			$scope.type = d.mouseover.type;
			$scope.value = { header: d.mouseover.header, data: d.mouseover.data };
		};
	}]);