// ==========================
// CUANDO CARGA LA PÁGINA
// ==========================

window.addEventListener('load', ()=>{

    // CONFETI
    confetti({

        particleCount:500,

        spread:300,

        origin:{ y:0.6 }

    });

    // MOSTRAR PUNTAJE
    document.getElementById('puntajeFinal').textContent =
    puntajeTotal;

    // ESPERAR UN POCO PARA LA VOZ
    setTimeout(()=>{

        hablarFelicitacion();

    }, 1000);

});


// ==========================
// PUNTAJE FINAL
// ==========================

// SUMAR PUNTAJES DE TODOS LOS JUEGOS
let puntajeJuego1 =
parseInt(localStorage.getItem("puntajeJuego1")) || 100;

let puntajeJuego2 =
parseInt(localStorage.getItem("puntajeJuego2")) || 100;

let puntajeJuego3 =
parseInt(localStorage.getItem("puntajeJuego3")) || 100;

let puntajeJuego4 =
parseInt(localStorage.getItem("puntajeJuego4")) || 100;

let puntajeJuego5 =
parseInt(localStorage.getItem("puntajeJuego5")) || 100;


// PUNTAJE TOTAL
let puntajeTotal =
puntajeJuego1 +
puntajeJuego2 +
puntajeJuego3 +
puntajeJuego4 +
puntajeJuego5;


// ==========================
// FUNCIÓN DE VOZ
// ==========================

function hablarFelicitacion(){

    // DETENER VOCES ANTERIORES
    speechSynthesis.cancel();

    const mensaje = new SpeechSynthesisUtterance();

    mensaje.lang = "es-CL";

    mensaje.text =
    "Felicitaciones. Lograste aprender sumas, restas, divisiones y multiplicaciones. Tu puntaje total es de " +
    puntajeTotal +
    " puntos.";

    mensaje.volume = 1;

    mensaje.rate = 0.9;

    mensaje.pitch = 1;

    speechSynthesis.speak(mensaje);

}