function mostrarContrasena() {
  const inputContrasena = document.getElementById("contrasena");
  const iconoContrasena = document.getElementById("icono-contrasena");

  if (inputContrasena.type === "password") {
    inputContrasena.type = "text";
    iconoContrasena.src = "../../assets/eye-solid.svg";
  } else {
    inputContrasena.type = "password";
    iconoContrasena.src = "../../assets/eye-slash-solid.svg";
  }
  console.log(inputContrasena);
  console.log(iconoContrasena);
}

function manejarEnvio() {}

function validarEmail(valor) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)) {
    alert("La dirección de email " + valor + " es correcta.");
  } else {
    alert("La dirección de email es incorrecta.");
  }
}

window.onload = function () {
  const botonSubmit = document.querySelector("button[type=submit]");

  const camposRequeridos = document.querySelectorAll("[required]");
  console.log(camposRequeridos);

  botonSubmit.addEventListener("click", function (event) {
    // equivalente a decir function(event)
    console.log("El evento se disparó!");
    event.preventDefault();

    const inputId = document.getElementById("identificacion");
    const id = inputId.value;
    if (id.length < 11) {
      console.log("No cumple!");
    }

    const email = document.getElementById("correo");
    console.log(email.value);
    validarEmail(email.value);
  });
};
