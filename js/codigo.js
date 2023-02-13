let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(mascota) {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputFuegomon = document.getElementById('fuegomon')
    let inputAguamon = document.getElementById('aguamon')
    let inputTierramon = document.getElementById('tierramon')

    let spanMascotaJugador = document.getElementById('mascota-jugador')
    let Mascotajugador = document.getElementById('mascota-jugador')

    if (inputFuegomon.checked)
        spanMascotaJugador.innerHTML = ' Fuegomon'
    else if (inputAguamon.checked)
        spanMascotaJugador.innerHTML = ' Aguamon'
    else if (inputTierramon.checked)
        spanMascotaJugador.innerHTML = ' Tierramon'
    else
        alert('selecciona uno')

    seleccionarMascotaenemigo()
}


function ataqueFuego() {
    ataqueJugador = 'Fuego🔥'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'Agua💧'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'Tierra🍆'
    ataqueAleatorioEnemigo()
}

let resultado

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = numeroAleatorio(1, 3)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego🔥'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Agua💧'
    } else {
        ataqueEnemigo = 'Tierra🍆'
    }

    combate()
    crearMensaje()

}

function combate() {
    let spanVidaJugador = document.getElementById('vida-jugador')
    let spanVidaEnemigo = document.getElementById('vida-enemigo')
    if (ataqueEnemigo == ataqueJugador) {
        resultado = " ¡EMPATE! 🤼"

    } else if (ataqueJugador == 'Fuego🔥' && ataqueEnemigo == 'Tierra🍆') {
        resultado = " ¡GANASTE! 🥳"
        vidasEnemigo--
        spanVidaEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'Agua💧' && ataqueEnemigo == 'Fuego🔥') {
        resultado = " ¡GANASTE! 🥳"
        vidasEnemigo--
        spanVidaEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'Tierra🍆' && ataqueEnemigo == 'Agua💧') {
        Resultado = " ¡GANASTE! 🥳"
        vidasEnemigo--
        spanVidaEnemigo.innerHTML = vidasEnemigo

    } else {
        Resultado = " PERDISTE... 😢"
        vidasJugador--
        spanVidaJugador.innerHTML = vidasJugador
        spanVidaEnemigo.innerHTML = vidasEnemigo
    }
    revisarVidas()
    //Salud
    function revisarVidas() {
        if (vidasEnemigo == 0) {
            alert("GANASTE 🥳🥳🥳")
            crearMensajeFinal('Felicidades el wachimon Enemigo Esta en coma GANASTE 🥳🥳🥳')
        } else if (vidasJugador == 0) {
            alert("PERDISTE 😢😢😢")
            crearMensajeFinal('Tu wachimon termino en coma y fue llevado al hospital 😢😢😢')
        }


    }

}


function crearMensaje(resultado) {
    let sectionLog = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')


    let NuevoAtaqueDelJugador = document.createElement('p')
    let NuevoAtaqueDelEnemigo = document.createElement('p')

    sectionLog.innerHTML = Resultado
    NuevoAtaqueDelJugador.innerHTML = ataqueJugador
    NuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo


    ataquesDelJugador.appendChild(NuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(NuevoAtaqueDelEnemigo)
}
function crearMensajeFinal(resultadoFinal) {
    let sectionLog = document.getElementById('final')
    let parrafo = document.createElement('h2')
    parrafo.innerHTML = resultadoFinal
    sectionLog.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.disabled = true
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function seleccionarMascotaenemigo() {
    let MascotaAleatoria = numeroAleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById('mascota-Enemigo')
    let MascotaEnemigo = document.getElementById('mascota-Enemigo')

    if (MascotaAleatoria == 1) {
        // Fuegomon
        spanMascotaEnemigo.innerHTML = ' Fuegomon'
    } else if (MascotaAleatoria == 2) {
        //aguamon
        spanMascotaEnemigo.innerHTML = ' Aguamon'
    } else {
        //Tierramon
        spanMascotaEnemigo.innerHTML = ' Tierramon'
    }
}





window.addEventListener('load', iniciarJuego)