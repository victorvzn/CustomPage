var app = angular.module('customPage');

app.directive('whoDirective', function(textService){
  return {
    restrict: "E",
    templateUrl: 'js/templates/whoDirective.html',
    controller : function ($scope,$timeout){
    }
  }
});
