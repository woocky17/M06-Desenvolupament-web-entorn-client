function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

let trys = 0;

setTimeout(function() {
  window.close();
}, 7000);

document.addEventListener("DOMContentLoaded", function () {
  const compareButton = document.getElementById("compara");
  if (compareButton) {
    compareButton.addEventListener("click", function () {
      const valor = parseInt(document.getElementById("valor").value);
      const rand = parseInt(localStorage.getItem("rand"));

      let mensaje;
      let resultadoIntento;
      if (valor === rand) {
        mensaje = "¡Correcto! El valor es igual al número aleatorio.";
        resultadoIntento = "correcto";
      } else {
        mensaje = "Incorrecto. El valor no coincide con el número aleatorio.";
        resultadoIntento = "incorrecto";
      }

      trys++;

      document.getElementById("resultado").innerText = mensaje;
      localStorage.setItem("resultadoComparacion", mensaje);
      localStorage.setItem("trys", trys);

      setCookie("ultimoIntento", resultadoIntento, 1); 
    });
  }

  const ultimoIntento = getCookie("ultimoIntento");

  if (ultimoIntento) {
    const mensaje = (ultimoIntento === "correcto")
      ? "En el último intento, ¡acertaste el número!"
      : "En el último intento, no acertaste el número.";

    document.getElementById("mensajeUltimoIntento").innerText = mensaje;
  } else {
    document.getElementById("mensajeUltimoIntento").innerText = "No hay intento anterior registrado.";
  }
});
