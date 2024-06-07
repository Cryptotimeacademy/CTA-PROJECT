let taps = 0;
let energy = 500;
const maxEnergy = 500;

function mine() {
    if (energy > 0) {
        taps++;
        updateTaps();
        updateEnergy(-1);
        checkLevelUpgrade();
    } else {
        alert("Not enough energy to mine!");
    }
}

function updateTaps() {
    const tapButton = document.querySelector('.tap-button');
    tapButton.innerText = `${taps} CTT`;
}

function updateEnergy(amount) {
    energy += amount;
    if (energy < 0) {
        energy = 0;
    } else if (energy > maxEnergy) {
        energy = maxEnergy;
    }
    document.getElementById('energy-bar').innerText = `Energy: ${energy}/${maxEnergy}`;
    document.getElementById('progress-count').innerText = `${energy}/${maxEnergy}`;
    const progressBar = document.getElementById('progress');
    progressBar.style.width = `${(energy / maxEnergy) * 100}%`;
}

function checkLevelUpgrade() {
    if (taps >= 10000000) {
        alert("Congratulations! You have reached the Legendary League!");
    } else if (taps >= 5000000) {
        alert("You have reached the Elite League!");
    } else if (taps >= 2500000) {
        alert("You have reached the Grandmaster League!");
    } else if (taps >= 1000000) {
        alert("You have reached the Master League!");
    } else if (taps >= 500000) {
        alert("You have reached the Diamond League!");
    } else if (taps >= 250000) {
        alert("You have reached the Platinum League!");
    } else if (taps >= 10000) {
        alert("You have reached the Gold League!");
    } else if (taps >= 5000) {
        alert("You have reached the Silver League!");
    } else if (taps >= 2500) {
        alert("You have reached the Bronze League!");
    }
}

setInterval(() => {
    updateEnergy(1);
}, 1000);

function showRef() {
    alert("Ref information");
}

function showTask() {
    alert("Task information");
}

function showTap() {
    alert("Tap information");
}

function showMenu() {
    alert("Menu information");
}

function showBoost() {
    alert("Boost information");
}

function showStats() {
    alert("Stats information");
}
