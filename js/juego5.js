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
    "Bienvenido al desafío matemático final. En esta actividad deberás completar sumas, restas, multiplicaciones y divisiones. Arrastra los números correctos a las casillas vacías y luego presiona el botón verificar para obtener tu puntaje final.";

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

const finalizarBtn = document.getElementById('finalizar');

const scoreText = document.getElementById('score');

const mensajeFinal = document.getElementById('mensajeFinal');

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

        finalizarBtn.disabled = false;

        mensajeFinal.textContent =
        "🎉 ¡Excelente trabajo! 🎉";

        // GUARDAR PUNTAJE
        localStorage.setItem("puntajeJuego5", score);

        // VOZ FELICITACIÓN
        const felicidades = new SpeechSynthesisUtterance();

        felicidades.lang = "es-CL";

        felicidades.text =
        "Felicidades. Obtuviste " + score +
        " puntos. Has completado el desafío matemático final.";

        speechSynthesis.speak(felicidades);

        // CONFETI
        confetti({

            particleCount:400,

            spread:200,

            origin:{ y:0.6 }

        });

    }else{

        score = 0;

        scoreText.textContent = score;

        audioIncorrecto.play();

        mensajeFinal.textContent =
        "❌ Algunas respuestas son incorrectas ❌";

        // GUARDAR PUNTAJE
        localStorage.setItem("puntajeJuego5", score);

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

    mensajeFinal.textContent = "";

});


// ==========================
// IR A RESULTADO FINAL
// ==========================

finalizarBtn.addEventListener('click', ()=>{

    audioClick.play();

    confetti({

        particleCount:500,

        spread:250

    });

    setTimeout(()=>{

        window.location.href = "final.html";

    }, 1500);

});