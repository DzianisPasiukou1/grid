function initializeOpt(scope, element, content, templatesPath, $compile) {
	if (scope.contentOptions === undefined) {
		scope.contentOptions = {};
	}

	if (scope.contentOptions.loading) {
		scope.contentOptions.isLoading = true;
		element.find(content.listSelector).append(content.loadingTemplate);
		$compile($('loading'))(scope);
	}

	if (scope.contentOptions.checks === undefined) {
		scope.contentOptions.checks = content.checks;
		scope.contentOptions.checks.options.callback = function (check) {
			if (check) {
				if (check.isAll) {
					scope.data.forEach(function (value) {
						value.isCheck = true;
					});
				}
				else if (check.isNoOne) {
					scope.data.forEach(function (value) {
						value.isCheck = false;
					});
				}
				else if (check.isMarked) {
					scope.data.forEach(function (value) {
					});
				}
				else if (check.isNotMarked) {
					scope.data.forEach(function (value) {
						value.isCheck = !value.isCheck;
					});
				}
			}
		};
	}

	if (scope.contentOptions.mores === undefined) {
		scope.contentOptions.mores = content.mores;
	}

	if (scope.exports === undefined) {
		scope.exports = content.exports;
		scope.exports.options.callback = function (action) {
			scope.export = action;
		}
	}

	if (scope.views === undefined) {
		scope.views = content.views;
		scope.views.options.callback = function (action) {
			scope.view = action;
		}
	}

	if (scope.contentOptions.filtrate === undefined) {
		scope.contentOptions.filtrate = function (value) {
			scope.gridOptions.filterOptions.filterText = convertFilterOptions(value).filterText;
		};
	}

	if (scope.contentOptions.search === undefined) {
		scope.contentOptions.search = function (value) {
			scope.gridOptions.filterOptions.filterText = value;
		}
	}

	if (scope.contentOptions.refresh === undefined) {
		scope.contentOptions.refresh = function () {
			if (scope.contentOptions.loading) {
				scope.contentOptions.isLoading = true;
			}

			scope.contentOptions.refreshCallback();
		};
	}

	if (scope.contentOptions.withUpload || scope.contentOptions.upload !== undefined) {
		scope.contentOptions.isDynamic = true;

		if (scope.contentOptions.upload === undefined) {
			scope.contentOptions.upload = function (data) {
				if (scope.contentOptions.loading) {
					scope.contentOptions.isLoading = true;
				}

				scope.data = data;

				scope.grid.count = scope.data.length;

				scope.$apply();
			}
		}
	}

	if (scope.grid === undefined) {
		scope.grid = {};

		scope.grid.name = content.gridName;
		if (Array.isArray(scope.data)) {
			scope.grid.count = scope.data.length;
		}
	}

	if (scope.grid.name === undefined) {
		scope.grid.name = content.gridName;
	}

	if (scope.grid.count === undefined) {
		if (Array.isArray(scope.data)) {
			scope.grid.count = scope.data.length;
		}
	}

	if (scope.gridOptions === undefined) {
		scope.gridOptions = {};
	}

	if (scope.gridOptions.data === undefined) {
		scope.gridOptions.data = 'data';
	}

	if (scope.gridOptions.multiSelect === undefined) {
		scope.gridOptions.multiSelect = false;
	}

	if (scope.gridOptions.rowTemplate === undefined) {
		scope.gridOptions.rowTemplate = templatesPath + content.rowTemplate;
	}

	if (scope.gridOptions.afterSelectionChange === undefined) {
		scope.gridOptions.afterSelectionChange = function (rowitem, event) {
			for (var i = 0; i < scope.data.length; i++) {
				scope.data[i].action.isShow = false;
			}

			rowitem.entity.action.isShow = rowitem.selected;
		};
	}

	if (scope.gridOptions.filterOptions === undefined) {
		scope.gridOptions.filterOptions = { filterText: '' };
	}

	if (scope.gridOptions.rowHeight === undefined) {
		scope.gridOptions.rowHeight = content.rowHeight;
	}

	if (scope.gridOptions.headerRowHeight === undefined) {
		scope.gridOptions.headerRowHeight = content.headerRowHeight;
	}

	if (scope.gridOptions.showFooter === undefined) {
		scope.gridOptions.showFooter = content.showFooter;
	}

	if (scope.gridOptions.footerRowHeight === undefined) {
		scope.gridOptions.footerRowHeight = content.footerRowHeight;
	}

	if (scope.gridOptions.footerTemplate === undefined) {
		scope.gridOptions.footerTemplate = templatesPath + content.footerTemplate;
	}

	if (scope.gridOptions.init === undefined) {
		if (scope.contentOptions.loading) {
			scope.gridOptions.init = function (grid, event) {
				scope.contentOptions.isLoading = false;
			};
		}
	}

	if (scope.gridOptions.plugins === undefined) {
		scope.gridOptions.plugins = [new ngGridCanvasHeightPlugin()];
	}

	if (scope.gridOptions.actions === undefined) {
		scope.gridOptions.actions = content.rowActions;
	}

	if (scope.gridOptions.detailsTemplate === undefined && scope.gridOptions.withDetails) {
		scope.gridOptions.detailsTemplate = templatesPath + content.detailsTemplate;
	}
}