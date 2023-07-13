var startBtn= document.getElementById("start-btn");
var introSectionEl= document.getElementById("intro-section");
var timerEl= document.getElementById("timer");
var questionSectionEl= document.getElementById("question-section");
var choicesEl= document.querySelectorAll("choices")
var titleEl=document.getElementById('title');
var questionIndex=0;

var questionsArray=[
    {
        title:"Commonly used data types DO NOT include:",
        choices:["1. Strings","2. Booleans","3. Alerts", "4. Numbers" ],
        answer: "2. Booleans"
    },
    {
        title:"CHANGE FOR QUESTION 2",
        choices:[ ],
        answer: ""
    },
    {
        
        title:"CHANGE FOR Q3",
        choices:[ ],
        answer: ""
    },
    {
        title:"CHANGE FOR Q4",
        choices:[ ],
        answer: ""
    },
    {
        title:"CHANGE FOR Q4",
        choices:[ ],
        answer: ""
    }
]

var timeLeft= questionsArray.length* 15;

// ^brings in the selectors from HTML to create usable variables

// 1. hide intro
// 2. start the timer
// 3. show questions 
// 4. data structure to store questions and choices

var setIntervalId=0;

function startQuiz(){
    introSectionEl.setAttribute("class","hide")
    questionSectionEl.setAttribute("class",);
    // creates a dynamic hide 
    countDown();
    setIntervalId=setInterval(countDown,1000);
    showQuestions()
}

function countDown(){
    timerEl.textContent=timeLeft--;
    if(timeLeft===0){
        clearInterval(setIntervalId)
    }
    // put text in
}

function showQuestions(){
    titleEl.textContent=questionsArray[questionIndex],title;

    choicesEl[0].textContent=questionsArray[questionIndex].choices[0];

    choicesEl[1].textContent=questionsArray[questionIndex].choices[1];

    choicesEl[2].textContent=questionsArray[questionIndex].choices[2];

    choicesEl[3].textContent=questionsArray[questionIndex].choices[3];

}

function nextQuestion(event){
    var currentElement= event.target;
    if(currentElement.matches("button")){
        questionIndex++;
        showQuestions();
    }

}

startBtn.addEventListener("click",startQuiz)

questionSectionEl.addEventListener("click",nextQuestion)