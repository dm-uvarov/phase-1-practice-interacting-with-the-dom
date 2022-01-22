// timer things
let clockTimer = resumeTimer();

let isClockTicking = true;

function stopTimer(timer) {
    clearInterval(timer);
}

function resumeTimer() {
    return setInterval(incrementTimer, 1000);
}

const pauseBtn = document.querySelector("#pause");


pauseBtn.addEventListener("click", pauseBtnPressed);

function pauseBtnPressed() {
    pauseBtn.textContent = isClockTicking ? "resume" : "pause";

    if (isClockTicking) {
        stopTimer(clockTimer);
        plusBtn.disabled = true;
        minusBtn.disabled = true;
        likeBtn.disabled = true;
        submitBtn.disabled = true;
        createRestartBtn();
    } else {
        clockTimer = resumeTimer();
        plusBtn.disabled = false;
        minusBtn.disabled = false;
        likeBtn.disabled = false;
        submitBtn.disabled = false;
        destroyRestartBtn();
    }
    isClockTicking = isClockTicking ? false : true;
}

const timerElement = document.querySelector("#counter");

const submitBtn = document.querySelector("#submit");


// part with "+" and "-"
function incrementTimer() {
    let counter = 1 + parseInt(timerElement.textContent);
    timerElement.textContent = `\n    ${counter.toString()}\n`
};

function decrementTimer() {
    let counter = -1 + parseInt(timerElement.textContent);
    timerElement.textContent = `\n    ${counter.toString()}\n`
};

const plusBtn = document.querySelector("#plus");

plusBtn.addEventListener("click", incrementTimer);

const minusBtn = document.querySelector("#minus");

minusBtn.addEventListener("click", decrementTimer);


// ==== part with likes
const numberOfLikesElement = document.querySelector(".likes")

let isLikeBtnPressedYet = false;

function oneMoreLikeAppears() {

    if (!isLikeBtnPressedYet) {
        isLikeBtnPressedYet = true;
        let oneMoreLikeElement = document.createElement("li")
        oneMoreLikeElement.id = "likes-num"
        oneMoreLikeElement.textContent = "1 Like";
        numberOfLikesElement.appendChild(oneMoreLikeElement);
    } else {
        let oneMoreLikeElement = document.querySelector("#likes-num");
        oneMoreLikeElement.textContent = (parseInt(oneMoreLikeElement.textContent) + 1).toString() + " likes total.";
    }
}

const likeBtn = document.querySelector("#heart");

likeBtn.addEventListener("click", oneMoreLikeAppears);


const comForm = document.querySelector("#comment-form");
const placeForComment = document.querySelector("#list");
const inputField = document.querySelector("#comment-input");

comForm.addEventListener("submit", (e) => {
    console.log(e);
    e.preventDefault();
    console.log(inputField.value);
    let pComment = document.createElement("p");
    pComment.innerText = inputField.value;
    placeForComment.appendChild(pComment);

})

function createRestartBtn() {
    const restartBtn = document.createElement("button")
    restartBtn.id = "restartBtn";
    restartBtn.textContent = "restart";
    pauseBtn.after(restartBtn);

    restartBtn.addEventListener("click", (e) => {
        e.preventDefault();
        destroyRestartBtn();


        plusBtn.disabled = false;
        minusBtn.disabled = false;
        likeBtn.disabled = false;
        submitBtn.disabled = false;
        isClockTicking = true;
        timerElement.textContent = `\n    0\n`;
        clockTimer = resumeTimer();
        pauseBtn.textContent = "pause";
    })

}

function destroyRestartBtn() {
    const restartBtn = document.querySelector("#restartBtn");
    restartBtn.remove();
}