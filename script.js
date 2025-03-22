// Sidebar Toggle
function toggleMenu() {
    document.querySelector(".sidebar").classList.toggle("active");
}

// Close Sidebar on Click
function closeMenu() {
    document.querySelector(".sidebar").classList.remove("active");
}

// Text Animation in Hero Section
const texts = ["Cyber Security Expert", "Developer", "Freelancer"];
let i = 0;
setInterval(() => {
    document.getElementById("changing-text").innerText = texts[i];
    i = (i + 1) % texts.length;
}, 2000);
