angular.module('gridTaskApp')
	.directive('detailsTemplate', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'A',
			templateUrl: templatesPath + 'details.html',
			link: function (scope, element, attrs) {

			},
			compile: function (element, attrs) {
				return {
					pre: function (scope, element, attrs) {
						element.hide();

						scope.$watch('row.isToggle', function (value) {
							if (value) {
								element.show();

								scope.row.isDetails = true;

								element.css('top', scope.row.elm.height() + 'px');
								scope.renderedRows.forEach(function (value) {
									if (value.$$hashKey != scope.row.$$hashKey) {
										var totalWidth = element.height();

										if (value.$$hashKey.replace('object:', '') > scope.row.$$hashKey.replace('object:', '')) {
											value.elm.css('top', value.elm.position().top + totalWidth + 'px');
										}
									}
								});


							}
							else {
								element.hide();
							}
						})
					}
				}
			}
		}
	}]);