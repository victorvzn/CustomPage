var app = angular.module('customPage');

app.directive('especialityDirective', function(especialityService){
  return {
    restrict: "E",
    templateUrl: 'js/templates/especialityDirective.html',
    controller : function ($scope,$timeout){
      $scope.especialityList = {};
        var promise = especialityService.getText();
        promise.then(function(data) {
            $scope.especialityList = data.data;
        });
    }
  }
});
