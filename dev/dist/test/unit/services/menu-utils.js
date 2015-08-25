describe('factory: menuUtils', function () {
	var menu = {},
		columns = [],
		opt = {},
		totalWidth,
		visibleWidth,
		defaultWidth = 100,
		countColumns = 10;

	beforeEach(module('gridTaskApp'));

	beforeEach(inject(function (menuUtils) {
		menu = menuUtils;

		columns = [];
		for (var index = 0; index < countColumns; index++) {
			columns.push({
				toggleVisible: function () {
					this.visible = !this.visible;
				},
				visible: true,
				minWidth: defaultWidth,
				field: 'col' + index
			})
		}

		totalWidth = defaultWidth * countColumns;
		visibleWidth = totalWidth;

		opt = {};

		menu.register(columns, opt);
	}));

	afterEach(function () {
		menu.destroy();
	})

	it(':calls-_calcTotalWidth', function () {
		spyOn(menu, '_calcTotalWidth');
		menu.destroy();
		menu.register(columns, opt);
		
		expect(menu._calcTotalWidth.calls.count()).toEqual(1);
	});

	describe('register:settings', function () {
		var regOpt, regTotalWidth, regVisibleWidth, regColumns, regColCache;

		beforeEach(function () {
			regOpt = menu.getOptions(),
			regTotalWidth = menu.getTotalWidth(),
			regVisibleWidth = menu.getVisibleWidth(),
			regColumns = menu.getColumns(),
			regColCache = menu.getColCache();
		});

		it(':options.length', function () {
			expect(regOpt.values.length).toEqual(countColumns);
		})

		it(':totalWidth', function () {
			expect(regTotalWidth).toEqual(totalWidth);
		});

		it(':visibleWidth', function () {
			expect(regVisibleWidth).toEqual(visibleWidth);
		});

		it(':columns', function () {
			expect(regColumns.length).toEqual(columns.length);
		});

		it(':colCache', function () {
			expect(regColCache.length).toEqual(0);
		});
	})

	describe('toggle', function () {
		var windowWidth = 500,
			regColCache,
			regVisibleWidth,
			toggleVisibleWidth,
			countCacheCols;

		beforeEach(function () {
			var count = windowWidth / defaultWidth;

			if (Number.isInteger(count)) {
				countCacheCols = count + 1;
			}
			else {
				countCacheCols = Math.round(count);
			}

			toggleVisibleWidth = totalWidth - countCacheCols * defaultWidth;
		});

		it(':hide-columns', function () {
			menu.toggleColumns(windowWidth);

			regColCache = menu.getColCache();
			regVisibleWidth = menu.getVisibleWidth();

			expect(regColCache.length).toEqual(countCacheCols);
			expect(regVisibleWidth).toEqual(toggleVisibleWidth);
		})

		it(':show-columns', function () {
			windowWidth = totalWidth + 1 - defaultWidth;
			toggleVisibleWidth = totalWidth - defaultWidth;

			menu.toggleColumns(windowWidth);

			regColCache = menu.getColCache();
			regVisibleWidth = menu.getVisibleWidth(true);

			expect(regColCache.length).toEqual(1);
			expect(regVisibleWidth).toEqual(toggleVisibleWidth);
		})
	});
});