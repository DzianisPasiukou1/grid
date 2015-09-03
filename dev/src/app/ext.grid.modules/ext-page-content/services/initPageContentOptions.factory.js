(function () {
	'use strict'

	angular
		.module('ext.grid.pageContent')
		.factory('initPageContentOptions', initPageContentOptions);

	initPageContentOptions.$inject = ['$compile', 'initContentOptionsUtils', '$parse'];

	function initPageContentOptions($compile, initContentOptionsUtils, $parse) {
		var utils = {};

		utils.content = {};
		utils.content.listSelector = '.page-content__list';
		utils.content.loadingTemplate = '<loading ng-show="vm.contentOptions.isLoading"></loading>';

		utils.renderLoading = renderLoading;
		utils.initContentOpt = initContentOpt;
		utils.refreshContentOpt = refreshContentOpt;
		utils.convertFilterOptions = convertFilterOptions;

		return utils;

		function initContentOpt(opt, element, scope, data) {
			var contentOptions = opt || {};

			contentOptions.loading = contentOptions.loading || false;

			if (contentOptions.loading) {
				contentOptions.isLoading = true;
				this.renderLoading(scope);
			}

			contentOptions.filtrate = contentOptions.filtrate || angular.bind(scope.vm, filtrate);
			contentOptions.search = contentOptions.search || angular.bind(scope.vm, search);
			contentOptions.refresh = contentOptions.refresh || angular.bind(scope.vm, refresh);
			contentOptions.withUpload = contentOptions.withUpload || false;
			contentOptions.filterOptions = contentOptions.filterOptions || getFilterOptions(data);
			contentOptions.searchOptions = contentOptions.searchOptions || getSearchOptions(data);
			opt.searchOptions.selected = opt.searchOptions[0];
			opt.searchValue = opt.searchValue || '';

			if (contentOptions.withUpload) {
				contentOptions.isDynamic = true;
				contentOptions.upload = contentOptions.upload || angular.bind(scope, upload);
			}

			initContentOptionsUtils.initOpt(contentOptions)

			return contentOptions;
		};

		function refreshContentOpt(opt, data, gridOptions, views) {
			opt.filterOptions = getFilterOptions(data);
			opt.searchOptions = getSearchOptions(data);
			opt.searchOptions.selected = opt.searchOptions[0];
			opt.searchValue = '';
			opt.checks.selected = opt.checks.actions.noOne;

			if (angular.isDefined($parse('options.selected.isGrid')(views))) {
				refreshGridPlugins(opt, gridOptions);
			}

		};

		function refreshGridPlugins(contentOptions, gridOptions) {
			var isFindAct = false;
			var indexAct = 0;

			for (var i = 0; i < gridOptions.plugins.length; i++) {
				if (gridOptions.plugins[i].constructor.name == 'ExtGridActionsPlugin') {
					isFindAct = true;
					indexAct = i;
					break;
				}
			}

			if (!isFindAct) {
				var pluginActionOpt = {
					values: gridOptions.rowActions,
					detailsTemplate: gridOptions.detailsTemplate,
					detailsCondition: gridOptions.detailsCondition,
					onCheck: gridOptions.rowCheckAction,
					contentOptions: contentOptions
				}
				gridOptions.plugins[indexAct].refreshOpt(pluginActionOpt);
			}
		};

		function renderLoading(scope) {
			if (angular.element('loading').length == 0) {
				element.find(this.content.listSelector).append(this.content.loadingTemplate);
				$compile(angular.element('loading'))(scope);
			}
		};

		function filtrate(value) {
			var filterText = convertFilterOptions(value).filterText;

			if (angular.isDefined(this.gridOptions.filterOptions)) {
				this.gridOptions.filterOptions.filterText = filterText;
			}

			if (angular.isDefined(this.uiGridOptions.filterOptions)) {
				this.uiGridOptions.filterOptions.filterText = filterText;
			}
		};

		function search(value) {
			if (angular.isDefined(this.gridOptions.filterOptions)) {
				this.gridOptions.filterOptions.filterText = value;
			}

			if (angular.isDefined(this.uiGridOptions.filterOptions)) {
				this.uiGridOptions.filterOptions.filterText = value;
			}
		};

		function refresh() {
			if (this.contentOptions.loading) {
				this.contentOptions.isLoading = true;
			}

			this.contentOptions.refreshCallback();
		};

		function upload(data) {
			if (this.vm.contentOptions.loading) {
				this.vm.contentOptions.isLoading = true;
			}

			this.vm.data = data;
			this.vm.grid.count = this.vm.data.length;
			this.$apply();
		};


		function getFilterOptions(data) {
			var options = [];

			if (Array.isArray(data) && data[0])
				for (var prop in data[0]) {
					if (prop != '$$hashKey') {
						options.push({ label: prop, isColumn: true });
					}
				}
			return options;
		};

		function getSearchOptions(data) {
			var options = [];
			options.push({ label: 'everywhere', isEverywhere: true });

			if (Array.isArray(data) && data[0]) {
				for (var prop in data[0]) {
					if (prop != '$$hashKey') {
						options.push({ label: prop, isColumn: true });
					}
				}
			}

			return options;
		};

		function convertFilterOptions(options) {
			var convertOpt = { filterText: '' };

			for (var i = 0; i < options.length; i++) {

				if (options[i].filter) {
					convertOpt.filterText += options[i].label + ':' + options[i].filter + ';';
				}
			}
			return convertOpt;
		};
	};
} ());