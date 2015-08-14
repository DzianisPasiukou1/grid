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
				var units = "Widgets";

				var margin = { top: 0, right: 10, bottom: 10, left: 10 },
					width = 1500 - margin.left - margin.right,
					height = 740 - margin.top - margin.bottom;


				var formatNumber = d3.format(",.0f"),
					format = function (d) { return formatNumber(d) + " " + units; },
					color = d3.scale.category20();

				//if (scope.data) {
				//	init(scope.data);
				//}

				function init(graph) {
					element.find('#chart').html('');

					var svg = d3.select("#chart").append("svg")
						.attr("width", width + margin.left + margin.right)
						.attr("height", height + margin.top + margin.bottom)
					  .append("g")
						.attr("transform",
							  "translate(" + margin.left + "," + margin.top + ")");

					var sankey = d3.sankey()
						.nodeWidth(25)
						.nodePadding(35)
						.size([width, height]);

					var path = sankey.link();

					var nodeMap = {};
					graph.nodes.forEach(function (x) { nodeMap[x.name] = x; });
					graph.links = graph.links.map(function (x) {
						return {
							source: nodeMap[x.source],
							target: nodeMap[x.target],
							value: x.value
						};
					});

					sankey
						.nodes(graph.nodes)
						.links(graph.links)
						.layout(32);

					var link = svg.append("g").selectAll(".link")
						.data(graph.links)
					  .enter().append("path")
						.attr("class", "link")
						.attr("d", path)
						.style("stroke-width", function (d) { return Math.max(1, d.dy); })
						.style("stroke", function (d) {
							if (d.source.color) {
								return d.source.color;
							}
							else {
								return d.source.color = color(d.source.name.replace(/ .*/, ""));
							}
						})


					//link.append("title")
					//	  .text(function (d) {
					//	  	return d.source.name + " → " +
					//				d.target.name + "\n" + format(d.value);
					//	  });

					var node = svg.append("g").selectAll(".node")
						.data(graph.nodes)
					  .enter().append("g")
						.attr("class", "node")
						.attr("transform", function (d) {
							return "translate(" + d.x + "," + d.y + ")";
						})
					  .call(d3.behavior.drag()
						.origin(function (d) { return d; })
						.on("dragstart", function () {
							this.parentNode.appendChild(this);
						})
						.on("drag", dragmove));

					node.append("rect")
						.attr("height", function (d) { return d.dy; })
						.attr("width", sankey.nodeWidth())
						.style("fill", function (d) {
							if (d.color) {
								return d.color = d.color;
							}
							else {
								return d.color = color(d.name.replace(/ .*/, ""));
							}
						})
						.style("stroke", function (d) {
							return d3.rgb(d.color).darker(2);
						})
						.on("mouseover", mouseover)
						.on("mouseout", mouseout);


					node.append("text")
						.attr("x", -6)
						.attr("y", function (d) { return d.dy / 2; })
						.attr("dy", ".35em")
						.attr("text-anchor", "end")
						.attr("transform", null)
						.text(function (d) { return d.name; })
					  .filter(function (d) { return d.x < width / 2; })
						.attr("x", 6 + sankey.nodeWidth())
						.attr("text-anchor", "start");

					node.append("text")
						.attr("x", 20)
						.attr("y", function (d) { return d.dy / 2; })
						.attr("dy", ".35em")
						.attr("text-anchor", "end")
						.attr("transform", null)
						.text(function (d) { return d.val; })
					  .filter(function (d) { return d.x < width / 2; })
						.attr("x", -20 + sankey.nodeWidth())
						.attr("text-anchor", "start");

					function dragmove(d) {
						d3.select(this).attr("transform",
							"translate(" + (
								   d.x = Math.max(0, Math.min(width - d.dx, d3.event.x))
								) + "," + (
									   d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))
								) + ")");
						sankey.relayout();
						link.attr("d", path);
					};

					function mouseover(d) {
						scope.mouseOverInit(d);

						$('mouse-over').remove();

						scope.parentTop = $('#chart').offset().top;

						element.append("<mouse-over type='type' parent-top='parentTop' value='value'></mouse-over>");
						$compile($('mouse-over'))(scope);
					}

					function mouseout(d) {
						$('mouse-over').remove();
					}
				}

				scope.$watch('data', function (graph) {
					if (graph) {
						init(graph);
					}
				});
			}
		}
	}]);