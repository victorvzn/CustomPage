var app = angular.module('customPage');

app.directive('subpageDirective', function (subpageService){
  return {
    restrict: "E",
    scope: {
      "template": "@"
    },
    templateUrl: function (el, attr) {
      console.log(attr.template)
      return 'js/templates/' + attr.template + 'Directive.html';
    },
    controller: function ($scope, $timeout) {
      $scope.dataList = {};
      console.log("controller", $scope.template);
        var promise = subpageService.getText($scope.template);
        promise.then(function (data) {
            console.log(data.data);
            $scope.dataList = data.data;
        });
    }
  }
});
