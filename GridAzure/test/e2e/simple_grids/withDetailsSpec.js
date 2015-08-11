describe('Testing grid with details template', function () {
	beforeEach(function () {
		browser.get('/withDetailsTemplate');
		browser.waitForAngular();
	});

	it('should refresh data after click refresh button', function () {
		var oldText = element.all(by.css('.ngCellText')).get(3).getText();

		var btn = element(by.css('.options__refresh'));
		btn.click();

		var newText = element.all(by.css('.ngCellText')).get(3).getText();

		expect(oldText != newText).toBeTruthy();
	});

	//it('should filtrate after show records with not empty inputs', function () {
	//	var text = element.all(by.css('.ngCellText')).get(3).getText();

	//	var filterBtn = element(by.css('.filter__btn'));
	//	filterBtn.click();

	//	var date = element(by.model('opt.filter'));
	//	date.sendKeys(text);

	//	var show = element(by.css('.filter-list__button'));
	//	show.click();

	//	var newText = element.all(by.css('.ngCellText')).get(3).getText();

	//	expect(text).toEqual(newText);
	//});

	//it('should filtrate after change text of small filter', function () {
	//	var filter = element.all(by.model('searchValue'));
	//	filter.sendKeys('User');

	//	var newText = element.all(by.css('.ngRow')).get(0).getText();

	//	expect(newText).toContain('User');

	//	var btn = element(by.css('.split-btn__toggle'));
	//	btn.click();

	//	var date = element.all(by.css('.split-btn__list li')).get(1);
	//	date.click();

	//	filter = element.all(by.model('searchValue')).get(0);
	//	expect(filter.getText()).toEqual('');

	//	filter.sendKeys('User');

	//	newText = element.all(by.css('.row-name__value')).get(0).getText();

	//	expect(newText).toContain('User');
	//});

	it('should select row after click', function () {
		var row = element.all(by.css('.ngRow'));
		row.click();

		expect(element.all(by.css('.ngRow.selected')).count()).toEqual(1);

		expect(element.all(by.css('.ngRow.selected .action')).get(0).isDisplayed()).toBe(true);
	});
});

