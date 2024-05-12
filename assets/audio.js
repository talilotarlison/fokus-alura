//https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement

let ativarMusica = document.getElementById('alternar-musica');
let musica = new Audio('../sons/luna-rise-part-one.mp3');
musica.loop = true;

ativarMusica.addEventListener('change', ()=>{
    if(musica.paused){
        musica.play()
    }else{
        musica.pause()
    }
})