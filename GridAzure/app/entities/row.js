var templatesPath = 'app/templates/';

var Row = function () {
	function Row(elm, rootScope, compile) {
		this.elm = elm;
		this.scope = rootScope.$new();
		this.compile = compile;
	}

	Row.prototype.edit = function () {
		if ($('modal').length != 0) {
			$('modal').remove();
		}

		this.scope.editingRow = this.elm;

		$('body').append('<div modal value="editingRow" enable-save="true" body-template-url="' + templatesPath + 'directive-templates/edit-entity.html"></modal>');
		var modal = $('div[modal]');
		this.compile(modal)(this.scope);
	}

	Row.prototype.delete = function (data) {
		data.splice(data.indexOf(this.elm.entity), 1);
	}

	Row.prototype.history = function () {
		if ($('history').length != 0) {
			$('history').remove();
		}

		this.scope.historiedRow = this.elm;

		$('body').append('<div modal value="historiedRow.actions.history"  body-template-url="' + templatesPath + 'directive-templates/history.html"></history>');
		var modal = $('div[modal]');
		this.compile(modal)(this.scope);
	}

	Row.prototype.copy = function () {
		var s = JSON.stringify(this.elm.entity);

		if (window.clipboardData && clipboardData.setData) {
			clipboardData.setData('text', s);

			if ($.cursorMessage) {
				$.cursorMessage('Row is copied to clipboard.');
			}
		}
		else {
			$('body').append('<input id="holdtext" style="display: none"/>')

			var elm = $("#holdtext");
			elm.val(s);
			elm.select();

			try {
				document.execCommand('copy');

				if ($.cursorMessage) {
					$.cursorMessage('Row is copied to clipboard.');
				}

			}
			catch (e) {
				if ($.cursorMessage) {
					$.cursorMessage('Copied ended with error.', { backgroundColor: 'rgb(143, 59, 59)' });
				}

			}
			finally {
				elm.remove('#holdtext');
			}
		};
	}

	return Row;
}();