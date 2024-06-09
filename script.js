function showContent(section) {
    // Get all tab content sections
    var sections = document.querySelectorAll('.container .tabcontent');
    
    // Loop through all sections and hide them
    sections.forEach(function(sec) {
        sec.classList.remove('visible');
        sec.classList.add('hidden');
    });
    
    // Show the selected section
    var selectedSection = document.getElementById(section);
    selectedSection.classList.remove('hidden');
    selectedSection.classList.add('visible');
    
    // Update active class on navbar links
    var links = document.querySelectorAll('.navbar a');
    links.forEach(function(link) {
        link.classList.remove('active');
    });
    
    // Add active class to the clicked link
    var activeLink = document.querySelector('.navbar a[onclick="showContent(\'' + section + '\')"]');
    activeLink.classList.add('active');
}

function toggleNavbar() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
    } else {
        navbar.className = "navbar";
    }
}

let taps = 0;
let energy = 500;

function mine() {
    taps++;
    updateTaps();
    updateEnergy(-1);
    checkLevelUpgrade();
}

function updateTaps() {
    const tapButton = document.querySelector('.tap-button');
    tapButton.innerText = `${taps} CTT`;
}

function updateEnergy(amount) {
    energy += amount;
    if (energy < 0) {
        energy = 0;
    } else if (energy > 500) {
        energy = 500;
    }
    document.getElementById('energy-bar').innerText = `Energy: ${energy}/500`;
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