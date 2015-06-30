angular.module('gridTaskApp')
	.directive('detailsTemplate', ['templatesPath', function (templatesPath) {
		return {
			restrict: 'A',
			compile: function (element, attrs) {
				return {
					pre: function (scope, element, attrs) {

						if (scope.row.entity.detailsTemplate) {
							$.get(scope.row.entity.detailsTemplate, function (result) {
								element.append(result);
							});
						}

						element.hide();

						scope.$watch('row.entity.isToggle', function (value) {
							if (value) {
								element.show();

								scope.row.isDetails = true;

								element.css('top', scope.row.elm.height() + 'px');

								if (!scope.row.entity.step) {
									scope.row.entity.step = 0;
								}
								scope.row.entity.step = scope.row.elm.context.scrollHeight;

								scope.renderedRows.forEach(function (value) {
									if (value.$$hashKey != scope.row.$$hashKey) {
										var totalWidth = element.height();

										if (parseInt(value.$$hashKey.replace('object:', '')) > parseInt(scope.row.$$hashKey.replace('object:', ''))) {
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