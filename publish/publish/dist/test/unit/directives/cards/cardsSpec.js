describe('Cards Rendering', function () {
	var flipFunc = 'flip'
	var scope, element, elementScope, compile, timeout;
	
	beforeEach(module('gridTaskApp'));
	beforeEach(inject(function ($compile, $rootScope, CONTENT, $timeout) {
		compile = $compile;
		timeout = $timeout;
		scope = $rootScope.$new();

		scope.contentOptions = {
			datepickerOptions: {
				startDate: new Date(),
				endDate: new Date(),
			},
		};
		scope.cardsOptions = {
			cards: CONTENT.cardsOptions.cards,
			margin: 50
		}

		scope.startLeft = 40;
		scope.groupMarginRight = 50;

		element = compile("<div cards='cardsOptions' content-options='contentOptions'></div>")(scope);
		scope.$digest()

		$timeout.flush();

		elementScope = element.isolateScope();
	}));

	it("should render cards", function () {
		var left = scope.startLeft;

		if (scope.contentOptions.enableDebugging) {
			left += scope.cardsOptions.margin;
		}

		for (var i in scope.cardsOptions.cards) {
			left += scope.cardsOptions.margin;
		}

		expect(elementScope.cards[Object.keys(scope.cardsOptions.cards)[Object.keys(scope.cardsOptions.cards).length - 1]].style.left).toEqual(left - scope.cardsOptions.margin);
		expect(elementScope.groupStyle.width).toEqual(left + scope.groupMarginRight);
	});

	it("should replace cards after changed cards", function () {
		scope.cardsOptions.cards = {
			"testing": {
				"label": "Testing",
				"count": 1910000,
				"graphs": [
					{ "style": { "background-color": "rgb(10, 124, 130)", "height": "30px" } },
					{ "style": { "background-color": "rgb(57, 124, 100)", "height": "30px" } },
					{ "style": { "background-color": "rgb(57, 124, 100)", "height": "30px" } },
					{ "style": { "background-color": "rgb(57, 124, 100)", "height": "30px" } },
					{ "style": { "background-color": "rgb(57, 124, 100)", "height": "30px" } }
				]
			}
		}
		scope.$digest();
		timeout.flush();

		expect(Object.keys(elementScope.cardsOptions.cards).length).toEqual(Object.keys(scope.cardsOptions.cards).length);

		var left = scope.startLeft;

		if (scope.contentOptions.enableDebugging) {
			left += scope.cardsOptions.margin;
		}

		for (var i in scope.cardsOptions.cards) {
			left += scope.cardsOptions.margin;
		}

		expect(elementScope.cards[Object.keys(scope.cardsOptions.cards)[Object.keys(scope.cardsOptions.cards).length - 1]].style.left).toEqual(left - scope.cardsOptions.margin);
		expect(elementScope.groupStyle.width).toEqual(left + scope.groupMarginRight);
	});

	it("should card can flip", function () {
		expect(element[flipFunc]).toBeDefined();
	})
});