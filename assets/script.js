// Global variables
const startBttn = document.getElementById('start-bttn')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('questions')
const answerBttnEl = document.getElementById('answer-bttns')
var questionIndex = 0
var timerEl = document.getElementById('timer')
// list of all questions, choices, and answers
const questions = [
    {
      question: 'Commonly used data types DO NOT include:',
      answer: [
        {text: 'strings', correct: false},
        {text: 'booleans', correct: false},
        {text: 'alerts', correct: true},
        {text: 'numbers', correct: false},
      ]
    },
    {
      question: 'The condition in an if / else statement is enclosed within ____.',
      answer: [
        {text: 'quotes', correct: false},
        {text: 'curly brackets', correct: false},
        {text: 'parentheses', correct: true},
        {text: 'square brackets', correct: false}
      ]
    },
    {
      question: 'Arrays in JavaScript can be used to store ____.',
      answer: [
        {text: 'numbers and strings', correct: false},
        {text: 'other arrays', correct: false},
        {text: 'booleans', correct: false},
        {text: 'all of the above', correct: true},
      ]
    },
    {
      question:
        'String values must be enclosed within ____ when being assigned to variables.',
      answer: [
        {text: 'commas', correct: false},
        {text: 'curly brackets', correct: false},
        {text: 'quotes', correct: true},
        {text: 'parentheses', correct: false},
      ]
    },
    {
      question:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      answer: [
        {text: 'JavaScript', correct: false},
        {text: 'terminal / bash', correct: false},
        {text: 'for loops', correct: false},
        {text: 'console.log', correct: true},
      ]
    },
  ];

// start game
startBttn.addEventListener('click', startGame)
function startGame() {
  // startTimer();
  startBttn.style.display = "none";
  nextQuestion();
}

// start timer 
startBttn.addEventListener('click', startTimer)
var timeLeft = 76;
function startTimer() {
  var timer = setInterval(function() {
    timeLeft--;
    timerEl.textContent = timeLeft + ' seconds left';
    if(timeLeft === 0) {
      clearInterval(timer);
      sendMessage();
    }
  }, 1000);
}

// setting the next question
var question = questions[0]
function nextQuestion() {
  resetState()
  displayQuestion(questions.questionIndex)
    for (i = 0; i < questions.length; i++) {

    }
}

var displayQuestion = function() {
  questionEl.innerText = question.question
  question.answer.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('bttn')
    button.addEventListener('click', selectAnswer)
    answerBttnEl.appendChild(button)
  })
}

function resetState() {
  while (answerBttnEl.firstChild) {
    answerBttnEl.removeChild
    (answerBttnEl.firstChild)
  }
}

// answer buttons 
function selectAnswer(e) {
  const selectedBttn = e.target 
  const correct = selectedBttn.dataset.correct
  Array.from(answerBttnEl.children).forEach(button => {
    
  })
}













var timeLeft = 76;
// function newQuiz() {
//   questionIndex = 0;
  
// }

// startBttn.addEventListener("click", startTimer);
