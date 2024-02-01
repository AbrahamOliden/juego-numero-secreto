//Variables
let numeroSecreto;
let intentos;
let listaNumerosSecretos = [];
let numeroMaximo = 10;

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSecretos);

    if (listaNumerosSecretos.length === numeroMaximo) {
        asignarTextoElemento('p', 'Todos los números dentro del rango han sido jugados');
    } else {
        if (listaNumerosSecretos.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSecretos.push(numeroGenerado);
            return numeroGenerado;
        };
    };
    
};

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
};

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);

    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Adivinaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        };
        intentos++;
        limpiarEntrada();
    }
};

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Introduce un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarEntrada() {
    document.querySelector('#numeroUsuario').value = '';
};

function reiniciarJuego() {
    limpiarEntrada();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();