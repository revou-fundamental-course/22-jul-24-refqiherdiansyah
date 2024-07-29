document.addEventListener("DOMContentLoaded", function() {
    // Function to reveal elements on scroll
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        var windowHeight = window.innerHeight;
        var elementVisible = 150;

        reveals.forEach(function(reveal) {
            var elementTop = reveal.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add("active");
            } else {
                reveal.classList.remove("active");
            }
        });
    }

    // Smooth scrolling for anchor links
    function smoothScroll() {
        var anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                var targetId = this.getAttribute('href');
                var targetElement = document.querySelector(targetId);

                window.scroll({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            });
        });
    }

    // Validate form inputs
    function validateForm() {
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var destination = document.getElementById("destination").value.trim();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (name === "" || email === "" || destination === "") {
            alert("All fields must be filled out");
            return false;
        } else if (!emailPattern.test(email)) {
            alert("Please enter a valid email address");
            return false;
        }
        return true;
    }

    // Event listeners
    window.addEventListener("scroll", reveal);
    window.addEventListener("load", smoothScroll);
    document.getElementById("travelForm").onsubmit = validateForm;

    // Initial reveal check
    reveal();
});
