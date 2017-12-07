'use strict';

var sampleApp = angular.module('sampleApp', ['ngRoute']);

var controllers = require.context(".", true, /\.controller\.js$/);
controllers.keys().forEach(function (key) { controllers(key) });

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        templateUrl: './app/partials/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
