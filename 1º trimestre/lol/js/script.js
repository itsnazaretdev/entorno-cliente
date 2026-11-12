const divCampeones = document.querySelectorAll(".lista-campeones");

const arrayCampeones = [...divCampeones];

arrayCampeones.forEach((campeon) => {
  campeon.addEventListener("click", () => {
    arrayCampeones.forEach((campeonActivo) => {
      campeonActivo.classList.remove("lista-campeones-activo");
    });
    campeon.classList.add("lista-campeones-activo");
  });
});
