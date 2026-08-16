// Welcome message

function welcomeMessage() {

    const message = document.getElementById("message");

    message.innerHTML =
        "🌟 Welcome! Start exploring my creative world.";

    message.style.fontWeight = "bold";
    message.style.color = "#8e24aa";
}


// Gallery interaction

function showArt(name) {

    alert(
        "You selected " +
        name +
        "! 🎨\n\nCreativity makes ordinary ideas special."
    );
}


// Like button

function likeCard(event, button) {

    event.stopPropagation();

    if (button.innerHTML.includes("♡")) {

        button.innerHTML = "♥ Liked";

    } else {

        button.innerHTML = "♡ Like";
    }
}


// Music control

function toggleMusic() {

    const music = document.getElementById("musicPlayer");

    if (music.paused) {

        music.play();

    } else {

        music.pause();
    }
}


// Canvas

const canvas = document.getElementById("creativeCanvas");

const ctx = canvas.getContext("2d");

let circleCount = 0;


// Create random colour

function randomColor() {

    const colors = [
        "#8e24aa",
        "#e91e63",
        "#2196f3",
        "#009688",
        "#ff9800",
        "#4caf50"
    ];

    return colors[
        Math.floor(Math.random() * colors.length)
    ];
}


// Draw circle

function createCircle(x, y) {

    const radius = Math.floor(Math.random() * 25) + 15;

    ctx.beginPath();

    ctx.arc(x, y, radius, 0, Math.PI * 2);

    ctx.fillStyle = randomColor();

    ctx.fill();

    circleCount++;

    document.getElementById("circleCount").innerText =
        circleCount;
}


// Click canvas

canvas.addEventListener("click", function (event) {

    const rect = canvas.getBoundingClientRect();

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;

    createCircle(x, y);

});


// Random circle button

function randomCircle() {

    const x =
        Math.random() *
        (canvas.width - 40) + 20;

    const y =
        Math.random() *
        (canvas.height - 40) + 20;

    createCircle(x, y);
}


// Clear canvas

function clearCanvas() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    circleCount = 0;

    document.getElementById("circleCount").innerText =
        "0";
}


// Dark mode

function toggleTheme() {

    document.body.classList.toggle("dark");

    const button = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark")) {

        button.innerHTML = "☀️ Light Mode";

    } else {

        button.innerHTML = "🌙 Dark Mode";
    }
}


// Show back-to-top button

window.addEventListener("scroll", function () {

    const topButton =
        document.getElementById("topBtn");

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";
    }
});


// Go to top

function goTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}