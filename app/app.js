'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'generator'
]).
config(['$routeProvider', function($routeProvider) {
  //$routeProvider.otherwise({redirectTo: '/view1'});
}]);
