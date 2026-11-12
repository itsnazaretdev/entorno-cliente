//Lista campeones
const divCampeones = document.querySelectorAll(".lista-campeones");

divCampeones.forEach((campeon) => {
  campeon.addEventListener("click", () => {
    divCampeones.forEach((campeonActivo) => {
      campeonActivo.classList.remove("lista-campeones-activo");
    });
    campeon.classList.add("lista-campeones-activo");
  });
});

//Lista juegos
const divJuegos = document.querySelectorAll(".lista-juegos");

divJuegos.forEach((juego) => {
  juego.addEventListener("click", () => {
    divJuegos.forEach((juegoActivo) => {
      juegoActivo.classList.remove("lista-juegos-activo");
    });
    juego.classList.add("lista-juegos-activo");
  });
});