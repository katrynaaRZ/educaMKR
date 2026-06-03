// BOTONES

const btnComenzar =
document.getElementById("btnComenzar");

const btnComprobar =
document.getElementById("btnComprobar");

const btnReintentar =
document.getElementById("btnReintentar");

const btnSiguiente =
document.getElementById("btnSiguiente");

// ZONA JUEGO

const zonaJuego =
document.getElementById("zonaJuego");

// MENSAJE

const mensaje =
document.getElementById("mensaje");

// AUDIOS

const audioCorrecto =
document.getElementById("audioCorrecto");

const audioIncorrecto =
document.getElementById("audioIncorrecto");

const audioFinal =
document.getElementById("audioFinal");

// MOSTRAR JUEGO

btnComenzar.addEventListener("click", () => {

    zonaJuego.classList.remove("oculto");

    btnComenzar.style.display = "none";

});

// DRAG

const respuestas =
document.querySelectorAll(".respuesta");

const zonas =
document.querySelectorAll(".drop-zone");

let elementoArrastrado = null;

// INICIAR ARRASTRE

respuestas.forEach(respuesta => {

    respuesta.addEventListener("dragstart", () => {

        elementoArrastrado = respuesta;

    });

});

// CONFIGURAR ZONAS

zonas.forEach(zona => {

    zona.addEventListener("dragover", (e) => {

        e.preventDefault();

    });

    zona.addEventListener("drop", () => {

        zona.innerHTML = "";

        zona.appendChild(elementoArrastrado);

    });

});

// COMPROBAR

btnComprobar.addEventListener("click", () => {

    let correctas = 0;

    zonas.forEach(zona => {

        const respuesta =
        zona.querySelector(".respuesta");

        if(respuesta){

            if(
                respuesta.textContent.trim()
                ===
                zona.dataset.correcto
            ){

                correctas++;

            }

        }

    });

    // SI TODO ESTA BIEN

    if(correctas === zonas.length){

        mensaje.innerHTML =
        "🎉 ¡Excelente trabajo cachorro! 🎉";

        mensaje.style.color = "green";

        audioCorrecto.play();

        lanzarConfeti();

        setTimeout(() => {

            audioFinal.play();

        }, 1500);

    }

    // SI HAY ERRORES

    else{

        mensaje.innerHTML =
        "❌ Algunas respuestas están incorrectas";

        mensaje.style.color = "red";

        audioIncorrecto.play();

    }

});

// REINTENTAR

btnReintentar.addEventListener("click", () => {

    location.reload();

});

// SIGUIENTE

btnSiguiente.addEventListener("click", () => {

    window.location.href =
    "actividad3.html";

});

// CONFETI SIMPLE

function lanzarConfeti(){

    for(let i = 0; i < 150; i++){

        const confeti =
        document.createElement("div");

        confeti.innerHTML = "⭐";

        confeti.style.position = "fixed";

        confeti.style.left =
        Math.random() * 100 + "vw";

        confeti.style.top = "-20px";

        confeti.style.fontSize = "30px";

        confeti.style.animation =
        "caer 3s linear forwards";

        document.body.appendChild(confeti);

        setTimeout(() => {

            confeti.remove();

        }, 3000);

    }

}

// CREAR ANIMACION

const style = document.createElement("style");

style.innerHTML = `

@keyframes caer{

    to{
        transform:translateY(100vh);
    }

}

`;

document.head.appendChild(style);