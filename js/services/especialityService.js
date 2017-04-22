var app = angular.module('customPage');

app.service('especialityService', function($http, $q) {

  var deferred = $q.defer();
  $http.get('js/json/especialityJson.json').then(function(data) {
      deferred.resolve(data);
  });
  this.getText = function(){
      return deferred.promise;
  };

});
