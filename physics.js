// =====================================
// DY INTELLECT - PHYSICS HUB JS
// =====================================


// Welcome message (once per session)
window.addEventListener("load", function () {
    if (!sessionStorage.getItem("physicsWelcome")) {
        alert("Welcome to Advanced Physics Hub ⚡ - DY Intellect");
        sessionStorage.setItem("physicsWelcome", "true");
    }
});


// =====================================
// SEARCH BAR (AUTO CREATE)
// =====================================
const searchBox = document.createElement("input");
searchBox.type = "text";
searchBox.placeholder = "Search Physics topics...";
searchBox.id = "physicsSearch";

searchBox.style.display = "block";
searchBox.style.margin = "10px auto";
searchBox.style.padding = "10px";
searchBox.style.width = "80%";
searchBox.style.maxWidth = "400px";
searchBox.style.border = "2px solid #00bcd4";
searchBox.style.borderRadius = "20px";
searchBox.style.outline = "none";

// Insert search bar above sidebar
document.querySelector(".container aside").prepend(searchBox);

const topics = document.querySelectorAll("aside li");

searchBox.addEventListener("keyup", function () {
    let value = this.value.toLowerCase();

    topics.forEach(topic => {
        let text = topic.innerText.toLowerCase();

        if (text.includes(value)) {
            topic.style.display = "block";
        } else {
            topic.style.display = "none";
        }
    });
});


// =====================================
// TOPIC VIDEO SWITCHER
// =====================================
const videoFrame = document.getElementById("videoFrame");

function loadTopic(topic) {
    let videos = {
        mechanics: "https://www.youtube.com/embed/DK5Z709J2eo",
        waves: "https://www.youtube.com/embed/1V7X3U8X1L0",
        electricity: "https://www.youtube.com/embed/7G1Q2cK5yQY",
        modern: "https://www.youtube.com/embed/0cK3X7Z8h2M"
    };

    videoFrame.src = videos[topic] || videos.mechanics;

    localStorage.setItem("lastTopic", topic);
}


// =====================================
// FORCE CALCULATOR (F = m × a)
// =====================================
function calculateForce() {
    let m = parseFloat(document.getElementById("mass").value);
    let a = parseFloat(document.getElementById("acceleration").value);
    let resultBox = document.getElementById("result");

    if (isNaN(m) || isNaN(a)) {
        resultBox.innerText = "Result: Please enter valid numbers";
        return;
    }

    let force = m * a;

    resultBox.innerText = "Result: " + force + " N";

    localStorage.setItem("lastForce", force);
}


// =====================================
// QUIZ FEEDBACK SYSTEM
// =====================================
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", function () {
        if (this.innerText.includes("Newton")) {
            this.style.background = "green";
            this.style.color = "white";
        } else if (
            this.innerText.includes("Joule") ||
            this.innerText.includes("Watt")
        ) {
            this.style.background = "red";
            this.style.color = "white";
        }
    });
});


// =====================================
// RESTORE LAST TOPIC ON LOAD
// =====================================
window.addEventListener("load", function () {
    let last = localStorage.getItem("lastTopic");

    if (last) {
        loadTopic(last);
    }
});