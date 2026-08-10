/* =====================================================
   HAPPY BIRTHDAY JHILI ❤️
   PREMIUM ROMANTIC ANIMATIONS
===================================================== */


/* =====================================================
   PAGE NAVIGATION
===================================================== */

let currentPage = 1;

function nextPage(page) {

    const current = document.getElementById(
        "page" + currentPage
    );

    const next = document.getElementById(
        "page" + page
    );

    if (!current || !next) {
        return;
    }

    current.classList.remove("active");

    next.classList.add("active");

    currentPage = page;

    createSmallHeartBurst();

    vibrate();
}


/* =====================================================
   MUSIC
===================================================== */

const music = document.getElementById("music");

let playing = false;

const musicButton = document.querySelector(".music-btn");


function updateMusicButton() {

    if (!musicButton) {
        return;
    }

    musicButton.innerHTML = playing ? "🔊" : "🔇";
}


function startMusic() {

    if (!music) {
        return;
    }

    music.play()
        .then(() => {

            playing = true;

            updateMusicButton();

        })
        .catch(() => {

            playing = false;

            updateMusicButton();

        });
}


function toggleMusic() {

    if (!music) {
        return;
    }

    if (playing) {

        music.pause();

        playing = false;

    } else {

        startMusic();

        return;
    }

    updateMusicButton();
}


/*
   Browser autoplay policy:
   Music starts after the first normal user interaction.
*/

let firstInteraction = false;

function firstUserInteraction() {

    if (firstInteraction) {
        return;
    }

    firstInteraction = true;

    if (!playing) {
        startMusic();
    }
}


/* =====================================================
   RANDOM WISHES
===================================================== */

const wishes = [

    "🎂 Happy Birthday Jhili ❤️",

    "🌹 May all your dreams come true.",

    "💖 Stay Happy Forever.",

    "🥰 You are very Special.",

    "🎉 Wishing You Endless Happiness.",

    "🌸 Keep Smiling Always.",

    "❤️ May God Bless You.",

    "🎁 Have a Wonderful Birthday.",

    "✨ May your life be filled with beautiful memories.",

    "💕 May happiness always find you."

];


function showWish() {

    const wishText = document.getElementById("wishText");

    if (!wishText) {
        return;
    }

    const random =
        Math.floor(Math.random() * wishes.length);

    wishText.style.animation = "none";

    void wishText.offsetWidth;

    wishText.innerHTML = wishes[random];

    wishText.style.animation =
        "wishAppear .6s ease";

    createSmallHeartBurst();

    vibrate();
}


/* =====================================================
   LIGHT CANDLE
===================================================== */

function lightCandle() {

    const cake =
        document.getElementById("cakeImage");

    if (cake) {

        cake.src = "images/Light on.png";

    }

    createSmallHeartBurst();

    setTimeout(() => {

        nextPage(8);

    }, 700);
}


/* =====================================================
   BLOW CANDLE
===================================================== */

function blowCandle() {

    createConfetti();

    createHeartExplosion();

    vibrate();

    setTimeout(() => {

        nextPage(9);

    }, 900);
}


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti() {

    const total = 150;

    for (let i = 0; i < total; i++) {

        const confetti =
            document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.width =
            (Math.random() * 8 + 5) + "px";

        confetti.style.height =
            (Math.random() * 12 + 7) + "px";

        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        confetti.style.animationDelay =
            Math.random() * 0.8 + "s";

        const colors = [
            "#ff416c",
            "#ff8fab",
            "#ffd166",
            "#ffffff",
            "#ff6b9a",
            "#ffb3c7"
        ];

        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 6000);
    }
}


/* =====================================================
   FLOATING HEART CREATOR
===================================================== */

const heartContainer =
    document.getElementById("heartContainer");


function createFloatingHeart() {

    if (!heartContainer) {
        return;
    }

    const heart =
        document.createElement("div");

    heart.className = "floating-heart";

    const heartSymbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "♥"
    ];

    heart.innerHTML =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 18 + 12) + "px";

    const duration =
        Math.random() * 8 + 8;

    heart.style.animationDuration =
        duration + "s";

    heart.style.animationDelay =
        Math.random() * 2 + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, (duration + 3) * 1000);
}


/* Start floating hearts */

setInterval(
    createFloatingHeart,
    650
);


/* =====================================================
   SMALL HEART BURST
===================================================== */

function createSmallHeartBurst() {

    const symbols = [
        "❤️",
        "💕",
        "💗"
    ];

    for (let i = 0; i < 8; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "burst-heart";

        heart.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        const angle =
            (Math.PI * 2 / 8) * i;

        const distance =
            70 + Math.random() * 60;

        heart.style.setProperty(
            "--x",
            Math.cos(angle) *
            distance + "px"
        );

        heart.style.setProperty(
            "--y",
            Math.sin(angle) *
            distance + "px"
        );

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 1700);
    }
}


/* =====================================================
   BIG HEART EXPLOSION
===================================================== */

function createHeartExplosion() {

    const symbols = [
        "❤️",
        "💕",
        "💖",
        "💗",
        "💓",
        "🌹"
    ];

    for (let i = 0; i < 35; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "burst-heart";

        heart.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            100 + Math.random() * 300;

        heart.style.setProperty(
            "--x",
            Math.cos(angle) *
            distance + "px"
        );

        heart.style.setProperty(
            "--y",
            Math.sin(angle) *
            distance + "px"
        );

        heart.style.fontSize =
            (Math.random() * 20 + 15) +
            "px";

        heart.style.animationDuration =
            (Math.random() * 1 + 1.2) +
            "s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 2500);
    }
}


/* =====================================================
   KEYBOARD SUPPORT
===================================================== */

document.addEventListener(
    "keydown",
    function (e) {

        if (e.key === "ArrowRight") {

            if (currentPage < 9) {

                nextPage(
                    currentPage + 1
                );

            }

        }

        if (e.key === "ArrowLeft") {

            if (currentPage > 1) {

                nextPage(
                    currentPage - 1
                );

            }

        }

    }
);


/* =====================================================
   MOBILE VIBRATION
===================================================== */

function vibrate() {

    if (
        navigator.vibrate &&
        typeof navigator.vibrate === "function"
    ) {

        navigator.vibrate(50);

    }
}


/* =====================================================
   BUTTON VIBRATION
===================================================== */

document
    .querySelectorAll("button")
    .forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                vibrate();

            }
        );

    });


/* =====================================================
   FIRST USER INTERACTION
===================================================== */

document.addEventListener(
    "click",
    firstUserInteraction,
    {
        once: true
    }
);


/* =====================================================
   INITIAL HEARTS
===================================================== */

for (let i = 0; i < 12; i++) {

    setTimeout(
        createFloatingHeart,
        i * 250
    );

}


/* =====================================================
   FINAL PAGE SPECIAL EFFECT
===================================================== */

function finalCelebration() {

    createConfetti();

    createHeartExplosion();

}


/* Trigger celebration when page 9 becomes active */

const originalNextPage = nextPage;

nextPage = function (page) {

    originalNextPage(page);

    if (page === 9) {

        setTimeout(
            finalCelebration,
            500
        );

    }

};
