
// Define this module and make it dependent on jquery.
define(['jquery'],function( $ ) {
  
  // setTimeout(function() {
  //   $('body').addClass('loaded');
  // },1000);

  var $this = $(this),
      $avatar = $('.avatar-feed li'),
      $count = $('#signerCount'),
      last = $avatar.length,
      count = 0;

  var counter = setInterval(function() {

    count = count+25;
    $count.html(count);

  },25);

  $avatar.each(function(i) {
    $(this).delay(i*25).fadeIn(100,function() {
      if (i===last-1) {
        setTimeout(function() {
          $('body').addClass('loaded');
        },750);
        var header_h = $('header').height();
        $('main').css('padding-top',header_h);
        clearInterval(counter);
      }
    });
    
  });

  $(window).on('load resize',function() {
    setAvatarSquare();
  });

  function setAvatarSquare() {
    var avatar_w = $avatar.width();
    $avatar.css('height',avatar_w);
  }

});