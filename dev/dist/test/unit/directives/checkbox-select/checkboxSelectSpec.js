describe('Checkbox-select Testing Rendering', function () {
	var compile, scope, element, elementScope;

	beforeEach(module('gridTaskApp'));
	beforeEach(inject(function ($compile, $rootScope, CONTENT) {
		compile = $compile;
		scope = $rootScope.$new();

		scope.options = CONTENT.checks.options;
		/**
		 * Description
		 * @method callback
		 * @param {} action
		 * @return 
		 */
		scope.options.callback = function (action) {
			this.callbackValue = 100;
		}

		element = compile('<div checkbox-select="options"></div>')(scope);
		scope.$digest();

		elementScope = element.isolateScope();
	}));

	it('should open/close', function () {
		elementScope.toggle();
		expect(elementScope.isShow).toBeTruthy();

		elementScope.toggle();
		expect(elementScope.isShow).toBeFalsy();
	});

	it('should select', function () {
		elementScope.select(scope.options.actions.all);

		expect(elementScope.options.selected.label).toEqual('All');
	});

	it('should call callback', function () {
		elementScope.select(scope.options.actions.all);

		expect(elementScope.options.callbackValue).toEqual(100);
	});

	it('should render list of actions', function () {
		expect(element.find('.checkbox-select__list li').length).toEqual(Object.keys(scope.options.actions).length);
	});

	it('should set checkbox true after select All', function () {
		elementScope.select(scope.options.actions.all);

		expect(elementScope.options.selected.check).toBeTruthy();
	});

	it('should set checkbox false after select No one', function () {
		elementScope.select(scope.options.actions.noOne);

		expect(elementScope.options.selected.check).toBeFalsy();
	});
});