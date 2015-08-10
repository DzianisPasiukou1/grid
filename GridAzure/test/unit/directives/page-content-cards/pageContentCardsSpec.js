describe('Page Content Cards Rendering', function () {
	beforeEach(module('gridTaskApp'));

	var compile, scope;

	beforeEach(inject(function ($compile, $rootScope) {
		compile = $compile;
		scope = $rootScope.$new();

		scope.data = [
	{ "name": "A", "value": 700000 },
	{ "name": "B", "value": 700000 },
	{ "name": "C", "value": 700000 },
	{ "name": "D", "value": 700000 },
	{ "name": "E", "value": 700000 },
	{ "name": "F", "value": 700000 },
	{ "name": "G", "value": 700000 },
	{ "name": "H", "value": 700000 },
	{ "name": "I", "value": 700000 },
	{ "name": "J", "value": 700000 }
		];

	}))

	it('should render grid', function () {
		var element = compile('<page-CONTENT-cards grid="grid" grid-data="data"></page-CONTENT-cards>')(scope);
		scope.$digest();

		expect(element.find('.ui-grid')).toBeDefined();

		expect(element.find('.ui-grid').isolateScope().grid).toBeDefined();
	});
});