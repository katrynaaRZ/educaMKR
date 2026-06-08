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


// DRAG
numeros.forEach(numero => {

    numero.addEventListener('dragstart', (e)=>{

        e.dataTransfer.setData('text', numero.textContent);

    });

});


// DROP
zonas.forEach(zona => {

    zona.addEventListener('dragover', (e)=>{

        e.preventDefault();

    });

    zona.addEventListener('drop', (e)=>{

        e.preventDefault();

        const data = e.dataTransfer.getData('text');

        zona.innerHTML = "";

        const nuevoNumero = document.createElement("div");

        nuevoNumero.textContent = data;

        nuevoNumero.style.width = "100%";

        nuevoNumero.style.height = "100%";

        nuevoNumero.style.display = "flex";

        nuevoNumero.style.justifyContent = "center";

        nuevoNumero.style.alignItems = "center";

        nuevoNumero.style.fontWeight = "bold";

        zona.appendChild(nuevoNumero);

    });

});


// VERIFICAR
verificarBtn.addEventListener('click', ()=>{

    let correctas = 0;

    zonas.forEach(zona => {

        if(zona.textContent.trim() === zona.dataset.answer){

            zona.classList.add('correcto');

            zona.classList.remove('incorrecto');

            correctas++;

        }else{

            zona.classList.add('incorrecto');

            zona.classList.remove('correcto');

        }

    });

    // TODO CORRECTO
    if(correctas === zonas.length){

        score = 100;

        scoreText.textContent = score;

        audioCorrecto.play();

        finalizarBtn.disabled = false;

        confetti({

            particleCount:400,

            spread:200,

            origin:{ y:0.6 }

        });

    }else{

        score = 0;

        scoreText.textContent = score;

        audioIncorrecto.play();

    }

});


// REINICIAR
reiniciarBtn.addEventListener('click', ()=>{

    zonas.forEach(zona => {

        zona.innerHTML = "";

        zona.classList.remove('correcto');

        zona.classList.remove('incorrecto');

    });

});


// FINALIZAR
finalizarBtn.addEventListener('click', ()=>{

    audioClick.play();

    confetti({

        particleCount:600,

        spread:300

    });

    mensajeFinal.innerHTML =
    "🎉 ¡Felicidades! Completaste todos los juegos matemáticos 🎉";

    // IR A FINAL.HTML
    setTimeout(()=>{

        window.location.href = "final.html";

    }, 2500);

});