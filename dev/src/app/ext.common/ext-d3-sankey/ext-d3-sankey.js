(function () {
	'use strict';

	angular
		.module('ext.common.d3Sankey')
		.run(d3Sankey);

	d3Sankey.$inject = [];

	/**
	 * Description
	 * @method d3Sankey
	 * @return 
	 */
	function d3Sankey() {
		/**
		 * Description
		 * @method sankey
		 * @return sankey
		 */
		d3.sankey = function () {
			var sankey = {},
				nodeWidth = 24,
				nodePadding = 8,
				size = [1, 1],
				nodes = [],
				links = [];

			/**
			 * Description
			 * @method nodeWidth
			 * @param {} _
			 * @return sankey
			 */
			sankey.nodeWidth = function (_) {
				if (!arguments.length) return nodeWidth;
				nodeWidth = +_;
				return sankey;
			};

			/**
			 * Description
			 * @method nodePadding
			 * @param {} _
			 * @return sankey
			 */
			sankey.nodePadding = function (_) {
				if (!arguments.length) return nodePadding;
				nodePadding = +_;
				return sankey;
			};

			/**
			 * Description
			 * @method nodes
			 * @param {} _
			 * @return sankey
			 */
			sankey.nodes = function (_) {
				if (!arguments.length) return nodes;
				nodes = _;
				return sankey;
			};

			/**
			 * Description
			 * @method links
			 * @param {} _
			 * @return sankey
			 */
			sankey.links = function (_) {
				if (!arguments.length) return links;
				links = _;
				return sankey;
			};

			/**
			 * Description
			 * @method size
			 * @param {} _
			 * @return sankey
			 */
			sankey.size = function (_) {
				if (!arguments.length) return size;
				size = _;
				return sankey;
			};

			/**
			 * Description
			 * @method layout
			 * @param {} iterations
			 * @return sankey
			 */
			sankey.layout = function (iterations) {
				computeNodeLinks();
				computeNodeValues();
				computeNodeBreadths();
				computeNodeDepths(iterations);
				computeLinkDepths();
				return sankey;
			};

			/**
			 * Description
			 * @method relayout
			 * @return sankey
			 */
			sankey.relayout = function () {
				computeLinkDepths();
				return sankey;
			};

			/**
			 * Description
			 * @method link
			 * @return link
			 */
			sankey.link = function () {
				var curvature = .5;

				/**
				 * Description
				 * @method link
				 * @param {} d
				 * @return BinaryExpression
				 */
				function link(d) {
					var x0 = d.source.x + d.source.dx,
						x1 = d.target.x,
						xi = d3.interpolateNumber(x0, x1),
						x2 = xi(curvature),
						x3 = xi(1 - curvature),
						y0 = d.source.y + d.sy + d.dy / 2,
						y1 = d.target.y + d.ty + d.dy / 2;
					return "M" + x0 + "," + y0
						+ "C" + x2 + "," + y0
						+ " " + x3 + "," + y1
						+ " " + x1 + "," + y1;
				}

				/**
				 * Description
				 * @method curvature
				 * @param {} _
				 * @return link
				 */
				link.curvature = function (_) {
					if (!arguments.length) return curvature;
					curvature = +_;
					return link;
				};

				return link;
			};

			// Populate the sourceLinks and targetLinks for each node.
			// Also, if the source and target are not objects, assume they are indices.
			/**
			 * Description
			 * @method computeNodeLinks
			 * @return 
			 */
			function computeNodeLinks() {
				nodes.forEach(function (node) {
					node.sourceLinks = [];
					node.targetLinks = [];
				});
				links.forEach(function (link) {
					var source = link.source,
						target = link.target;
					if (typeof source === "number") source = link.source = nodes[link.source];
					if (typeof target === "number") target = link.target = nodes[link.target];
					source.sourceLinks.push(link);
					target.targetLinks.push(link);
				});
			}

			// Compute the value (size) of each node by summing the associated links.
			/**
			 * Description
			 * @method computeNodeValues
			 * @return 
			 */
			function computeNodeValues() {
				nodes.forEach(function (node) {
					node.value = Math.max(
						d3.sum(node.sourceLinks, value),
						d3.sum(node.targetLinks, value)
						);
				});
			}

			// Iteratively assign the breadth (x-position) for each node.
			// Nodes are assigned the maximum breadth of incoming neighbors plus one;
			// nodes with no incoming links are assigned breadth zero, while
			// nodes with no outgoing links are assigned the maximum breadth.
			/**
			 * Description
			 * @method computeNodeBreadths
			 * @return 
			 */
			function computeNodeBreadths() {
				var remainingNodes = nodes,
					nextNodes,
					x = 0;

				while (remainingNodes.length) {
					nextNodes = [];
					remainingNodes.forEach(function (node) {
						node.x = x;
						node.dx = nodeWidth;
						node.sourceLinks.forEach(function (link) {
							nextNodes.push(link.target);
						});
					});
					remainingNodes = nextNodes;
					++x;
				}

				//
				moveSinksRight(x);
				scaleNodeBreadths((size[0] - nodeWidth) / (x - 1));
			}

			/**
			 * Description
			 * @method moveSourcesRight
			 * @return 
			 */
			function moveSourcesRight() {
				nodes.forEach(function (node) {
					if (!node.targetLinks.length) {
						node.x = d3.min(node.sourceLinks, function (d) { return d.target.x; }) - 1;
					}
				});
			}

			/**
			 * Description
			 * @method moveSinksRight
			 * @param {} x
			 * @return 
			 */
			function moveSinksRight(x) {
				nodes.forEach(function (node) {
					if (!node.sourceLinks.length) {
						node.x = x - 1;
					}
				});
			}

			/**
			 * Description
			 * @method scaleNodeBreadths
			 * @param {} kx
			 * @return 
			 */
			function scaleNodeBreadths(kx) {
				nodes.forEach(function (node) {
					node.x *= kx;
				});
			}

			/**
			 * Description
			 * @method computeNodeDepths
			 * @param {} iterations
			 * @return 
			 */
			function computeNodeDepths(iterations) {
				var nodesByBreadth = d3.nest()
					.key(function (d) { return d.x; })
					.sortKeys(d3.ascending)
					.entries(nodes)
					.map(function (d) { return d.values; });

				//
				initializeNodeDepth();
				resolveCollisions();
				for (var alpha = 1; iterations > 0; --iterations) {
					relaxRightToLeft(alpha *= .99);
					resolveCollisions();
					relaxLeftToRight(alpha);
					resolveCollisions();
				}

				/**
				 * Description
				 * @method initializeNodeDepth
				 * @return 
				 */
				function initializeNodeDepth() {
					var ky = d3.min(nodesByBreadth, function (nodes) {
						return (size[1] - (nodes.length - 1) * nodePadding) / d3.sum(nodes, value);
					});

					nodesByBreadth.forEach(function (nodes) {
						nodes.forEach(function (node, i) {
							node.y = i;
							node.dy = node.value * ky;
						});
					});

					links.forEach(function (link) {
						link.dy = link.value * ky;
					});
				}

				/**
				 * Description
				 * @method relaxLeftToRight
				 * @param {} alpha
				 * @return 
				 */
				function relaxLeftToRight(alpha) {
					nodesByBreadth.forEach(function (nodes, breadth) {
						nodes.forEach(function (node) {
							if (node.targetLinks.length) {
								var y = d3.sum(node.targetLinks, weightedSource) / d3.sum(node.targetLinks, value);
								node.y += (y - center(node)) * alpha;
							}
						});
					});

					/**
					 * Description
					 * @method weightedSource
					 * @param {} link
					 * @return BinaryExpression
					 */
					function weightedSource(link) {
						return center(link.source) * link.value;
					}
				}

				/**
				 * Description
				 * @method relaxRightToLeft
				 * @param {} alpha
				 * @return 
				 */
				function relaxRightToLeft(alpha) {
					nodesByBreadth.slice().reverse().forEach(function (nodes) {
						nodes.forEach(function (node) {
							if (node.sourceLinks.length) {
								var y = d3.sum(node.sourceLinks, weightedTarget) / d3.sum(node.sourceLinks, value);
								node.y += (y - center(node)) * alpha;
							}
						});
					});

					/**
					 * Description
					 * @method weightedTarget
					 * @param {} link
					 * @return BinaryExpression
					 */
					function weightedTarget(link) {
						return center(link.target) * link.value;
					}
				}

				/**
				 * Description
				 * @method resolveCollisions
				 * @return 
				 */
				function resolveCollisions() {
					nodesByBreadth.forEach(function (nodes) {
						var node,
							dy,
							y0 = 0,
							n = nodes.length,
							i;

						// Push any overlapping nodes down.
						nodes.sort(ascendingDepth);
						for (i = 0; i < n; ++i) {
							node = nodes[i];
							dy = y0 - node.y;
							if (dy > 0) node.y += dy;
							y0 = node.y + node.dy + nodePadding;
						}

						// If the bottommost node goes outside the bounds, push it back up.
						dy = y0 - nodePadding - size[1];
						if (dy > 0) {
							y0 = node.y -= dy;

							// Push any overlapping nodes back up.
							for (i = n - 2; i >= 0; --i) {
								node = nodes[i];
								dy = node.y + node.dy + nodePadding - y0;
								if (dy > 0) node.y -= dy;
								y0 = node.y;
							}
						}
					});
				}

				/**
				 * Description
				 * @method ascendingDepth
				 * @param {} a
				 * @param {} b
				 * @return BinaryExpression
				 */
				function ascendingDepth(a, b) {
					return a.y - b.y;
				}
			}

			/**
			 * Description
			 * @method computeLinkDepths
			 * @return 
			 */
			function computeLinkDepths() {
				nodes.forEach(function (node) {
					node.sourceLinks.sort(ascendingTargetDepth);
					node.targetLinks.sort(ascendingSourceDepth);
				});
				nodes.forEach(function (node) {
					var sy = 0, ty = 0;
					node.sourceLinks.forEach(function (link) {
						link.sy = sy;
						sy += link.dy;
					});
					node.targetLinks.forEach(function (link) {
						link.ty = ty;
						ty += link.dy;
					});
				});

				/**
				 * Description
				 * @method ascendingSourceDepth
				 * @param {} a
				 * @param {} b
				 * @return BinaryExpression
				 */
				function ascendingSourceDepth(a, b) {
					return a.source.y - b.source.y;
				}

				/**
				 * Description
				 * @method ascendingTargetDepth
				 * @param {} a
				 * @param {} b
				 * @return BinaryExpression
				 */
				function ascendingTargetDepth(a, b) {
					return a.target.y - b.target.y;
				}
			}

			/**
			 * Description
			 * @method center
			 * @param {} node
			 * @return BinaryExpression
			 */
			function center(node) {
				return node.y + node.dy / 2;
			}

			/**
			 * Description
			 * @method value
			 * @param {} link
			 * @return MemberExpression
			 */
			function value(link) {
				return link.value;
			}

			return sankey;
		};
	};
} ());