function ngGridActionsPlugin(opts, compile) {
	var self = this;
	self.grid = null;
	self.scope = null;
	self.opts = opts;
	self.compile = compile;

	self.init = function (scope, grid, services) {
		self.domUtilityService = services.DomUtilityService;
		self.grid = grid;
		self.scope = scope;

		var recalcForData = function () {
			setTimeout(function () {

				self.grid.rowCache.forEach(function (row) {
					if (row) {
						row.actions = angular.copy(self.opts);
						row.actions.isCheck = false;
						row.actions.setToggle = setToggle;
						row.actions.setCheck = setCheck;
						row.actions.copyRow = copyRow;
						row.actions.deleteRow = deleteRow;
						row.actions.editRow = editRow;
						row.actions.historyRow = historyRow;
						row.actions.history = [];
						row.actions.tab = 2;
						row.actions.select = function (row) {
							row.elm.addClass('selected');

							self.grid.rowCache.forEach(function (row) {
								if (row.actions.isSelect) {
									row.actions.isSelect = false;
								}
							});

							this.isSelect = true;
						}

						if (row.actions.values.options.callback === undefined) {
							row.actions.values.options.callback = function (action) {
								if (action.isEdit) {
									row.actions.editRow(row);
								}
								else if (action.isCopy) {
									row.actions.copyRow(row);
								}
								else if (action.isDelete) {
									row.actions.deleteRow(row.entity, self.scope.data, row);
								}
								else if (action.isHistory) {
									row.actions.historyRow(row);
								}
							};
						}
					}
				});

				if (self.opts.contentOptions.checks.options.callback === undefined) {
					self.opts.contentOptions.checks.options.callback = function (check) {
						if (check) {
							if (check.isAll) {
								self.grid.rowCache.forEach(function (value) {
									value.actions.isCheck = true;
								});
							}
							else if (check.isNoOne) {
								self.grid.rowCache.forEach(function (value) {
									value.actions.isCheck = false;
								});
							}
							else if (check.isMarked) {
								self.grid.rowCache.forEach(function (value) {
								});
							}
							else if (check.isNotMarked) {
								self.grid.rowCache.forEach(function (value) {
									value.actions.isCheck = !value.actions.isCheck;
								});
							}
						};
					};
				}

				self.scope.$apply();
			});

			if (self.scope.toggleRow) {
				closeToggleRow(self.scope.toggleRow.clone, self.scope.detailsClass, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex), self.scope.rowHeight, true);
				self.scope.toggleRow = undefined;
			}

			setTimeout(innerRecalcForData, 1);
		};

		var innerRecalcForData = function () {

			if (self.scope.toggleRow) {
				var isExistToggle = false;

				for (idx in self.scope.renderedRows) {
					if (self.scope.renderedRows[idx].orig.actions) {
						if (self.scope.renderedRows[idx].orig.actions.isToggle) {

							if (!self.scope.renderedRows[idx].elm.hasClass('toggle')) {
								refreshToggle(self.scope.renderedRows[idx], self.scope.rowHeight, self.scope.step, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex));
							}

							isExistToggle = true;
						}
						else {
							self.scope.renderedRows[idx].elm.removeClass('toggle');
						}
					}
				}

				if (isExistToggle) {
					self.grid.$canvas.css('height', self.scope.newCanvasHeight + 'px');
				}
				else {
					$('.details-template').parent().removeClass('toggle');
					$('.details-template').remove();
				}
			}

			self.scope.catHashKeys = function () {
				var hash = '',
					idx;
				for (idx in self.scope.renderedRows) {
					hash += self.scope.renderedRows[idx].$$hashKey;

					if (self.scope.renderedRows[idx].orig.actions) {
						if (self.scope.renderedRows[idx].orig.actions.isSelect) {
							self.scope.renderedRows[idx].elm.addClass('selected');
							self.scope.renderedRows[idx].orig.actions.values.isShow = true;
						}
						else {
							self.scope.renderedRows[idx].elm.removeClass('selected');
							self.scope.renderedRows[idx].orig.actions.values.isShow = false;
						}
					}
				}
				return hash;
			};
		};

		self.grid.$viewport.scroll(function () {
			var isExistToggle = false;

			for (idx in self.scope.renderedRows) {
				if (self.scope.renderedRows[idx].orig.actions.isToggle) {

					if (!self.scope.renderedRows[idx].elm.hasClass('toggle')) {

						if (idx != self.scope.renderedRows.length - 1) {

						}
						refreshToggle(self.scope.renderedRows[idx], self.scope.rowHeight, self.scope.step, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex));
					}

					isExistToggle = true;
				}
				else {
					self.scope.renderedRows[idx].elm.removeClass('toggle');
				}
			}

			if (isExistToggle) {
				self.grid.$canvas.css('height', self.scope.newCanvasHeight + 'px');
			}
			else {
				$('.details-template').parent().removeClass('toggle');
				$('.details-template').remove();
			}
		});

		var setToggle = function (row, isToggle, detailsClass) {

			if (isToggle) {
				if (self.scope.toggleRow) {
					var deletedRow;

					for (var i = 0; i < self.grid.rowCache.length; i++) {
						if (angular.equals(self.grid.rowCache[i], self.scope.toggleRow)) {
							deletedRow = self.grid.rowCache[i];
							break;
						}
					}

					closeOrigToggleRow(deletedRow, self.scope.detailsClass, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex), self.scope.rowHeight)
				}

				self.scope.toggleRow = row;
				self.scope.detailsClass = detailsClass;

				setRenderToggle(row.clone, self.scope.detailsClass, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex), self.scope.rowHeight);
			}
			else {
				closeToggleRow(row.clone, detailsClass, getDetailsTemplate(self.scope.toggleRow.actions.detailsTemplate, self.scope.toggleRow.actions.detailsCondition, self.scope.toggleRow.entity, self.scope.toggleRow.rowIndex), self.scope.rowHeight);
				self.scope.toggleRow = undefined;
			}
		};

		var refreshToggle = function (row, rowHeight, step, template) {
			if (template) {
				var step = step;
				var detElm;

				if (template.substr(template.length - 4) == 'html') {
					$.get(template, function (result) {
						$('.details-template').remove();
						detElm = angular.element(result);
					}).fail(function () {
						$('.details-template').remove();
						detElm = angular.element(template);

					}).always(function () {
						row.elm.append(detElm);
						self.compile(detElm)(self.scope);
						$('.details-template').css('top', rowHeight + 'px');
						row.elm.addClass('toggle');
						var top = Math.round(row.elm.position().top);
						var children = $(row.elm).parent().children();

						for (var i = 0; i < children.length; i++) {
							if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
								$(children[i]).css('top', step + 'px');
								step += rowHeight;
							}
						}
					});
				}
				else {
					$('.details-template').remove();
					detElm = angular.element(template);
					row.elm.append(detElm);
					self.compile(detElm)(self.scope);
					$('.details-template').css('top', rowHeight + 'px');
					row.elm.addClass('toggle');
					var top = Math.round(row.elm.position().top);
					var children = $(row.elm).parent().children();

					for (var i = 0; i < children.length; i++) {
						if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
							$(children[i]).css('top', step + 'px');
							step += rowHeight;
						}
					}
				}
			}
			else {
				row.elm.addClass('toggle');
				$(row.elm).css('height', row.elm.context.scrollHeight + 'px');

				var top = Math.round(row.elm.position().top);
				var children = $(row.elm).parent().children();
				var step = step;

				for (var i = 0; i < children.length; i++) {
					if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
						$(children[i]).css('top', step + 'px');
						step += rowHeight;
					}
				}
			}
		}

		var setRenderToggle = function (row, detailsClass, template, rowHeight) {
			row.elm.addClass(detailsClass);
			row.isToggle = true;

			if (template) {
				var detElm;

				if (template.substr(template.length - 4) == 'html') {
					$.get(template, function (result) {
						$('.details-template').remove();
						detElm = angular.element(result);
					}).fail(function () {
						$('.details-template').remove();
						detElm = angular.element(template);
					}).always(function () {
						row.elm.append(detElm);
						self.compile(detElm)(self.scope);
						$('.details-template').css('top', row.elm.height() + 'px');

						var top = Math.round(row.elm.position().top);
						var children = $(row.elm).parent().children();
						var step = row.elm.position().top + row.elm.find('.details-template').height() + rowHeight;
						self.scope.step = step;

						self.canvasHeight = self.grid.$canvas.height();
						self.grid.$canvas.css('height', self.canvasHeight + row.elm.context.scrollHeight + 'px');
						self.scope.newCanvasHeight = self.canvasHeight + row.elm.context.scrollHeight;

						$(row.elm).css('height', row.elm.context.scrollHeight + 'px');

						for (var i = 0; i < children.length; i++) {
							if ($(children[i]).css('top').replace('px', '') == row.elm.position().top) {
								for (var j = i + 1; j < children.length; j++) {
									$(children[j]).css('top', step + 'px');
									step += rowHeight;
								}
							}
						}
					});;
				}
				else {
					$('.details-template').remove();
					detElm = angular.element(template);
					row.elm.append(detElm);
					self.compile(detElm)(self.scope);
					$('.details-template').css('top', row.elm.height() + 'px');

					var top = Math.round(row.elm.position().top);
					var children = $(row.elm).parent().children();
					var step = row.elm.position().top + row.elm.find('.details-template').height() + rowHeight;
					self.scope.step = step;

					self.canvasHeight = self.grid.$canvas.height();
					self.grid.$canvas.css('height', self.canvasHeight + row.elm.context.scrollHeight + 'px');
					self.scope.newCanvasHeight = self.canvasHeight + row.elm.context.scrollHeight;

					$(row.elm).css('height', row.elm.context.scrollHeight + 'px');

					for (var i = 0; i < children.length; i++) {
						if ($(children[i]).css('top').replace('px', '') == row.elm.position().top) {
							for (var j = i + 1; j < children.length; j++) {
								$(children[j]).css('top', step + 'px');
								step += rowHeight;
							}
						}
					}
				}
			}
			else {
				var top = Math.round(row.elm.position().top);
				var children = $(row.elm).parent().children();
				var step = row.elm.position().top + row.elm.context.scrollHeight;
				self.scope.step = step;

				self.canvasHeight = self.grid.$canvas.height();
				self.grid.$canvas.css('height', self.canvasHeight + row.elm.context.scrollHeight + 'px');
				self.scope.newCanvasHeight = self.canvasHeight + row.elm.context.scrollHeight;

				$(row.elm).css('height', row.elm.context.scrollHeight + 'px');

				for (var i = 0; i < children.length; i++) {
					if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
						$(children[i]).css('top', step + 'px');
						step += rowHeight;
					}
				}

				self.scope.toggleElm = row.elm.clone();
			}
		}

		var closeOrigToggleRow = function (row, detailsClass, template, rowHeigth, reInit) {
			if (rowHeigth === undefined) {
				rowHeigth = 60;
			}

			row.clone.elm.removeClass('toggle');
			$('.details-template').remove();
			row.actions.isToggle = false;
			self.grid.$canvas.css('height', self.canvasHeight + 'px');
			self.scope.newCanvasHeight = self.canvasHeight;

			var top = Math.round(row.clone.elm.position().top);
			var children = $(row.clone.elm).parent().children();
			var step = row.clone.elm.position().top + rowHeigth;

			$(row.clone.elm).css('height', rowHeigth + 'px');

			for (var i = 0; i < children.length; i++) {
				if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
					$(children[i]).css('top', step + 'px');
					step += rowHeigth;
				}
			}

			if (reInit) {
				self.scope.toggleRow = undefined;
			}
		}

		var closeToggleRow = function (row, detailsClass, template, rowHeigth, reInit) {
			row.elm.removeClass('toggle');
			$('.details-template').remove();
			row.orig.actions.isToggle = false;
			self.grid.$canvas.css('height', self.canvasHeight + 'px');
			self.scope.newCanvasHeight = self.canvasHeight;

			var top = Math.round(row.elm.position().top);
			var children = $(row.elm).parent().children();
			var step = row.elm.position().top + rowHeigth;

			$(row.elm).css('height', rowHeigth + 'px');

			for (var i = 0; i < children.length; i++) {
				if (parseInt($(children[i]).css('top').replace('px', '')) > top) {
					$(children[i]).css('top', step + 'px');
					step += rowHeigth;
				}
			}

			if (reInit) {
				self.scope.toggleRow = undefined;
			}
		}

		var setCheck = function (row) {
			row.actions.onCheck(self.grid.rowCache);
		}

		var getDetailsTemplate = function (template, condition, entity, index) {
			if (condition !== undefined && condition(entity, index) !== undefined) {
				template = condition(entity, index);
			}

			return template;
		}

		var copyRow = function (row) {
			var s = JSON.stringify(row.entity);

			if (window.clipboardData && clipboardData.setData) {
				clipboardData.setData('text', s);

				if ($.cursorMessage) {
					$.cursorMessage('Row is copied to clipboard.');
				}
			}
			else {
				$(row.clone.elm).append('<input id="holdtext" style="display: none"/>')

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

		var deleteRow = function (entity, data, row) {
			for (var i = 0; i < self.grid.rowCache.length; i++) {
				if (self.grid.rowCache[i].entity == entity) {
					self.grid.rowCache.splice(i, 1);
					break
				}
			}

			var isEarlier = false;

			for (var i = 0; i < self.scope.renderedRows.length; i++) {
				if (self.scope.renderedRows[i].entity == entity) {
					self.scope.renderedRows.splice(i, 1);
					break
				}

				if (self.scope.toggleRow) {
					if (self.scope.renderedRows[i].entity == self.scope.toggleRow.entity) {
						isEarlier = true;
					}
				}
			}

			self.grid.setRenderedRows(self.scope.renderedRows);

			data.splice(data.indexOf(entity), 1);

			if (self.scope.toggleRow) {
				if (self.scope.toggleRow.entity == entity) {
					closeOrigToggleRow(self.scope.toggleRow, 'toggle', self.scope.toggleRow.actions.detailsTemplate, self.scope.rowHeight, true);
				}
				else {
					if (!isEarlier) {
						self.scope.step -= 60;

						refreshToggle(self.scope.toggleRow.clone, self.scope.rowHeight, self.scope.step, self.scope.toggleRow.actions.detailsTemplate);
					}
				}
			}
		}

		var editRow = function (row) {
			if ($('div[modal]').length != 0) {
				$('div[modal]').remove();
			}

			self.scope.rowEditing = row;

			$('body').append('<div modal value="rowEditing" enable-save="true" body-template-url="app/templates/directive-templates/edit-entity.html"></modal>');
			var modal = $('div[modal]');
			self.compile(modal)(self.scope);
		}


		var historyRow = function (row) {
			if ($('div[modal]').length != 0) {
				$('div[modal]').remove();
			}

			self.scope.rowHistoried = row;

			$('body').append('<div modal value="rowHistoried.actions.history"  body-template-url="app/templates/directive-templates/history.html"></history>');
			var modal = $('div[modal]');
			self.compile(modal)(self.scope);
		}

		self.scope.$watch('catHashKeys()', innerRecalcForData);
		self.scope.$watch(self.grid.config.data, recalcForData);
	}

	self.refreshOpt = function (otps) {
		self.opts = otps;
	}

	self.refreshCallback = function () {
		self.opts.contentOptions.checks.options.callback = function (check) {
			if (check) {
				if (check.isAll) {
					self.grid.rowCache.forEach(function (value) {
						value.actions.isCheck = true;
					});
				}
				else if (check.isNoOne) {
					self.grid.rowCache.forEach(function (value) {
						value.actions.isCheck = false;
					});
				}
				else if (check.isMarked) {
					self.grid.rowCache.forEach(function (value) {
					});
				}
				else if (check.isNotMarked) {
					self.grid.rowCache.forEach(function (value) {
						value.actions.isCheck = !value.actions.isCheck;
					});
				}
			};
		};
	}
};