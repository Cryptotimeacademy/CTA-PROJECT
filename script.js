document.addEventListener('DOMContentLoaded', (event) => {
    let score = 0;
    const tapArea = document.getElementById('tap-area');
    const scoreDisplay = document.getElementById('score');

    tapArea.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = score;
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const progressBar = document.getElementById('progress-bar');
    const incrementButton = document.getElementById('increment-button');
    let width = 0;

    incrementButton.addEventListener('click', () => {
        if (width < 500) {
            width++;
            progressBar.style.width = width + '%';
        }
    });
});

