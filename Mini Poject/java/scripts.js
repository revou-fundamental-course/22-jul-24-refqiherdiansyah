document.addEventListener('DOMContentLoaded', function() {
    // Function to handle animation
    function revealOnScroll() {
        const elements = document.querySelectorAll('.reveal');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (position < windowHeight - 150) {
                element.classList.add('visible');
            }
        });
    }

    // Event listener for scroll
    window.addEventListener('scroll', revealOnScroll);

    // Initial call to handle elements already in view
    revealOnScroll();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Simple form validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;

    if (!name || !email || !destination) {
        alert('Please fill out all fields.');
        return false;
    }
    alert('Form submitted successfully!');
    return false; // Prevent actual form submission for demonstration
}