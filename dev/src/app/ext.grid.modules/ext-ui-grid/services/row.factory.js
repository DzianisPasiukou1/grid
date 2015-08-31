/* global clipboardData */
(function () {
	'use strict'

	angular
		.module('ext.grid.uiGrid')
		.factory('rowFactory', rowFactory)

	rowFactory.$inject = ['$document', '$window', '$rootScope', '$compile', 'extUiGridTemplatesPath'];

	function rowFactory($document, $window, $rootScope, $compile, templatesPath) {
		var Row = function () {
			function Row(elm) {
				this.elm = elm;
				this.scope = $rootScope.$new();
				this.compile = $compile;
			};

			Row.prototype.edit = function () {
				if (angular.element('ext-modal').length != 0) {
					angular.element('ext-modal').remove();
				}

				this.scope.editingRow = this.elm;

				angular.element('body').append('<div ext-modal value="editingRow" enable-save="true" body-template-url="' + templatesPath + 'edit-entity.html"></div>');
				var modal = angular.element('div[ext-modal]');
				this.compile(modal)(this.scope);
			};

			Row.prototype.delete = function (data) {
				data.splice(data.indexOf(this.elm.entity), 1);
			};

			Row.prototype.history = function () {
				if (angular.element('ext-history').length != 0) {
					angular.element('ext-history').remove();
				}

				this.scope.historiedRow = this.elm;

				angular.element('body').append('<div ext-modal value="historiedRow.actions.history"  body-template-url="' + templatesPath + 'history.html"></div>');
				var modal = angular.element('div[ext-modal]');
				this.compile(modal)(this.scope);
			};

			Row.prototype.copy = function () {
				var s = JSON.stringify(this.elm.entity);

				if ($window.clipboardData && clipboardData.setData) {
					clipboardData.setData('text', s);

					if ($.cursorMessage) {
						$.cursorMessage('Row is copied to clipboard.');
					}
				}
				else {
					angular.element('body').append('<input id="holdtext" style="display: none"/>')

					var elm = angular.element("#holdtext");
					elm.val(s);
					elm.select();

					try {
						$document[0].execCommand('copy');

						if (angular.element.cursorMessage) {
							angular.element.cursorMessage('Row is copied to clipboard.');
						}

					}
					catch (e) {
						if (angular.element.cursorMessage) {
							angular.element.cursorMessage('Copied ended with error.', { backgroundColor: 'rgb(143, 59, 59)' });
						}

					}
					finally {
						elm.remove('#holdtext');
					}
				};
			};

			return Row;
		} ();

		return {
			getNewRow(elm) {
				return new Row(elm);
			}
		}
	};
} ());