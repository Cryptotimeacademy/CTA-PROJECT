// document.addEventListener('DOMContentLoaded', (event) => {
//     let score = 0;
//     const tapArea = document.getElementById('tap-area');
//     const scoreDisplay = document.getElementById('score');

//     tapArea.addEventListener('click', () => {
//         score++;
//         scoreDisplay.textContent = score;
//     });
// });
// document.addEventListener('DOMContentLoaded', (event) => {
//     const progressBar = document.getElementById('progress-bar');
//     const incrementButton = document.getElementById('increment-button');
//     let width = 0;

//     incrementButton.addEventListener('click', () => {
//         if (width < 500) {
//             width++;
//             progressBar.style.width = width + '%';
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', (event) => {
    let tapCount = 0;
    let rewardCount = 0;
    let points = 0;

    const tapButton = document.getElementById('tapButton');
    const tapCountDisplay = document.getElementById('tapCount');
    const rewardCountDisplay = document.getElementById('rewardCount');
    const pointsDisplay = document.getElementById('points');
    const progress = document.getElementById('progress');

    tapButton.addEventListener('click', () => {
        tapCount++;
        points++;
        tapCountDisplay.textContent = `Taps: ${tapCount}`;
        pointsDisplay.textContent = `Points: ${points}`;

        // Update progress bar
        const progressPercentage = (points / 100) * 100;
        progress.style.width = `${progressPercentage}%`;

        if (tapCount === 10) {
            rewardCount++;
            rewardCountDisplay.textContent = `Rewards: ${rewardCount}`;
            tapCount = 0;
            tapCountDisplay.textContent = `Taps: ${tapCount}`;
            progress.style.width = '0%';
        }

        if (progress == 100) {
            rewardCount = 0;
            tapCount++
        }
    });
});
