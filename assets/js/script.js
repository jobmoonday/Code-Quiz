let startButtonEl = document.getElementById("start");
let startScreenDivEl = document.getElementById("start-screen");
let questionsDivEl = document.getElementById("questions");
let questionTitleEl = document.getElementById("question-title");
let optionsDivEl = document.getElementById("choices");
let endScreenDiv = document.getElementById("end-screen");
let finalScoreSpanEl = document.getElementById("final-score");
let submitButtonEl = document.getElementById("submit");
let initialTextEl = document.getElementById("initials");
let feedbackDivEl = document.getElementById("feedback");
let wrapperDiv = document.getElementById("wrapper");
let timeSpanEl = document.getElementById("time");
let i=0;
let score = 0;
let timer;
let timerCount = questions.length * 5;
let isCorrect;
let scoresArray = [];


for(var j=1; j<=4; j++) {
    var button = document.createElement("button");
    button.setAttribute("id", j);
    optionsDivEl.appendChild(button);
}

startButtonEl.addEventListener("click", function() {
    i=0;
    score=0;
    startScreenDivEl.setAttribute("class", "hide");
    questionsDivEl.setAttribute("class", "start");
    timerCount = questions.length * 10;
    startTimer();
    getQuestion();
})


function getQuestion() {
    questionTitleEl.textContent = i + 1 + ". " + questions[i].question;
    var buttonId = 1;
    questions[i].answers.forEach((a) => {
        var button = document.getElementById(buttonId);
        button.textContent = a;
        buttonId++;
    });
}

var button1 = document.getElementById("1");
button1.addEventListener("click", function() {
    feedbackDivEl.setAttribute("class", "feedback hide");
    if(button1.textContent === questions[i].correctAnswer) {
        score++;
        isCorrect = "Correct!";
    } else {
        timerCount-=10;
        isCorrect = "Wrong!"
    }
    i++;
    if(i < questions.length) {
        feedbackDivEl.setAttribute("class", "feedback start");
        feedbackDivEl.textContent = isCorrect;
        getQuestion();
    } else {
        clearInterval(timer);
        feedbackDivEl.setAttribute("class", "feedback start");
        feedbackDivEl.textContent = isCorrect;
        questionsDivEl.setAttribute("class", "hide");
        endScreenDiv.setAttribute("class", "start");
        finalScoreSpanEl.textContent = score;
    }
}
);
var button2 = document.getElementById("2");
button2.addEventListener("click", function() {
    feedbackDivEl.setAttribute("class", "feedback hide");
    if(button2.textContent === questions[i].correctAnswer) {
        score++;
        isCorrect = "Correct!";
    } else {
        timerCount-=5;
        isCorrect = "Wrong!"
    }
    i++;
    if(i < questions.length) {
        feedbackDivEl.setAttribute("class", "feedback start");
        feedbackDivEl.textContent = isCorrect;
        getQuestion();
    } else {
        clearInterval(timer);
        feedbackDivEl.setAttribute("class", "feedback start");
        feedbackDivEl.textContent = isCorrect;
        questionsDivEl.setAttribute("class", "hide");
        endScreenDiv.setAttribute("class", "start");
        finalScoreSpanEl.textContent = score;
    }
}
);
var button3 = document.getElementById("3");
button3.addEventListener("click", function() {
    feedbackDivEl.setAttribute("class", "feedback hide");
    if(button3.textContent === questions[i].correctAnswer) {
        score++;
        isCorrect = "Correct!";
    } else {
        timerCount-=5;
        isCorrect = "Wrong!"
    }
    i++;
    if(i < questions.length) {
        feedbackDivEl.setAttribute("class", "feedback start");
        feedbackDivEl.textContent = isCorrect;
        getQuestion();
    } else {
        clearInterval(timer);
        feedbackDivEl.setAttribute("class", "feedback start");
        feedbackDivEl.textContent = isCorrect;
        questionsDivEl.setAttribute("class", "hide");
        endScreenDiv.setAttribute("class", "start");
        finalScoreSpanEl.textContent = score;
    }
}
);

var button4 = document.getElementById("4");
button1.addEventListener("click", function() {
    feedbackDivEl.setAttribute("class", "feedback hide");
    if(button4.textContent === questions[i].correctAnswer) {
        score++;
        isCorrect = "Correct!";
    } else {
        timerCount-=5;
        isCorrect = "Wrong!"
    }
    i++;
    if(i < questions.length) {
        feedbackDivEl.setAttribute("class", "feedback start");
        feedbackDivEl.textContent = isCorrect;
        getQuestion();
    } else {
        clearInterval(timer);
        feedbackDivEl.setAttribute("class", "feedback start");
        feedbackDivEl.textContent = isCorrect;
        questionsDivEl.setAttribute("class", "hide");
        endScreenDiv.setAttribute("class", "start");
        finalScoreSpanEl.textContent = score;
    }
}
);

function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      timeSpanEl.textContent = timerCount;
      if (timerCount === 0) {
        clearInterval(timer);
        questionsDivEl.setAttribute("class", "hide");
        endScreenDiv.setAttribute("class", "start");
        finalScoreSpanEl.textContent = score;
      }
    }, 1000);
}

submitButtonEl.addEventListener("click", function() {
    feedbackDivEl.setAttribute("class", "feedback hide");
    var text = initialTextEl.value + "  " + score;
    console.log(text);
    if(localStorage.getItem("scores") !== null) {
        scoresArray = JSON.parse(localStorage.getItem("scores"));
    }
    scoresArray.push(text);
    localStorage.setItem("scores", JSON.stringify(scoresArray));
    endScreenDiv.setAttribute("class", "hide");
    startScreenDivEl.setAttribute("class", "start");
    initialTextEl.value = "";
});



