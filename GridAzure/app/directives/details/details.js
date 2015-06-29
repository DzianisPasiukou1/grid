angular.module('gridTaskApp')
	.directive('details', ['$compile', function ($compile) {
		return {
			restict: 'A',
			scope: {
				row: '=',
				rowHeight: '=',
				detailsClass: '=detailsClass',
				renderedRows: '=',
				isToggle: '=',
				entity: '='
			},
			link: function (scope, element, attrs) {

				$('.ngViewport').scroll(function () {
					if (scope.row.entity.isToggle) {
						var step = scope.row.elm.position().top + scope.row.elm.context.scrollHeight;
						var top = Math.round(scope.row.elm.position().top);
						var children = $(scope.row.elm).parent().children();

						$(scope.row.elm).css('height', scope.row.elm.context.scrollHeight + 'px');
						for (var i = 0; i < children.length; i++) {
							if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
								$(children[i]).css('top', step + 'px');

								step += scope.rowHeight;
							}
						}
					}
				});

				element.click(function () {
					scope.$parent.$parent.data.forEach(function (value) {
						if (!angular.equals(value, scope.row.entity) && value.isToggle) {
							value.isToggle = false;

							scope.renderedRows.forEach(function (row) {
								row.elm.removeClass(scope.detailsClass);

								var step = row.elm.position().top + row.elm.context.scrollHeight;

								if (!scope.row.entity.step) {
									scope.row.entity.step = 0;
								}
								scope.row.entity.step = row.elm.context.scrollHeight;

								var top = Math.round(row.elm.position().top);
								var children = $(row.elm).parent().children();

								$(row.elm).css('height', scope.rowHeight + 'px');
								step = row.elm.position().top + scope.rowHeight;

								for (var i = 0; i < children.length; i++) {
									if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
										$(children[i]).css('top', step + 'px');
										step += scope.rowHeight;
									}
								}
							});
						}
					});

					scope.renderedRows.forEach(function (value) {
						if (!angular.equals(value.entity, scope.row.entity) && value.entity.isToggle) {
							value.entity.isToggle = false;

							value.elm.removeClass(scope.detailsClass);

							var step = value.elm.position().top + value.elm.context.scrollHeight;

							if (!scope.row.entity.step) {
								scope.row.entity.step = 0;
							}
							scope.row.entity.step = row.elm.context.scrollHeight;

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
					scope.isToggle = scope.row.entity.isToggle;
					scope.entity = angular.copy(scope.row.entity);

					if (scope.row.entity.isToggle) {
						scope.row.elm.addClass(scope.detailsClass);
						scope.row.elm.addClass('selected');
					}
					else {
						scope.row.elm.removeClass(scope.detailsClass);
					}

					var step = scope.row.elm.position().top + scope.row.elm.context.scrollHeight;

					if (!scope.row.entity.step) {
						scope.row.entity.step = 0;
					}
					scope.row.entity.step = scope.row.elm.context.scrollHeight;

					var top = Math.round(scope.row.elm.position().top);
					var children = $(scope.row.elm).parent().children();

					if (scope.row.entity.isToggle) {

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