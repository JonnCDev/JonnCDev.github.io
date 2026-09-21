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