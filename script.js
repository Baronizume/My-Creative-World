/* =========================================================
   MARVEL MY CREATIVE WORLD - SCRIPT
   ========================================================= */


/* =========================================================
   THEME
   ========================================================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", toggleTheme);

function toggleTheme() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
}


/* =========================================================
   WELCOME MESSAGE
   ========================================================= */

const welcomeBtn = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

welcomeBtn.addEventListener("click", welcomeMessage);

function welcomeMessage() {

    message.textContent =
        "⚡ Welcome to the Marvel World! Enjoy your adventure! 🦸";

    setTimeout(function () {
        message.textContent = "";
    }, 4000);
}


/* =========================================================
   HERO CARDS
   ========================================================= */

const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {

    card.addEventListener("click", function () {

        const heroName = card.dataset.hero;

        showHero(heroName);
    });

});


function showHero(heroName) {

    alert(
        "🦸 You selected " +
        heroName +
        "!"
    );
}


/* =========================================================
   LIKE BUTTON
   ========================================================= */

const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        // Prevent the card click event
        event.stopPropagation();

        likeCard(button);

    });

});


function likeCard(button) {

    if (button.classList.contains("liked")) {

        button.classList.remove("liked");

        button.textContent = "♡ Like";

    } else {

        button.classList.add("liked");

        button.textContent = "♥ Liked";

    }
}


/* =========================================================
   MUSIC
   ========================================================= */

const musicPlayer =
    document.getElementById("musicPlayer");

const musicBtn =
    document.getElementById("musicBtn");


musicBtn.addEventListener("click", toggleMusic);


function toggleMusic() {

    if (musicPlayer.paused) {

        musicPlayer.play()
            .then(function () {

                musicBtn.textContent = "⏸ Pause";

            })
            .catch(function () {

                alert(
                    "The music file could not be played. " +
                    "Please check that music.mpeg exists."
                );

            });

    } else {

        musicPlayer.pause();

        musicBtn.textContent = "▶ Play";
    }
}


musicPlayer.addEventListener("play", function () {

    musicBtn.textContent = "⏸ Pause";

});


musicPlayer.addEventListener("pause", function () {

    musicBtn.textContent = "▶ Play";

});


/* =========================================================
   CANVAS
   ========================================================= */

const canvas =
    document.getElementById("creativeCanvas");

const ctx =
    canvas.getContext("2d");

const circleCount =
    document.getElementById("circleCount");

let circlesCreated = 0;


/* =========================================================
   CREATE POWER
   ========================================================= */

function createPower(x, y) {

    const radius =
        Math.floor(Math.random() * 35) + 10;

    const colors = [
        "#ff0000",
        "#ffd000",
        "#00e5ff",
        "#7500ff",
        "#00ff66",
        "#ff00cc"
    ];

    const color =
        colors[
        Math.floor(
            Math.random() * colors.length
        )
        ];


    /* Outer glow */

    ctx.beginPath();

    ctx.arc(
        x,
        y,
        radius + 12,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = color;

    ctx.globalAlpha = 0.15;

    ctx.fill();


    /* Main circle */

    ctx.beginPath();

    ctx.arc(
        x,
        y,
        radius,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = color;

    ctx.globalAlpha = 0.75;

    ctx.fill();


    /* Inner circle */

    ctx.beginPath();

    ctx.arc(
        x - radius * 0.25,
        y - radius * 0.25,
        radius * 0.3,
        0,
        Math.PI * 2
    );

    ctx.fillStyle = "#ffffff";

    ctx.globalAlpha = 0.7;

    ctx.fill();


    ctx.globalAlpha = 1;

    circlesCreated++;

    circleCount.textContent =
        circlesCreated;
}


/* =========================================================
   CANVAS CLICK
   ========================================================= */

canvas.addEventListener("click", function (event) {

    const rect =
        canvas.getBoundingClientRect();

    const scaleX =
        canvas.width / rect.width;

    const scaleY =
        canvas.height / rect.height;

    const x =
        (event.clientX - rect.left) * scaleX;

    const y =
        (event.clientY - rect.top) * scaleY;

    createPower(x, y);

});


/* =========================================================
   RANDOM POWER
   ========================================================= */

const randomCircleBtn =
    document.getElementById("randomCircleBtn");

randomCircleBtn.addEventListener(
    "click",
    randomCircle
);


function randomCircle() {

    const x =
        Math.random() * canvas.width;

    const y =
        Math.random() * canvas.height;

    createPower(x, y);
}


/* =========================================================
   CLEAR CANVAS
   ========================================================= */

const clearCanvasBtn =
    document.getElementById("clearCanvasBtn");

clearCanvasBtn.addEventListener(
    "click",
    clearCanvas
);


function clearCanvas() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    circlesCreated = 0;

    circleCount.textContent = "0";
}


/* =========================================================
   BACK TO TOP
   ========================================================= */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

        topBtn.style.alignItems = "center";

        topBtn.style.justifyContent = "center";

    } else {

        topBtn.style.display = "none";
    }

});


topBtn.addEventListener("click", goTop);


function goTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   IMAGE ERROR HANDLING
   ========================================================= */

const images =
    document.querySelectorAll(".image-container img");


images.forEach(function (image) {

    image.addEventListener("error", function () {

        console.error(
            "Image could not be loaded:",
            image.src
        );

        image.style.background = "#300000";

        image.style.objectFit = "contain";

    });

});


/* =========================================================
   VIDEO ERROR CHECK
   ========================================================= */

const creativeVideo =
    document.getElementById("creativeVideo");

creativeVideo.addEventListener(
    "error",
    function () {

        console.error(
            "video.mp4 could not be loaded."
        );

    }
);