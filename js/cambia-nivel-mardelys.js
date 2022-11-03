//pista aca todo esta bien pero revisa esta funcion e intenta explicar que pasa en cada linea de codigo

//Se define la función para subir de nivel señalando el nivel actual del juego con una variable a la que se le suma 1//

function subeNivel() {
  nivelActual++;
}
//Se define la función para actualizar el nivel declarando la variale nivel texto donde se le asigna el valor de la variable nivel actual + 1. dentro de la función se coloca una condicional que podremos leer si el nivel del texto es menor que 10 la variable nivel texto sería igual a 0+ el nivel texto, se selecciona el elemento que contiene el id nivel y se cambia el texto por el de la variable .//

function actualizaNivel() {
  var nivelTexto = nivelActual + 1;
  if (nivelTexto < 10) {
    nivelTexto = "0" + nivelTexto;
  }

  document.querySelector("#nivel").innerText = nivelTexto;
}
//Se define la función cargar nuevo nivel donde se invocan las funciones sube nivel actualiza nivel e iniciar un nuevo juego//
function cargaNuevoNivel() {
  subeNivel();
  actualizaNivel();
  iniciar();
}
