angular.module('gridTaskApp')
	.directive('coreDiagram', ['templatesPath', '$compile', function (templatesPath, $compile) {
		return {
			restrict: 'EA',
			templateUrl: templatesPath + 'directive-templates/core-diagram.html',
			controller: 'coreDiagramCtrl',
			scope: {
				opt: '=coreDiagram',
				data: '=sankeyData'
			},
			link: function (scope, element, attrs) {
				scope.$watch('data', function (graph) {
					if (graph) {
						scope.chart.clearHtml(element.find('#chart'));
						scope.chart.refreshData(graph);
						scope.chart.fullRenderSankey();
					}
				});

				scope.$on('mouseover', function (event, data) {
					scope.mouseOverInit(data);

					angular.element('mouse-over').remove();
					scope.parentTop = element.offset().top;
					element.append("<mouse-over type='type' parent-top='parentTop' value='value'></mouse-over>");

					$compile(angular.element('mouse-over'))(scope);
				})

				scope.$on('mouseout', function () {
					angular.element('mouse-over').remove();
				})

				scope.$on('drag', function (event, d, elm) {
					d3.select(elm).attr("transform",
							"translate(" + (
								   d.x = Math.max(0, Math.min(scope.chart.width - d.dx, d3.event.x))
								) + "," + (
									   d.y = Math.max(0, Math.min(scope.chart.height - d.dy, d3.event.y))
								) + ")");

					scope.chart.sankey.relayout();
					scope.chart.link.attr("d", scope.chart.path);
				})

				scope.$on("$destroy", function () {
					scope.chart.destroy();
				})
			}
		}
	}]);