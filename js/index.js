
let verPassword = document.querySelector("#verPassword")

verPassword.addEventListener('click', () =>{
    let senhalogin = document.querySelector("#password")

    if(senhalogin.getAttribute('type') == 'password'){
        senhalogin.setAttribute('type', 'text')
    }else{
        senhalogin.setAttribute('type', 'password')
    }
})