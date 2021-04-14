function crearElemento() {
  // Crear nuevo elemento, pero no lo agrega
  const nuevoParrafo = document.createElement("p");
  const nuevoContenidoParrafo = document.createTextNode("Texto de prueba");
  console.log("Etiqueta p", nuevoParrafo.outerHTML);
  console.log("Contenido de p", nuevoContenidoParrafo);
  nuevoParrafo.appendChild(nuevoContenidoParrafo);
  console.log("Después de append", nuevoParrafo.outerHTML);
  const elementoRefencia = document.getElementById("texto-2");
  document.body.insertBefore(nuevoParrafo, elementoRefencia);
}

const numero = 0;
const string = "Esto es una cadena de caracteres";
const booleano = true;

// not        false
if (!(numero && booleano)) {
  // console.log("Hola");
}

// && AND => Y
// || OR => O
// ! NOT negación
