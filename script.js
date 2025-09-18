// Initialize AOS for animations
AOS.init();

// Handle the mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggler = document.querySelector('.menu-toggler');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const socialLinks = document.querySelector('.social-links-header');
    
    // Toggle the mobile menu on button click
    menuToggler.addEventListener('click', () => {
        navbarMenu.classList.toggle('show');
        // Toggle social links visibility
        socialLinks.style.display = navbarMenu.classList.contains('show') ? 'flex' : 'none';
        socialLinks.style.justifyContent = 'center';
        socialLinks.style.marginTop = '1rem';
    });

    // Hide the menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('show');
            // Hide social links again after menu close
            socialLinks.style.display = 'none';
        });
    });

    // Add event listener for the Simular Financiamento button
    const financeButton = document.querySelector('.btn-finance');
    financeButton.addEventListener('click', () => {
        navbarMenu.classList.remove('show');
    });

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});