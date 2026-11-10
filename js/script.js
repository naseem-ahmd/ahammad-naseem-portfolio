
// Welcome Message

window.addEventListener("load", function() {

    console.log("Welcome to Ahammad Naseem's Portfolio!");

});

// Highlight navigation when clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function() {

        console.log("Navigation clicked: " + this.textContent);

    });

});

// Back to Top Button

const topButton = document.getElementById("backToTop");

if (topButton) {

    topButton.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// Mobile Navigation Menu

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

}

// Scroll Reveal Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.1
});

sections.forEach(function(section) {

    section.classList.add("reveal");
    observer.observe(section);

});


// Resume PDF Download / Print

const printButton = document.getElementById("printResume");

if (printButton) {

    printButton.addEventListener("click", function() {

        window.print();

    });

}



/* CGPA Counter Animation */

document.addEventListener("DOMContentLoaded", function () {

    const counter = document.getElementById("cgpaCounter");

    if (!counter) {
        console.log("CGPA element not found!");
        return;
    }

    let animated = false;

    function startCounter() {

        if (animated) return;

        animated = true;

        let startTime = null;
        const duration = 2000;
        const target = 8.2;

        function updateCounter(timestamp) {

            if (!startTime) startTime = timestamp;

            const progress = Math.min(
                (timestamp - startTime) / duration,
                1
            );

            const value = target * progress;

            counter.textContent = value.toFixed(1);

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = "8.2";
            }
        }

        requestAnimationFrame(updateCounter);
    }

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                startCounter();
                observer.disconnect();
            }

        });

    }, {
        threshold: 0.1
    });

    observer.observe(counter);

});
