angular.module("gridTaskApp").config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl: "app/templates/navigation.html",
	}).when("/standartOne", {
		templateUrl: "app/templates/grids/grid-standart-one.html",
		controller: "gridStandartOneCtrl"
	}).when("/standartTwo", {
		templateUrl: "app/templates/grids/grid-standart-two.html",
		controller: "gridStandartTwoCtrl"
	}).when("/withDetailsTemplate", {
		templateUrl: "app/templates/grids/grid-with-details-template.html",
		controller: "gridWithDetailsCtrl"
	}).when("/withUpload", {
		templateUrl: "app/templates/grids/grid-with-upload.html",
		controller: "gridUploadCtrl"
	}).when("/withLoading", {
		templateUrl: "app/templates/grids/grid-with-loading.html",
		controller: "gridLoadingCtrl"
	}).when("/testing", {
		templateUrl: "app/templates/grids/grid-testing.html",
		controller: "gridTestingCtrl"
	}).when("/withMenu", {
		templateUrl: "app/templates/grids/grid-with-menu.html",
		controller: "gridWithMenuCtrl"
	}).when("/withCards", {
		templateUrl: "app/templates/grids/grid-with-cards.html",
		controller: "gridWithCardsCtrl"
	}).when("/navigation", {
		templateUrl: "app/templates/navigation.html",
	})
    .otherwise({
    	redirectTo: '/'
    });

	$locationProvider.html5Mode(true);
}]);
