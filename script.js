$(document).ready(function () {
  $('#carouselExample').on('slide.bs.carousel', function (e) {
      var $currentSlide = $(e.relatedTarget).find('video');
      $('video').each(function () {
          this.pause(); // Stop all videos
      });
      if ($currentSlide.length) {
          $currentSlide[0].play(); // Play the video on the slide that is going to be shown
      }
  });

  // Prevent carousel from sliding when interacting with video
  $('video').on('click', function (event) {
      event.stopPropagation();
  });
}); 
  