describe('Chart Segment Rendering', function () {
	var element, elementScope, scope;

	beforeEach(module('gridTaskApp'));
	beforeEach(inject(function ($compile, $rootScope) {
		scope = $rootScope.$new();
		scope.selectedUsers = {};

		element = compile('<chart-segment selected-users="selectedUsers"></chart-segment>')(scope);
	}))
});