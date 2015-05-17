'use strict';

angular.module('aGameApp').directive('navbar', function(){
  // directive returns a special object with 3 options
  return {
    // restrict to be an element
    restrict: 'E',
    templateUrl: 'views/navbar.html',
    controller: 'NavigationController'
  }
});