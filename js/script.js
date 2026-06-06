document.addEventListener("DOMContentLoaded", () => {
    
    const botaoOrcamento = document.getElementById("botaoOrcamento");

    if (botaoOrcamento) {
        botaoOrcamento.addEventListener("click", () => {
            const numeroWhatsapp = "5511999999999"; 
            const mensagem = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para o meu veículo.");
            const url = `https://wa.me/${numeroWhatsapp}?text=${mensagem}`;
            
            window.open(url, "_blank");
        });
    }

    // Efeito para mudar o fundo do cabeçalho ao rolar a página
    const cabecalho = document.querySelector(".cabecalhoPrincipal");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            cabecalho.style.backgroundColor = "rgba(10, 10, 10, 0.95)";
            cabecalho.style.borderBottom = "1px solid #262626";
        } else {
            cabecalho.style.backgroundColor = "transparent";
            cabecalho.style.borderBottom = "none";
        }
    });
});