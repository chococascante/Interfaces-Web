let i,
  result = 0;
do {
  i = i + 1;
  result = result + i;
} while (i < 5);

let i = 0;
while (i < hijos.length) {
  if (i == 5) {
    break;
  }
  console.log(hijos[i]);
  i++;
}

for (let i = 0; i < hijos.length; i++) {
  console.log(hijos[i]);
}

function borrarTodosLosElementos() {
  // Forma 1: con un ciclo
  for (let i = 0; i < hijos.length; i++) {
    console.log("Elemento que se va a borrar", hijos[i]);
    const elementoABorrar = hijos[i];
    contenedor.removeChild(elementoABorrar);
  }

  // Revisa si tiene un hijo
  while (contenedor.firstChild) {
    console.log("Primer Hijo", contenedor.firstChild);
    contenedor.removeChild(contenedor.firstChild); // Borra el primer hijo
  }

  // Revisa si tiene un hijo
  while (contenedor.lastChild) {
    console.log("Último Hijo", contenedor.lastChild);
    contenedor.removeChild(contenedor.lastChild); // Borra el último hijo
  }
}
