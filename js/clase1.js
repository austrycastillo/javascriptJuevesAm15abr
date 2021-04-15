//alert("Hola javascript externo");
//comentario de una línea
/*
comentarios de
varias líneas
*/
//VARIABLES
// var nombre = "Juan";//string
// var edad = 20; //number: int, float, double
// var resultado = true; //boolean true, false
// var X;//undefined
// var arreglo = [];//arreglo
// var ob = {}; //objeto
// //alert(nombre);
// nombre = "Juana";
// //alert(nombre);
// nombre = "Luis";
// //alert(nombre);
// document.write("Hola html<br><br>");
// document.write(nombre);
// //concatenamos
// document.write("<br><strong>Tu nombre es </strong>" + nombre);
// console.log("Hola consola");
// console.log(nombre);
// edad++;//edad = edad + 1; también: --
// console.log(edad);
// //operaciones aritméticas: + - * / %(modulo devuelve el resto de la división)
// var a = 10;
// var b = 5;
// var c = 2;
// console.log(a + b + c);
// var total = a + b + c;
// console.log(total);
// console.log(total + 10);
// console.log(a % c);
// //operadores lógicos && and(y), || or (ó)
// var d = true;
// var e = false;
// console.log(d && e);
/*
true || true = true
true || false = true
false || true = true
false || false = false

true && true = true
false && false = false
true && false = false
false && true = false
*/
//operadores relacionales < > <= >= == === !=
// var num1 = 10;
// var num2 = 20;
// var num3 = "20";
// console.log(num1 < num2);
// console.log(num2 === num3);
// var nombre2 = window.prompt("Escribe tu nombre");
// alert("Escribiste " + nombre2);
// //LABORATORIO
// var x = 10;
// var y = 20;
// /*TEST A*/
// x = x + x + 1;
// y = y - y - x;
// console.log(x);
// console.log(y);
//LABORATORIO 1 EJERCICIO 3
// var nombre = window.prompt("Escribe tu nombre de usuario");
// var apellido = window.prompt("Escribe tu apellido");
// var edad = window.prompt("Escribe tu edad");
// var sueldo = parseInt(window.prompt("Escribe tu sueldo"));
// var bonus = parseInt(window.prompt("Escribe tu bonus"));
// alert("Tu nombre de usuario es " + nombre);
// document.write("Tu nombre de usuario es " + nombre);
// document.write("<br>Edad " + edad + " y apellido " + apellido);
// var total = sueldo + bonus;
// document.write("<br>El total a cobrar es " + total);
var novela = window.confirm("Che seguro que te vas?");
alert(novela);
