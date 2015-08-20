angular.module("azureApp").config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl: "/src/azure-app/templates/navigation.html",
	}).when("/standartOne", {
		templateUrl: "/src/azure-app/templates/grids/grid-standart-one.html",
		controller: "gridStandartOneCtrl"
	}).when("/standartTwo", {
		templateUrl: "/src/azure-app/templates/grids/grid-standart-two.html",
		controller: "gridStandartTwoCtrl"
	}).when("/withDetailsTemplate", {
		templateUrl: "/src/azure-app/templates/grids/grid-with-details-template.html",
		controller: "gridWithDetailsCtrl"
	}).when("/withUpload", {
		templateUrl: "/src/azure-app/templates/grids/grid-with-upload.html",
		controller: "gridUploadCtrl"
	}).when("/withLoading", {
		templateUrl: "/src/azure-app/templates/grids/grid-with-loading.html",
		controller: "gridLoadingCtrl"
	}).when("/testing", {
		templateUrl: "/src/azure-app/templates/grids/grid-testing.html",
		controller: "gridTestingCtrl",
		controllerAs: "ctrl"
	}).when("/withMenu", {
		templateUrl: "/src/azure-app/templates/grids/grid-with-menu.html",
		controller: "gridWithMenuCtrl"
	}).when("/withCards", {
		templateUrl: "/src/azure-app/templates/grids/grid-with-cards.html",
		controller: "gridWithCardsCtrl"
	}).when("/withDiagrams", {
		templateUrl: "/src/azure-app/templates/grids/grid-d3.html",
		controller: "gridD3Ctrl"
	}).when("/download", {
		templateUrl: "/src/azure-app/templates/download.html"
	})
    .otherwise({
    	redirectTo: '/'
    });

	//$locationProvider.html5Mode({
	//	enabled: true,
	//	requireBase: false
	//});
}]);
