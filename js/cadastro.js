let nome = document.querySelector("#nome")
let labelNome = document.querySelector("#labelNome")

let email = document.querySelector("#email")
let labelEmail = document.querySelector("#labelEmail")

let password = document.querySelector("#password")
let labelPassword = document.querySelector("#labelPassword")

let confirmPass = document.querySelector("#confirmPass")
let labelConfirmPass = document.querySelector("#labelConfirmPass")

let verPassword = document.querySelector("#verPassword")

let verConfirmPass = document.querySelector("#verConfirmPass")

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2 && nome.value.length >= 1) {
        labelNome.setAttribute('style', 'color:red')
        labelNome.innerHTML = 'Minimo de 3 caracteres.'
    } else {
        labelNome.setAttribute('style', 'color:none')
        labelNome.innerHTML = 'Nome'
    }
})

email.addEventListener = ('keyup', () => {
    if (!email.checkValidity()) {
        labelEmail.setAttribute('style', 'color:red')
        labelEmail.innerHTML = 'Digite um e-mail valido.'
    } else {
        labelEmail.setAttribute('style', 'color:none')
        labelEmail.innerHTML = 'E-mail'
    }
})

password.addEventListener("keyup", () => {
    if (password.value.length <= 4 && password.value.length >= 1) {
        labelPassword.setAttribute('style', 'color:red')
        labelPassword.innerHTML = 'Minimo de 3 caracteres.'
    } else {
        labelPassword.setAttribute('style', 'color:none')
        labelPassword.innerHTML = 'Password'
    }
})

confirmPass.addEventListener('keyup', () => {
    if (password.value != confirmPass.value) {
        labelConfirmPass.setAttribute('style','color:red')
        labelConfirmPass.innerHTML = 'As devem ser iguais.'
    }else{
        labelConfirmPass.setAttribute('style','color:none')
        labelConfirmPass.innerHTML ='Confirme sua senha'
    }
})

// icones de senha

verPassword.addEventListener('click', () => {
    let inputSenha = document.querySelector('#password')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

verConfirmPass.addEventListener('click', () => {
    let inputConfirm = document.querySelector('#confirmPass')

    if (inputConfirm.getAttribute('type') == 'password') {
        inputConfirm.setAttribute('type', 'text')
    } else {
        inputConfirm.setAttribute('type', 'password')
    }
})

function cadastrar(){

    setTimeout(() => {
        window.location.href = '/index.html'
    }, 1000)
}

