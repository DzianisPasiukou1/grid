describe('factory: anyOtherClickFactory', function () {
	var factory, toastr, str, documentHandler;

	beforeEach(module('gridTaskApp'));

	beforeEach(inject(function (_anyOtherClickFactory_) {
		factory = _anyOtherClickFactory_;

		/**
		 * Description
		 * @return 
		 */
		documentHandler = function () {
			str = "click test";
		};
	}));

	it("_click", inject(function ($document) {
		factory._register(documentHandler);
		str = "test";

		expect(str).toEqual("test");
		$document.click();
		expect(str).toEqual("click test");

		factory._destroy(documentHandler);
	}));

	it("_destroy", inject(function ($document) {
		factory._register(documentHandler);
		str = "another test";
		factory._destroy(documentHandler);
		expect(str).toEqual("another test");
		$document.click();
		expect(str).toEqual("another test");
	}));

	it("_getHandlers", function () {
		expect(factory._getCountHandlers()).toEqual(0);
		factory._register(documentHandler);
		expect(factory._getCountHandlers()).toEqual(1);
		factory._destroy(documentHandler);
		expect(factory._getCountHandlers()).toEqual(0);
	});
});