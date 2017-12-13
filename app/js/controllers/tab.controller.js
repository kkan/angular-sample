angular.module('sampleApp').controller('TabCtrl', ['$scope', function($scope) {
    $scope.panes = [];
    this.registerPane = function(pane){
      $scope.panes.push(pane);
    }
    $scope.activatePane = function(pane){
      angular.forEach($scope.panes, function(pane) { pane.active = false });
      pane.active = true;
    }
  }]);
