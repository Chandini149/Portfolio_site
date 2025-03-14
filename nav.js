// nav.js
const navigationTemplate = `
<nav class="nav-bar">
    <div class="nav-brand">PORTFOLIO</div>
    <div class="nav-toggle">
        <div class="hamburger"></div>
        <div class="hamburger"></div>
        <div class="hamburger"></div>
    </div>
    <div class="nav-links">
        <a href="Home.html" class="nav-link">Home</a>
        <a href="about.html" class="nav-link">About</a>
        <a href="education.html" class="nav-link">Education</a>
        <a href="experience.html" class="nav-link">Experience</a>
        <a href="skills.html" class="nav-link">Skills</a>
        <a href="projects.html" class="nav-link">Projects</a>
        <a href="publication.html" class="nav-link">Publication</a>
        <div class="social-icons">
            <a href="mailto:chandinikarrothu149@gmail.com" class="social-icon">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
            </a>
            <a href="https://github.com/Chandini149" class="social-icon" target="blank">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/chandini-karrothu-1469b1206" class="social-icon" target="blank">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            </a>
        </div>
        <a href="https://drive.google.com/file/d/15TzLCzNI8uDsQL0ciFW7GH9tSFFKglKu/view?usp=sharing" class="resume-button" target="blank">
            Download Resume
        </a>
    </div>
</nav>
`;

// Function to highlight current page in navigation
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = 'var(--accent-gold)';
        }
    });
}

// Function to handle mobile menu toggle
function setupMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Function to insert navigation and scrollbar styles
function insertNavigation() {
    // Create a placeholder div
    const navPlaceholder = document.createElement('div');
    navPlaceholder.innerHTML = navigationTemplate;
    
    // Insert at the beginning of the body
    document.body.insertBefore(navPlaceholder.firstElementChild, document.body.firstChild);
    
    // Add scrollbar styles
    const scrollbarStyles = document.createElement('style');
    scrollbarStyles.textContent = `
        ::-webkit-scrollbar {
            width: 10px;
        }

        ::-webkit-scrollbar-track {
            background: var(--dark-bg);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--accent-gold);
            border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #b39030;
        }

        * {
            scrollbar-width: thin;
            scrollbar-color: var(--accent-gold) var(--dark-secondary);
        }
    `;
    document.head.appendChild(scrollbarStyles);
    
    // Setup mobile menu and highlight current page
    setupMobileMenu();
    highlightCurrentPage();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', insertNavigation);



// In your nav.js file

// First, create and append the CSS for particles
function addParticleStyles() {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      .particle {
        position: absolute;
        width: 2px;
        height: 2px;
        background-color: var(--accent-gold, #D4AF37);
        border-radius: 50%;
        opacity: 0.3;
        pointer-events: none;
      }
      
      body {
        background-image: 
          radial-gradient(circle at 80% 10%, rgba(212, 175, 55, 0.2), transparent 40%),
          radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.2), transparent 40%);
      }
    `;
    document.head.appendChild(styleSheet);
  }
  
  // Function to create the particle elements
  function createParticles() {
    const body = document.querySelector('body');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random positioning
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      
      // Random size
      const size = Math.random() * 3 + 1;
      
      // Apply styles
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random animation
      const duration = Math.random() * 20 + 10;
      particle.style.animation = `floatAnimation ${duration}s ease-in-out infinite`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      body.appendChild(particle);
    }
  }
  
  // Add the float animation if it doesn't exist
  function addFloatAnimation() {
    if (!document.querySelector('#floatAnimationStyle')) {
      const styleSheet = document.createElement("style");
      styleSheet.id = 'floatAnimationStyle';
      styleSheet.textContent = `
        @keyframes floatAnimation {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          75% { transform: translateY(10px) rotate(-1deg); }
        }
      `;
      document.head.appendChild(styleSheet);
    }
  }
  
  // Initialize everything once the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    addParticleStyles();
    addFloatAnimation();
    createParticles();
  });

  // In your nav.js file

// Wait for the DOM to be fully loaded before executing
document.addEventListener('DOMContentLoaded', function() {
    // Function to add the "Back to Home" button before footer
    function addHomeButton() {
      // First check if the button already exists or if we're on the landing page
      if (document.querySelector('#back-to-home-btn') || 
          window.location.pathname.endsWith('Home.html')) {
        return; // Don't add button if it already exists or if we're on the landing page
      }
      
      // Create the button container with overflow handling
      const homeButtonContainer = document.createElement('div');
      homeButtonContainer.id = 'back-to-home-btn';
      homeButtonContainer.style.textAlign = 'center';
      homeButtonContainer.style.margin = '50px auto 30px auto';
      homeButtonContainer.style.zIndex = '100';
      homeButtonContainer.style.width = '100%';
      homeButtonContainer.style.maxWidth = '100%';
      homeButtonContainer.style.overflowX = 'hidden'; // Prevent horizontal scrolling
      
      // Create the actual button with gold styling to match your theme
      const homeButton = document.createElement('a');
      // Calculate path to landing page based on current location
      homeButton.href = window.location.pathname.includes('/') ? 
                        window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1) + 'Home.html' : 
                        'Home.html';
      homeButton.textContent = 'Back to Home';
      homeButton.style.display = 'inline-block';
      homeButton.style.padding = '12px 30px';
      homeButton.style.backgroundColor = 'transparent';
      homeButton.style.color = '#D4AF37'; // Gold color
      homeButton.style.border = '2px solid #D4AF37';
      homeButton.style.borderRadius = '30px';
      homeButton.style.textDecoration = 'none';
      homeButton.style.fontWeight = 'bold';
      homeButton.style.transition = 'all 0.3s ease';
      homeButton.style.cursor = 'pointer';
      homeButton.style.maxWidth = '90%'; // Ensure button doesn't cause overflow
      homeButton.style.boxSizing = 'border-box'; // Include padding in width calculation
      
      // Add hover effects
      homeButton.onmouseover = function() {
        this.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
        this.style.transform = 'translateY(-3px)';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
      };
      
      homeButton.onmouseout = function() {
        this.style.backgroundColor = 'transparent';
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
      };
      
      // Add the button to its container
      homeButtonContainer.appendChild(homeButton);
      
      // Add the container before the footer (if it exists) or at the end of the body
      const footer = document.querySelector('footer');
      if (footer) {
        document.body.insertBefore(homeButtonContainer, footer);
      } else {
        // If no footer exists, append to body
        document.body.appendChild(homeButtonContainer);
      }
    }
  
    // Call the function to add the home button
    addHomeButton();
  });