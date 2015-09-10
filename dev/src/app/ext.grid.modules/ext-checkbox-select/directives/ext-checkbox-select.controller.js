(function () {
	'use strict';

	angular
		.module('ext.grid.checkboxSelect')
		.controller('ExtCheckboxSelectController', ExtCheckboxSelectController);

	ExtCheckboxSelectController.$inject = ['$scope'];

	/**
	 * Description
	 * @method ExtCheckboxSelectController
	 * @param {} $scope
	 * @return 
	 */
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

		/**
		 * Description
		 * @method checkboxSelect
		 * @param {} event
		 * @param {} data
		 * @return 
		 */
		function checkboxSelect(event, data) {
			vm.options.callback(data);
		};

		/**
		 * Description
		 * @method changedSelected
		 * @param {} value
		 * @return 
		 */
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

		/**
		 * Description
		 * @method toggle
		 * @return 
		 */
		function toggle() {
			vm.isShow = !vm.isShow;
		};

		/**
		 * Description
		 * @method turnOff
		 * @return 
		 */
		function turnOff() {
			vm.isShow = false;
		};

		/**
		 * Description
		 * @method select
		 * @param {} action
		 * @return 
		 */
		function select(action) {
			vm.turnOff();
			vm.options.selected = action;
			$scope.$emit('checkboxSelect', action);
		};

		/**
		 * Description
		 * @method checked
		 * @param {} value
		 * @return 
		 */
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

		/**
		 * Description
		 * @method destroy
		 * @return 
		 */
		function destroy() {
			if (angular.isFunction(onCheckBoxSelect)) {
				onCheckBoxSelect();
			}
		};
	};
} ());