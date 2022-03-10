'use strict'

//CRIAR SONS
const sons = {
    'A': 'sounds_sound-1.mp3',
    'S': 'sounds_sound-2.mp3',
    'D': 'sounds_sound-3.mp3',
    'F': 'sounds_sound-4.mp3',
    'G': 'sounds_sound-5.mp3',
    'H': 'sounds_sound-6.mp3',
    'J': 'sounds_sound-7.mp3',
};

//CRIAR AS DIVS
const criarDiv = (texto) =>{
    const div = document.createElement('div');
    div.classList.add('tecla');
    div.id = texto;
    div.textContent = texto;
    document.getElementById('conteiner').appendChild(div);
};

//EXIBIR OS SONS
const exibir = (sons) =>{
    Object.keys(sons).forEach(criarDiv);
};

//EFEITOS DE HOVER
const adicionarEfeito = (letra) =>{
    document.getElementById(letra)
            .classList.add('active');
};
const retirarEfeito = (letra) =>{
    const div = document.getElementById(letra);
    const removerActive = () =>{
        div.classList.remove('active');
    };
    div.addEventListener('transitionend', removerActive );
};
//VERIFICAÇÃO DA LETRA
const ativarDiv = (evento) =>{
    let letra = evento.target.id;
    let letraPermitida = sons.hasOwnProperty(letra);
    if(letraPermitida){
        adicionarEfeito(letra);
        tocarSom(letra);
        retirarEfeito(letra);
    }
    
};

//TOCAR O SOM
const tocarSom = (letra) =>{
    let audio = new Audio(`./SOUNDS/${sons[letra]}`);
    audio.play();
};
//CHAMAR FUNÇÃO
exibir(sons);
document.getElementById('conteiner')
        .addEventListener('click',ativarDiv);