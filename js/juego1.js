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

        zona.textContent = data;

    });

});


// VERIFICAR
verificarBtn.addEventListener('click', ()=>{

    let correctas = 0;

    zonas.forEach(zona => {

        if(zona.textContent === zona.dataset.answer){

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

        confetti({

            particleCount:300,

            spread:180,

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

        zona.textContent = "";

        zona.classList.remove('correcto');

        zona.classList.remove('incorrecto');

    });

});


// SIGUIENTE ACTIVIDAD
siguienteBtn.addEventListener('click', ()=>{

    audioClick.play();

    confetti({

        particleCount:400,

        spread:200

    });

    setTimeout(()=>{

        window.location.href = "juego2.html";

    }, 1500);

});