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

    // Throttle function to improve performance on scroll events
    function throttle(func, limit) {
        let lastFunc;
        let lastRan;
        return function() {
            const context = this;
            const args = arguments;
            if (!lastRan) {
                func.apply(context, args);
                lastRan = Date.now();
            } else {
                clearTimeout(lastFunc);
                lastFunc = setTimeout(function() {
                    if (Date.now() - lastRan >= limit) {
                        func.apply(context, args);
                        lastRan = Date.now();
                    }
                }, limit - (Date.now() - lastRan));
            }
        };
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
    window.addEventListener("scroll", throttle(reveal, 200));
    smoothScroll();
    document.getElementById("travelForm").onsubmit = validateForm;

    // Initial reveal check
    reveal();
});

// Slideshow functionality
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

showSlides();
