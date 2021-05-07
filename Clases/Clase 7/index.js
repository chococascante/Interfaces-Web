function mostrarOcultarMenu() {
  // const boton = document.getElementById("boton-menu"); // Elemento
  // const clases = boton.classList; // Lista de clases
  // clases.toggle("header--nav--dropdown");

  document
    .getElementById("header-nav-menu")
    .classList.toggle("header--nav--dropdown");
}

let indice = 1;

function cambiarSlide(n) {
  const slides = document.getElementsByClassName("slide");

  if (n > slides.length) {
    n = 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[n - 1].style.display = "block";
}

function slideAnterior() {
  indice = indice - 1;
  cambiarSlide(indice);
}

function siguienteSlide() {
  indice = indice + 1;
  cambiarSlide(indice);
}

function cambiarIndice(n) {
  cambiarSlide((indice += n));
}

function autoplay() {
  setInterval(() => {
    cambiarSlide((indice += 1));
  }, 1000);
}

window.onload = autoplay;
