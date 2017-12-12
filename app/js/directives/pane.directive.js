angular.module('sampleApp').directive('pane', function() {
  return {
    scope: {
      title: '=',
      onPaneActivated: '&',
      active: '='
    },
    transclude: true,
    templateUrl: '/app/partials/pane.html',
    require: '^tabControl',
    link: function($scope, elem, attrs, ctrl){
      ctrl.registerPane($scope);
    }
  }
});
