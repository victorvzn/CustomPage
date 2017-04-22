var app = angular.module('customPage');

app.directive('especialityDirective', function(textService){
  return {
    restrict: "E",
    templateUrl: 'js/templates/especialityDirective.html',
    controller : function ($scope,$timeout){
    }
  }
});
