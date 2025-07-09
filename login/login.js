const next = document.querySelector('.next-button');
const submit = document.querySelector('.login-button');

const idUI = document.querySelector('.login-container-side');
const passwordUI = document.querySelector('.password-wrapper');

const insertedId = document.querySelector('#insert-id');
const insertedIdText = document.querySelector('.inserted-id');
const inputId = document.getElementById('userId');
const inputPassword = document.getElementById('userPassword');

const bodyDocument = document.body;

next.addEventListener('click', () => {
    idUI.classList.add('login-container-remove');
    
    setTimeout(() => {
        passwordUI.classList.add('password-wrapper-show');
        insertedIdText.innerText = inputId.value;
    }, 500);
});

insertedId.addEventListener('click', () => {
    inputId.value = '';
    
    passwordUI.classList.remove('password-wrapper-show');
    
    setTimeout(() => {
        passwordUI.classList.remove('password-wrapper-show');
        idUI.classList.remove('login-container-remove');
    }, 500);
});

function navigate(url){
    bodyDocument.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}

document.querySelector('.create-user').addEventListener('click', (e)=>{
    e.preventDefault();
    navigate('/signUp/emailCheck.html');
})

window.addEventListener('DOMContentLoaded', () => {
    bodyDocument.classList.add('show');
})