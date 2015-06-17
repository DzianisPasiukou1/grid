angular.module('gridTaskApp')
	.directive('details', [function () {
		return {
			restict: 'A',
			scope: {
				row: '=',
				rowHeight: '=',
				detailsClass: '=detailsClass'
			},
			link: function (scope, element, attrs) {
				element.click(function () {
					scope.row.elm.addClass(scope.detailsClass);

					scope.row.isToggle = !scope.row.isToggle;

					var step = scope.row.elm.context.scrollHeight - scope.rowHeight;
					var top = Math.round(scope.row.elm.position().top);
					var children = $(scope.row.elm).parent().children();

					if (scope.row.isToggle) {
						$(scope.row.elm).css('height', scope.row.elm.context.scrollHeight + 'px');
						for (var i = 0; i < children.length; i++) {
							if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
								$(children[i]).css('top', parseInt($(children[i]).css('top').replace('px', '')) + step + 'px');
							}
						}
					} else {
						$(scope.row.elm).css('height', scope.rowHeight + 'px');
						scope.row.elm.removeClass(scope.detailsClass);
						for (var i = 0; i < children.length; i++) {
							if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
								$(children[i]).css('top', parseInt($(children[i]).css('top').replace('px', '')) - step + 'px');
							}
						}
					}
				});
			}
		}
	}]);