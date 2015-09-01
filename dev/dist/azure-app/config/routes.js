(function () {
	'use strict'

	angular
		.module('azureApp')
		.config(config);

	config.$inject = ['$routeProvider', '$locationProvider'];

	function config($routeProvider, $locationProvider) {
		$routeProvider.when("/", {
			templateUrl: "/dist/azure-app/templates/navigation.html",
		}).when("/standartOne", {
			templateUrl: "/dist/azure-app/templates/grids/grid-standart-one.html",
			controller: "GridStandartOneController",
			controllerAs: "vm"
		}).when("/standartTwo", {
			templateUrl: "/dist/azure-app/templates/grids/grid-standart-two.html",
			controller: "GridStandartTwoController",
			controllerAs: "vm"
		}).when("/withDetailsTemplate", {
			templateUrl: "/dist/azure-app/templates/grids/grid-with-details-template.html",
			controller: "GridWithDetailsController",
			controllerAs: "vm"
		}).when("/withUpload", {
			templateUrl: "/dist/azure-app/templates/grids/grid-with-upload.html",
			controller: "GridUploadController",
			controllerAs: "vm"
		}).when("/withLoading", {
			templateUrl: "/dist/azure-app/templates/grids/grid-with-loading.html",
			controller: "GridLoadingController",
			controllerAs: "vm"
		}).when("/testing", {
			templateUrl: "/dist/azure-app/templates/grids/grid-testing.html",
			controller: "GridTestingController",
			controllerAs: "vm"
		}).when("/withMenu", {
			templateUrl: "/dist/azure-app/templates/grids/grid-with-menu.html",
			controller: "GridWithMenuController",
			controllerAs: "vm"
		}).when("/withCards", {
			templateUrl: "/dist/azure-app/templates/grids/grid-with-cards.html",
			controller: "GridWithCardsController",
			controllerAs: "vm"
		}).when("/withDiagrams", {
			templateUrl: "/dist/azure-app/templates/grids/grid-d3.html",
			controller: "GridD3Controller",
			controllerAs: "vm"
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
	};
} ());
