// Global variables
var startBttn = document.querySelector("#start-bttn");
var timerElement = document.querySelector("#count-down");
var questionIndex = 0;
// list of all questions, choices, and answers
const questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ];

// start button
var timeLeft = 76;
function newQuiz() {
  questionIndex = 0;
  
}
function startTimer() {
  var timer = setInterval(function() {
    timeLeft--;
    timerElement.textContent = timeLeft + ' seconds left';
    if(timeLeft === 0) {
      clearInterval(timer);
      sendMessage();
    }
  }, 1000);
}
startBttn.addEventListener("click", startTimer);
