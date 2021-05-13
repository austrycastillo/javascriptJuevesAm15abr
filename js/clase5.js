/*
dentro de la tabla crear 4 columnas con algo de contenido, utilizando un for
*/
// var tabla = document.querySelector("table");
// var fila = document.createElement("tr");
// tabla.appendChild(fila);
// for (var i = 1; i < 4; i++) {
//     var columna = document.createElement("td");
//     columna.innerText = "elemento " + i;
//     fila.appendChild(columna);
// }
/*
crear un hipervinculo para una página externa
que me lleve a una nueva ventana
*/
// let link = document.createElement("a");
// link.innerText = "Visitar la página web de Google";
// link.href = "https://www.google.com/";
// link.target = "blank";
// link.title = "Google";
// let enlace = document.querySelector("#enlace");
// //document.body.appendChild(link);
// enlace.appendChild(link);

//JQUERY
/*
$("SELECTOR").ACCIÓN()
algunos métodos: text, html, val, show, hide, click,
mouseover, animate, remove, slideToggle
*/
//document.querySelector("h1"); comprando el js puro
//$("h1") con el jquery
// let titulo = $("h1").text();
// let titulo = $("#titulo").text();
// let titulo = $(".titu").text();
// alert(titulo);
//$("h1").text('Hola Jquery');

//PRACTICA APARECE DESAPARECE
// $('#aparece').click(aparece);
// $('#desaparece').click(desaparece);
// function desaparece() {
//     //$('div').hide();
//     $('div').fadeOut("slow");
// }
// function aparece() {
//     //$('div').show();
//     $('div').fadeIn("slow");
// }

//PRACTICA PANEL CON SLIDE
// $("#flip").click(function () {
//     $("#panel").slideToggle("slow");
// })

//PRACTICA ANIMATE
// $("button").click(function () {
//     $("#cajitaAnimada").animate({ left: '250px' });
// })

var fun = () => {
    console.log("Soy la función flecha o lambda");
}
var fun2 = nombre => console.log("Hola " + nombre);

fun();
fun2("Fulano");
