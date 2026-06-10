// ===============================
// DY INTELLECT BIOLOGY HUB JS
// ===============================

// Welcome message when page loads
window.addEventListener("load", function () {
    alert("Welcome to Biology Learning Hub - DY Intellect 🌿📚");
});


// Smooth scroll for nav links (Topics, Videos, PDFs)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// Highlight topic when clicked
document.querySelectorAll("#topics li").forEach(item => {
    item.addEventListener("click", function () {
        this.style.backgroundColor = "#dfffe0";
        this.style.padding = "8px";
        this.style.borderRadius = "8px";

        alert("Opening topic: " + this.innerText);
    });
});


// PDF click feedback
document.querySelectorAll("#pdfs a").forEach(pdf => {
    pdf.addEventListener("click", function () {
        alert("Downloading: " + this.innerText);
    });
});


// Video section animation effect (optional upgrade feel)
window.addEventListener("scroll", function () {
    let videos = document.getElementById("videos");

    let position = videos.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
        videos.style.opacity = "1";
        videos.style.transform = "translateY(0)";
        videos.style.transition = "0.6s ease";
    }
});