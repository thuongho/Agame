'use strict';

/**
 * @ngdoc overview
 * @name aGameApp
 * @description
 * # aGameApp
 *
 * Main module of the application.
 */
angular
  .module('aGameApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
        // remove the main controller because we have no logic for it
        // only need the main.html page
        // controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/edges', {
        templateUrl: 'views/edges.html',
        controller: 'EdgesController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
