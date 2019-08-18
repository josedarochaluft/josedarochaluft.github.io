$(document).ready(function () {
    
    $('#portfolio-container').fitVids();

    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000); 
    });

    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    //Display modal when clicking view details
    $('.cta').on('click', function() { 
      $($(this).attr("href")).css("display", "block");
    });

    //Hide modal when clicking the close button
    $('span').on('click', function(){
      $(this).parents(".modal").hide();
    });

    AOS.init({
      easing: 'ease',
      duration: 1800,
      once: true
  });
});

$(document).on('click', function(e) {    
    var p = e.target;
    if($(p).attr("class") == 'modal') {
        $(p).hide();
    }
});
