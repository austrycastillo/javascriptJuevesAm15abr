//paso 1 
var p = document.querySelector("p");
var rol = window.prompt("Escribe tu Rol");
if (rol == "admin" || rol == "recursos") {
    var clave = parseInt(window.prompt("Escribe tu clave"));
    if (clave == 1234) {
        var usuario = window.prompt("Escribe tu usuario");
        p.innerHTML = "Hola " + usuario + " Bienvenido a nuestra aplicación";
    } else {
        //p.innerHTML = "Clave incorrecta!";
        window.location.href = 'error.html';
    }
} else {
    //p.innerHTML = "Rol incorrecto!";
    window.location.href = 'error.html';
}