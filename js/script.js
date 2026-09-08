/* =========================================
   EFEITO "CHUVA DE IMAGENS"
   Gera emojis/imagens caindo dentro de um
   contêiner, com posição, tamanho, duração,
   atraso, blur e opacidade aleatórios.
========================================= */

const QUANTIDADE_DE_ARQUIVOS = 8; // emoji_blur1.png até emoji_blur8.png

/**
 * Cria e insere imagens animadas ("chuva") dentro de um contêiner.
 *
 * @param {HTMLElement} container       Elemento onde as imagens serão inseridas.
 * @param {number} quantidadeDeImagens  Quantas imagens gerar.
 * @param {number} duracaoMin           Duração mínima da animação (segundos).
 * @param {number} duracaoMax           Duração máxima da animação (segundos).
 * @param {number} opacidadeMin         Opacidade mínima (0 a 1).
 * @param {number} opacidadeMax         Opacidade máxima (0 a 1).
 */
function criarChuvaDeImagens(
    container,
    quantidadeDeImagens,
    duracaoMin,
    duracaoMax,
    opacidadeMin,
    opacidadeMax
) {
    for (let i = 0; i < quantidadeDeImagens; i++) {
        const imagem = document.createElement("img");

        // Repete os arquivos de 1 até QUANTIDADE_DE_ARQUIVOS
        const numeroDoArquivo = (i % QUANTIDADE_DE_ARQUIVOS) + 1;

        imagem.src = `./imgs/emoji_blur${numeroDoArquivo}.png`;
        imagem.alt = "";
        imagem.classList.add("imagem-caindo");

        // Posição horizontal entre 0% e 95%
        const posicaoX = Math.random() * 95;

        // Tamanho entre 45px e 109px
        const tamanho = Math.floor(Math.random() * 65) + 45;

        // Duração aleatória dentro do intervalo recebido
        const duracao =
            Math.floor(Math.random() * (duracaoMax - duracaoMin + 1)) +
            duracaoMin;

        // Atraso negativo faz as imagens aparecerem imediatamente
        const atraso = Math.random() * -20;

        // Movimento lateral entre -80px e 79px
        const deslocamento = Math.floor(Math.random() * 160) - 80;

        // Blur entre 2px e 6px
        const blur = Math.floor(Math.random() * 5) + 2;

        // Opacidade aleatória dentro do intervalo recebido
        const opacidade =
            Math.random() * (opacidadeMax - opacidadeMin) + opacidadeMin;

        imagem.style.setProperty("--posicao-x", `${posicaoX}%`);
        imagem.style.setProperty("--tamanho", `${tamanho}px`);
        imagem.style.setProperty("--duracao", `${duracao}s`);
        imagem.style.setProperty("--atraso", `${atraso}s`);
        imagem.style.setProperty("--deslocamento", `${deslocamento}px`);
        imagem.style.setProperty("--blur", `${blur}px`);
        imagem.style.setProperty("--opacidade", opacidade);

        imagem.addEventListener("error", function () {
            console.error(`Não foi possível carregar: ${imagem.src}`);
        });

        container.appendChild(imagem);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Chuva fixa da seção de apresentação (hero)
    const chuvaApresentacao = document.querySelector("#chuva-imagens");

    if (chuvaApresentacao) {
        criarChuvaDeImagens(chuvaApresentacao, 35, 5, 10, 0.5, 0.8);
    } else {
        console.error("Elemento #chuva-imagens não encontrado.");
    }

    // Chuva reutilizável para as demais seções animadas (ex: "Sobre mim")
    const fundosComChuva = document.querySelectorAll(".chuva-imagens");

    fundosComChuva.forEach(function (fundo) {
        const quantidadeDeImagens = window.innerWidth <= 700 ? 16 : 32;
        criarChuvaDeImagens(fundo, quantidadeDeImagens, 8, 17, 0.35, 0.65);
    });
});

//====================== JS PARA CLIQUE E DESCIDA SUAVE NOS LINKS DO MENU ======================

const linksMenu = document.querySelectorAll('.infoport a[href^="#"]');

linksMenu.forEach(function (link) {
    link.addEventListener("click", function (evento) {
        evento.preventDefault();

        const idDaSecao = link.getAttribute("href");
        const secao = document.querySelector(idDaSecao);

        if (secao) {
            secao.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});