// BOTÓN VOLVER

const btnInicio =
document.getElementById("btnInicio");

// AUDIO FINAL

const audioFinal =
document.getElementById("audioFinal");

// REPRODUCIR AUDIO

audioFinal.play();

// CREAR ESTRELLAS

for(let i = 0; i < 70; i++){

    const estrella =
    document.createElement("div");

    estrella.classList.add(
        "estrella"
    );

    estrella.innerHTML = "⭐";

    estrella.style.left =
    Math.random() * 100 + "vw";

    estrella.style.animationDuration =
    (Math.random() * 3 + 2)
    + "s";

    estrella.style.opacity =
    Math.random();

    document.body.appendChild(
        estrella
    );

}

// VOLVER AL INICIO

btnInicio.addEventListener("click", () => {

    window.location.href =
    "index.html";

});