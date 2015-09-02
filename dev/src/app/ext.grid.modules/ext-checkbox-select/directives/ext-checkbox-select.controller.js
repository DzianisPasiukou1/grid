(function () {
	'use strict'

	angular
		.module('ext.grid.checkboxSelect')
		.controller('ExtCheckboxSelectController', ExtCheckboxSelectController);

	ExtCheckboxSelectController.$inject = ['$scope'];

	function ExtCheckboxSelectController($scope) {
		var vm = this;

		vm.options.selected = vm.options.selected || {};

		if (angular.isFunction(vm.options.callback)) {
			var onCheckBoxSelect = $scope.$on('checkboxSelect', checkboxSelect);
		}

		$scope.$on('$destroy', destroy);

		$scope.$watch('vm.options.selected', changedSelected);

		vm.toggle = toggle;
		vm.turnOff = turnOff;
		vm.select = select;
		vm.checked = checked;

		function checkboxSelect(event, data) {
			vm.options.callback(data);
		};

		function changedSelected(value) {
			if (value) {
				if (value.isAll) {
					value.check = true;
				}
				else {
					value.check = false;
				}
			}
		};

		function toggle() {
			vm.isShow = !vm.isShow;
		};

		function turnOff() {
			vm.isShow = false;
		};

		function select(action) {
			vm.turnOff();
			vm.options.selected = action;
			$scope.$emit('checkboxSelect', action);
		};

		function checked(value) {
			vm.turnOff();

			if (value) {
				vm.options.selected = vm.options.actions.all;
			}
			else {
				vm.options.selected = vm.options.actions.noOne;
			}

			$scope.$emit('checkboxSelect', vm.options.selected);
		};

		function destroy() {
			if (angular.isFunction(onCheckBoxSelect)) {
				onCheckBoxSelect();
			}
		};
	};
} ());