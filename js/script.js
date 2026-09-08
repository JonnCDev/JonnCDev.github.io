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