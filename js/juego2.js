// ==========================
// VOZ DE INSTRUCCIONES
// ==========================

window.addEventListener('load', ()=>{

    // ESPERAR UN POCO
    setTimeout(()=>{

        hablarInstrucciones();

    }, 1000);

});


// FUNCIÓN DE VOZ
function hablarInstrucciones(){

    // DETENER VOCES ANTERIORES
    speechSynthesis.cancel();

    const mensaje = new SpeechSynthesisUtterance();

    mensaje.lang = "es-CL";

    mensaje.text =
    "Bienvenido al juego de restas. Arrastra los números correctos a las casillas vacías para completar las operaciones matemáticas. Luego presiona el botón verificar.";

    mensaje.volume = 1;

    mensaje.rate = 0.9;

    mensaje.pitch = 1;

    speechSynthesis.speak(mensaje);

}


// ==========================
// VARIABLES
// ==========================

const numeros = document.querySelectorAll('.numero');

const zonas = document.querySelectorAll('.dropzone');

const verificarBtn = document.getElementById('verificar');

const reiniciarBtn = document.getElementById('reiniciar');

const siguienteBtn = document.getElementById('siguiente');

const scoreText = document.getElementById('score');

const audioCorrecto = document.getElementById('audioCorrecto');

const audioIncorrecto = document.getElementById('audioIncorrecto');

const audioClick = document.getElementById('audioClick');

let score = 0;


// ==========================
// DRAG
// ==========================

numeros.forEach(numero => {

    numero.addEventListener('dragstart', (e)=>{

        e.dataTransfer.setData('text/plain', numero.textContent);

    });

});


// ==========================
// DROP
// ==========================

zonas.forEach(zona => {

    zona.addEventListener('dragover', (e)=>{

        e.preventDefault();

    });

    zona.addEventListener('drop', (e)=>{

        e.preventDefault();

        const data = e.dataTransfer.getData('text/plain');

        // GUARDAR NÚMERO EN CASILLA
        zona.textContent = data;

        zona.style.color = "#000";

        zona.style.fontWeight = "bold";

        zona.style.fontSize = "34px";

        zona.style.display = "flex";

        zona.style.justifyContent = "center";

        zona.style.alignItems = "center";

    });

});


// ==========================
// VERIFICAR
// ==========================

verificarBtn.addEventListener('click', ()=>{

    let correctas = 0;

    zonas.forEach(zona => {

        const respuestaUsuario = zona.textContent.trim();

        const respuestaCorrecta = zona.dataset.answer;

        if(respuestaUsuario === respuestaCorrecta){

            zona.classList.add('correcto');

            zona.classList.remove('incorrecto');

            correctas++;

        }else{

            zona.classList.add('incorrecto');

            zona.classList.remove('correcto');

        }

    });

    // SI TODO ESTÁ CORRECTO
    if(correctas === zonas.length){

        score = 100;

        scoreText.textContent = score;

        audioCorrecto.play();

        siguienteBtn.disabled = false;

        // GUARDAR PUNTAJE
        localStorage.setItem("puntajeJuego2", score);

        // VOZ FELICITACIÓN
        const felicidades = new SpeechSynthesisUtterance();

        felicidades.lang = "es-CL";

        felicidades.text =
        "Felicidades. Obtuviste " + score +
        " puntos. Puedes avanzar a la siguiente actividad.";

        speechSynthesis.speak(felicidades);

        // CONFETI
        confetti({

            particleCount:300,

            spread:180,

            origin:{ y:0.6 }

        });

    }else{

        score = 0;

        scoreText.textContent = score;

        audioIncorrecto.play();

        // GUARDAR PUNTAJE
        localStorage.setItem("puntajeJuego2", score);

        // VOZ INCORRECTO
        const incorrecto = new SpeechSynthesisUtterance();

        incorrecto.lang = "es-CL";

        incorrecto.text =
        "Incorrecto. Obtuviste cero puntos. Inténtalo nuevamente.";

        speechSynthesis.speak(incorrecto);

    }

});


// ==========================
// REINICIAR
// ==========================

reiniciarBtn.addEventListener('click', ()=>{

    zonas.forEach(zona => {

        zona.textContent = "";

        zona.classList.remove('correcto');

        zona.classList.remove('incorrecto');

    });

});


// ==========================
// SIGUIENTE ACTIVIDAD
// ==========================

siguienteBtn.addEventListener('click', ()=>{

    audioClick.play();

    confetti({

        particleCount:400,

        spread:200

    });

    setTimeout(()=>{

        window.location.href = "juego3.html";

    }, 1500);

});