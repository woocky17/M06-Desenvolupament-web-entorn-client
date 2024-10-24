window.onload = function() {

    
            let llista = document.getElementById("llista_propietats");
            llista.innerHTML = `<table border=1 cellspacing=0>
                <tr>
                    <td>Valor màxim que pot tenir un número JS</td>
                    <td> ${Number.MAX_VALUE}</td>
                </tr>
    
                <tr>
                    <td>Altura total de la pantalla</td>
                    <td>${screen.height}</td>
                </tr>
    
                <tr>
                    <td>Altura interna de la finestra</td>
                    <td>${window.innerHeight}</td>
                </tr>
    
                <tr>
                    <td>URL de la web</td>
                    <td>${window.location.href}</td>
                </tr>
            </table>`;
        
    


    let countdownInterval;
    let time = 0; 
    let isPaused = false;

    let minutosInput = document.getElementById('minutes');
    let segundosInput = document.getElementById('seconds');
    let countdown = document.getElementById('countdown');
    let alarma = document.getElementById('alarm');

    // Assegura que els botons existeixen
    let startButton = document.getElementById('start');
    let pauseButton = document.getElementById('pause');
    let resetButton = document.getElementById('reset');

    // Afegeix els event listeners només si els botons existeixen
    if (startButton && pauseButton && resetButton) {
        startButton.addEventListener('click', function() {
            if (isPaused) {
                isPaused = false;
            } else {
                let minutos = parseInt(minutosInput.value, 10);
                let segundos = parseInt(segundosInput.value, 10);
                time = minutos * 60 + segundos; 
            }

            if (time > 0) {
                clearInterval(countdownInterval);
                countdownInterval = setInterval(updateCountdown, 1000);
            }
        });

        pauseButton.addEventListener('click', function() {
            isPaused = true;
            clearInterval(countdownInterval);
        });

        resetButton.addEventListener('click', function() {
            clearInterval(countdownInterval);
            time = 0;
            countdown.textContent = '00:00';
            minutosInput.value = 0;
            segundosInput.value = 0;
            alarma.pause(); 
            alarma.currentTime = 0;
        });
    } else {
        console.error("Els botons no s'han trobat!");
    }

    function updateCountdown() {
        if (time <= 0) {
            clearInterval(countdownInterval);
            alarma.play();
        } else {
            time--;
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            countdown.innerHTML = '<span>' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0') + '</span>';
        }
    }

window.setInterval(Time, 1000)

let alarmTime = null;
let isAlarmPlaying = false;
let alarmSound = document.getElementById('alarmHour');

function Time() {
    let data = new Date();

    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();

    hora.innerHTML = `Hora actual: ${hours}:${minutes}:${seconds}`; 
    
    if (alarmTime && `${hours}:${minutes}` == alarmTime) {
        playAlarm();
    }
}
    document.getElementById('setAlarma').addEventListener('click', () => {
        let alarmInput = document.getElementById('alarmTime').value;
        
        if (alarmInput) {
            alarmTime = alarmInput; 
            document.getElementById('alarmStatus').textContent = `Alarma establerta per a ${alarmTime}`;
        }
    });

    function stopAlarm() {
        alarmSound.pause(); 
        alarmSound.currentTime = 0; 
        isAlarmPlaying = false; 
        alarmTime = null; 
        document.getElementById('alarmStatus').textContent = 'Alarma aturada';
    };

    document.getElementById('stopAlarm').addEventListener('click', stopAlarm);


    function playAlarm() {
    if (!isAlarmPlaying) {
        alarmSound.play();
        isAlarmPlaying = true;
    }
    }

    document.getElementById('song1').addEventListener('click', function() {
    let alarmSound = document.getElementById('alarmHour');
    alarmSound.src = 'Nirvana - The Man Who Sold The World (MTV Unplugged)_fregObNcHC8.mp3';
    alarmSound.load(); 
    if (isAlarmPlaying) {   
        alarmSound.play();
    }
});

document.getElementById('song2').addEventListener('click', function() {
    let alarmSound = document.getElementById('alarmHour');
    alarmSound.src = 'UNSHAKEN _ Low Bass Singer Cover - Geoff Castellucci _ Red Dead Redemption 2_v2XOy7sqEmI.mp3';
    alarmSound.load(); 
    if (isAlarmPlaying) {   
        alarmSound.play();
    }
});

document.getElementById('vol').addEventListener('input', function() {
    let volume = parseFloat(this.value);
    document.getElementById('alarmHour').volume = volume;
});

document.getElementById('playMusica').addEventListener('click', function () {
    playAlarm();
});
document.getElementById('pauseMusica').addEventListener('click', function () {
    alarmSound.pause(); 
        isAlarmPlaying = false; 
});
}