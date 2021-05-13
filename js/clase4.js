/*
funciones y procedimientos (métodos)
function identificador(parametros){
    ...bloque de instruciones...
}
*/
function saludar() {//procedimiento
    alert("Holaaaaaaaaa");

}
function saludar2() {//función
    var mensaje = "Holaaaa función";
    return mensaje;
}
function nombrar(nombre) {
    document.write("Nombrando a ...." + nombre);
}
function sumar(num1, num2) {
    return num1 + num2;
}
//saludar();
//document.write(saludar2());
// nombrar("Fulano");
// var nombre = "Ana";
// nombrar(nombre);
//console.log(sumar(10,20));

/*crear un función que permita loguearnos a un sistema */
// function solicitarUsuario() {
//     let usuario = window.prompt("Escriba su usuario");
//     return usuario;
// }
// function solicitarClave() {
//     let clave = window.prompt("Escriba su clave");
//     return clave;
// }
// function solicitarAcceso(usuario, clave) {
//     if (usuario === "admin" && clave === "abc88") {
//         var resp = "Bienvenido al sistema blabla ;)";
//         //window.location.href = 'pagina.html';
//     } else {
//         var resp = "Datos incorrectos, no puede acceder ;(";
//     }
//     return resp;
// }
// let user = solicitarUsuario();
// let pass = solicitarClave();
// document.write(solicitarAcceso(user, pass));

/* nos solicita un número, debemos verificar la cantidad de cifras (1,2,3,4 o más) */
//2 -> menor que 10 y mayor a cero 
// function solicitarNumero() {
//     let num = parseInt(window.prompt("Escribe un número"));
//     return num;
// }
// function verificarCifras(num) {
//     if (num > 0 && num < 10) {
//         var resp = "El número tiene una cifra";
//     } else if (num >= 10 && num <= 99) {
//         var resp = "El número tiene dos cifras";
//     } else if (num >= 100 && num <= 999) {
//         var resp = "El número tiene tres cifras";
//     } else if (num >= 1000 && num <= 9999) {
//         var resp = "El número tiene cuatro cifras";
//     } else {
//         var resp = "El número es mayor a cuatro cifras";
//     }
//     return resp;
// }
// let num = solicitarNumero();
// document.write(verificarCifras(num));

//EVENTOS
function mostrar() {
    alert("Historia y geografía son divertidas");
}
// let btn = document.querySelector("#btn");
// console.log(btn);
// btn.onclick = mostrar;
/*
colocar en el html un foco y dos botones para encender y apagar, trabajar con eventos y funciones
*/
//EJERCICIO FOCO
// var botonEncender = document.querySelector("#encender");
// var botonApagar = document.querySelector("#apagar");
// var img = document.querySelector("img");
// console.log(botonEncender.id);
// console.log(img.src);
// function encender() {
//     console.log(img);
//     img.src = 'on.gif';
// }
// function apagar() {
//     img.src = 'off.gif';
// }
// botonEncender.onclick = encender;
// botonApagar.onclick = apagar;

//PRACTICA CAJITA
// var yellow = document.querySelector("#yellow");
// var black = document.querySelector("#black");
// var pink = document.querySelector("#pink");
// var green = document.querySelector("#green");
// var cajita = document.querySelector(".cajita");
// function cambiarColor(color) {
//     console.log(color.id);
//     console.log(cajita);
//     cajita.style.backgroundColor = color;
// }
// yellow.onclick = cambiarColor(yellow);
// black.onclick = cambiarColor(black);
// pink.onclick = cambiarColor(pink);
// green.onclick = cambiarColor(green);

//PRACTICA FORM
var productos = [
    {
        nombre: "mouse",
        marca: "logitech",
        precio: 100
    },
    {
        nombre: "monitor",
        marca: "philips",
        precio: 200
    },
    {
        nombre: "teclado",
        marca: "shuju",
        precio: 85
    }
];
//console.log(productos[0].nombre);
var boton = document.querySelector("button");
boton.onclick = agregarProducto
function agregarProducto() {
    var nombre = document.getElementById("nombre").value;
    var marca = document.getElementById("marca").value;
    var precio = document.getElementById("precio").value;
    console.log(nombre);
    productos.push({ 'nombre': nombre, 'marca': marca, 'precio': precio });
    console.log(productos);
    agregarTabla();
}
function agregarTabla() {
    var datos = "<tr><th>Nombre</th><th>Marca</th><th>Precio</th></tr>";
    for (var i = 0; i < productos.length; i++) {
        datos += "<tr><td>" + productos[i].nombre + "</td><td>" + productos[i].marca + "</td><td>" + productos[i].precio + "</td></tr>";
    }
    var tabla = document.querySelector("table");
    tabla.innerHTML = datos;
}
agregarTabla();

/************ */
function mostrar(variable){

        alert ( " son divertidas las historias"+ variable)
    
     
    
     }  
    
     var btn = document.getElementById("enter")
    
     btn.onclick = mostrar("hola")  // SE EJECUTA SOLO CUANDO CARGA LA PAGINA , Y DESPUES NO FUNCIONA 
    
     
    
     
    
       function mostrar(){
    
        alert ( " son divertidas las historias" )
    
     
    
     }  
    
     var btn = document.getElementById("enter")
    
     btn.onclick = mostrar  // SIN VARIABLE , NI PARENTESIS , FUNCIONA OK
    