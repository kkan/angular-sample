angular.module('sampleApp').controller('TabCtrl', ['$scope', function($scope) {
    $scope.panes = [{active: true, title: 'asdsadsd'}];
    this.registerPane = function(pane){
      $scope.panes.push(pane);
      debugger
    }
  }]);
