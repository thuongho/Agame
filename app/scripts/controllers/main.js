'use strict';

/**
 * @ngdoc function
 * @name aGameApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aGameApp
 */
angular.module('aGameApp')
  .controller('MainCtrl', function ($scope, $resource) {
    // request to rails api
    // $resource('/api/edges').query();
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
