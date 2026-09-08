<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfólio - Luis Alberto</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="./src/output.css">

</head>

<body>

    <header class="cabecalho">
    <section class="imglogo">
        <img
            src="imgs/logo_port.png"
            alt="Logotipo Oficial"
        >
    </section>

    <nav>
        <ul class="infoport">
            <li><a href="#sobre">SOBRE MIM</a></li>
            <li><a href="#habilidades">HABILIDADES</a></li>
            <li><a href="#projetos">PROJETOS</a></li>
            <li><a href="#contato">CONTATO</a></li>
        </ul>
    </nav>
</header>

<section id="apresentacao" class="apresentacao">

    <!-- Chuva de imagens criada pelo JavaScript -->
    <div id="chuva-imagens" aria-hidden="true"></div>

    <!-- Camada azul sobre as imagens -->
    <div class="fundo-azul"></div>

    <!-- Conteúdo principal -->
    <div class="conteudo-apresentacao">
        <figure class="foto-perfil">
            <img
                src="imgs/foto_de_perfil.png"
                alt="Foto de perfil de Luis Alberto"
            >
        </figure>

        <div class="textos-apresentacao">
            <h1>
                Olá, sou
                <span class="nomedestaque">Luis Alberto</span>
            </h1>

            <h2>
                Agile Coach | Agile Master | Scrum Master
            </h2>

            <div class="descricao-apresentacao">
                <p>
                    Faço a agilidade sair do quadro e chegar ao resultado.
                </p>

                <p>
                    Conecto estratégia, pessoas e métricas para construir
                    times mais eficientes e produtos que evoluem com propósito.
                </p>
            </div>
        </div>
    </div>

</section>

<script src="js/script.js"></script>
</body>
</html>

CSS:
body {
    margin: 0;
    min-height: 100vh;
    background: linear-gradient(
        135deg,
        rgb(17, 21, 117),
        rgb(33, 55, 99),
        rgb(0, 0, 0)
    );
}
.cabecalho {
    width: 100%;
    padding: 5px 40px;
    box-sizing: border-box;
    background-color: white;

    display: flex;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
}

.imglogo img {
    width: 100px;
    height: auto;
    display: block;
}

.cabecalho nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}



.infoport {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    margin: 0;
    padding: 0;
    list-style: none;
}

.infoport li a {
    padding: 10px;
    color: black;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    font-family: Helvetica, sans-serif;  
}
.infoport li a:hover {
    color: #00BFFF;
    transition: 0.3s;
}
.nomedestaque {
    background: linear-gradient(90deg, #dadde9b9, #1215c5);
    background-clip: text;
    -webkit-background-clip: text;

    color: transparent;
    -webkit-text-fill-color: transparent;
}

#apresentacao {
    background: linear-gradient(
        135deg,
        rgb(14, 15, 44),
        rgb(3, 25, 70),
        rgb(0, 0, 0)
    );
}

.apresentacao {
    position: relative;
    min-height: 100vh;
    padding: 120px 24px 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    overflow: hidden;

    background: linear-gradient(
        135deg,
        rgb(14, 15, 44),
        rgb(3, 25, 70),
        rgb(0, 0, 0)
    );
}

.apresentacao {
    position: relative;

    min-height: 100vh;
    padding: 140px 24px 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    overflow: hidden;

    /* Fundo principal */
    background-color: #020718;
}

/* Área onde as imagens cairão */

#chuva-imagens {
    position: absolute;
    inset: 0;
    z-index: 0;

    overflow: hidden;
    pointer-events: none;
}

/* Cada imagem da chuva */

.imagem-caindo {
    position: absolute;
    top: -200px;
    left: var(--posicao-x);

    width: var(--tamanho);
    height: auto;

    opacity: var(--opacidade);
    filter: blur(var(--blur));

    animation-name: cair;
    animation-duration: var(--duracao);
    animation-delay: var(--atraso);
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    will-change: transform;
}

/* Camada azul acima das imagens */

.fundo-azul {
    position: absolute;
    inset: 0;
    z-index: 1;

    background: linear-gradient(
        135deg,
        rgba(14, 15, 70, 0.68),
        rgba(3, 25, 70, 0.72),
        rgba(0, 4, 20, 0.82)
    );

    pointer-events: none;
}

