function foo() {
  document.getElementById("demo").innerHTML += " Hola Mundo!";
  const imagen = document.getElementById("imagen");
  imagen.src = "../assets/accessible-icon-brands.svg";

  setTimeout(() => {
    imagen.src =
      "https://i1.wp.com/elanillounico.com/wp-content/uploads/2015/03/JRR-Tolkien15.jpg?fit=760%2C1076&ssl=1";
  }, 5000);
}

function suma(sumando1, sumando2) {
  return sumando1 + sumando2;
}

const documento = {
  suma,
};

window.onload = foo;
