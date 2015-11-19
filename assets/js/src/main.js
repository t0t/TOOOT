/***********************************/
/****** Eventos window.onload ******/
/***********************************/
function onWindowLoaded() {
  var menuBtn = document.getElementById('hamenu');
  var menu = document.getElementsByClassName('mainMenu')[0];
  function menuAction () {
    if ( menuBtn.value == 'X' ) {
      menuBtn.value = 'Menu';
      menu.className = 'mainMenu';
    } else {
      menuBtn.value = 'X';
      menu.className = 'mainMenu active';
    }
  };
  menuBtn.addEventListener( 'click', menuAction );
}
window.addEventListener('load', onWindowLoaded, false);
