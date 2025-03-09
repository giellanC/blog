document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.n-link'); // Select your navigation links

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default scroll
            const targetId = this.getAttribute('href').substring(1); // Get the target ID
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Optional: Smooth scrolling
                });
            }
            const offcanvasElement = document.getElementById('offcanvasNavbar');
            const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            if (offcanvas) {
                offcanvas.hide();
            }
        });
    });
});