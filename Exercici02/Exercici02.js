// Esperar que el DOM estigui completament carregat
document.addEventListener('DOMContentLoaded', () => {
    // Funció per crear i omplir la taula
    function crearTaulaPropietats() {
        const taulaDiv = document.getElementById('taula_propietats');

        // Crear la taula
        const taula = document.createElement('table');
        const capcelera = taula.createTHead();
        const filaCapcelera = capcelera.insertRow(0);
        filaCapcelera.insertCell(0).textContent = 'Propietat';
        filaCapcelera.insertCell(1).textContent = 'Valor';

        const cosTaula = taula.createTBody();

        // Propietats i valors
        const propietats = [
            { text: 'Valor màxim que pot tenir un número JS', valor: Number.MAX_VALUE },
            { text: 'Altura total de la pantalla', valor: screen.height },
            { text: 'Altura interna de la finestra', valor: window.innerHeight },
            { text: 'URL de la web', valor: window.location.href }
        ];

        // Afegir cada propietat a la taula
        propietats.forEach(propietat => {
            const fila = cosTaula.insertRow();
            fila.insertCell(0).textContent = propietat.text;
            fila.insertCell(1).textContent = propietat.valor;
        });

        // Afegir la taula al div
        taulaDiv.appendChild(taula);
    }

    // Cridar la funció per crear la taula
    crearTaulaPropietats();
});
