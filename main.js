$(document).ready(function() {
    $('.fa-bars').click(function() {
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('scroll load', function() {
      $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      var offset = 30; // Declare and define the offset variable with a value of 30
  
      if ($(window).scrollTop() > offset) {
        $('header').addClass('header-active');
      } else {
        $('header').removeClass('header-active');
      }
  
      $('section').each(function() {
        var top = $(window).scrollTop();
        var id = $(this).attr('id');
        var height = $(this).height();
        var sectionOffset = $(this).offset().top - 200;
  
        if (top >= sectionOffset && top < height + sectionOffset) {
          $('.navbar ul li a').removeClass('active');
          $('.navbar').find('[href="#' + id + '"]').addClass('active');
        }
      });
    });
  });
  

