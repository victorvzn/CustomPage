var app = angular.module('customPage');

app.directive('contactDirective', function(contactService){
  return {
    restrict: "E",
    templateUrl: 'js/templates/contactDirective.html',
    controller : function ($scope,$timeout){
      $scope.contactList = {};
        var promise = contactService.getText();
        promise.then(function(data) {
            $scope.contactList = data.data[0];
            console.log(data.data[0].contact_info);
        });
    }
  }
});
