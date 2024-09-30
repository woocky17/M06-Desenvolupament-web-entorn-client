

    let llista = document.getElementById('llista_propietats');

    let minValue = Number.MIN_VALUE;
    let totalWidth = screen.width;
    let innerWidth = window.innerWidth;
    let pageTitle = document.title;
    let actualTime = new Date().toLocaleTimeString();
    
    llista.innerHTML = 
        `<ol>
        <li>Valor mínim que pot tenir un número JS: `+minValue+`</li>
        <li>Amplada total de la pantalla: `+totalWidth+`</li>
        <li>Amplada interna de la finestra: `+innerWidth+`</li>
        <li>Títol de la web: `+pageTitle+`</li>
        <li>Hora actual: ` +actualTime+`</li>
        </ol>`;


    window.setInterval(5);