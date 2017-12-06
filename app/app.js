var angular = require('angular');
var ngRoute = require('angular-route');
// var controllers = require('./scripts/controllers/main.controller.js');

var app = angular.module('sample', ['ngRoute']);

app
  .controller('MainCtrl', function ($scope) {
    console.log('MainCtrl');
    $scope.things = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

app
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        templateUrl: './app/views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
