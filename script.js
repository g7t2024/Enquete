const scoreButtons = document.querySelectorAll('.score-button');
const userScore = document.getElementById('user-score');
const scoreChart = new Chart(document.getElementById('score-chart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: Array.from({ length: 10 }, (_, i) => (i + 1).toString()),
        datasets: [{
            label: 'Pontuação',
            data: JSON.parse(localStorage.getItem('scores')) || Array(10).fill(0),
            backgroundColor: 'rgba(75, 192, 192, 0.5)'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

scoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const score = button.getAttribute('data-score');
        userScore.textContent = score;

        const data = scoreChart.data.datasets[0].data;
        data[score - 1]++;
        scoreChart.update();

        // Salvar as pontuações no localStorage
        localStorage.setItem('scores', JSON.stringify(data));
        localStorage.setItem('userScore', score);
        document.getElementById('reset-button').style.display = 'block';
    });
});

// Recuperar a pontuação anterior se existir
const previousScore = localStorage.getItem('userScore');
if (previousScore) {
    userScore.textContent = previousScore;
}

// Habilitar a opção de resetar a votação
document.getElementById('reset-button').addEventListener('click', () => {
    // Carregar o arquivo de senha externo
    const script = document.createElement('script');
    script.src = 'password.js';
    document.body.appendChild(script);
});
