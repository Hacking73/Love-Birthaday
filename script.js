// ===============================
// PAGE NAVIGATION
// ===============================

let currentPage = 1;

function nextPage(page) {
    document.getElementById("page" + currentPage).classList.remove("active");
    document.getElementById("page" + page).classList.add("active");
    currentPage = page;
}

// ===============================
// MUSIC
// ===============================

const music = document.getElementById("music");
let playing = false;

function toggleMusic() {

    if (playing) {
        music.pause();
        playing = false;
        document.querySelector(".music-btn").innerHTML = "🔇";
    } else {
        music.play();
        playing = true;
        document.querySelector(".music-btn").innerHTML = "🔊";
    }

}

// Auto Play After First Click

document.body.addEventListener("click", () => {

    if (!playing) {
        music.play();
        playing = true;
        document.querySelector(".music-btn").innerHTML = "🔊";
    }

}, { once: true });

// ===============================
// RANDOM WISHES
// ===============================

const wishes = [

"🎂 Happy Birthday Jhili ❤️",
"🌹 May all your dreams come true.",
"💖 Stay Happy Forever.",
"🥰 You are very Special.",
"🎉 Wishing You Endless Happiness.",
"🌸 Keep Smiling Always.",
"❤️ May God Bless You.",
"🎁 Have a Wonderful Birthday."

];

function showWish() {

    let random = Math.floor(Math.random() * wishes.length);

    document.getElementById("wishText").innerHTML = wishes[random];

}

// ===============================
// LIGHT CANDLE
// ===============================

function lightCandle() {

    const cake = document.getElementById("cakeImage");

    if (cake) {
        cake.src = "images/Light on.png";
    }

 

    nextPage(8);

}

// ===============================
// BLOW CANDLE
// ===============================

function blowCandle() {

    createConfetti();

    

    nextPage(9);

}

// ===============================
// CONFETTI
// ===============================

function createConfetti() {

    for (let i = 0; i < 120; i++) {

        let confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        confetti.style.opacity = Math.random();

        confetti.style.transform =
            "rotate(" + Math.random() * 360 + "deg)";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}

// ===============================
// KEYBOARD SUPPORT
// ===============================

document.addEventListener("keydown", function(e){

    if(e.key==="ArrowRight"){

        if(currentPage<9){

            nextPage(currentPage+1);

        }

    }

});

// ===============================
// MOBILE VIBRATION
// ===============================

function vibrate(){

    if(navigator.vibrate){

        navigator.vibrate(100);

    }

}

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",vibrate);

});
