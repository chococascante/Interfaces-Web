const lista = ["Rojo", "Verde", "Azul"]; // lista

const matriz = [
  // col 0, col 1
  ["Encabezado", "10%"], // fila 0
  ["Descripción Breve", "20%"], // fila 1
  ["Que se vea una imagen", "30%"], // fila 2
  ["Que la imagen tenga un alt", "40%"], // fila 3
  ["Que se modifique el tamaño ", "50%"], // fila 4
  ["Línea del tiempo", ""], // fila 5
  ["Pie de página", "70%"], // fila 6
];

const elemento = matriz[6][0];

function buscarElementoEnMatriz(valorFila, valorColumna) {
  const tabla = document.getElementById("tablaEvaluacion");
  const filas = tabla.rows;

  for (let fila = 0; fila < filas.length; fila++) {
    // Forma cuecha veloz
    console.log("Fila", fila);
    if (fila === parseInt(valorFila)) {
      const celdas = filas[fila].cells;
      for (let columna = 0; columna < celdas.length; columna++) {
        if (columna === parseInt(valorColumna)) {
          return celdas[columna];
        }
      }
    }
  }
}

window.onload = function () {
  const boton = document.getElementById("buscar");
  boton.addEventListener("click", function () {
    const inputFila = document.getElementById("fila");
    const inputColumna = document.getElementById("columna");

    const elemento = buscarElementoEnMatriz(
      inputFila.value,
      inputColumna.value
    );
    console.log(elemento);
  });
};
