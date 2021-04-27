function reproducirPausar() {
  const video = document.getElementById("video");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function revisarSiPuedeReproducir() {
  const video = document.getElementById("video");
  console.log(video.canPlayType("mp4"));
}

window.onload = revisarSiPuedeReproducir;
