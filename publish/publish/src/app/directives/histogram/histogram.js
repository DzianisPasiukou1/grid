angular.module('gridTaskApp')
	.directive('histogram', ['templatesPath', '$compile', function (templatesPath, $compile) {
		return {
			restrict: "EA",
			controller: 'histogramCtrl',
			scope: {
				data: '=histogramData'
			},
			require: '?histogramData',
			templateUrl: templatesPath + 'directive-templates/histogram.html',
			link: function (scope, element, attrs) {
				scope.$watch('data', function (data) {
					if (data) {
						element.find('.chart').remove();
						element.find('.histogram').append('<svg class="chart"></svg>');

						var margin = { top: 50, right: 30, bottom: 60, left: 90 },
					width = 700 - margin.left - margin.right,
					height = 340 - margin.top - margin.bottom;

						var x = d3.scale.ordinal()
							.domain(data.map(function (d) { return d.name; }))
							.rangeRoundBands([0, width], .1);

						var y = d3.scale.linear()
							.domain([0, 900000])
							.range([height, 0]);

						var xAxis = d3.svg.axis()
							.scale(x)
							.orient("bottom");

						var yAxis = d3.svg.axis()
							.scale(y)
							.orient("left");

						var chart = d3.select(".chart")
							.attr("width", width + margin.left + margin.right)
							.attr("height", height + margin.top + margin.bottom)
						  .append("g")
							.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

						chart.selectAll(".bar")
							  .data(data)
							  .enter()
							  .append("rect")
							  .attr("class", "bar")
							  .attr("x", function (d) { return x(d.name) + 38; })
							  .attr("y", function (d) { return y(d.value); })
							  .attr("height", function (d) { return height - y(d.value); })
							  .attr("width", x.rangeBand() / 2)
							.on('click', function (d) {
								scope.select(d);
							});

						chart.append("g")
							.attr("class", "y axis")
							.call(yAxis)
						  .append("text")
							.attr("transform", "rotate(-90)")
							.attr("x", -height / 2)
							.attr("y", -10 - margin.bottom)
							.attr("dy", ".1em")
							.attr("dx", "40px")
							.style("text-anchor", "end")
							.text("Population");
						chart.append("g")
							.attr("class", "x axis")
							.attr("transform", "translate(0," + height + ")")
							.call(xAxis)
						  .append("text")
							.attr("x", width / 2)
							.attr("y", margin.bottom - 25)
							.attr("dy", ".71em")
							.style("text-anchor", "end")
							.text("Touchpoint #");
						chart.append("text")
						  .text("Potential Rich histogram")
						  .attr("x", 200)
						  .attr("class", "title");

					}
				})
			}
		}
	}]);