describe("factory: cardsFactory", function () {
	var factory;

	beforeEach(module("gridTaskApp"));

	beforeEach(inject(function (cardsFactory) {
		factory = cardsFactory;
	}));

	it("register", function () {
		factory.register([], new Date, new Date, 145, {});
	});
})