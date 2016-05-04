var app = angular.module('customPage');
app.controller('homeController',function($timeout){
  var vm = this;
  $timeout(function () {
    $('.slick-coffe').slick({
      dots: true,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
       {
         breakpoint: 768,
         settings: {
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           centerMode: true,
           centerPadding: '40px',
           slidesToShow: 1
         }
       }]
    });
  }, 0);

    jQuery('.post').addClass("hidden-div").viewportChecker({
        classToAdd: 'visible-div animated fadeIn'
   });


});
