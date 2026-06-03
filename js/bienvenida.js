window.onload = ()=>{

    const nombre =
    localStorage.getItem("nombre");

    const avatar =
    localStorage.getItem("avatar");

    document.getElementById(
        "nombreMostrado"
    ).innerHTML = nombre;

    document.getElementById(
        "avatarMostrado"
    ).src = avatar;

    const mensaje =
    new SpeechSynthesisUtterance(
        "Bienvenido " + nombre +
        ". Te deseamos mucho éxito en esta actividad matemática."
    );

    mensaje.lang = "es-ES";

    speechSynthesis.speak(mensaje);
};