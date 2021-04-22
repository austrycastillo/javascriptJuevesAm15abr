/*
if(condición){
    ..instrucciones..
}

if(condición){
    ..instrucciones..
}else{
   ...instrucciones... 
}

if(condición){
    if(condición){
        ...instrucciones..
    }else{
        ...instrucciones
    }
}else{
   if(condición){
        ...instrucciones..
    }else{
        ...instrucciones
    } 
}

if(condición){
    ..instrucciones..
}else if(condición){
   ...instrucciones... 
}else if(condición){
   ...instrucciones... 
}else{
    ...instrucciones
}
*/
// var a = 100;
// if (a < 20) {
//     document.write(a + " es menor que 20");
// }else{
//     document.write(a + " NO es menor que 20");
// }
/*
SISTEMA PARA CALCULAR EL SALARIO SEMANAL DE UN OBRERO
CADA HORA -> 16 U$D (MAX 40 HORAS) -> 40*16
HORA EXTRA -> 20 U$D (EJ 50) ((50-40)* 20)+(40*16)
*/
// var salario = 0;
// var horaMax = 40;
// var salarioExtra = 0;
// var horasExtras;
// var nombre = window.prompt("Escribe tu nombre");
// var horas = parseInt(window.prompt("Escribe cantidad de horas trabajadas en la semana"));
// if (horas > horaMax) {
//     horasExtras = horas - horaMax;
//     salario = horaMax * 16;
//     salarioExtra = horasExtras * 20;
//     salario = salario + salarioExtra;
// } else {
//     salario = horas * 16;
// }
// document.write(nombre + " su salario total es " + salario + ", desglosando: por  horas extras ganaste " + salarioExtra)
// console.log(typeof(horas))

//MANEJO DEL DOM
// var titulo = document.querySelector("h1");
// var titulo2 = document.querySelector("#titulo");
// var titulo3 = document.querySelector(".titu");
// var titulo4 = document.getElementById("titulo");
// console.log(titulo.id);
// // console.log(titulo2);
// // console.log(titulo3);
// // console.log(titulo4);
// // alert(titulo.innerHTML);
// titulo.innerHTML = "Hola Javascript<br><br>jugando";
// titulo.style.color = "red";
// titulo.style.backgroundColor = "lightpink";
// titulo.style.border = "1px solid blue";
// titulo.style.padding = "10px";

/*
var: redeclarable, redefinible, scope global
let: no son redeclarables, si es redefinible, scope local 
const: no son redeclarables, no son redefinibles, scope local
*/

// var x = 2;
// console.log(x);
// if (true) {
//     console.log(x);
//     var x = 4;
//     console.log(x);
// }
// console.log(x);
// var x = 6;
// console.log(x);

// let x = 2;
// console.log(x);
//                                 if(true){
//                                     let x = 4;
//                                     console.log(x);
//                                     x = 8;
//                                     console.log(x);
//                                 }
// console.log(x);
// x = 6;
// console.log(x);

// const x = 2;
// console.log(x);
// if(true){
//     const x = 4;
//     console.log(x);
// }
// //x = 6; no está permitido
// console.log(x);

var fecha = new Date();
var dia = fecha.getDate();
console.log(dia)

//ARRANCAR CON SWITCH