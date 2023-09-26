let segundo_geral = 0;
let intervalo = null;
let cronometro = document.getElementById("cronometro");

function Tempo(){
    segundo_geral++;

    let milesimo = segundo_geral % 100;
    let segundo = Math.floor((segundo_geral / 100) % 60);
    let minuto = Math.floor(segundo_geral / (100 * 60));

    if (milesimo < 10) milesimo = '0' + milesimo;
    if (segundo < 10) segundo = '0' + segundo;
    if (minuto < 10) minuto = '0' + minuto;

    cronometro.innerHTML = `${minuto}:${segundo}:${milesimo}`;
}

function Iniciar(){
    if (intervalo){
        return;
    }
    intervalo = setInterval(Tempo, 10);
}



function Pausar(){
    clearInterval(intervalo);
    intervalo = null;
}

function Resetar(){
    Pausar()
    segundo_geral = 0
    cronometro.innerHTML = "00:00:00";
}