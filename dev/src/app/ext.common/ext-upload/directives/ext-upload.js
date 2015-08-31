(function () {
	'use strict'

	angular
		.module('ext.common.upload')
		.directive('extUpload', extUpload);

	extUpload.$inject = ['extUploadTemplatesPath'];

	function extUpload(templatesPath) {
		var directive = {
			restrict: 'EA',
			scope: {
				upload: '=uploadCallback',
				label: '='
			},
			controller: 'ExtUploadController',
			controllerAs: 'vm',
			bindToController: true,
			templateUrl: templatesPath + 'ext-upload.html',
			lin: link
		};

		return directive;

		function link(scope, element, attrs, vm) {
			element.find(':file').change();

			function fileChange() {
				var file = this.files[0];

				if (file.name.indexOf('json') != -1) {
					var fileReader = new FileReader();

					fileReader.readAsText(file);

					fileReader.onloadend = function () {
						var result = fileReader.result;

						vm.jsonData = JSON.parse(result);

						if (vm.upload) {
							vm.upload(vm.jsonData);
						}
					}

					element.find(':file').val("");
				}
				else {
					element.find(':file').val("");
				}
			};
		};
	};
} ());