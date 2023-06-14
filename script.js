const element = document.getElementById("myBtn");
element.addEventListener("click", function() {
    alert("Glad you hit me. Reach me at 0724352623");
});

// JavaScript code
window.addEventListener('DOMContentLoaded', function() {
    // Hero section animation
    var heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('show');

    // Project section animation
    var projectSection = document.querySelector('.project-section');
    projectSection.classList.add('show');

    // Contact section animation
    var contactSection = document.querySelector('.contact-section');
    contactSection.classList.add('show');
});
