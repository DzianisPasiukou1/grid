angular.module('gridTaskApp')
	.directive('details', ['$compile', function ($compile) {
		return {
			restict: 'A',
			scope: {
				row: '=',
				rowHeight: '=',
				detailsClass: '=detailsClass',
				renderedRows: '=',
				height: '='
			},
			link: function (scope, element, attrs) {
				scope.$watch('renderedRows', function (rows) {
					if (rows) {
						for (var i = 0; i < rows.length; i++) {
							//rows[i].entity.isToggle = false;

							//rows[i].entity.action.isShow = rows[i].elm.hasClass('selected');
						}
					}
				});

				element.click(function () {
					scope.renderedRows.forEach(function (value) {
						if (value.$$hashKey != scope.row.$$hashKey && value.entity.isToggle) {
							value.entity.isToggle = false;

							value.elm.removeClass(scope.detailsClass);

							var step = value.elm.position().top + value.elm.context.scrollHeight;
							var top = Math.round(value.elm.position().top);
							var children = $(value.elm).parent().children();

							$(value.elm).css('height', scope.rowHeight + 'px');
							step = value.elm.position().top + scope.rowHeight;

							for (var i = 0; i < children.length; i++) {
								if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
									$(children[i]).css('top', step + 'px');
									step += scope.rowHeight;
								}
							}
						}
					});

					scope.row.entity.isToggle = !scope.row.entity.isToggle;

					if (scope.row.entity.isToggle) {
						scope.row.elm.addClass(scope.detailsClass);
						scope.row.elm.addClass('selected');
					}
					else {
						scope.row.elm.removeClass(scope.detailsClass);
					}

					var step = scope.row.elm.position().top + scope.row.elm.context.scrollHeight;
					var top = Math.round(scope.row.elm.position().top);
					var children = $(scope.row.elm).parent().children();

					if (scope.row.entity.isToggle) {
						scope.height = scope.row.elm.height();

						$(scope.row.elm).css('height', scope.row.elm.context.scrollHeight + 'px');
						for (var i = 0; i < children.length; i++) {
							if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
								$(children[i]).css('top', step + 'px');
								step += scope.rowHeight;
							}
						}
					} else {
						$(scope.row.elm).css('height', scope.rowHeight + 'px');
						step = scope.row.elm.position().top + scope.rowHeight;

						for (var i = 0; i < children.length; i++) {
							if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
								$(children[i]).css('top', step + 'px');
								step += scope.rowHeight;
							}
						}
					}
				});
			}
		}
	}]);