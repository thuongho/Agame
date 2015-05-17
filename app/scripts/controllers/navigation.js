'use strict';

// use angular module to pull up the angular app
angular.module('aGameApp').controller('NavigationController', function($scope, $location){

  // define isActive method on scope
  $scope.isActive = function(path){
    // take the current path and comparing it to provided path
    return path === $location.path();
  };  
});