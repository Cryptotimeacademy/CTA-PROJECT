

document.addEventListener('DOMContentLoaded', (event) => {
    let tapCount = 0;
    let rewardCount = 0;
    let coins = 0;

    const tapButton = document.getElementById('tapButton');
    const tapCountDisplay = document.getElementById('tapCount');
    const rewardCountDisplay = document.getElementById('rewardCount');
    const pointsDisplay = document.getElementById('coins');
    const progress = document.getElementById('progress');

    tapButton.addEventListener('click', () => {
        tapCount++;
        coins++;
        tapCountDisplay.textContent = `Taps: ${tapCount}`;
        pointsDisplay.textContent = `coins: ${coins}`;

        // Update progress bar
        const progressPercentage = (coins / 100) * 100;
        progress.style.width = `${progressPercentage}%`;

        if (tapCount === 10) {
            rewardCount++;
            rewardCountDisplay.textContent = `Rewards: ${rewardCount}`;
            tapCount = 0;
            tapCountDisplay.textContent = `Taps: ${tapCount}`;
            progress.style.width = '0%';
        }

        if (progress < 100) {
             console.log("you have exceded yout point resert to start again");
            rewardCount = 0;
            tapCount = 0
        }
    });
});
