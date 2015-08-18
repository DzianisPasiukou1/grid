describe('Routing Test', function () {

	it('should show list on the first page', function () {
		browser.get('/');
		expect(element(by.css('.page__element')).isDisplayed()).toBe(true);
	});

	it('should allow click button with redirect to another pages', function () {
		browser.get('/');
		element(by.linkText('Grid standart one')).click();
		browser.waitForAngular();
		expect(browser.getLocationAbsUrl()).toEqual('/standartOne');

		browser.wait(function () {
			return angular.element('.page-content').isPresent();
		}, 10000, 'message to log to console if element is not present after that time');

	});

	it('should allow click button with redirect to another pages', function () {
		browser.get('/');
		element(by.linkText('Grid standart two')).click();
		browser.waitForAngular();
		expect(browser.getLocationAbsUrl()).toEqual('/standartTwo');

		browser.wait(function () {
			return angular.element('.page-content').isPresent();
		}, 10000, 'message to log to console if element is not present after that time');

	});

	it('should allow click button with redirect to another pages', function () {
		browser.get('/');
		element(by.linkText('Grid with details template')).click();
		browser.waitForAngular();
		expect(browser.getLocationAbsUrl()).toEqual('/withDetailsTemplate');

		browser.wait(function () {
			return angular.element('.page-content').isPresent();
		}, 10000, 'message to log to console if element is not present after that time');

	});

	it('should allow click button with redirect to another pages', function () {
		browser.get('/');
		element(by.linkText('Grid with upload')).click();
		browser.waitForAngular();
		expect(browser.getLocationAbsUrl()).toEqual('/withUpload');

		browser.wait(function () {
			return angular.element('.page-content').isPresent();
		}, 10000, 'message to log to console if element is not present after that time');

	});

	it('should allow click button with redirect to another pages', function () {
		browser.get('/');
		element(by.linkText('Grid with loading')).click();
		browser.waitForAngular();
		expect(browser.getLocationAbsUrl()).toEqual('/withLoading');

		browser.wait(function () {
			return angular.element('.page-content').isPresent();
		}, 10000, 'message to log to console if element is not present after that time');

	});

	it('should allow click button with redirect to another pages', function () {
		browser.get('/');
		element(by.linkText('Grid for test')).click();
		browser.waitForAngular();
		expect(browser.getLocationAbsUrl()).toEqual('/testing');

		browser.wait(function () {
			return angular.element('.page-content').isPresent();
		}, 10000, 'message to log to console if element is not present after that time');

	});

	it('should allow click button with redirect to another pages', function () {
		browser.get('/');
		element(by.linkText('Grid with menu')).click();
		browser.waitForAngular();
		expect(browser.getLocationAbsUrl()).toEqual('/withMenu');

		browser.wait(function () {
			return angular.element('.page-content').isPresent();
		}, 10000, 'message to log to console if element is not present after that time');

	});

	it('should allow click button with redirect to another pages', function () {
		browser.get('/');
		element(by.linkText('Grid with cards')).click();
		browser.waitForAngular();
		expect(browser.getLocationAbsUrl()).toEqual('/withCards');

		browser.wait(function () {
			return angular.element('.page-content').isPresent();
		}, 10000, 'message to log to console if element is not present after that time');

	});

	it('should allow click button with redirect to another pages', function () {
		browser.get('/');
		element(by.linkText('Sankey Diagram Page')).click();
		browser.waitForAngular();
		expect(browser.getLocationAbsUrl()).toEqual('/withDiagrams');

		browser.wait(function () {
			return angular.element('.page-content').isPresent();
		}, 10000, 'message to log to console if element is not present after that time');

	});
});