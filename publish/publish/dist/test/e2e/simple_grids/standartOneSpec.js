describe('Testing grid standart one', function () {
	beforeEach(function () {
		browser.get('/standartOne');
		browser.waitForAngular();
	});

	it('should refresh data after click refresh button', function () {
		var oldText = element(by.css('.row-date__value')).getText();

		var btn = element(by.css('.options__refresh'));
		btn.click();

		var newText = element(by.css('.row-date__value')).getText();

		expect(oldText != newText).toBeTruthy();
	});

	it('should filtrate after show records with not empty inputs', function () {
		var text = element.all(by.css('.row-date__value')).get(1).getText();

		var filterBtn = element(by.css('.filter__btn'));
		filterBtn.click();

		var date = element(by.model('opt.filter'));
		date.sendKeys(text);

		var show = element(by.css('.filter-list__button'));
		show.click();

		var newText = element.all(by.css('.row-date__value')).get(0).getText();

		expect(text).toEqual(newText);
	});

	it('should filtrate after change text of small filter', function () {
		var filter = element.all(by.model('searchValue'));
		filter.sendKeys('200');

		var newText = element.all(by.css('.ngRow')).get(0).getText();

		expect(newText).toContain('200');

		var btn = element(by.css('.split-btn__toggle'));
		btn.click();

		var date = element.all(by.css('.split-btn__list li')).get(1);
		date.click();

		filter = element.all(by.model('searchValue')).get(0);
		expect(filter.getText()).toEqual('');

		filter.sendKeys('200');

		newText = element.all(by.css('.row-date__value')).get(0).getText();

		expect(newText).toContain('200');
	});

	it('should select row after click', function () {
		var row = element.all(by.css('.ngRow'));
		row.click();

		expect(element.all(by.css('.ngRow.selected')).count()).toEqual(1);

		expect(element.all(by.css('.ngRow.selected .action')).get(0).isDisplayed()).toBe(true);
	});
});

