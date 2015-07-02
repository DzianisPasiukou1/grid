angular.module('downloadApp')
	.directive('uploadDoc', [function () {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				element.change(function () {
					var file = this.files[0];

					var fileReader = new FileReader();

					fileReader.readAsText(file);

					fileReader.onloadend = function () {
						var result = fileReader.result;

						if (scope.upload) {
							scope.upload(result);
						}
					}

					element.find(':file').val("");
				})
			}
		}
	}]);