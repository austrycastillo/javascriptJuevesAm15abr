/*
switch(variable){
        case "v1":
            ...instrucciones...
            break;
        case "v2":
            ...instrucciones...
            break;
        case "v3":
            ...instrucciones...
            break;
        default:
            ...instrucciones...
            break;
}
*/
// let color = "verde";
// switch (color) {
//     case "amarillo":
//         document.write("El color es amarillo");
//         break;
//     case "rojo":
//     case "ROJO":
//     case "Rojo":
//         document.write("El color es rojo");
//         break;
//     case "verde":
//         document.write("El color es verde");
//         break;
//     case "azul":
//         document.write("El color es azul");
//         break;
//     default:
//         document.write("No existe el color en nuestra bd");
//         break;
// }
/*
while(condición){
    ...instrucciones...
    ajuste
}
*/
// var con = 1;
// while (con <= 10) {
//     document.write("Hola<br>");
//     con++;//con = con + 1
// }
//con = 11
//write = hola hola hola
/*
do{
    ..instrucciones..
    ajuste
}while(condición);
*/
// let x = 100;
// do {
//     document.write(x + "<br>");
//     x++;
// } while (x <= 10);

// var texto = "";
// do {
//     var palabra = window.prompt("Escribe una palabra");
//     texto += palabra;//texto = texto + palabra;
// } while (window.confirm("Sigues?"));
// document.write(texto);

/*
for(inicio;condición;ajuste){
    ...instrucciones...
}
*/
// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }
/*
solicitar al usuario un número
imprimir la tabla de multiplicar
2 x 1 = 2
2 x 2 = 4
*/
// var num = parseInt(window.prompt("Escribe un número"));
// for (var i = 0; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + (num * i));
// }

// var edad = [20, 8, 4, 10, 8, 6, 2, 12, 21, 1];
// var nombre = new Array('Carlos', 'Marcelo', 'Matias', 'Juan', 'Claudia', 'Ana');
// var dato = ["Juan", 10, 80.2, true];
// console.log(edad[2]);
// edad[2] = 250;
// console.log(edad[2]);
// console.log(edad.length);//determinar el tamaño del arreglo
// var tam = edad.length;
// for (var i = 0; i < tam; i++) {
//     document.write(edad[i] + "<br>");
// }
/*
carrera: un arreglo los nombres de los atletas
otro arreglo para los tiempos de llegada de cada atleta
dterminar el menor tiempo, el atleta ganador
*/
// var atletas = ["Gianluca", "Walter", "Matias", "Juan", "Martin", "Nicole"];
// var tiempo = [10, 8, 9, 12, 7, 5];
// var min = tiempo[0];
// var po = 0;
// for (var i = 0; i < tiempo.length; i++) {
//     if (tiempo[i] < min) {
//         min = tiempo[i];
//         po = i;
//     }
// }
// document.write("El ganador es: " + atletas[po] + " con un tiempo de " + min);

// var bebes = ['Gianluca', 'Sofia', 'Juan'];
//bebes.push('Matias'); //agregar al final
//bebes.pop();//elimina al final del arreglo
//bebes.unshift('Matias');//agrega al inicio
//bebes.shift();//elimina al inicio
// bebes.splice(1, 0, 'Ana');//agrega Ana en indice 1 y no elimina nada
// bebes.splice(1, 2); //elimina dos elementos a partir del  indice 1
// console.log(bebes);
// //sort, concat

//OBJETOS-> clave:valor
// var cliente = {
//     nombre: 'Fulano',
//     apellido: 'De Tal',
//     edad: 300
// }
// console.log(cliente);
// console.log(cliente.nombre);
// var clientes = [
//     {
//         idCliente: 123,
//         nombre: 'Juan',
//         teléfono: 11111
//     },
//     {
//         idCliente: 456,
//         nombre: 'Ana',
//         teléfono: 22222
//     },
//     {
//         idCliente: 789,
//         nombre: 'Sofia',
//         teléfono: 55555
//     }
// ];
// console.log(clientes);
// console.log(clientes[1]);
// console.log(clientes[1].nombre);
// var tabla = document.querySelector("table");
// var mensaje = "<tr><th>id del cliente</th><th>Nombre del cliente</th><th>Teléfono</th></tr>";
// for (var i = 0; i < clientes.length; i++) {
//     mensaje += "<tr><td>" + clientes[i].idCliente + "</td><td>" + clientes[i].nombre + "</td><td>" + clientes[i].teléfono + "</td></tr>";
// }
// tabla.innerHTML = mensaje;

// let p = document.createElement('p');
// p.innerHTML = "<strong>Comentarios: </strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et doloremque doloribus aspernatur vitae unde ab perspiciatis placeat in blanditiis rerum minus soluta ut impedit fugit, consequatur odio dolore natus";
// //document.body.appendChild(p);
// let div = document.querySelector("div");
// div.appendChild(p);

const ul = document.querySelector("ul");
// let li = document.createElement("li");
// li.innerText = "Uno";
// ul.appendChild(li);

// li = document.createElement("li");
// li.innerText = "dos";
// ul.appendChild(li);

// li = document.createElement("li");
// li.innerText = "tres";
// ul.appendChild(li);

// li = document.createElement("li");
// li.innerText = "cuatro";
// ul.appendChild(li);
var contenido = ["azul", "rosado", "negro", "verde", "violeta"];
var li = "";
for (var i = 0; i < contenido.length; i++) {
    li = document.createElement("li");
    li.innerText = contenido[i];
    ul.appendChild(li);
}

/*
Ejercicio: crear un sistema de cajero automático con retiro, depósito, saldo

*/