let avatarSeleccionado = "";

function hablar(texto){

    const voz = new SpeechSynthesisUtterance(texto);

    voz.lang = "es-ES";

    speechSynthesis.speak(voz);
}

window.onload = () => {

    hablar("Hola. Escribe tu nombre y selecciona un avatar.");
};

function seleccionarAvatar(img){

    document
        .querySelectorAll(".avatars img")
        .forEach(a => a.classList.remove("seleccionado"));

    img.classList.add("seleccionado");

    avatarSeleccionado = img.src;
}

function ingresar(){

    const nombre =
    document.getElementById("nombre").value.trim();

    if(nombre === ""){

        hablar("Debes escribir tu nombre.");

        return;
    }

    if(avatarSeleccionado === ""){

        hablar("Debes seleccionar un avatar.");

        return;
    }

    localStorage.setItem("nombre",nombre);
    localStorage.setItem("avatar",avatarSeleccionado);

    document.getElementById("aplausos").play();

    confetti({
        particleCount:300,
        spread:180,
        origin:{y:0.6}
    });

    setTimeout(()=>{
        location.href="bienvenida.html";
    },2000);
}