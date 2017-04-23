var app = angular.module('customPage');

app.directive('subpageDirective', function (subpageService){
  return {
    restrict: "E",
    scope: {
      "template": "@"
    },
    templateUrl: function (el, attr) {
      return 'js/templates/' + attr.template + 'Directive.html';
    },
    controller: function ($scope, $timeout) {
      $scope.dataList = {};
        var promise = subpageService.getText($scope.template);
        promise.then(function (data) {
            $scope.dataList = data.data;
        });
    }
  }
});
