const heartsBackground = document.getElementById("heartsBackground");
const welcomePage = document.getElementById("welcomePage");
const secretPage = document.getElementById("secretPage");
const startButton = document.getElementById("startButton");
const secretMessage = document.getElementById("secretMessage");
const nextButton = document.getElementById("nextButton");

const questionPage = document.getElementById("questionPage");
const answerMessage = document.getElementById("answerMessage");
const surpriseButton = document.getElementById("surpriseButton");

const letterButton = document.getElementById("letterButton");
const letterContent = document.getElementById("letterContent");

// قلب‌های شناور پس‌زمینه
function createHeart() {
    if (!heartsBackground) return;

    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (14 + Math.random() * 25) + "px";
    heart.style.animationDuration = (5 + Math.random() * 6) + "s";

    heartsBackground.appendChild(heart);
    heart.addEventListener("animationend", function () {
        heart.remove();
    });
}

setInterval(createHeart, 450);

// ورود به دنیای ما
if (startButton) {
    startButton.addEventListener("click", function () {
        welcomePage.hidden = true;
        secretPage.hidden = false;
    });
}

// سه راز من برای نانااا
const secrets = {
    "1": "نانااا، می‌دونی قشنگ‌ترین اتفاقی که می‌تونه برای یه آدم بیفته چیه؟ اینکه وسط این همه آدم، یکی پیدا بشه که بودنش با همه فرق داشته باشه... برای من، تو فقط یه آدم معمولی نیستی. تو همون کسی هستی که با یه پیامش می‌تونه لبخند بیاره روی صورتم. خیلی بیشتر از چیزی که فکر می‌کنی برام مهمی. ❤️",

    "2": "می‌دونی دلتنگی من چه شکلیه؟ اینکه یه چیزی ببینم و ناخودآگاه دلم بخواد به تو نشونش بدم؛ یه اتفاق بیفته و اولین کسی که بخوام براش تعریف کنم تو باشی... دلتنگی برای من یعنی تو، حتی وقتی کنارم نیستی، توی فکرمی. 🥀❤️",

    "3": "راز سوم اینه که من نمی‌خوام فقط یه خاطره قشنگ توی زندگیت باشم؛ دلم می‌خواد باهم خاطره‌های قشنگ‌تری بسازیم. روزای خنده، وقتای دلتنگی و لحظه‌های ساده‌ای که برای خودمون خاصن... هنوز یه حرف مهم‌تر مونده، نانااا. 💌🖤"
};

let openedSecrets = [];

document.querySelectorAll(".secret-button[data-secret]").forEach(function (button) {
    button.addEventListener("click", function () {
        const number = button.dataset.secret;
        secretMessage.textContent = secrets[number];

        if (!openedSecrets.includes(number)) {
            openedSecrets.push(number);
        }

        button.classList.add("opened");

        if (openedSecrets.length === 3) {
            nextButton.hidden = false;
            nextButton.textContent = "کشف راز آخر ❤️‍🔥";
        }
    });
});

// رفتن به مرحله‌ی سؤال‌ها
if (nextButton) {
    nextButton.addEventListener("click", function () {
        secretPage.hidden = true;

        if (questionPage) {
            questionPage.hidden = false;
        } else {
            secretMessage.textContent =
                "من هنوز یه نامه‌ی آخر برای نانااا داره... 💌";
        }
    });
}

// باز کردن نامه
if (letterButton && letterContent) {
    letterButton.addEventListener("click", function () {
        letterContent.hidden = false;
        letterContent.classList.add("letter-open");
        letterButton.textContent = "نامه باز شد ❤️";
        letterButton.disabled = true;
    });
}

// سؤال‌های مرحله‌ی دوم
const answers = {
    "1": "نانااا، هر خاطره‌ای که کنار هم ساختیم، یه گوشه از قلب من جا داره. ❤️",
    "2": "شاید یه پیام، یه حرف ساده یا یه لحظه‌ی قشنگ؛ بعضی آدما حتی وقتی نیستن، توی فکر آدم می‌مونن. 🌙",
    "3": "من دوست دارم با تو خاطره‌هایی بسازم که سال‌ها بعد، یادآور روزهای قشنگمون باشن. 💌"
};

