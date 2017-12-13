'use strict';

var sampleApp = angular.module('sampleApp', ['ngRoute']);

var controllers = require.context(".", true, /\.controller\.js$/);
controllers.keys().forEach(function (key) { controllers(key) });

var directives = require.context(".", true, /\.directive\.js$/);
directives.keys().forEach(function (key) { directives(key) });

sampleApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        controller: 'MainCtrl',
        templateUrl: '/app/partials/main.html'
      })
      .when('/tabs', {
        controller: 'TabCtrl',
        templateUrl: '/app/partials/tabs.html'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
