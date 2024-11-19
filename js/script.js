document.addEventListener("DOMContentLoaded", () => {
    destacarLinkAtivo();
    inicializarMenuResponsivo();
    mostrarMensagemBoasVindas();
});

// Destacar o link ativo no menu
function destacarLinkAtivo() {
    const linksNavegacao = document.querySelectorAll("nav ul li a");
    const caminhoAtual = window.location.pathname;

    linksNavegacao.forEach(link => {
        if (link.getAttribute("href").includes(caminhoAtual.split("/").pop())) {
            link.classList.add("link-ativo");
        }
    });
}

// Validar formulário de contato
function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos do formulário.");
        return false;
    }

    alert("Mensagem enviada com sucesso!");
    return true;
}

// Mostrar mensagem de boas-vindas apenas uma vez
function mostrarMensagemBoasVindas() {
    if (!localStorage.getItem("boasVindasMostrada")) {
        alert("Bem-vindo ao meu portfólio!");
        localStorage.setItem("boasVindasMostrada", "true");
    }
}

// Controlar o menu responsivo (abrir/fechar)
function inicializarMenuResponsivo() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-header ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll(".nav-header ul li a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
}

// Configuração do carrossel (se houver no layout)
const myCarouselElement = document.querySelector('#myCarousel');
if (myCarouselElement) {
    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 2000,
        touch: true
    });
}
