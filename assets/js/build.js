"use strict";

// //***** ES6 class *****
//
// //base class
// class Human {
//   constructor(name) {
//     this.name = name;
//   }
//
//   toString() {
//     return `Hello! my name is ${this.name}`;
//   }
// }
//
// //child class
// class Person extends Human {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
//   //override 'tostring' parent function
//   toString() {
//     return super.toString() + " and my age is " + this.age + ".";
//   }
// }
//
// //create an instance
// var p = new Person("Sergio Forés", 43);
// p.toString(); //Hello, my name is Michael Jacksan and my age is 43.
//
// console.log(p.toString());
/***********************************/
/****** Eventos window.onload ******/
/***********************************/
'use strict';

function onWindowLoaded() {
  var menuBtn = document.getElementById('hamenu');
  var menu = document.getElementsByClassName('mainMenu')[0];
  function menuAction() {
    if (menuBtn.value == 'X') {
      menuBtn.value = 'Menu';
      menu.className = 'mainMenu';
    } else {
      menuBtn.value = 'X';
      menu.className = 'mainMenu active';
    }
  };
  menuBtn.addEventListener('click', menuAction);
}
window.addEventListener('load', onWindowLoaded, false);
"use strict";

//module
// var utils = {
//   calculateTaxes: function(price, percent){
//     return price * percent;
//   }
// }
// //export
// export default utils;

// export function sum(x, y) {
//   return x + y;
// }
// export var pi = 3.141593;
"use strict";

/****** nav.js ******/

// Active current item when its 'href' equals 'pathname'
// var nav = document.getElementById( 'mainNav' );
// var anchor = mainNav.getElementsByTagName( 'a' );
// var current = window.location.pathname;
//
// for  ( var i = 0; i < anchor.length; i++ )  {
//     if (anchor[i].pathname === current) {
//       this.anchor[i].setAttribute( 'class', 'active' );
//     }
// }

//https://medium.com/@JCastigliano/javascript-4-everybody-ecmascript-6-spanish-version-2832cfc6d891
// posts.forEach(post=> {
//   console.log(post.toString());
// });
"use strict";

//
// !function() { // https://teamtreehouse.com/library/the-module-pattern-in-javascript-2
//
// /****** json.js ******/
//
// // posts
// var xhrPostsReq = new XMLHttpRequest();
// var url = 'https://public-api.wordpress.com/rest/v1.1/sites/t0twpapi.wordpress.com/posts/';
// xhrPostsReq.onreadystatechange = jsonGot;
// xhrPostsReq.open('get', url, true);
// xhrPostsReq.send();
// // xhrPostsReq.close();
//
//
//
// function jsonGot  () {
//   if  ( xhrPostsReq.readyState === 4 ) {
//     if  ( xhrPostsReq.status === 200 ) {
//
//       var myJSON = JSON.parse( xhrPostsReq.responseText );
//       var posts = '';
//       for ( var i = 0; i < myJSON.posts.length; i++ )  {
//         var post = myJSON.posts[i];
//         var dateParsed = post.date.split( '+' )[0];
//         posts += '<h3>' + post.title + '</h3>';
//         posts += '<small>' + dateParsed + '</small>';
//         posts += post.content;
//       }
//       // document.getElementById( 'posts' ).innerHTML = posts;
//
//     } else {
//       console.log( 'Tienes problemas para abrir el Json pero tranquilo el sol brilla y los pajaros cantan' );
//     }
//   }
// }
//
//
//
//
//
//
//
//
//
// // paginas
// var url2 = 'http://caferminet.es/wp-json/';
// var xhrReq2 = new XMLHttpRequest();
// xhrReq2.addEventListener('load', function(){
//   if (this.readyState === this.DONE) {
//     var jsonReq2 = JSON.parse(this.responseText);
//     console.log(jsonReq2);
//   }
// });
// xhrReq2.open('get', url2);
// xhrReq2.send();
//
// // paginas
// var url3 = 'http://caferminet.es/wp-json/posts';
// var xhrPostsReq3 = new XMLHttpRequest();
// xhrPostsReq3.addEventListener('load', function(){
//   if (this.readyState === this.DONE) {
//
//     var jsonReq3 = JSON.parse(this.responseText);
//       console.log('paginas: '+jsonReq3);
//     for ( var i = 0; i < jsonReq3.length; i++ ) {
//
//     }
//   }
// });
// xhrPostsReq3.open('get', url3);
// xhrPostsReq3.send();
//
//
//
//
//
//
//
// } ();
//# sourceMappingURL=build.js.map