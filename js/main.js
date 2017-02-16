$(function() {
  $('a.js-smooth-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 300);
        return false;
      }
    }
  });

  $('.js-play-video').on('click', function(evt) {
    evt.preventDefault();
    $('.video-container').addClass('is-visible');
    var videoId = $(this).data('video-id');
    var videoFrame = '<iframe class="video-item" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen autoplay></iframe>';
    $('.video-item-wrapper').html(videoFrame);
  });

  $('.js-close-video').on('click', function(evt) {
    evt.preventDefault();
    $('.video-container').removeClass('is-visible');
    $('.video-item-wrapper').html('');
  });
});
