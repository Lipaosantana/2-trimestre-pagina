const questions = [
    {
        question: "Qual é a capital do Brasil?",
        answers: { A: "São Paulo", B: "Rio de Janeiro", C: "Brasília", D: "Belo Horizonte" },
        correct: "C"
    },
    {
        question: "Qual é o maior oceano do mundo?",
        answers: { A: "Atlântico", B: "Índico", C: "Pacífico", D: "Ártico" },
        correct: "C"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    document.querySelectorAll('.answer-btn').forEach((btn, index) => {
        const answerKey = ['A', 'B', 'C', 'D'][index];
        btn.innerText = question.answers[answerKey];
    });
}

function checkAnswer(answer) {
    const question = questions[currentQuestionIndex];
    const feedback = document.getElementById('feedback');

    if (answer === question.correct) {
        feedback.innerText = "Resposta correta!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "Resposta incorreta.";
        feedback.style.color = "red";
    }

    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;  // Próxima pergunta
    setTimeout(loadQuestion, 1000);  // Carregar a próxima pergunta após 1 segundo
}

loadQuestion();