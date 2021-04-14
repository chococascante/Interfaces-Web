function crearElemento() {
  // Crear nuevo elemento, pero no lo agrega
  const nuevoParrafo = document.createElement("p");
  const nuevoContenidoParrafo = document.createTextNode("Texto de prueba");
  console.log("Etiqueta p", nuevoParrafo.outerHTML);
  console.log("Contenido de p", nuevoContenidoParrafo);
  nuevoParrafo.appendChild(nuevoContenidoParrafo);
  console.log("Después de append", nuevoParrafo.outerHTML);
  const elementoRefencia = document.getElementById("texto-0");
  // si el elemento que está antes es null, lo mete de último
  document.body.insertBefore(nuevoParrafo, elementoRefencia);
}

function borrarPrimerElemento() {
  // Padre del elemento que quiero borrar
  const padreDelElemento = document.body;
  console.log("Padre", padreDelElemento);

  // Devuelve un arreglo de elementos
  const arregloDeParrafos = document.getElementsByTagName("P");
  console.log("Arreglo de Párrafos", arregloDeParrafos);

  // El elemento específico que quiero borrar
  const elementoABorrar = arregloDeParrafos[0];
  console.log("Hijo", elementoABorrar);

  padreDelElemento.removeChild(elementoABorrar);
}

function borrarTodosLosElementos() {
  const contenedor = document.getElementById("contenedor");
  console.log("DIV", contenedor);

  const hijos = contenedor.childNodes;
  console.log("Hijos", hijos);

  let i = 0;
  while (i < hijos.length) {
    if (i == 5) {
      break;
    }
    console.log(hijos[i]);
    i++;
  }

  // for (let i = 0; i < hijos.length; i++) {
  //   console.log(hijos[i]);
  // }
}

// not        false
// if (!(numero && booleano)) {
//   // console.log("Hola");
//   const numero = 0;
//   const string = "Esto es una cadena de caracteres";
//   const booleano = true;
// }

// && AND => Y
// || OR => O
// ! NOT negación
