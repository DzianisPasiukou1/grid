angular.module('gridTaskApp')
	.directive('details', [function () {
		return {
			restict: 'A',
			scope: {
				row: '=',
				rowHeight: '=',
				detailsClass: '=detailsClass',
				renderedRows: '='
			},
			link: function (scope, element, attrs) {
				element.click(function () {
					//scope.renderedRows.forEach(function (value) {
					//	if (value.$$hashKey != scope.row.$$hashKey && value.isToggle) {
					//		value.isToggle = false;

					//		value.elm.removeClass(scope.detailsClass);

					//		var step = value.elm.context.scrollHeight - scope.rowHeight;
					//		var children = $(value.elm).parent().children();
					//		var top = Math.round(value.elm.position().top);

					//		$(value.elm).css('height', scope.rowHeight + 'px');

					//		for (var i = 0; i < children.length; i++) {
					//			if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
					//				$(children[i]).css('top', parseInt($(children[i]).css('top').replace('px', '')) - step - 2 + 'px');
					//			}
					//		}
					//	}
					//});

					scope.row.isToggle = !scope.row.isToggle;

					if (scope.row.isToggle) {
						scope.row.elm.addClass(scope.detailsClass);
					}
					else {
						scope.row.elm.removeClass(scope.detailsClass);
					}

					var step = scope.row.elm.context.scrollHeight - scope.rowHeight;
					var top = Math.round(scope.row.elm.position().top);
					var children = $(scope.row.elm).parent().children();

					if (scope.row.isToggle) {
						$(scope.row.elm).css('height', scope.row.elm.context.scrollHeight + 'px');
						for (var i = 0; i < children.length; i++) {
							if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
								$(children[i]).css('top', parseInt($(children[i]).css('top').replace('px', '')) + step - 2 + 'px');
							}
						}
					} else {
						$(scope.row.elm).css('height', scope.rowHeight + 'px');

						if (!scope.row.isDetails) {
							for (var i = 0; i < children.length; i++) {
								if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
									$(children[i]).css('top', parseInt($(children[i]).css('top').replace('px', '')) - step - 2 + 'px');
								}
							}
						}
						else {

							for (var i = 0; i < children.length; i++) {
								if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
									$(children[i]).css('top', parseInt($(children[i]).css('top').replace('px', '')) - step + 'px');
								}
							}
						}
					}
				});
			}
		}
	}]);