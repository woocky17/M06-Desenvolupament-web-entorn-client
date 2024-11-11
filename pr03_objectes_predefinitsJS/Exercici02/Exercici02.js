let start = document.getElementById("START");
let countdown = document.getElementById("countdown");
let first = true;

start.addEventListener("click", function startButton() {
  start.disabled = true;
  let time = 30;
  let countdownInterval = setInterval(function () {
    
    if (time <= 0) {
      clearInterval(countdownInterval);
      start.disabled = false;
    } else {
      time--;
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
      countdown.innerHTML =
        "<span>" +
        minutes.toString().padStart(2, "0") +
        ":" +
        seconds.toString().padStart(2, "0") +
        "</span>";
    }

    if (time < 28) {
        if (first) {
          console.log("abrir ventana" + first);
          first = false;
          let width = 250;
          let height = 250;
          let top = Math.floor((window.innerHeight - height) / 2);
          let left = Math.floor((window.innerWidth - width) / 2);
          window.open(
            "RandomWindow.html",
            "_blank",
            `width=${width},height=${height},top=${top},left=${left}`
          );
        // } else if (!first && time % 3 === 0) {
        //   let top = 20 + Math.floor(Math.random() * 300);
        //   let left = 20 + Math.floor(Math.random() * 300);
  
        //   console.log("abrir ventana 2 " + first);
  
        //   window.open(
        //     "RandomWindow.html",
        //     "_blank",
        //     `width=250,height=250,top=${top},left=${left}`
        //   );
        }
      }
  }, 1000);
});
