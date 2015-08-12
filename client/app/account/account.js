'use strict';

angular.module('gridExpressApp')
  .config(function ($stateProvider) {
  	$stateProvider
      .state('login', {
      	url: '/login',
      	templateUrl: 'app/account/login/login.html',
      	controller: 'LoginCtrl'
      })
  });