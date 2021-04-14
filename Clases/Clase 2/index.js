function foo() {
  document.getElementById("demo").innerHTML += " Hola Mundo!";
  let imagen = document.getElementById("imagen");
  console.log(imagen.outerHTML);
  imagen.src = "../../assets/accessible-icon-brands.svg";
  console.log(imagen.outerHTML);

  setTimeout(() => {
    imagen.src =
      "https://i1.wp.com/elanillounico.com/wp-content/uploads/2015/03/JRR-Tolkien15.jpg?fit=760%2C1076&ssl=1";
    console.log(imagen.outerHTML);
  }, 5000);
}

function suma(sumando1, sumando2) {
  return sumando1 + sumando2;
}

suma(2, 3);

const documento = {
  suma,
};

window.onload = foo;
