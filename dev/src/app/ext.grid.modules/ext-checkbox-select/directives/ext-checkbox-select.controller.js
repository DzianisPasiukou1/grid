﻿(function () {
	'use strict'

	angular
		.module('ext.grid.checkboxSelect')
		.controller('ExtCheckboxSelectController', ExtCheckboxSelectController);

	ExtCheckboxSelectController.$inject = ['$scope'];

	function ExtCheckboxSelectController($scope) {
		var vm = this;

		vm.options.selected = vm.options.selected || {};

		if (vm.options.callback) {
			$scope.$on('checkboxSelect', checkboxSelect);
		}

		$scope.$watch('options.selected', changedSelected);

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
			vm.isShow = !$scope.isShow;
		};

		function turnOff() {
			vm.isShow = false;
		};

		function select(action) {
			vm.turnOff();
			vm.options.selected = action;
			vm.$emit('checkboxSelect', action);
		};

		function checked(value) {
			vm.turnOff();
			
			if (value) {
				vm.options.selected = $scope.options.actions.all;
			}
			else {
				vm.options.selected = $scope.options.actions.noOne;
			}
			$scope.$emit('checkboxSelect', vm.options.selected);
		};
	};
} ());