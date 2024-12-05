let selectedDisk = null;
let sourceTower = null;

function start() {
  let cont = 1;
  let numDisc = parseInt(document.getElementById("number").value);
  console.log("Número de discos: " + numDisc);

  if (numDisc > 0 && numDisc < 6) {
    let torre1 = new Array(numDisc);
    let colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33FB", "#33FFF9", "#B833FF"]; // Máximo 7 colores
    
    

    document.getElementById("torre1").innerHTML = "";

    for (let i = 0; i < torre1.length; i++) {
      torre1[i] = cont++;
      let scaleFactor = (100 / numDisc) * (i + 1); 
      let color = colors[i % colors.length]; 

      let newDiv = document.createElement("div");
      newDiv.textContent = torre1[i];
      newDiv.style.width = scaleFactor + "%"; 
      newDiv.style.backgroundColor = color; 
      newDiv.style.margin = "5px auto";
      newDiv.style.height = "30px"; 
      newDiv.style.textAlign = "center"; 
      newDiv.style.borderRadius = "5px"; 

      // Agregar un atributo data-size para el tamaño del disco
      newDiv.dataset.size = torre1[i];

      document.getElementById("torre1").appendChild(newDiv);
      console.log(torre1[i]);
    }
  } else {
    alert("Por favor, ingresa un número entre 1 y 5 .");
    console.log("Por favor, ingresa un número válido de discos.");
  }
}

function selectDisk(towerId) {
  const tower = document.getElementById(towerId);
  const disk = tower.firstElementChild; // Seleccionamos el primer disco (el más pequeño)

  if (!disk) {
    alert("No hay discos en esta torre para seleccionar.");
    return;
  }

  // Seleccionar el disco
  selectedDisk = disk;
  sourceTower = towerId;

}

function moveDisk(targetTowerId) {
  const targetTower = document.getElementById(targetTowerId);

  if (!selectedDisk) {
    alert("Primero selecciona un disco para mover.");
    return;
  }

  // Verificar si se puede mover el disco
  const topDisk = targetTower.firstElementChild; // El primer disco en la torre de destino

  // Si hay un disco en la torre de destino, el nuevo disco no puede ser más grande que el primero de la torre de destino
  if (topDisk && parseInt(topDisk.dataset.size) < parseInt(selectedDisk.dataset.size)) {
    alert("No puedes colocar un disco más grande sobre uno más pequeño.");
    return;
  }

  // Mover el disco
  targetTower.prepend(selectedDisk); // Lo añadimos al principio de la torre, que es la parte inferior visualmente


  // Limpiar selección
  selectedDisk = null;
  sourceTower = null;
}
