var formEl = document.querySelector("#highscore");
var highscoreEl = document.querySelector("#highscore-panel")
var instructionsEl = document.querySelector('#instructions');
var timerEl = document.querySelector('#countdown');
var questionEl = document.querySelector('#quiz-question');
var quizEl = document.querySelector('#quiz-body');
var statusEl = document.querySelector('#status')
var startBtn = document.querySelector('#start');
var timeLeft = 0;
var timeInterval;

// Start Questions Array
var questionObj = [
    {
        question: "Commonly used data types do NOT include:",
        options: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "3"
    },
    {
        question: "Arrays in JavaScript can be used to store ______",
        options: ["Other Arrays", "Numbers and Strings", "Booleans", "All of the Above"],
        answer: "4"
    },
    {
        question: "The condition in an if/else statement is enclosed with _____",
        options: ["Quotes", "Parenthesis", "Square Brackets", "Curly Brackets"],
        answer: "2",
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        options: ["Quotes", "Curly Brackets", "Commas", "Parenthesis"],
        answer: "1"
    },
    {
        question: "A useful tool used during development/debugging for printing content to the debugger is:",
        options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "4"
    },
]

// Display opening instructions
quizEl.textContent = "Try to answer the following code-related questions withn the time limit. Keep in mind that incorrect answers will penalize your score / time by ten seconds!";

// Timer function set at 60 seconds
function timer() {
    timeLeft = 60;
    startBtn.setAttribute("style", "display: none"); // Hide start button on start

    timeInterval = setInterval(function () {
        // While timer is running
        if (timeLeft > -1) {
            timerEl.textContent = 'Time: ' + timeLeft; // Display timer on page
            timeLeft--;
        }
        // After timer hits zero
        else {
            timerEl.textContent = 'Times Up!'; // Display times up message
            clearInterval(timeInterval); // Reset Timer
            endGame(timeLeft);
        }
    }, 1000);
    questions();
}

// Create question groups
var questions = function () {
    quizEl.textContent = "";
    for (let i = 0; i < questionObj.length; i++) {
        var panelEl = document.createElement("section");
        panelEl.className = "question-panel";
        panelEl.setAttribute("id", "panel" + [i + 1]);
        quizEl.appendChild(panelEl);

        var questionEl = document.createElement("h3");
        questionEl.className = "quiz-question";
        questionEl.textContent = questionObj[i].question;
        panelEl.appendChild(questionEl);

        var answerEl = document.createElement("div");
        answerEl.setAttribute("data-question-id", "1"); // Set question option id
        answerEl.setAttribute("data-answer-id", questionObj[i].answer); // set correct answer id
        answerEl.setAttribute("data-panel-id", "panel" + [i + 1]); // set question group id
        answerEl.className = "answer-choice";
        answerEl.textContent = "1. " + questionObj[i].options[0];
        panelEl.appendChild(answerEl);

        var answerEl = document.createElement("div");
        answerEl.setAttribute("data-question-id", "2"); // Set question option id
        answerEl.setAttribute("data-answer-id", questionObj[i].answer); // set correct answer id
        answerEl.setAttribute("data-panel-id", "panel" + [i + 1]); // set question group id
        answerEl.className = "answer-choice";
        answerEl.textContent = "2. " + questionObj[i].options[1];
        panelEl.appendChild(answerEl);

        var answerEl = document.createElement("div");
        answerEl.setAttribute("data-question-id", "3"); // Set question option id
        answerEl.setAttribute("data-answer-id", questionObj[i].answer); // set correct answer id
        answerEl.setAttribute("data-panel-id", "panel" + [i + 1]); // set question group id
        answerEl.className = "answer-choice";
        answerEl.textContent = "3. " + questionObj[i].options[2];
        panelEl.appendChild(answerEl);
