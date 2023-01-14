// Global variables
const startBttn = document.getElementById('start-bttn')
const questionEl =document.getElementById('question-container')
// list of all questions, choices, and answers
const questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: [
        {text: 'strings', correct: false},
        {text: 'booleans', correct: false},
        {text: 'alerts', correct: true},
        {text: 'numbers', correct: false},
      ],
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: [
        {text: 'quotes', correct: false},
        {text: 'curly brackets', correct: false},
        {text: 'parentheses', correct: true},
        {text: 'square brackets', correct: false}
      ],
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        {text: 'numbers and strings', correct: false},
        {text: 'other arrays', correct: false},
        {text: 'booleans', correct: false},
        {text: 'all of the above', correct: true},
      ],
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: [
        {text: 'commas', correct: false},
        {text: 'curly brackets', correct: false},
        {text: 'quotes', correct: true},
        {text: 'parentheses', correct: false},
      ],
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: [
        {text: 'JavaScript', correct: false},
        {text: 'terminal / bash', correct: false},
        {text: 'for loops', correct: false},
        {text: 'console.log', correct: true},
      ],
    },
  ];

// start game
startBttn.addEventListener('click', startGame)
function startGame() {
  console.log("eheheh");
  startBttn.style.display = "none";
  nextQuestion()
}

// setting the next question
function nextQuestion() {

}







// var timeLeft = 76;
// function newQuiz() {
//   questionIndex = 0;
  
// }
// function startTimer() {
//   var timer = setInterval(function() {
//     timeLeft--;
//     timerElement.textContent = timeLeft + ' seconds left';
//     if(timeLeft === 0) {
//       clearInterval(timer);
//       sendMessage();
//     }
//   }, 1000);
// }
// startBttn.addEventListener("click", startTimer);
