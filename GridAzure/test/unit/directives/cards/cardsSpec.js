describe('Cards Rendering', function () {
	var scope, element, elementScope, compile, timeout;

	beforeEach(module('gridTaskApp'));
	beforeEach(inject(function ($compile, $rootScope, content, $timeout) {
		compile = $compile;
		timeout = $timeout;
		scope = $rootScope.$new();

		scope.margin = 50;
		scope.contentOptions = {};
		scope.startDate = new Date();
		scope.endDate = new Date();
		scope.cards = content.cardsOptions.cards;

		element = compile("<cards content-options='contentOptions' margin='margin' start-date='startDate' end-date='endDate' cards='cards'</cards>")(scope);
		scope.$digest()

		$timeout.flush(100);
	}));

	it("should render cards", function () {
		expect(element.find('#debug').context).toBeUndefined();
		expect(element.find('.my-card').length).toEqual(Object.keys(scope.cards).length);
	});

	it("should flip card after click", function () {
		for (var card in scope.cards) {
			var startState = element.find('#' + card).find('.front');
			element.find('#' + card).click();
			var endState = element.find('#' + card).find('.front');

			expect(startState.css('z-index')).toBe('');
			expect(endState.css('z-index')).toBe('');
		}
	});
});