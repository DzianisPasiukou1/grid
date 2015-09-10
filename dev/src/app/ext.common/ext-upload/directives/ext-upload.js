(function () {
	'use strict';

	angular
		.module('ext.common.upload')
		.directive('extUpload', extUpload);

	extUpload.$inject = ['extUploadTemplatesPath'];

	/**
	 * Description
	 * @method extUpload
	 * @param {} templatesPath
	 * @return directive
	 */
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
			link: link
		};

		return directive;

		/**
		 * Description
		 * @method link
		 * @param {} scope
		 * @param {} element
		 * @param {} attrs
		 * @param {} vm
		 * @return 
		 */
		function link(scope, element, attrs, vm) {
			element.find(':file').change(fileChange);

			/**
			 * Description
			 * @method fileChange
			 * @return 
			 */
			function fileChange() {
				var file = this.files[0];

				if (file.name.indexOf('json') != -1) {
					var fileReader = new FileReader();

					fileReader.readAsText(file);

					/**
					 * Description
					 * @method onloadend
					 * @return 
					 */
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