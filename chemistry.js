// ===============================
// DY INTELLECT CHEMISTRY HUB JS
// ===============================

// Welcome message
window.addEventListener("load", function () {
    alert("Welcome to Chemistry Learning Hub 🧪 - DY Intellect");
});


// ===============================
// SMOOTH SCROLL ENHANCEMENT
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ===============================
// SEARCH BAR (ADD THIS INPUT IN HTML LATER IF YOU WANT)
// ===============================
const searchBox = document.createElement("input");
searchBox.type = "text";
searchBox.placeholder = "Search Chemistry topics...";
searchBox.id = "chemSearch";

searchBox.style.width = "80%";
searchBox.style.maxWidth = "400px";
searchBox.style.padding = "10px";
searchBox.style.margin = "15px auto";
searchBox.style.display = "block";
searchBox.style.border = "2px solid #2196F3";
searchBox.style.borderRadius = "20px";

document.querySelector("#topics").prepend(searchBox);

const cards = document.querySelectorAll(".card");

searchBox.addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();

    cards.forEach(card => {
        let text = card.textContent.toLowerCase();

        if (text.includes(filter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});


// ===============================
// CARD CLICK EFFECT
// ===============================
cards.forEach(card => {
    card.addEventListener("click", function () {
        this.style.transform = "scale(0.97)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 150);
    });
});


// ===============================
// VIDEO AUTO FEEDBACK
// ===============================
const videos = document.querySelectorAll("video");

videos.forEach(video => {
    video.addEventListener("play", function () {
        console.log("Playing chemistry video...");
    });

    video.addEventListener("ended", function () {
        alert("Great job! You finished a lesson 🎉");
    });
});


// ===============================
// PDF CLICK FEEDBACK
// ===============================
document.querySelectorAll(".pdf-links a").forEach(pdf => {
    pdf.addEventListener("click", function () {
        alert("Opening: " + this.innerText);
    });
});