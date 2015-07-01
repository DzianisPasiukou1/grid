angular.module('gridTaskApp')
	.controller('customGridCtrl', ['$scope', 'templatesPath', function ($scope, templatesPath) {
		
		function plugin() {
			//if ($scope.exportTo.label == 'Excel') {
			//	$scope.options.plugins.push(new ngGridCsvExportPlugin());
			//}
		}

		plugin();
	}]);