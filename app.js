document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const menuLinks = document.querySelectorAll('#side-menu a');

    // Toggle the mobile side menu when the hamburger icon is clicked
    mobileMenuToggle.addEventListener('click', function () {
        sideMenu.classList.toggle('show');
    });

    // Close the side menu when a menu link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            sideMenu.classList.remove('show');
        });
    });

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                console.error("Target element not found for ID:", targetId);
            }
        });
    });
});
