import { botaoAtivar } from './app.js'
export let somPlay = new Audio('../sons/play.wav');
export let somEnd = new Audio('../sons/beep.mp3');
export let intervalo = null

let startTimer = (duration, display) => {
    var timer = duration, minutes, seconds;
    //display.textContent = " "
    intervalo = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = 0;
            somEnd.play()
            botaoAtivar()
        }
    }, 10);
}

export let setTimer = (contexto) => {
    var duration;
    switch (contexto) {
        case "foco":
            // code block
            duration = 60 * 25; // Converter para segundos
            break;
        case 'descanso-curto':
            // code block
            duration = 60 * 5; // Converter para segundos
            break;
        case 'descanso-longo':
            // code block
            duration = 60 * 15; // Converter para segundos
            break;
    }

    var display = document.querySelector('#timer'); // Selecionando o timer
    startTimer(duration, display); // Iniciando o timer
};
