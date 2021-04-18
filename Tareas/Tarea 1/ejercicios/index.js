function sacarValores() {
  const inputNombre = document.getElementById("nombre");
  const inputApellidos = document.getElementById("apellidos");

  console.log("Nombre", inputNombre.value);
  console.log("Apellidos", inputApellidos.value);
}

window.onload = function () {
  console.log("Ancho", window.innerWidth);
  console.log("Alto", window.innerHeight);
};
