var app = angular.module('customPage');

app.directive('whoDirective', function(whoService){
  return {
    restrict: "E",
    templateUrl: 'js/templates/whoDirective.html',
    controller : function ($scope,$timeout){
      $scope.whoList = {};
        var promise = whoService.getText();
        promise.then(function(data) {
            $scope.whoList = data.data;
        });
    }
  }
});
