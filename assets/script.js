// Global variables
const startBttn = document.getElementById('start-bttn')
const questionContainerEl = document.getElementById('question-container')
const questionEl = document.getElementById('questions')
const answerBttnEl = document.getElementById('answer-bttns')
var questionIndex = 0
var timerEl = document.getElementById('timer')
let shuffledQuestions, currentQuestionIndex
// list of all questions, choices, and answers
const questions = [
    {
      question: 'Commonly used data types DO NOT include:',
      answer: ['string', 'booleans', 'alerts', 'numbers'],
      correct: 'alerts'
    },
    {
      question: 'The condition in an if / else statement is enclosed within ____.',
      answer: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      correct: 'parentheses'
    },
    {
      question: 'Arrays in JavaScript can be used to store ____.',
      answer: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
      correct: 'all of the above'
    },
    {
      question:
        'String values must be enclosed within ____ when being assigned to variables.',
      answer: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      correct: 'quotes'
    },
    {
      question:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      answer: ['JavaScript','terminal / bash', 'for loops', 'console.log'],
      correct: 'console.log'
    },
  ];

// start game
startBttn.addEventListener('click', startGame)
function startGame() {
  // startTimer();
  startBttn.style.display = "none";
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
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
  displayQuestion(questions.CurrentQuestionIndex)
    for (i = 0; i < questions.length; i++) {
      currentQuestionIndex++;
    }
}

var displayQuestion = function() {
  questionEl.innerText = question.question
  question.answer.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer
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
var correct = questions[questionIndex].correct;


function selectAnswer(e) {
  const selectedBttn = e.target 
  // Array.from(answerBttnEl.children).forEach(button => {
  if (selectedBttn === correct) {
    console.log('finally bitch');
    nextQuestion(); 
  } else { 
    timeLeft - 10;
    nextQuestion;
  }
  }














var timeLeft = 76;
// function newQuiz() {
//   questionIndex = 0;
  
// }

// startBttn.addEventListener("click", startTimer);
