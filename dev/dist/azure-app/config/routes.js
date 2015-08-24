angular.module("azureApp").config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl: "/dist/azure-app/templates/navigation.html",
	}).when("/standartOne", {
		templateUrl: "/dist/azure-app/templates/grids/grid-standart-one.html",
		controller: "gridStandartOneCtrl"
	}).when("/standartTwo", {
		templateUrl: "/dist/azure-app/templates/grids/grid-standart-two.html",
		controller: "gridStandartTwoCtrl"
	}).when("/withDetailsTemplate", {
		templateUrl: "/dist/azure-app/templates/grids/grid-with-details-template.html",
		controller: "gridWithDetailsCtrl"
	}).when("/withUpload", {
		templateUrl: "/dist/azure-app/templates/grids/grid-with-upload.html",
		controller: "gridUploadCtrl"
	}).when("/withLoading", {
		templateUrl: "/dist/azure-app/templates/grids/grid-with-loading.html",
		controller: "gridLoadingCtrl"
	}).when("/testing", {
		templateUrl: "/dist/azure-app/templates/grids/grid-testing.html",
		controller: "gridTestingCtrl",
		controllerAs: "ctrl"
	}).when("/withMenu", {
		templateUrl: "/dist/azure-app/templates/grids/grid-with-menu.html",
		controller: "gridWithMenuCtrl"
	}).when("/withCards", {
		templateUrl: "/dist/azure-app/templates/grids/grid-with-cards.html",
		controller: "gridWithCardsCtrl"
	}).when("/withDiagrams", {
		templateUrl: "/dist/azure-app/templates/grids/grid-d3.html",
		controller: "gridD3Ctrl"
	}).when("/download", {
		templateUrl: "/dist/azure-app/templates/download.html"
	}).when("/navigation", {
		templateUrl: "/dist/azure-app/templates/navigation.html"
	})
    .otherwise({
    	redirectTo: '/'
    });
	
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}]);
