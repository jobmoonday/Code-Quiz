let startButtonEl = document.getElementById("start");
let startScreenDivEl = document.getElementById("start-screen");
let questionsDivEl = document.getElementById("questions");
let questionTitleEl = document.getElementById("question-title");
let choicesDivEl = document.getElementById("choices");
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
let scoreArray = [];



