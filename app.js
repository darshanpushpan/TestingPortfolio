document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('nav a[href^="#"]');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const sideMenu = document.getElementById('side-menu');

    // Smooth scrolling and background color effect on click
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.style.transition = 'background-color 0.3s ease-in-out';
                targetElement.style.backgroundColor = 'none';

                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                setTimeout(() => {
                    targetElement.style.backgroundColor = '';
                }, 300);

                // Close the side menu after selecting a link on mobile
                if (sideMenu.classList.contains('show')) {
                    toggleMenu();
                }
            } else {
                console.error("Target element not found for ID:", targetId);
            }
        });
    });

    // Toggle the mobile side menu
    mobileMenuToggle.addEventListener('click', toggleMenu);

    function toggleMenu() {
        sideMenu.classList.toggle('show');
    }
});
