const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
})



// const nome = document.getElementById('nome').value;

const form = document.querySelector("#form");
const emailInput = document.querySelector("#email");
const senhaInput = document.querySelector("#senha");



form.addEventListener("submit", (event) => {
    event.preventDefault();


//verificar se o email está vazio e é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu email.");
        return;
    }

//verifica se a senha é válida
    if(!validatePassword(senhaInput.value, 7)) {
        alert("A senha precisa ter no mínimo 7 dígitos");
        return;
    }

    form.submit();
});


//validar email

function isEmailValid(email) {

    //criando regex
    const emailRegex = new RegExp(
        // usuario13@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }
        return false;
}

function validatePassword(senha, minDigits) {
    if(senha.length >= minDigits) {
        return true;
    }
    return false;
}


