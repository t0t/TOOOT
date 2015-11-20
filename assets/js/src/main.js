/***********************************/
/****** Eventos window.onload ******/
/***********************************/
function onWindowLoaded() {
  // Main Nav
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
  
  // Replate code tags
  // var code = document.getElementsByTagName('code');
  // code.innerHTML = code.innerHTML.replace(/</g,'&lt;').replace(/>/g,'&gt;')
  // for (var i = 0; i < code.length; i++) {
  //   var x = code[i].innerHTML.replace(/</g,"&lt;");
  //   var y = code[i].innerHTML.replace(/>/g,"&rt;");
  //   // x.replace('>','&lt;');
  //   console.log(x);
  //   console.log(y);
  // }
  // code.each( function (){
  //   var text = this.html().replace(/</g,'&lt;');
  //   var text=text.replace(/>/g,'&gt;');
  //   $(this).html(text);
  // });
}
window.addEventListener('load', onWindowLoaded, false);
