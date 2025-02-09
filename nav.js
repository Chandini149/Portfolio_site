// nav.js
const navigationTemplate = `
<nav class="nav-bar">
    <div class="nav-brand">PORTFOLIO</div>
    <div class="nav-links">
        <a href="index.html" class="nav-link">Home</a>
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
            <a href="https://github.com/Chandini149" class="social-icon">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/chandini-karrothu-1469b1206" class="social-icon">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            </a>
        </div>
        <a href="https://drive.google.com/file/d/1O3zxtrU7bn6d-u8PXYKqGKNjiLP2DLsb/view?usp=sharing" class="resume-button">
            Download Resume
        </a>
    </div>
</nav>
`;

// Function to insert navigation
function insertNavigation() {
    // Create a placeholder div
    const navPlaceholder = document.createElement('div');
    navPlaceholder.innerHTML = navigationTemplate;
    
    // Insert at the beginning of the body
    document.body.insertBefore(navPlaceholder.firstElementChild, document.body.firstChild);
    
    // Highlight current page in navigation
    highlightCurrentPage();
}

// Function to highlight current page in navigation
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = 'var(--accent-gold)';
        }
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
        /* Webkit browsers (Chrome, Safari, newer versions of Opera) */
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

        /* Firefox */
        * {
            scrollbar-width: thin;
            scrollbar-color: var(--accent-gold) var(--dark-secondary);
        }
    `;
    document.head.appendChild(scrollbarStyles);
    
    // Highlight current page in navigation
    highlightCurrentPage();
}


// Insert navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    insertNavigation();
    initSmoothScroll();  // Add this line
});



