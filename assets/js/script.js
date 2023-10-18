// Sections should be displayed and hidden as necessary - Create a function for it
// Create a function to populate questions
// Create a function to check the selected answer
// Create a function to show the answer
// A function for timer to be created.


// The question bank is based on this website https://www.interviewbit.com/javascript-mcq/

// I got the multiple key value pairs reference from https://stackoverflow.com/questions/49335930/add-multiple-key-value-pairs-in-a-javascript-object

var questions = [
      {
            question: "1. Javascript is an _______ language?",
            options: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
            answer: "Object-Oriented"
      },
      {
            question: "2. Which of the following keywords is used to define a variable in Javascript?",
            options: ["var", "let", "Both A and B", "None of the above"],
            answer: "Both A and B"
      },
      {
            question: "3. Which of the following methods is used to access HTML elements using Javascript?",
            options: ["getElementById","getElementsByClassName","Both A and B", "None of the above"],
            answer: "Both A and B"
      },
      {
            question: "4. Which function is used to serialize an object into a JSON string in Javascript?",
            options: ["stringify", "parse", "convert", "None of the above"],
            answer:"stringify"
      },
      {
            question: "5. How to stop an interval timer in Javascript?",
            options: ["clearInterval", "clearTime", "intervalOver", "None of the above"],
            answer: "clearInterval"
      },
      {
            question: "6. Upon encountering empty statements, what does the Javascript Interpreter do?",
            options: ["Throws an error", "Ignores the statement", "Gives a warning", "None of the above"],
            answer: "Ignores the statement"
      },
      {
            question: "7. Which of the following methods can be used to display data in some form using Javascript?",
            options: ["document.write()", "console.log()", "window.alert()", "All the above"],
            answer: "All the above"
      }
];



var startBtn = document.querySelector("#startQuiz");
var mainSection = document.querySelector("#main-section");
var timeReset = document.querySelector("#timeReset");
var quiz1Card = document.querySelector("#quiz-1");
var timerElDiv = document.querySelector(".timerDiv");
var timerRemain = document.querySelector("#timeRemain");
var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("options");
var resultEl = document.getElementById("result");
var showScoreBtn = document.querySelector("#showScore");

var currentQuestion = 0;
var score = 0;
var timer = 0;

// Function to show and hide
function showQuizCard() {
      mainSection.style.display = "none";
      timeReset.style.display = "none";
      quiz1Card.style.display = "block";
      timerElDiv.style.display = "block";
      showQuizQuestion();    
}


// This function iterate the question array and create the element existing dummy structure of HTML.
// Got the array iteration through forEach with the reference in the link https://stackoverflow.com/questions/9329446/loop-for-each-over-an-array-in-javascript
function showQuizQuestion() {
      var current = questions[currentQuestion];
      questionElement.textContent = current.question;
      optionsElement.innerHTML = "";
      current.options.forEach((option, index) => {
            var btn = document.createElement("button");
            btn.className = "optionbtn";
            btn.value = option;
            btn.innerHTML = option;
            btn.id = option;
            btn.onclick = function () { 
                  checkSelectedAnswer(this.id);
            }
            var label = document.createElement("label");
            label.className = "lbloption";
            label.appendChild(btn);
            optionsElement.appendChild(label);
      });    
}
 
// For each button click on the answer, it will verify the answer with the answer already defined in the array
function checkSelectedAnswer(selectedAnswer) {
      if (selectedAnswer === questions[currentQuestion].answer) {
            resultEl.textContent = "Correct!";
            score++;
      } else {
            resultEl.textContent = "Wrong!";
      }
      currentQuestion++;
       if (currentQuestion < questions.length) {
            showQuizQuestion();
      } else {
            resultEl.textContent = "You have answered all the questions!";
            showScoreDiv.style.display = "block";
      }
}





startBtn.addEventListener("click", showQuizCard);