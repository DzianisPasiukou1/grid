angular.module('gridTaskApp')
	.directive('coreDiagram', ['templatesPath', '$compile', function (templatesPath, $compile) {
		return {
			restrict: 'E',
			templateUrl: templatesPath + 'directive-templates/core-diagram.html',
			controller: 'coreDiagramCtrl',
			scope: {},
			link: function (scope, element, attrs) {

				var units = "Widgets";

				var margin = { top: 10, right: 10, bottom: 10, left: 10 },
					width = 1500 - margin.left - margin.right,
					height = 740 - margin.top - margin.bottom;

				var formatNumber = d3.format(",.0f"),    // zero decimal places
					format = function (d) { return formatNumber(d) + " " + units; },
					color = d3.scale.category20();

				// append the svg canvas to the page
				var svg = d3.select("#chart").append("svg")
					.attr("width", width + margin.left + margin.right)
					.attr("height", height + margin.top + margin.bottom)
				  .append("g")
					.attr("transform",
						  "translate(" + margin.left + "," + margin.top + ")");

				// Set the sankey diagram properties
				var sankey = d3.sankey()
					.nodeWidth(25)
					.nodePadding(35)
					.size([width, height]);

				var path = sankey.link();

				// load the data
				d3.json("data/my-graphs.json", function (error, graph) {

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

					// add in the links
					var link = svg.append("g").selectAll(".link")
						.data(graph.links)
					  .enter().append("path")
						.attr("class", "link")
						.attr("d", path)
						.style("stroke-width", function (d) { return Math.max(1, d.dy); })
						.style("stroke", function (d) {
							return d.source.color;
						})


					// add the link titles
					link.append("title")
						  .text(function (d) {
						  	return d.source.name + " → " +
									d.target.name + "\n" + format(d.value);
						  });

					// add in the nodes
					var node = svg.append("g").selectAll(".node")
						.data(graph.nodes)
					  .enter().append("g")
						.attr("class", "node")
						.attr("transform", function (d) {
							//d.x = Math.max(0, d.mx)
							//d.y = Math.max(0, d.my)
							//return "translate(" + d.transform + ")";
							return "translate(" + d.x + "," + d.y + ")";
						})
					  .call(d3.behavior.drag()
						.origin(function (d) { return d; })
						.on("dragstart", function () {
							this.parentNode.appendChild(this);
						})
						.on("drag", dragmove));

					//link.attr("d", path);

					// add the rectangles for the nodes
					node.append("rect")
						.attr("height", function (d) { return d.dy; })
						.attr("width", sankey.nodeWidth())
						.style("fill", function (d) {
							return d.color = d.color;
						})
						.style("stroke", function (d) {
							return d3.rgb(d.color).darker(2);
						})
						.on("mouseover", function (d) {
							scope.type = {};
							scope.value = { header: '', data: [] };

							if (d.name == 'Log in') {
								scope.type.isMedium = true;
								scope.value.header = "Event: Log In";
								scope.value.data = {
									topSegments: ['Moms_2014', 'Affiluent_buyers', 'Auto-Inteders', 'Star Wars', 'Female 25-34'],
									topCampaings: ['C1_Dx_1', 'F2_DX_2', 'Gofundme DX3', 'Test campaign', 'Random Campaign']
								};
							}
							else {
								scope.type.isSimple = true;
								scope.value.header = "Video: ID: 124856";
								scope.value.data = [{ campaignId: '657H836', adId: '904743' }, { campaignId: '657H836', adId: '904743' }]
							}

							$('mouse-over').remove();

							element.append("<mouse-over type='type' value='value'></mouse-over>");
							$compile($('mouse-over'))(scope);
						}).on("mouseout", function (d) {
							$('mouse-over').remove();
						});


					// add in the title for the nodes
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

					// the function for moving the nodes
					function dragmove(d) {
						d3.select(this).attr("transform",
							"translate(" + (
								   d.x = Math.max(0, Math.min(width - d.dx, d3.event.x))
								) + "," + (
									   d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))
								) + ")");
						sankey.relayout();
						link.attr("d", path);
					}
				});
			}
		}
	}]);