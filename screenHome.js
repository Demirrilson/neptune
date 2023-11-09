// const btnConta = document.getElementById('conta');
const btnConta = document.querySelector('#conta');
const pgConta = document.querySelector('#pgConta');
const btnNotifica = document.querySelector('#notifica')
const pgNotifica = document.querySelector("#pgNotifica")
const intro = document.querySelector('#intro');

btnConta.addEventListener('click', () => {
    pgConta.classList.remove("invi");
    intro.classList.add("invi");
    pgNotifica.classList.add("invi");
});

btnNotifica.addEventListener('click', () => {
    pgConta.classList.add("invi");
    intro.classList.add("invi");
    pgNotifica.classList.remove("invi");
});