let answeredQuestions = [];

document.querySelectorAll(".question-button").forEach(function (button) {
    button.addEventListener("click", function () {
        const number = button.dataset.answer;
        answerMessage.textContent = answers[number];

        if (!answeredQuestions.includes(number)) {
            answeredQuestions.push(number);
        }

        button.classList.add("opened");

        if (answeredQuestions.length === 3) {
    surpriseButton.hidden = false;
    lovePageButton.hidden = false;
}
    });
});

// سورپرایز پایانی
if (surpriseButton) {
    surpriseButton.addEventListener("click", function () {
        answerMessage.textContent =
            "نانااا... ❤️ رسیدی به آخر داستان، اما نه آخر حرف‌های من. دلم می‌خواد باهم خاطره‌های تازه بسازیم؛ روزهایی پر از خنده، حرف‌های قشنگ و لحظه‌هایی که فقط برای خودمون خاصن. با عشق، من. ❤️";

        surpriseButton.textContent = "سورپرایز باز شد ❤️";
        surpriseButton.disabled = true;
    });
}
const loveButton = document.getElementById("loveButton");
const loveMessage = document.getElementById("loveMessage");

if (loveButton && loveMessage) {
    loveButton.addEventListener("click", function () {
        loveMessage.textContent =
            "عاشقتممم ناناجونم! 💋❤️ قربونت برم من! یه دنیا بوس و بغل برای تووو! 🫂💖";

        for (let i = 0; i < 35; i++) {
            const heart = document.createElement("span");

            heart.textContent = ["❤️", "💖", "💕", "💘", "💋"][
                Math.floor(Math.random() * 5)
            ];

            heart.className = "love-burst-heart";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.setProperty(
                "--drift",
                (Math.random() * 200 - 100) + "px"
            );
            heart.style.animationDelay = Math.random() * 0.8 + "s";

            document.body.appendChild(heart);

            heart.addEventListener("animationend", function () {
                heart.remove();
            });
        }
    });
}

const lovePage = document.getElementById("lovePage");
const lovePageButton = document.getElementById("lovePageButton");
const backButton = document.getElementById("backButton");
const backToSecrets = document.getElementById("backToSecrets");
const backgroundMusic = document.getElementById("backgroundMusic");
const loveCounterSection = document.getElementById("loveCounterSection");

function updateLoveCounter() {
    const startDate = new Date(2026, 6, 12, 0, 0, 0);
    const now = new Date();

    let difference = now - startDate;
    if (difference < 0) difference = 0;

    const seconds = Math.floor(difference / 1000);

    document.getElementById("loveDays").textContent =
        Math.floor(seconds / 86400);

    document.getElementById("loveHours").textContent =
        Math.floor((seconds % 86400) / 3600);

    document.getElementById("loveMinutes").textContent =
        Math.floor((seconds % 3600) / 60);

    document.getElementById("loveSeconds").textContent =
        seconds % 60;
}

updateLoveCounter();
setInterval(updateLoveCounter, 1000);


if (lovePageButton && lovePage && loveCounterSection) {
    lovePageButton.addEventListener("click", function () {
        questionPage.hidden = true;
        lovePage.hidden = false;
        loveCounterSection.hidden = false;
        loveCounterSection.style.display = "block";

        updateLoveCounter();
    });
}


if (backButton) {
    backButton.addEventListener("click", function () {
        lovePage.hidden = true;
        questionPage.hidden = false;
        loveCounterSection.hidden = true;
    });
}

if (backToSecrets) {
    backToSecrets.addEventListener("click", function () {
        questionPage.hidden = true;
        secretPage.hidden = false;
    });
}

if (startButton && backgroundMusic) {
    startButton.addEventListener("click", function () {
        backgroundMusic.volume = 0.5;
        backgroundMusic.play().catch(function (error) {
            console.log("مشکل پخش آهنگ:", error);
        });
    });
}
