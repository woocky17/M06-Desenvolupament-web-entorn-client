let color = Math.floor(Math.random() * 4);
let colorName = document.getElementById("color");

console.log(color);

switch (color) {
  case 0:
    document.body.style.backgroundColor = "lightblue";
    colorName.innerHTML ="BLUE";
    break;
  case 1:
    document.body.style.backgroundColor = "yellow";
    colorName.innerHTML= "YELLOW";
    break;
  case 2:
    document.body.style.backgroundColor = "lightgreen";
    colorName.innerHTML = "GREEN";
    break;
  case 3:
    document.body.style.backgroundColor = "red";
    colorName.innerHTML = "RED";
    break;
}
