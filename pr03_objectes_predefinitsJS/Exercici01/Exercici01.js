let encertaWindow;

document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("PLAY_ENCERTA");
  if (playButton) {
    playButton.addEventListener("click", function () {
      let rand = Math.floor(Math.random() * 11);

      console.log(rand);

      document.getElementById("numero").innerHTML = "<br>" + rand;
      document.getElementById("numero").style.color =
        rand < 5 ? "red" : "green";

      localStorage.setItem("rand", rand);

      // Abre Encerta.html y guarda la referencia
      encertaWindow = window.open(
        "Encerta.html",
        "_blank",
        "width=400,height=300"
      );
    });
  }
  window.addEventListener("storage", function (event) {
    if (event.key === "resultadoComparacion") {
      const trys = localStorage.getItem("trys") || 0;
      const mensajeResultado =
        localStorage.getItem("resultadoComparacion") ||
        "No se ha realizado la comparación.";

      if (mensajeResultado.includes("¡Correcto!")) {
        if (encertaWindow) {
          encertaWindow.close();
          encertaWindow = null;
          document.getElementById(
            "intentos"
          ).innerText = `Número de intentos: ${trys}`;
          document.getElementById(
            "resultado"
          ).innerText = `Resultado: ${mensajeResultado}`;
          localStorage.removeItem("resultadoComparacion");
        }
      }
    }
  });
});
