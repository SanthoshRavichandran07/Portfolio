const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navItems = navLinks.querySelectorAll("a");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when any nav link is clicked
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
