// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Offset for sticky header
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Menu Toggle (Basic implementation)
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        // Since the current CSS hides nav on mobile, this would normally toggle a class
        // For a more robust version, we'd add 'active' classes to nav and menu-toggle
        alert('Mobile menu feature would expand here in a full production version.');
    });
}
