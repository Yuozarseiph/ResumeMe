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

function scrollToSection(sectionIndex) {
    const targetSection = sections[sectionIndex];
    targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}
