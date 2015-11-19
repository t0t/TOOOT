$(document).ready(function () {

  $('.slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.slider-productos').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1
        }
      }
    ]
  });

});
