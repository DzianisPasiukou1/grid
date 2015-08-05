describe('Dropdown Directive Rendering', function () {
	beforeEach(module('gridTaskApp'));
	var compile, mockBackend, scope;
	beforeEach(inject(function ($compile, $httpBackend, $rootScope) {
		compile = $compile;
		mockBackend = $httpBackend;
		scope = $rootScope.$new();

		scope.options = {
			values: [
			{
				label: 'lbl1'
			},
			{
				label: 'lbl2'
			}]
		}
	}));

	it('should select first element', function () {
		var element = compile('<dropdown dropdown-options="options"></dropdown>')(scope);
		scope.$digest();

		expect(element.isolateScope().options.selected.label).toEqual('lbl1');
	});

	it('should set default hide class', function () {
		var element = compile('<dropdown dropdown-options="options"></dropdown>')(scope);
		scope.$digest();

		expect(element.isolateScope().options.showClass).toEqual('icon-menu-up');
	});

	it('should set default hide class', function () {
		var element = compile('<dropdown dropdown-options="options"></dropdown>')(scope);
		scope.$digest();

		expect(element.isolateScope().options.hideClass).toEqual('icon-menu-down');
	});

	it('should set hide class', function () {
		scope.options.hideClass = 'glyphicon glyphicon-menu-down'

		var element = compile('<dropdown dropdown-options="options"></dropdown>')(scope);
		scope.$digest();

		expect(element.isolateScope().options.hideClass).toEqual('glyphicon glyphicon-menu-down');
	});

	it('should set show class', function () {
		scope.options.showClass = 'glyphicon glyphicon-menu-up'

		var element = compile('<dropdown dropdown-options="options"></dropdown>')(scope);
		scope.$digest();

		expect(element.isolateScope().options.showClass).toEqual('glyphicon glyphicon-menu-up');
	});

	it('should render label for dropdown-menu', function () {
		scope.options.isMenu = true;
		scope.options.label = 'menu';

		var element = compile('<dropdown dropdown-options="options"></dropdown>')(scope);
		scope.$digest();

		expect(element.find('.my-dropdown__text').text()).toEqual('menumenu');
	});

	it('select for dropdown', function () {
		var element = compile('<dropdown dropdown-options="options"></dropdown>')(scope);
		scope.$digest();

		element.isolateScope().select(scope.options.values[1]);

		scope.$digest();
		expect(element.find('.my-dropdown__text').text()).toEqual('lbl2');
	});

	it('select for dropdown menu', function () {
		scope.options.isMenu = true;
		scope.options.label = 'menu';

		var element = compile('<dropdown dropdown-options="options"></dropdown>')(scope);
		scope.$digest();

		element.isolateScope().select(scope.options.values[2]);
		scope.$digest();

		expect(element.find('.my-dropdown__text').text()).toEqual('menumenu');
	});
});
