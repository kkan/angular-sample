angular.module('sampleApp').directive('tabControl', function() {
  return {
    scope: {},
    transclude: true,
    templateUrl: '/app/partials/tab-control.html'
  }
});
