describe('Custom UI Grid Rendering', function () {
	var scope, elementScope, element;

	beforeEach(module('gridTaskApp'));
	beforeEach(inject(function ($compile, $rootScope, CONTENT, templatesPath, gridStandartOneService) {
		scope = $rootScope.$new();
		var initializer = new Initializer(scope, null, CONTENT, templatesPath, $compile);
		initializer.init();

		scope.data = [];
		gridStandartOneService.get(function (data) {
			scope.data = data;
		});

		element = $compile('<custom-ui-grid grid-data="data" content-options="contentOptions" grid-options="uiGridOptions"></custom-ui-grid>')(scope);
		scope.$digest();

		elementScope = element.isolateScope();
	}));

	it("should render grid", function () {
		var canvas = element.find('.ui-grid-canvas');

		expect(canvas.length).toEqual(1);

		expect(canvas.scope().grid.rows.length).toEqual(scope.data.length);
	});
});