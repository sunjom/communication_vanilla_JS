const agree= document.querySelector('#check');
const btn = document.querySelector('#nextBtn');
const backBtn = document.querySelector('#backBtn');

agree.addEventListener('change', ()=>{
    btn.disabled = !agree.checked;
})

function naviage(url){
    document.body.classList.remove('loaded');
    document.body.classList.add('fade-out');
    setTimeout(()=> {
        window.location.href = url;
    },1000)
};

backBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    naviage('/login/login.html');
})

window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});