function mostrarContrasena() {
  const inputContrasena = document.getElementById("contrasena");
  const imagen = document.getElementById("imagen");
  if (inputContrasena.type === "password") {
    inputContrasena.type = "text";
    imagen.src = "ojo sin linea";
  } else {
    inputContrasena.type = "password";
    imagen.src = "ojo con linea";
  }
}
