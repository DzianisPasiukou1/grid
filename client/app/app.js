'use strict';

angular.module('gridExpressApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ngGrid',
  'ui.grid',
  'ui.grid.selection',
  'ui.grid.expandable',
  'ui.select2',
  'pascalprecht.translate'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  	$urlRouterProvider
      .otherwise('/');

  	$stateProvider.state('standartOne', {
  		url: '/standartOne',
  		templateUrl: 'app/templates/grids/grid-standart-one.html',
  		controller: 'gridStandartOneCtrl'
  	})
		.state('standartTwo', {
			url: '/standartTwo',
			templateUrl: 'app/templates/grids/grid-standart-two.html',
			controller: 'gridStandartTwoCtrl'
		})
		.state('withDetailsTemplate', {
			url: '/withDetailsTemplate',
			templateUrl: 'app/templates/grids/grid-with-details-template.html',
			controller: 'gridWithDetailsCtrl'
		})
		.state('withUpload', {
			url: '/withUpload',
			templateUrl: 'app/templates/grids/grid-with-upload.html',
			controller: 'gridUploadCtrl'
		})
		.state('withLoading', {
			url: '/withLoading',
			templateUrl: 'app/templates/grids/grid-with-loading.html',
			controller: 'gridLoadingCtrl'
		})
		.state('testing', {
			url: '/testing',
			templateUrl: 'app/templates/grids/grid-testing.html',
			controller: 'gridTestingCtrl',
			controllerAs: 'ctrl'
		})
		.state('withMenu', {
			url: '/withMenu',
			templateUrl: 'app/templates/grids/grid-with-menu.html',
			controller: 'gridWithMenuCtrl'
		})
		.state('withCards', {
			url: '/withCards',
			templateUrl: 'app/templates/grids/grid-with-cards.html',
			controller: 'gridWithCardsCtrl'
		})
		.state('withDiagrams', {
			url: '/withDiagrams',
			templateUrl: 'app/templates/grids/grid-d3.html',
			controller: 'gridD3Ctrl'
		})
		.state('download', {
			url: '/download',
			templateUrl: 'app/templates/download.html'
		})
  	.state('navigation', {
  		url: '/',
  		templateUrl: 'app/templates/navigation.html'
  	});

  	$locationProvider.html5Mode(true);
  	$httpProvider.interceptors.push('authInterceptor');
  })

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
  	return {
  		// Add authorization token to headers
  		request: function (config) {
  			config.headers = config.headers || {};
  			if ($cookieStore.get('token')) {
  				config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
  			}
  			return config;
  		},

  		// Intercept 401s and redirect you to login
  		responseError: function (response) {
  			if (response.status === 401) {
  				$location.path('/login');
  				// remove any stale tokens
  				$cookieStore.remove('token');
  				return $q.reject(response);
  			}
  			else {
  				return $q.reject(response);
  			}
  		}
  	};
  })

  .run(function ($rootScope, $location, Auth) {
  	// Redirect to login if route requires auth and you're not logged in
  	$rootScope.$on('$stateChangeStart', function (event, next) {
  		Auth.isLoggedInAsync(function (loggedIn) {
  			if (!loggedIn) {
  				//event.preventDefault();
  				$location.path('/login');
  			}
  		});
  	});
  }).value('templatesPath', 'components/grid/templates/');

