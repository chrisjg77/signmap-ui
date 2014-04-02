
// Define this module and make it dependent on jquery.
define(['jquery'],function( $ ) {
  
  setTimeout(function() {
    $('body').addClass('loaded');
  },1000);

});