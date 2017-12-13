angular.module('sampleApp').directive('tabControl', function() {
  return {
    scope:  { testValue: '@' },
    restrict: 'E',
    transclude: true,
    controller: 'TabCtrl',
    templateUrl: '/app/partials/tab-control.html'
  }
});
