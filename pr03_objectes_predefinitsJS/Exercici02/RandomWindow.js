let colorOptions = ["lightblue", "yellow", "lightgreen", "red"];
let colorNames = ["BLUE", "YELLOW", "GREEN", "RED"];
let randomColor = Math.floor(Math.random() * colorOptions.length);
let color = colorOptions[randomColor];
let colorName = colorNames[randomColor];

document.body.style.backgroundColor = color;
document.getElementById("color").innerHTML = colorName;

let windowId = Math.random().toString(36).substring(2); 

function WindowClick() {
  let guardarVentana = JSON.parse(localStorage.getItem("windowInfo"));

  if (!guardarVentana) {
    localStorage.setItem("windowInfo", JSON.stringify({ color, windowId }));
  } else {
    if (guardarVentana.color === color && guardarVentana.windowId !== windowId) {
      let otherWindow = window.open('', guardarVentana.windowId);
      console.log("comparar")
      if (otherWindow) {
        otherWindow.close();
        window.close();
      }
    } else if (guardarVentana.color === color && guardarVentana.windowId === windowId) {
        
      let newRandomColor = Math.floor(Math.random() * colorOptions.length);
      let newColor = colorOptions[newRandomColor];
      document.body.style.backgroundColor = newColor;
      document.getElementById("color").innerHTML = colorNames[newRandomColor];
      
      localStorage.setItem("windowInfo", JSON.stringify({ color: newColor, windowId }));
    } else {
      localStorage.setItem("windowInfo", JSON.stringify({ color, windowId }));
    }

    console.log(guardarVentana);
  }
}

window.addEventListener("click", WindowClick);
