const leerBtn = document.getElementById("leerBtn");
const comenzarBtn = document.getElementById("comenzarBtn");

/* Voz de bienvenida */

window.addEventListener("load", () => {

    const bienvenida = new SpeechSynthesisUtterance(
        "Hola. Bienvenido al desafío matemático. En esta actividad practicarás sumas, restas, multiplicaciones y divisiones para resolver problemas matemáticos. Cuando estés listo, presiona comenzar juegos."
    );

    bienvenida.lang = "es-CL";
    bienvenida.rate = 0.9;
    bienvenida.pitch = 1.2;
    bienvenida.volume = 1;

    speechSynthesis.speak(bienvenida);

});

/* Leer nuevamente */

leerBtn.addEventListener("click", () => {

    speechSynthesis.cancel();

    const texto = new SpeechSynthesisUtterance(
        "Practicar sumas, restas, multiplicaciones y divisiones para resolver problemas matemáticos. Demuestra todo lo que has aprendido y conviértete en un campeón de las matemáticas."
    );

    texto.lang = "es-CL";
    texto.rate = 0.9;
    texto.pitch = 1.2;
    texto.volume = 1;

    speechSynthesis.speak(texto);

});

/* Ir al juego */

comenzarBtn.addEventListener("click", () => {

    window.location.href = "juego1.html";

});