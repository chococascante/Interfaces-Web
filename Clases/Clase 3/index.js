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
  console.log("DIV", contenedor.outerHTML);

  const hijos = Array.from(contenedor.childNodes);
  console.log("Hijos", hijos);

  const divs = document.getElementsByTagName("DIV");
  console.log("DIVS", divs);

  contenedor.innerHTML = `
    <h1>Mi formulario</h1>
    <p id="texto-0">Texto 0</p>
    <p id="texto-1">Texto 1</p>
    <p id="texto-2">Texto 2</p>
`;
  contenedor.innerHTML = "";
}
