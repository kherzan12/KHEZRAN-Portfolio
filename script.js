document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const contactForm = document.getElementById('contact-form');
    const navLinks = document.querySelectorAll('.navbar-menu a');

    // Authentication Modals
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const mobileLoginBtn = document.getElementById('mobile-login-btn');
    const mobileRegisterBtn = document.getElementById('mobile-register-btn');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Close modal buttons
    const closeButtons = document.querySelectorAll('.close-btn');
    const switchToRegister = document.getElementById('switch-to-register');
    const switchToLogin = document.getElementById('switch-to-login');

    // Open Login Modal
    function openLoginModal() {
        loginModal.style.display = 'block';
        // Close mobile menu if open
        navbarMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
    }

    // Open Register Modal
    function openRegisterModal() {
        registerModal.style.display = 'block';
        // Close mobile menu if open
        navbarMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
    }

    // Desktop Authentication Buttons
    loginBtn.addEventListener('click', openLoginModal);
    registerBtn.addEventListener('click', openRegisterModal);

    // Mobile Authentication Buttons
    mobileLoginBtn.addEventListener('click', openLoginModal);
    mobileRegisterBtn.addEventListener('click', openRegisterModal);

    // Close Modal Functions
    function closeModal(modal) {
        modal.style.display = 'none';
    }

    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            closeModal(modal);
        });
    });

    // Switch between Login and Register
    switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(loginModal);
        registerModal.style.display = 'block';
    });

    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(registerModal);
        loginModal.style.display = 'block';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            closeModal(loginModal);
        }
        if (e.target === registerModal) {
            closeModal(registerModal);
        }
    });

    // Login Form Submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value.trim();

        // Basic validation
        if (email === '' || password === '') {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Simulated login (replace with actual authentication logic)
        alert('Login successful!');
        closeModal(loginModal);
        loginForm.reset();
    });

    // Registration Form Submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('register-name').value.trim();
        const email = document.getElementById('register-email').value.trim();
        const password = document.getElementById('register-password').value.trim();
        const confirmPassword = document.getElementById('register-confirm-password').value.trim();

        // Basic validation
        if (name === '' || email === '' || password === '' || confirmPassword === '') {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Password matching
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Simulated registration (replace with actual registration logic)
        alert('Registration successful!');
        closeModal(registerModal);
        registerForm.reset();
    });

    // Mobile menu toggle
    mobileMenu.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!mobileMenu.contains(event.target) && !navbarMenu.contains(event.target)) {
            navbarMenu.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Learn More button smooth scroll
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            aboutSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields');
                return;
            }

            // Email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Simulated form submission (replace with actual backend logic)
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Projects Section Interactivity
    const projectCards = document.querySelectorAll('.project-card');
    const projectLinks = document.querySelectorAll('.project-link');
    const projectModals = document.querySelectorAll('.project-modal');
    const projectModalCloseButtons = document.querySelectorAll('.project-modal .close-btn');
    const projectFilterButtons = document.querySelectorAll('.filter-btn');

    // Project Filter Functionality
    projectFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            projectFilterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter category
            const category = button.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Open Project Modal
    projectLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = link.getAttribute('data-project');
            const modal = document.getElementById(`${projectId}-modal`);
            
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    // Close Project Modals
    projectModalCloseButtons.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            const modal = closeBtn.closest('.project-modal');
            modal.style.display = 'none';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        projectModals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Enhanced Scroll-Triggered Animations
    function checkScroll() {
        const scrollTriggerElements = document.querySelectorAll('.animate-on-scroll');
        
        scrollTriggerElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            // Check if element is in view (either top or bottom is visible)
            const isVisible = (
                (elementTop < windowHeight && elementTop > 0) || 
                (elementBottom > 0 && elementBottom < windowHeight)
            );
            
            if (isVisible) {
                element.classList.add('is-visible');
            } else {
                element.classList.remove('is-visible');
            }
        });
    }

    // Ensure animations are triggered on page load and scroll
    function initScrollAnimations() {
        // Initial check when page loads
        checkScroll();
        
        // Add scroll event listener
        window.addEventListener('scroll', checkScroll);
        
        // Recheck on window resize (responsive design)
        window.addEventListener('resize', checkScroll);
    }

    // Force visibility for debugging
    function forceAboutSectionVisibility() {
        const aboutSection = document.querySelector('.about-section');
        if (aboutSection) {
            aboutSection.classList.add('is-visible');
            console.log('About section forced to be visible');
        }
    }

    // Run animations when DOM is fully loaded
    initScrollAnimations();
    forceAboutSectionVisibility();
});
