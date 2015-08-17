angular.module("azureApp").config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl: "azure-app/templates/navigation.html",
	}).when("/standartOne", {
		templateUrl: "azure-app/templates/grids/grid-standart-one.html",
		controller: "gridStandartOneCtrl"
	}).when("/standartTwo", {
		templateUrl: "azure-app/templates/grids/grid-standart-two.html",
		controller: "gridStandartTwoCtrl"
	}).when("/withDetailsTemplate", {
		templateUrl: "azure-app/templates/grids/grid-with-details-template.html",
		controller: "gridWithDetailsCtrl"
	}).when("/withUpload", {
		templateUrl: "azure-app/templates/grids/grid-with-upload.html",
		controller: "gridUploadCtrl"
	}).when("/withLoading", {
		templateUrl: "azure-app/templates/grids/grid-with-loading.html",
		controller: "gridLoadingCtrl"
	}).when("/testing", {
		templateUrl: "azure-app/templates/grids/grid-testing.html",
		controller: "gridTestingCtrl",
		controllerAs: "ctrl"
	}).when("/withMenu", {
		templateUrl: "azure-app/templates/grids/grid-with-menu.html",
		controller: "gridWithMenuCtrl"
	}).when("/withCards", {
		templateUrl: "azure-app/templates/grids/grid-with-cards.html",
		controller: "gridWithCardsCtrl"
	}).when("/withDiagrams", {
		templateUrl: "azure-app/templates/grids/grid-d3.html",
		controller: "gridD3Ctrl"
	}).when("/download", {
		templateUrl: "azure-app/templates/download.html"
	})
    .otherwise({
    	redirectTo: '/'
    });

	$locationProvider.html5Mode(true);
}]);
