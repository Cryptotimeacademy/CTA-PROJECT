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
    if (energy > 0) {
        taps++;
        updateTaps();
        updateEnergy(-1);
        checkLevelUpgrade();
    }
  }
  
  function updateTaps() {
    const tapButton = document.querySelector('.tap-button');
    tapButton.innerText = `${taps} shares`;
  }
  
  function updateEnergy(amount) {
    energy = Math.max(0, Math.min(500, energy + amount));
    document.getElementById('energy-bar').innerText = `Energy: ${energy}/500`;
  }
  
  function checkLevelUpgrade() {
    const leagues = [
        { taps: 10000000, message: "Legendary League" },
        { taps: 5000000, message: "Elite League" },
        { taps: 2500000, message: "Grandmaster League" },
        { taps: 1000000, message: "Master League" },
        { taps: 500000, message: "Diamond League" },
        { taps: 250000, message: "Platinum League" },
        { taps: 10000, message: "Gold League" },
        { taps: 5000, message: "Silver League" },
        { taps: 2500, message: "Bronze League" }
    ];
  
    for (const league of leagues) {
        if (taps >= league.taps) {
            alert(`Congratulations! You have reached the ${league.message}!`);
            break;
        }
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
    alert("coming soon");
  }
  
  // Initialize the page by showing the default tab
  document.addEventListener('DOMContentLoaded', function () {
    showContent('Ref');
  });
  