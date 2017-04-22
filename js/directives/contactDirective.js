var app = angular.module('customPage');

app.directive('contactDirective', function(textService){
  return {
    restrict: "E",
    templateUrl: 'js/templates/contactDirective.html',
    controller : function ($scope,$timeout){
    }
  }
});
