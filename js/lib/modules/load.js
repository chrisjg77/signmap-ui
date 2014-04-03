
// Define this module and make it dependent on jquery.
define(['jquery'],function( $ ) {

  // Instantiate variables
  var $this = $(this),
      $avatar = $('.avatar-feed li'),
      $img = $('.avatar-feed li img'),
      $count = $('#signerCount'),
      last = $avatar.length,
      count = 0,
      window_h;

  // Animate count up
  var counter = setInterval(function() {
    count = count+25;
    $count.html(count);
  },25);

  window_h = $(window).height();

  // Load each avatar sequentially as the count animates up
  $avatar.each(function(i) {

    // Move avatar to a random position
    var random_pos = Math.floor((Math.random()*200)+1);
    $avatar.eq(random_pos).after($(this));

    var random_top = Math.floor((Math.random()*(window_h-150))+1);
    $(this).css('top',random_top);

    // Use delay to offset the fade on each avatar
    $('img',this).delay(i*25).fadeIn(250,function() {
      // When the last avatar is reached
      if (i===last-1) {
        // Animate in the map and layers
        setTimeout(function() {
          $('body').addClass('loaded');
        },750);
        // Stop the counter
        clearInterval(counter);
      }
    });
  });

  // Keep the avatars square on window load/resize
  $(window).on('load resize',function() {
    setAvatarSquare();
    window_h = $(window).height();
  });

  function setAvatarSquare() {
    var avatar_w = $avatar.width();
    $avatar.css('height',avatar_w);
  }

});