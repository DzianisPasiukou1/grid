describe('Testing grid with cards UI', function () {
	beforeEach(function () {
		browser.get('/withCards');
		browser.waitForAngular();
	});

	it('should filtrate after show records with not empty inputs', function () {
		var text = element.all(by.css('.ui-grid-cell .ui-grid-cell-contents')).get(0).getText();

		var filterBtn = element(by.css('.filter__btn'));
		filterBtn.click();

		var date = element(by.model('opt.filter'));
		date.sendKeys(text);

		var show = element(by.css('.filter-list__button'));
		show.click();

		var newText = element.all(by.css('.ui-grid-cell .ui-grid-cell-contents')).get(0).getText();

		expect(text).toEqual(newText);
	});

	it('should filtrate after change text of small filter', function () {
		var filter = element.all(by.model('searchValue'));
		filter.sendKeys('200');

		var newText = element.all(by.css('.ui-grid-row')).get(0).getText();

		expect(newText).toContain('200');

		var btn = element(by.css('.split-btn__toggle'));
		btn.click();

		var date = element.all(by.css('.split-btn__list li')).get(1);
		date.click();

		filter = element.all(by.model('searchValue')).get(0);
		expect(filter.getText()).toEqual('');

		filter.sendKeys('200');

		newText = element.all(by.css('.ui-grid-cell .ui-grid-cell-contents')).get(0).getText();

		expect(newText).toContain('200');
	});

	it('should select row after click', function () {
		var row = element.all(by.css('.ui-grid-row'));
		row.click();

		expect(element.all(by.css('.ui-grid-row.ui-grid-row-selected')).count()).toEqual(1);

		expect(element.all(by.css('.ui-grid-row.ui-grid-row-selected .action')).get(0).isDisplayed()).toBe(true);
	});
});

