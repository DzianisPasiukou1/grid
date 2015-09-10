(function () {
	'use strict';

	angular
		.module('ext.sankey.main')
		.directive('extSankey', extSankey);

	extSankey.$inject = ['extSankeyTemplatesPath', '$compile'];

	/**
	 * Description
	 * @method extSankey
	 * @param {} templatesPath
	 * @param {} $compile
	 * @return directive
	 */
	function extSankey(templatesPath, $compile) {
		var directive = {
			restrict: 'EA',
			templateUrl: templatesPath + 'ext-sankey.html',
			controller: 'ExtSankeyController',
			controllerAs: 'vm',
			bindToController: true,
			scope: {
				opt: '=extSankey',
				data: '=sankeyData'
			},
			link: link
		};

		return directive;

		/**
		 * Description
		 * @method link
		 * @param {} scope
		 * @param {} element
		 * @param {} attrs
		 * @param {} vm
		 * @return 
		 */
		function link(scope, element, attrs, vm) {
			if (vm.data) {
				changedData(vm.data);
			}
			
			scope.$watch('vm.data', changedData);
			scope.$on('mouseover', mouseover);
			scope.$on('mouseout', mouseout);
			scope.$on('drag', drag);
			scope.$on("$destroy", destroy);

			/**
			 * Description
			 * @method changedData
			 * @param {} graph
			 * @return 
			 */
			function changedData(graph) {
				if (graph) {
					vm.chart.clearHtml(element.find('#chart'));
					vm.chart.refreshData(graph);
					vm.chart.fullRenderSankey();
				}
			};

			/**
			 * Description
			 * @method mouseover
			 * @param {} event
			 * @param {} data
			 * @return 
			 */
			function mouseover(event, data) {
				vm.mouseOverInit(data);

				angular.element('ext-mouse-over').remove();
				vm.parentTop = element.offset().top;
				element.append("<ext-mouse-over type='vm.type' parent-top='vm.parentTop' value='vm.value'></mouse-over>");

				$compile(angular.element('ext-mouse-over'))(scope);
			};

			/**
			 * Description
			 * @method mouseout
			 * @return 
			 */
			function mouseout() {
				angular.element('ext-mouse-over').remove();
			};

			/**
			 * Description
			 * @method drag
			 * @param {} event
			 * @param {} d
			 * @param {} elm
			 * @return 
			 */
			function drag(event, d, elm) {
				d3.select(elm).attr("transform",
					"translate(" + (
						d.x = Math.max(0, Math.min(vm.chart.width - d.dx, d3.event.x))
						) + "," + (
						d.y = Math.max(0, Math.min(vm.chart.height - d.dy, d3.event.y))
						) + ")");

				vm.chart.sankey.relayout();
				vm.chart.link.attr("d", vm.chart.path);
			};

			/**
			 * Description
			 * @method destroy
			 * @return 
			 */
			function destroy() {
				vm.chart.destroy();
			};
		};
	};
} ());