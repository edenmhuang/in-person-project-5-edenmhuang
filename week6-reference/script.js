// Week 6: Interactive Portfolio - Complete Solution (FL26 week 6; the reference for Option B)
// This demonstrates all the JavaScript interactivity added to the static portfolio

// ============================================
// PART 1: SMOOTH SCROLL NAVIGATION
// ============================================

// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Add smooth scroll to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default jump behavior

        // Get the target section ID from href attribute
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Smooth scroll to the target section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active nav link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100; // Offset for better detection

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        // Check if current scroll position is within this section
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add active class to link for current section
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
});


// ============================================
// PART 2: PROJECT FILTERING
// ============================================

// Select filter buttons and project cards
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// Function to filter projects based on category
function filterProjects(category) {
    projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' || cardCategory === category) {
            // Show matching cards with fade-in effect
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 10);
        } else {
            // Hide non-matching cards with fade-out effect
            card.style.opacity = '0';
            card.style.transform = 'scale(0.9)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Add event listeners to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Get filter value from data-filter attribute
        const filterValue = button.getAttribute('data-filter');

        // Filter projects
        filterProjects(filterValue);
    });
});

// Initialize project cards with transition styles
projectCards.forEach(card => {
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    card.style.opacity = '1';
    card.style.transform = 'scale(1)';
});


// ============================================
// PART 3: MOBILE MENU TOGGLE
// ============================================

// Select mobile menu elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Toggle mobile menu on hamburger click
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when any nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}


// ============================================
// PART 4: SKILL ANIMATIONS ON SCROLL
// ============================================

// Select all skill progress bars
const skillBars = document.querySelectorAll('.skill-progress');

// Flag to track if skills have been animated
let skillsAnimated = false;

// Function to animate skills when they come into view
function animateSkills() {
    const skillsSection = document.querySelector('#skills');

    if (!skillsSection || skillsAnimated) return;

    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    // If skills section is in viewport
    if (skillsPosition < screenPosition) {
        skillBars.forEach(bar => {
            // Get the skill level from CSS variable
            const skillLevel = bar.style.getPropertyValue('--skill-level') || '0%';

            // Reset width to 0 first
            bar.style.width = '0';

            // Animate to target width after a brief delay
            setTimeout(() => {
                bar.style.width = skillLevel;
            }, 100);
        });

        // Mark as animated so it only happens once
        skillsAnimated = true;
    }
}

// Add scroll listener for skill animations
window.addEventListener('scroll', animateSkills);

// Also check on load in case skills are already visible
window.addEventListener('load', animateSkills);


// ============================================
// PART 5: FORM VALIDATION
// ============================================

// Select form and input elements
const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Email validation function using regex
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to show error message
function showError(input, message) {
    // Clear any existing errors first
    clearError(input);

    // Create error element
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.textContent = message;

    // Add error styling to input
    input.classList.add('error');
    input.classList.remove('success');

    // Insert error message after input
    input.parentElement.appendChild(errorElement);
}

// Function to clear error message
function clearError(input) {
    // Find and remove existing error message
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Remove error class
    input.classList.remove('error');
}

// Function to show success state
function showSuccess(input) {
    clearError(input);
    input.classList.add('success');
    input.classList.remove('error');
}

// Real-time validation for name input
if (nameInput) {
    nameInput.addEventListener('input', () => {
        const value = nameInput.value.trim();

        if (value.length === 0) {
            showError(nameInput, 'Name is required');
        } else if (value.length < 2) {
            showError(nameInput, 'Name must be at least 2 characters');
        } else {
            showSuccess(nameInput);
        }
    });
}

// Real-time validation for email input
if (emailInput) {
    emailInput.addEventListener('input', () => {
        const value = emailInput.value.trim();

        if (value.length === 0) {
            showError(emailInput, 'Email is required');
        } else if (!isValidEmail(value)) {
            showError(emailInput, 'Please enter a valid email address');
        } else {
            showSuccess(emailInput);
        }
    });
}

// Real-time validation for message input
if (messageInput) {
    messageInput.addEventListener('input', () => {
        const value = messageInput.value.trim();

        if (value.length === 0) {
            showError(messageInput, 'Message is required');
        } else if (value.length < 10) {
            showError(messageInput, 'Message must be at least 10 characters');
        } else {
            showSuccess(messageInput);
        }
    });
}

// Handle form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission

        // Validate all fields
        let isValid = true;
        const formData = {};

        // Validate name
        const nameValue = nameInput.value.trim();
        if (nameValue.length < 2) {
            showError(nameInput, 'Name must be at least 2 characters');
            isValid = false;
        } else {
            formData.name = nameValue;
        }

        // Validate email
        const emailValue = emailInput.value.trim();
        if (!isValidEmail(emailValue)) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        } else {
            formData.email = emailValue;
        }

        // Validate message
        const messageValue = messageInput.value.trim();
        if (messageValue.length < 10) {
            showError(messageInput, 'Message must be at least 10 characters');
            isValid = false;
        } else {
            formData.message = messageValue;
        }

        // If all fields are valid, show success
        if (isValid) {
            // Remove any existing success messages
            const existingSuccess = contactForm.querySelector('.success-message');
            if (existingSuccess) {
                existingSuccess.remove();
            }

            // Create success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Thank you! Your message has been sent successfully.';

            // Append success message to form
            contactForm.appendChild(successMessage);

            // Log form data (in real app, this would be sent to server)
            console.log('Form submitted with data:', formData);

            // Clear form and remove success classes after 3 seconds
            setTimeout(() => {
                contactForm.reset();
                successMessage.remove();

                // Remove success classes from inputs
                document.querySelectorAll('.form-group input.success, .form-group textarea.success').forEach(input => {
                    input.classList.remove('success');
                });
            }, 3000);
        }
    });
}


// ============================================
// BONUS: THEME SWITCHER (Optional Enhancement)
// ============================================

// Note: To use this feature, add a theme toggle button to your navbar:
// <button class="theme-toggle" aria-label="Toggle dark mode">🌙</button>

const themeToggle = document.querySelector('.theme-toggle');

if (themeToggle) {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('portfolio-theme', 'dark');
            themeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('portfolio-theme', 'light');
            themeToggle.textContent = '🌙';
        }
    });
}


// ============================================
// ADDITIONAL ENHANCEMENTS
// ============================================

// Add loading class on page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Console message for developers
console.log('🚀 Interactive Portfolio Initialized!');
console.log('Week 7 Project - DOM Manipulation & Events');
console.log('All interactive features are active.');
