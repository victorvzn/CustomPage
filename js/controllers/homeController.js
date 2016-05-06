var app = angular.module('customPage');
app.controller('homeController',function(textService){
  var vm = this;
  
  jQuery('.post').addClass("hidden-div").viewportChecker({
    classToAdd: 'visible-div animated fadeIn'
  });


});
