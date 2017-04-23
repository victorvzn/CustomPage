var app = angular.module('customPage');

app.service('subpageService', function($http, $q) {

  this.getText = function(tabName){
	  var deferred = $q.defer();
	  var url = 'js/json/' + tabName + 'Json.json';
	  $http.get(url).then(function(data) {
	      deferred.resolve(data);
	  });
      return deferred.promise;
  };

});
