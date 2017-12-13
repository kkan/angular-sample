angular.module('sampleApp').directive('pane', function() {
  return {
    scope: {
      title: '@',
      activatePane: '&',
      active: '@'
    },
    restrict: 'E',
    transclude: true,
    templateUrl: '/app/partials/pane.html',
    controller: 'TabCtrl',
    require: '^tabControl',
    link: function(scope, element, attrs, ctrl){
      ctrl.registerPane(scope);
    }
  }
});
