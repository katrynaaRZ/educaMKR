const nombres = [
"",
"uno","dos","tres","cuatro","cinco",
"seis","siete","ocho","nueve","diez"
];

function hablar(texto){

    speechSynthesis.cancel();

    const voz = new SpeechSynthesisUtterance(texto);

    voz.lang = "es-ES";
    voz.rate = 0.9;

    speechSynthesis.speak(voz);
}

function mostrarNumero(numero){

    const zona = document.getElementById("zonaImagenes");
    const grande = document.getElementById("numeroGrande");

    zona.innerHTML = "";
    grande.innerHTML = numero;

    // dice el nombre del número
    hablar(nombres[numero]);

    setTimeout(() => {

        for(let i = 0; i < numero; i++){

            const img = document.createElement("img");

            img.src = "img/perro.png";
            img.classList.add("perrito");

            zona.appendChild(img);
        }

        setTimeout(() => {

            if(numero === 1){
                hablar("1 perro");
            } else {
                hablar(numero + " perros");
            }

        }, 600);

    }, 900);
}

function irActividad2(){
    window.location.href = "actividad2.html";
}