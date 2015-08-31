(function () {
	'use strict'
	angular
		.module('ext.grid.modal')
		.controller('ExtModalController', ExtModalController);

	ExtModalController.$inject = ['$element', '$timeout'];

	function ExtModalController($element, $timeout) {
		var vm = this;
		vm.isModal = true;
		vm.fields = [];
		vm.myEntity = angular.copy(vm.value.entity);
		vm.modal = 'modal-ctrl';
		vm.save = save;
		vm.close = close;
		vm.resize = resize;
		vm.onInclude = onInclude;

		function save() {
			if (!Array.isArray(vm.value.actions.history)) {
				vm.value.actions.history = [];
			}

			vm.value.actions.history.push({
				dateChange: new Date(),
				oldObj: angular.copy(vm.value.entity),
				newObj: angular.copy(vm.myEntity)
			})

			for (var field in vm.myEntity) {
				vm.value.entity[field] = vm.myEntity[field];
			}

			close();
		};

		function close() {
			vm.myEntity = {};
			vm.isModal = false;
		};

		function resize() {
			vm.fade = {
				height: $element.find('.' + 'dialog').prop('scrollHeight') + 60 + 'px',
				width: $element.find('.' + 'dialog').prop('scrollWidth') + 'px'
			}
		};

		function onInclude() {
			$timeout(function () {
				vm.fade = {
					height: $element.find('.' + vm.modal).prop('scrollHeight') + 'px'
				}
			});
		}
	};
} ());