let indice = 1;

function cambiarSlide(n) {
  const slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    console.log(slides[i]);
    slides[i].getElementsByClassName.display = "none";
  }
  slides[n - 1].style.display = "block";
}

function cambiarIndice(n) {
  cambiarSlide((indice += n));
}

window.onload = function () {
  cambiarSlide(indice);
};
