/*
ñ Crea un array global de nom “llista_numeros” amb 5 valors numèrics aleatoris
ñ entre 1 y 10.
ñ Al iniciar la web mostra un div para cada valor del array:
*/

let llista_numeros = new Array(5);

function Array1(where, New) {
  console.log("Ejercici1");
  for (let i = 0; i < llista_numeros.length; i++) {
    if (New == true) {
      llista_numeros[i] = 1 + Math.floor(Math.random() * 11);
    }
    document.getElementById(where).innerHTML +=
      "<td>" + llista_numeros[i] + "</td>";
    console.log(llista_numeros[i]);
  }
}

Array1("array1", true);

/*
ñ 2. Crea un array global de nombre “llista_bidimensional” amb 10 valors numèrics
ñ aleatoris. Al iniciar la web mostra un div para cada valor:
*/

let llista_bidimensional = new Array(2); // Crear una matriz con 2 filas

// Inicializar cada fila como un array de 5 columnas
for (let i = 0; i < llista_bidimensional.length; i++) {
  llista_bidimensional[i] = new Array(5);
}

function Array2(Line1, Tr, Line2, New) {
  console.log("Ejercici2");

  // Llenar la matriz y mostrar los datos en la tabla
  for (let i = 0; i < llista_bidimensional.length; i++) {
    for (let j = 0; j < llista_bidimensional[i].length; j++) {
      if (New == true) {
        llista_bidimensional[i][j] = 1 + Math.floor(Math.random() * 11);
      }
      // Insertar en la tabla HTML
      if (i === 0) {
        document.getElementById(Line1).innerHTML +=
          "<td>" + llista_bidimensional[i][j] + "</td>";
      } else if (i === 1) {
        if (j === 0) {
          document.getElementById(Tr).innerHTML += "<tr id=" + Line2 + "></tr>";
        }
        document.getElementById(Line2).innerHTML +=
          "<td>" + llista_bidimensional[i][j] + "</td>";
      }

      console.log(`Fila ${i}, Columna ${j}: ${llista_bidimensional[i][j]}`);
    }
  }
}

Array2("fila1", "array2", "fila2", true);

/*
ñ 3. Afegeix el botó “PRIMER Y ÚLTIMO VALOR” que mostri en un DIV #resultats el
ñ valor del primer y últim valor dels arrays: 1 i 3; 2 i 1, 4 i 8
*/

document
  .getElementById("PRIMER Y ÚLTIMO VALOR")
  .addEventListener("click", getPrimerYUltim);

function getPrimerYUltim() {
  document.getElementById("resultat").innerHTML =
    "Primer array: " +
    llista_numeros[0] +
    " i " +
    llista_numeros[llista_numeros.length - 1] +
    "<br>Segon array: " +
    llista_bidimensional[0] +
    " i " +
    llista_bidimensional[llista_bidimensional.length - 1];
}

/*
ñ 4. Afegeix el botó “ESBORRAR ÚLTIM VALOR” que esborri el últim element de
ñ cada array y mostri de nou el seu contingut
  */

document
  .getElementById("ESBORRAR ÚLTIM VALOR")
  .addEventListener("click", deleteLast);

console.log("Ejercici4");

function deleteLast() {
  document.getElementById("ESBORRAR ÚLTIM VALOR").disabled = true;

  llista_numeros.pop();

  console.log("Array 1");
  document.getElementById("arrays4.1").innerHTML += "Array 1";

  Array1("array4.1", false);

  console.log("Array 2");
  document.getElementById("arrays4.2").innerHTML += "Array 2";
  llista_bidimensional[1].pop();
  Array2("fila4.1", "array4.2", "fila4.2", false);
}

/*
ñ 5. Afegir el botó “AFEGEIX VALORS FINAL” que afegeixi un nou valor al final de
ñ “llista_numeros” i un nou parell de valors al final de “llista_bidimensional”.
*/

document
  .getElementById("AFEGEIX VALORS FINAL")
  .addEventListener("click", addNumber);

function addNumber() {
  llista_numeros.push(1 + Math.floor(Math.random() * 11));

  document.getElementById("arrays5.1").innerHTML += "Array 1";

  Array1("array5.1", false);

  for (let i = 0; i < 2; i++) {
    llista_bidimensional[1].push(1 + Math.floor(Math.random() * 11));
  }

  document.getElementById("arrays5.2").innerHTML += "Array 2";

  Array2("fila5.1", "array5.2", "fila5.2", false);
}
