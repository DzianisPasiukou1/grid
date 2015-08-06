describe('Chart Segment Controller', function () {
	var ctrl, scope;
	beforeEach(module('gridTaskApp'));
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		scope.selectedUsers = [{ touchpoints: 'users with 1 touchpoint' }];

		ctrl = $controller('chartSegmentCtrl', {
			$scope: scope
		});
	}));

	it('should deleted user', function () {
		scope.deleteUser(scope.selectedUsers[0], 0);

		expect(scope.selectedUsers.length).toBe(0);
	});
});