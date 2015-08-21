describe('Sankey Page Rendering', function () {
	beforeEach(function () {
		browser.get('/withDiagrams');
		browser.waitForAngular();
	});

	it('should toggle overlay', function () {
		var toggleBtn = element(by.css('.custom-overlay__toggle'));
		toggleBtn.click();
	});
});