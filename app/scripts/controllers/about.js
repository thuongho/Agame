'use strict';

/**
 * @ngdoc function
 * @name aGameApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the aGameApp
 */
angular.module('aGameApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
