// Selecionar a seção onde os cards serão inseridos
const container = document.getElementById('container');

// Função para gerar os cards de flashcard
function gerarFlashcards(perguntas) {
    perguntas.forEach(pergunta => {
        const card = document.createElement('article');
        card.classList.add('cartao');

        const conteudo = document.createElement('div');
        conteudo.classList.add('cartao__conteudo');

        const titulo = document.createElement('h3');
        titulo.textContent = pergunta.categoria;

        const perguntaDiv = document.createElement('div');
        perguntaDiv.classList.add('cartao__conteudo__pergunta');
        perguntaDiv.innerHTML = `<p>${pergunta.pergunta}</p>`;

        const respostaDiv = document.createElement('div');
        respostaDiv.classList.add('cartao__conteudo__resposta');
        respostaDiv.innerHTML = `<p>${pergunta.resposta}</p>`;
        respostaDiv.style.display = 'none'; // Inicialmente a resposta está oculta

        // Adicionar os elementos ao card
        conteudo.appendChild(titulo);
        conteudo.appendChild(perguntaDiv);
        conteudo.appendChild(respostaDiv);
        card.appendChild(conteudo);

        // Adicionar o card ao container
        container.appendChild(card);

        // Interação ao clicar na pergunta
        perguntaDiv.addEventListener('click', () => {
            const resposta = respostaDiv;
            resposta.style.display = resposta.style.display === 'none' ? 'block' : 'none'; // Alternar visibilidade
        });
    });
}

// Quando a página carregar, gerar os flashcards
document.addEventListener('DOMContentLoaded', () => {
    gerarFlashcards(perguntas); // Passa as perguntas do arquivo 'perguntas.js'
});