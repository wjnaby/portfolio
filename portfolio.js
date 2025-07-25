function toggleTheme() {
    document.body.classList.toggle("light-theme");
  }

  document.getElementById("enterBtn").addEventListener("click", function () {
    document.getElementById("welcomePage").classList.add("hidden");
  });

  function goToWelcomePage() {
    const welcomePage = document.getElementById("welcomePage");
    welcomePage.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '20px 0';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

  
// Function to switch between tabs (Tech Stack & Tools)
function showSkillsTab(tabId) {
  // Remove 'active' class from all skills grids
  document.querySelectorAll('.skills-grid').forEach(tab => {
    tab.classList.remove('active');
  });

  // Remove 'active' class from all buttons
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
  });

  // Add 'active' class to the clicked tab and its corresponding button
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

// Optionally, initialize to show the "Tech Stack" tab first
document.addEventListener("DOMContentLoaded", function() {
  showSkillsTab('tech');  // Make sure 'tech' is visible when the page loads
});
  
  window.onscroll = function () {
    const btn = document.getElementById("scrollTopBtn");
    btn.style.display = document.documentElement.scrollTop > 100 ? "block" : "none";
  };
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    var textWrapper = document.querySelector('.ml14 .letters');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
      anime.timeline({ loop: true })
        .add({
          targets: '.ml14 .line',
          scaleX: [0, 1],
          opacity: [0.5, 1],
          easing: "easeInOutExpo",
          duration: 900
        }).add({
          targets: '.ml14 .letter',
          opacity: [0, 1],
          translateX: [40, 0],
          translateZ: 0,
          scaleX: [0.3, 1],
          easing: "easeOutExpo",
          duration: 800,
          offset: '-=600',
          delay: (el, i) => 150 + 25 * i
        }).add({
          targets: '.ml14',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector('.ml14 .letters');

    if (target) {
      target.innerHTML = target.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime.timeline()
            .add({
              targets: '.ml14 .letter',
              opacity: [0, 1],
              translateX: [40, 0],
              scaleX: [0.3, 1],
              easing: "easeOutExpo",
              duration: 800,
              delay: (el, i) => 30 * i
            });
        }
      });
    }, {
      threshold: 0.6
    });

    const ml14 = document.querySelector('.ml14');
    if (ml14) {
      observer.observe(ml14);
    }
  });  

  
  