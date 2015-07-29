angular.module('gridTaskApp')
	.directive('histogram', ['templatesPath', function (templatesPath) {
		return {
			restrict: "E",
			controller: 'histogramCtrl',
			scope: {},
			templateUrl: templatesPath + 'directive-templates/histogram.html',
			link: function (scope, element, attrs) {
				var data = [
  { name: "1", value: 100000 },
  { name: "2", value: 150000 },
  { name: "3", value: 170000 },
  { name: "4", value: 300000 },
  { name: "5", value: 350000 },
  { name: "6", value: 400000 },
   { name: "7", value: 500000 },
    { name: "8", value: 550000 },
	 { name: "9", value: 600000 },
	  { name: "10", value: 700000 }
				];

				var margin = { top: 50, right: 30, bottom: 60, left: 90 },
					width = 960 - margin.left - margin.right,
					height = 500 - margin.top - margin.bottom;

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

				// Add data
				chart.selectAll(".bar")
					  .data(data)
					  .enter()
					  .append("rect")
					  .attr("class", "bar")
					  .attr("x", function (d) { return x(d.name) + 38; })
					  .attr("y", function (d) { return y(d.value); })
					  .attr("height", function (d) { return height - y(d.value); })
					  .attr("width", x.rangeBand() / 2);

				// y axis and label
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
				// x axis and label
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
				// chart title
				chart.append("text")
				  .text("Potential Rich histogram")
				  .attr("x", 300)
				  .attr("class", "title");
			}
		}
	}]);