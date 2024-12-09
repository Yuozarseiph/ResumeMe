let isScrolling = false;

window.addEventListener('wheel', function(e) {
    if (isScrolling) return; // جلوگیری از اسکرول دوگانه

    isScrolling = true;

    // تعیین فاصله اسکرول (باید طبق نیاز خود تنظیم کنید)
    const scrollAmount = window.innerHeight; // هر بار به اندازه یک صفحه اسکرول می‌کند

    // اگر اسکرول به پایین است
    if (e.deltaY > 0) {
        window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth',
        });
    } else {
        // اگر اسکرول به بالا است
        window.scrollBy({
            top: -scrollAmount,
            behavior: 'smooth',
        });
    }

    // تنظیم timeout برای عدم تداخل اسکرولها
    setTimeout(function() {
        isScrolling = false;
    }, 1000); // بعد از 1 ثانیه اجازه اسکرول مجدد را می‌دهیم
});


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
