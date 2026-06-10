// =====================================
// DY INTELLECT - ADVANCED MATHS JS
// =====================================


// Welcome message (only once per session)
window.addEventListener("load", function () {
    if (!sessionStorage.getItem("welcomeShown")) {
        alert("Welcome to Advanced Mathematics Portal 📊 - DY Intellect");
        sessionStorage.setItem("welcomeShown", "true");
    }
});


// =====================================
// CREATE SEARCH BAR DYNAMICALLY
// =====================================
const searchBox = document.createElement("input");
searchBox.type = "text";
searchBox.placeholder = "Search Mathematics topics...";
searchBox.id = "mathSearch";

searchBox.style.display = "block";
searchBox.style.margin = "15px auto";
searchBox.style.padding = "10px";
searchBox.style.width = "80%";
searchBox.style.maxWidth = "400px";
searchBox.style.border = "2px solid #6a5acd";
searchBox.style.borderRadius = "25px";
searchBox.style.outline = "none";

// Insert search bar at top of container
document.querySelector(".container").prepend(searchBox);


// =====================================
// SEARCH FUNCTION (FILTER CARDS)
// =====================================
const cards = document.querySelectorAll(".card");

searchBox.addEventListener("keyup", function () {
    let value = this.value.toLowerCase();

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();

        if (text.includes(value)) {
            card.style.display = "block";
            card.style.opacity = "1";
        } else {
            card.style.display = "none";
        }
    });
});


// =====================================
// CARD HOVER EFFECT (REALISTIC FEEL)
// =====================================
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.03)";
        card.style.transition = "0.3s ease";
        card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "none";
    });
});


// =====================================
// TRACK VIDEO CLICKS
// =====================================
document.querySelectorAll(".btn.video").forEach(btn => {
    btn.addEventListener("click", function () {
        let topic = this.closest(".card").querySelector("h2").innerText;

        console.log("User opened video for:", topic);

        // Save progress
        localStorage.setItem(topic + "_video", "watched");
    });
});


// =====================================
// PDF DOWNLOAD TRACKING
// =====================================
document.querySelectorAll(".btn.pdf").forEach(btn => {
    btn.addEventListener("click", function () {
        let topic = this.closest(".card").querySelector("h2").innerText;

        alert("Downloading PDF for: " + topic);

        // Save progress
        localStorage.setItem(topic + "_pdf", "downloaded");
    });
});


// =====================================
// SHOW SIMPLE PROGRESS INFO (optional)
// =====================================
function showProgress() {
    let completed = 0;

    cards.forEach(card => {
        let topic = card.querySelector("h2").innerText;

        if (localStorage.getItem(topic + "_video")) {
            completed++;
        }
    });

    console.log("Progress:", completed + "/" + cards.length + " topics started");
}

// Run progress check on load
window.addEventListener("load", showProgress);