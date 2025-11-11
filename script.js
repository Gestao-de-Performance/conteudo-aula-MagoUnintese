console.log("Hello World");

const btnDarkMode = document.getElementById('btnDarkMode');

const temaAtual = localStorage.getItem('theme');

const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownContent = document.getElementById('dropdownContent');

if (temaAtual){
    document.documentElement.setAttribute('data-theme', temaAtual);
}

btnDarkMode.addEventListener('click', function() {
    let novoTema;

    const temaAtual = document.documentElement.getAttribute('data-theme');

    if (temaAtual === 'dark') {
        novoTema = 'light';
    } else {
        novoTema = 'dark';
    }

    document.documentElement.setAttribute('data-theme', novoTema);

    localStorage.setItem('theme', novoTema);
});

dropdownBtn.addEventListener('click', function(){
    dropdownContent.classList.toggle('show');
});


const slide = document.querySelector('.carrosselSlide');
const img = document.querySelectorAll('.carrosselSlide img');
const antBtn = document.getElementById('antBtn');
const proBtn = document.getElementById('proBtn');

let contador = 0;
const totalSlides = img.length;
const larguraSlide = img[0].clientWidth;

function moveParaSlide(indiceSlide) {
    slide.style.transform = 'translateX('+ (-larguraSlide * indiceSlide) + 'px)';
}

proBtn.addEventListener('click', () =>{
    contador++;
    if (contador >= totalSlides){
        contador = 0;
    }

    moveParaSlide(contador);
});

antBtn.addEventListener('click', () =>{
    contador--;
    if (contador < 0){
        contador = totalSlides - 1;
    }
    moveParaSlide(contador);
});

const formulario = document.getElementById('formularioContato');
const usuario = document.getElementById('usuario');
const email = document.getElementById('email');

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    if (validacao()) {
        alert('Formulário enviado com sucesso!');
        formulario.reset();
    }
});

function validacao(){
    let valido = true;

    const valorUsuario = usuario.value.trim();
    const valorEmail = email.value.trim();

    if (valorUsuario === ''){
        setError(usuario, 'O nome é obrigatório');
        valido = false;
    } else{
        setSucesso(usuario);
    }

    if (valorEmail === ''){
        setError(email, 'O e-mail é obrigatório');
        valido = false;
    } else if (emailValido(valorEmail)){
        setSucesso(email);
    } else {
        setError(email, 'Forneça um e-mail válido');
        valido = false;
    }

    return valido;
}

function setError(input, mensagem){
    const itemFormulario = input.parentElement;
    const mensagemErro = itemFormulario.querySelector('.mensagemErro');

    mensagemErro.innerText = mensagem;
    itemFormulario.classList.add('erro');
    itemFormulario.classList.remove('sucesso');
}

function setSucesso(input){
    const itemFormulario = input.parentElement;

    itemFormulario.classList.add('sucesso');
    itemFormulario.classList.remove('erro');

    const mensagemErro = itemFormulario.querySelector('.mensagemErro');
    mensagemErro.innerText = '';
}

function emailValido(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
