$('.container__slider-primary').owlCarousel({
    loop:true,
    autoplay : true,
    margin:0,
    nav:false,
    responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
}
});
$('.container-flashsale-body').owlCarousel({
    loop:true,
    autoplay : true,
    margin:24,
    nav:false,
    responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:3
    }
}
});
var btn = $('.back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else { 
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});