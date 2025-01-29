// Inicializa os ícones do Lucide
lucide.createIcons();

// Função para navegar entre as páginas
function navigateTo(page) {
    // Esconde todas as páginas
    document.querySelectorAll('main').forEach(main => {
        main.classList.add('hidden');
    });

    // Mostra a página selecionada
    document.getElementById(`${page}-page`).classList.remove('hidden');
} 