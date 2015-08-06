describe('Testing grid standart one', function () {
	beforeEach(function () {
		browser.get('/standartOne');
		browser.waitForAngular();

	});


	it('checkbox-select testing', function () {
		var btn = element(by.css('.options__refresh'));
		btn.click();

		//expect(element.all(by.css('.checkbox-select__list')).isDisplayed()).toBe(true);
	});
});