/* Conteúdo acima do efeito */

.conteudo-apresentacao {
    position: relative;
    z-index: 2;

    width: 100%;
    max-width: 1000px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    text-align: center;
}

/* Foto */

.foto-perfil {
    margin: 0;
}

.foto-perfil img {
    width: 250px;
    height: auto;
    display: block;

    border-radius: 16px;
    border: 2px solid rgba(255, 255, 255, 0.15);
}

/* Textos */

.textos-apresentacao {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.textos-apresentacao h1 {
    margin: 0;

    color: white;
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
}

.nomedestaque {
    background: linear-gradient(90deg, #929de1, #1e40ff);
    background-clip: text;
    -webkit-background-clip: text;

    color: transparent;
    -webkit-text-fill-color: transparent;
}

.textos-apresentacao h2 {
    margin: 0;

    color: white;
    font-size: clamp(1.2rem, 3vw, 2rem);
    font-weight: 600;
}

.descricao-apresentacao {
    max-width: 800px;

    color: #d1d5db;
    font-size: clamp(1rem, 2vw, 1.2rem);
    line-height: 1.7;
}

.descricao-apresentacao p {
    margin: 5px 0;
}

/* Movimento de queda */

@keyframes cair {
    0% {
        transform:
            translate3d(0, -200px, 0)
            rotate(0deg);
    }

    50% {
        transform:
            translate3d(var(--deslocamento), 50vh, 0)
            rotate(180deg);
    }

    100% {
        transform:
            translate3d(0, calc(100vh + 300px), 0)
            rotate(360deg);
    }
}

/* Celulares */

@media (max-width: 600px) {
    .apresentacao {
        padding-top: 140px;
    }

    .foto-perfil img {
        width: 180px;
    }

    .imagem-caindo {
        opacity: 0.2;
    }
}

/* Acessibilidade */

@media (prefers-reduced-motion: reduce) {
    .imagem-caindo {
        animation-play-state: paused;
    }
}

JS:
document.addEventListener("DOMContentLoaded", function () {
    const chuva = document.querySelector("#chuva-imagens");

    if (!chuva) {
        console.error("Elemento #chuva-imagens não encontrado.");
        return;
    }

    const quantidadeDeImagens = 35;
    const quantidadeDeArquivos = 8;

    for (let i = 0; i < quantidadeDeImagens; i++) {
        const imagem = document.createElement("img");

        // Repete os arquivos de 1 até 8
        const numeroDoArquivo = (i % quantidadeDeArquivos) + 1;

        imagem.src = `./imgs/emoji_blur${numeroDoArquivo}.png`;
        imagem.alt = "";
        imagem.classList.add("imagem-caindo");

        // Posição horizontal entre 0% e 95%
        const posicaoX = Math.random() * 95;

        // Tamanho entre 45px e 110px
        const tamanho = Math.floor(Math.random() * 65) + 45;

        // Duração entre 8 e 18 segundos
       const duracao = Math.floor(Math.random() * 6) + 5;
        // Atraso negativo faz as imagens aparecerem imediatamente
        const atraso = Math.random() * -20;

        // Movimento lateral entre -80px e 80px
        const deslocamento = Math.floor(Math.random() * 160) - 80;

        // Blur entre 2px e 6px
        const blur = Math.floor(Math.random() * 5) + 2;

        // Opacidade entre 0.25 e 0.55
        const opacidade = Math.random() * 0.3 + 0.25;

        imagem.style.setProperty("--posicao-x", `${posicaoX}%`);
        imagem.style.setProperty("--tamanho", `${tamanho}px`);
        imagem.style.setProperty("--duracao", `${duracao}s`);
        imagem.style.setProperty("--atraso", `${atraso}s`);
        imagem.style.setProperty(
            "--deslocamento",
            `${deslocamento}px`
        );
        imagem.style.setProperty("--blur", `${blur}px`);
        imagem.style.setProperty("--opacidade", opacidade);

        imagem.addEventListener("error", function () {
            console.error(
                `Não foi possível carregar: ${imagem.src}`
            );
        });

        chuva.appendChild(imagem);
    }
});
