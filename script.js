// JavaScript to handle fullpage scroll behavior
let currentSection = 0;
const sections = document.querySelectorAll('.fullpage-section');
const totalSections = sections.length;

window.addEventListener('wheel', handleScroll);

function handleScroll(event)  {
    if (event.deltaY > 0) {
        // Scroll down
        goToNextSection();
    } else {
        // Scroll up
        goToPreviousSection();
    }
}

function goToNextSection() {
    if (currentSection < totalSections - 1) {
        currentSection++;
        scrollToSection(currentSection);
    }
}

function goToPreviousSection() {
    if (currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
    }
}

// Listen for the form submission event
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values of the form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Create the mailto link with form data
    const mailtoLink = `mailto:yousefshakerdev@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open the default email client with the prefilled message
    window.location.href = mailtoLink;
});

// JavaScript to toggle the navbar menu on mobile
const toggleButton = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

// Add event listener to toggle the menu
toggleButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
