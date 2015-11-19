/***********************************/
/****** Eventos window.onload ******/
/***********************************/

function onWindowLoaded() {

  var menuBtn = document.getElementById('hamenu');
  var menu = document.getElementsByClassName('nav-main__menu')[0];
  function menuAction () {
    if ( menuBtn.value == 'X' ) {
      menuBtn.value = 'Menu';
      menu.className = 'nav-main__menu';
    } else {
      menuBtn.value = 'X';
      menu.className = 'nav-main__menu active';
    }
  };
  menuBtn.addEventListener( 'click', menuAction );
  menuBtn.addEventListener( 'touchstart', menuAction );

  $('.tabs__item__title').on('tap', function(e) {
    e.preventDefault();
    $(this).children().css('max-height', '550');
  });
  
  $('.btn-slider-product').on('click', function() {
    var id = $(this).attr('href');
    $('.product').removeClass('active');
    $(id).addClass('active');
  });
}
window.addEventListener('load', onWindowLoaded, false);


// var sliderBtnProds = document.getElementsByClassName('btn-slider-product');
// for (var i = 0; i < sliderBtnProds.length; i++) {
//   var showProd = function () {
//     console.log(this.sliderBtnProds[i]);
//   }
//   sliderBtnProds[i].addEventListener('click', showProd());
// }
