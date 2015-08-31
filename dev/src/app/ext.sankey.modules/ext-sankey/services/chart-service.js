(function () {
	'use strict'

	angular
		.module('ext.sankey.main')
		.factory('chartFactory', chartFactory);

	chartFactory.$inject = ['$rootScope'];

	function chartFactory($rootScope) {
		var Chart = function () {
			function Chart(data, opt) {
				this.units = "Widgets";
				this.margin = { top: 0, right: 10, bottom: 10, left: 10 };
				this.width = 1500 - this.margin.left - this.margin.right;
				this.height = 740 - this.margin.top - this.margin.bottom;
				this.format = function (d) {
					return this.formatNumber(d) + " " + this.units;
				}

				this.formatNumber = d3.format(",.0f");
				this.color = d3.scale.category20();

				this.data = angular.copy(data);
				this.opt = opt;

				this.handlers = [];
			};

			Chart.prototype.clearHtml = function (elm) {
				elm.html('');
			};

			Chart.prototype._transform = function () {
				return "translate(" + this.margin.left + "," + this.margin.top + ")";
			}

			Chart.prototype._renderSvg = function () {
				this.svg = d3.select("#chart").append("svg")
					.attr("width", this.width + this.margin.left + this.margin.right)
					.attr("height", this.height + this.margin.top + this.margin.bottom)
					.append("g")
					.attr("transform", this._transform.bind(this));
			};

			Chart.prototype._renderSankey = function () {
				this.sankey = d3.sankey()
					.nodeWidth(25)
					.nodePadding(35)
					.size([this.width, this.height]);
			};

			Chart.prototype._renderLink = function () {
				this.path = this.sankey.link();

				this.link = this.svg.append("g").selectAll(".link")
					.data(this.data.links)
					.enter().append("path")
					.attr("class", "link")
					.attr("d", this.path)
					.style("stroke-width", function (d) {
						return Math.max(1, d.dy);
					})
					.style("stroke", function (d) {
						if (d.source.color) {
							return d.source.color;
						}
						else {
							return d.source.color = this.color(d.source.name.replace(/ .*/, ""));
						}
					}.bind(this))
			};

			Chart.prototype._renderNode = function () {
				this.node = this.svg.append("g").selectAll(".node")
					.data(this.data.nodes)
					.enter().append("g")
					.attr("class", "node")
					.attr("transform", function (d) {
						return "translate(" + d.x + "," + d.y + ")";
					})
					.call(d3.behavior.drag()
						.origin(function (d) {
							return d;
						})
						.on("dragstart", function () {
							this.parentNode.appendChild(this);
						})
						.on("drag", function (d) {
							$rootScope.$broadcast("drag", d, this);
						}));

				this.handlers.push({
					remove: function () {
						this.svg.selectAll(".node").on("dragstart", null);
						this.svg.selectAll(".node").on("drag", null);
					}.bind(this)
				});

				this.node.append("rect")
					.attr("height", function (d) { return d.dy; })
					.attr("width", this.sankey.nodeWidth())
					.style("fill", function (d) {
						if (d.color) {
							return d.color = d.color;
						}
						else {
							return d.color = this.color(d.name.replace(/ .*/, ""));
						}
					}.bind(this))
					.style("stroke", function (d) {
						return d3.rgb(d.color).darker(2);
					})
					.on("mouseover", this.mouseover.bind(this))
					.on("mouseout", this.mouseout.bind(this));

				this.handlers.push({
					remove: function () {
						this.node.selectAll("rect").on("mouseover", null);
						this.node.selectAll("rect").on("mouseout", null);
					}.bind(this)
				});

				this.node.append("text")
					.attr("x", -6)
					.attr("y", function (d) { return d.dy / 2; })
					.attr("dy", ".35em")
					.attr("text-anchor", "end")
					.attr("transform", null)
					.text(function (d) { return d.name; })
					.filter(function (d) { return d.x < this.width / 2; }.bind(this))
					.attr("x", 6 + this.sankey.nodeWidth())
					.attr("text-anchor", "start");

				this.node.append("text")
					.attr("x", 20)
					.attr("y", function (d) { return d.dy / 2; })
					.attr("dy", ".35em")
					.attr("text-anchor", "end")
					.attr("transform", null)
					.text(function (d) { return d.val; })
					.filter(function (d) { return d.x < this.width / 2; }.bind(this))
					.attr("x", -20 + this.sankey.nodeWidth())
					.attr("text-anchor", "start");
			};

			Chart.prototype._initNodeMap = function () {
				var nodeMap = {};
				this.data.nodes.forEach(function (x) {
					nodeMap[x.name] = x;
				});
				this.data.links = this.data.links.map(function (x) {
					return {
						source: nodeMap[x.source],
						target: nodeMap[x.target],
						value: x.value
					};
				});
			};

			Chart.prototype._initSankey = function () {
				this.sankey
					.nodes(this.data.nodes)
					.links(this.data.links)
					.layout(32);
			};

			Chart.prototype.mouseover = function (d) {
				$rootScope.$broadcast('mouseover', d);
			};

			Chart.prototype.mouseout = function (d) {
				$rootScope.$broadcast('mouseout', d);
			};

			Chart.prototype.fullRenderSankey = function () {
				this._renderSvg();
				this._renderSankey();
				this._initNodeMap();
				this._initSankey();
				this._renderLink();
				this._renderNode();
			};

			Chart.prototype.refreshData = function (data) {
				this.data = angular.copy(data);
			};

			Chart.prototype._removeListeners = function () {
				angular.forEach(this.handlers, function (handler) {
					handler.remove();
				})
			}

			Chart.prototype.destroy = function () {
				this._removeListeners();

				if (this.svg) {
					this.svg.remove();
				}

				this.svg = this.node = this.link = this.path = this.sankey = this.data = null;
			};

			return Chart;
		} ();

		return {
			getChart: function (data, opt) {
				return new Chart(data, opt);
			}
		};
	};
} ());