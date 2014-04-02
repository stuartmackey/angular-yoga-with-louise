'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
  $routeProvider.when('/classes', {templateUrl: 'partials/classes.html', controller: 'ClassesCtrl'});
  $routeProvider.when('/timetable', {templateUrl: 'partials/timetable.html', controller: 'TimetableCtrl'});
  $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactCtrl'});
  $routeProvider.when('/other_therapies', {templateUrl: 'partials/other_therapies.html', controller: 'OtherTherapiesCtrl'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
