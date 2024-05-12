import { somPlay, somEnd, intervalo, setTimer } from './timer.js'

// relogio tela
let timer = document.getElementById('timer')

// cor de fundo
// https://horadecodar.com.br/como-pegar-o-atributo-data-id-com-javascript/

let fundoApp = document.querySelector('.foco__fundo-app');
let colorFundo = fundoApp.getAttribute('data-contexto');
// imagem de fundo
let imgFundo = document.querySelector('.app__image');
//texto principal
let msg = document.querySelector('.app__title');

//  Tipos de foco
let foco = document.querySelector('.app__card-button--foco');

let focoCurto = document.querySelector('.app__card-button--curto');

let focoLongo = document.querySelector('.app__card-button--longo');

// Botes de foco
let btns = document.querySelectorAll('.app__card-button')

// botao iniciar
//let timer = document.getElementById('timer')
let iniciar = document.getElementById('start-pause')

//https://www.w3schools.com/jsref/jsref_foreach.asp

let removeActive = () => {
    btns.forEach((btn) => {
        btn.classList.remove('active')
    })
}

let alterarContexto = (contexto) => {
    imgFundo.setAttribute('src', `../imagens/${contexto}.png`)
    fundoApp.setAttribute('data-contexto', contexto)
}

//https://www.w3schools.com/js/js_switch.asp

let alterarTexto = (contexto) => {
    switch (contexto) {
        case "foco":
            // code block
            msg.innerHTML = "Otimize sua produtividade,<br><strong class='app__title-strong'>mergulhe no que importa.</strong>";
            break;
        case 'descanso-curto':
            // code block
            msg.innerHTML = "Descanso Curto,<br><strong class='app__title-strong'>mergulhe no que importa.</strong>"
            break;
        case 'descanso-longo':
            // code block
            msg.innerHTML = "Descanso Longo,<br><strong class='app__title-strong'>mergulhe no que importa.</strong>"
            break;
    }
}

let tipoFoco = 'foco';

foco.addEventListener("click", () => {
    alterarContexto('foco')
    //console.log(colorFundo)
    alterarTexto('foco')
    removeActive()
    foco.classList.add('active')
    tipoFoco = 'foco'
    clearInterval(intervalo)
    stopTimer('foco', timer)
    somEnd.pause()
    botaoAtivar()
})

focoCurto.addEventListener("click", () => {
    alterarContexto('descanso-curto')
    //console.log(colorFundo)
    alterarTexto('descanso-curto')
    removeActive()
    focoCurto.classList.add('active')
    tipoFoco = 'descanso-curto'
    clearInterval(intervalo)
    stopTimer('descanso-curto', timer)
    somEnd.pause()
    botaoAtivar()
})

focoLongo.addEventListener("click", () => {
    alterarContexto('descanso-longo')
    //console.log(colorFundo)
    alterarTexto('descanso-longo')
    removeActive()
    focoLongo.classList.add('active')
    tipoFoco = 'descanso-longo'
    clearInterval(intervalo)
    stopTimer('descanso-longo', timer)
    somEnd.pause()
    botaoAtivar()
})

// timer de contagem regressiva 
let stopTimer = (contexto, timerTela) => {
    var tempo;
    switch (contexto) {
        case "foco":
            // code block
            tempo = '25:00'; // Converter para segundos
            break;
        case 'descanso-curto':
            // code block
            tempo = '05:00'; // Converter para segundos
            break;
        case 'descanso-longo':
            // code block
            tempo = '15:00'; // Converter para segundos
            break;
    }
    timerTela.textContent = tempo
}

//relogio tela

iniciar.addEventListener('click', () => {
    somEnd.pause()
    somPlay.play()
    clearInterval(intervalo)
    setTimer(tipoFoco);
    botaoDesativar()
})

let botaoDesativar = () => {
    iniciar.disabled = true;
    iniciar.style.background = '#ffffff20'
}
export let botaoAtivar = () => {
    iniciar.disabled = false;
    iniciar.style.background = 'linear-gradient(180deg, #B872FF 0%, #144480 100%)';
}

// teste time
window.onload = stopTimer('foco', timer) 
