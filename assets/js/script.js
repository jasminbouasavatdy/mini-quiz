var startEl = document.querySelector('#start');
var gameEl = document.getElementById('#game');
var endEl = document.getElementById('#done');
var questionsEl = document.getElementById('#questions');

var beginBtn = document.querySelector('#begin');
var initialsInput = document.querySelector('#initials');

// var submitbBtn = document.getElementById('#submit')
// created this varible to know where the starting point is on the game
var postion = 0;
var scorw = 100

//created an array of obejects for my questions so the quiz will work
var questions = [
    {
        text: "What are the primitive data types?",
        possible: [
            "Undefined",
            "String",
            "Numbers",
            "Boolean",
            "All of the above",
        ],
        correctAnswer: 5
    },
    {
        text: "When evaluating an expression what does || mean",
        possible: [
            "And",
            "False",
            "True",
            "Or",
        ],
        correctAnswer: 4
    },
    {
        text: "To store groups of data in an array what syntax do we use?",
        possible: [
            "Parenthesis",
            "Double Quotes",
            "Brackets",
            "Single Quotes",
        ],
        correctAnswer: 3
    },
    {
        text: "What are functions?",
        possible: [
            "Functionable functions",
            "False",
            "Resusable blocks of code",
            "None of the above",
        ],
        correctAnswer: 3
    },
    {
        text: "What does the (!) do to an expression?",
        possible: [
            "Nothing just a warning",
            "Turns the expression false",
            "Turns the expression to true",
            "Turns the expression to true or false and vice versa",
        ],
        correctAnswer: 4
    },
];

// instructor provided
function startingScreen() {
    startEl.style.display = "block";
    gameEl.style.display = "none";
    doneEl.style.display = "none";
}
// instructor provided
function gameingScreen() {
    startEl.style.display = "none";
    gameEl.style.display = "block";
    doneEl.style.display = "none";
    renderQuestion();
}
// showing the starting point of the first question
function renderQuestion() {
    var myQuestions = myQuestions[position];

    for (var i = 0; i < question.possible.length; i++) {
        var item = question.possible[i];
        var answerBtn = document.createElement('button');
        answerBtn.textContent = i + 1 + ". " + item;
        gameEl.appendChild(answerBtn);
    }
}
// instructor provided
function endingScreen() {
    startEl.style.display = "none";
    gameEl.style.display = "none";
    doneEl.style.display = "block";
}

function handleingSubmit(event) {
    event.preventDefault();

    var stored = JSON.parse(localStorage.getItem('highScores')) || [];
    var updatedScores = stored.push({
        score: score,
        initials: initialsInput.value
    });

    localStorage.setItem('highScores', JSON.stringify(updatedScores)); //before it goes to local storage you put it in "stirngify"
}

function init() {
    startScreen();
}
//   instructor provided
function handleAnswerClick(event) {
    if (event.target.matches('button')) { //checking to see if youre clicking a button on the screen
        console.log(event.target);
        postion++;
        if (postion < questions.length) {
            renderQuestion();
        } else {
            endScreen();
        }
    }
}

beginBtn.addEventListener('click', gameScreen);
gameEl.addEventListener('click', function (event) {
    if (event.target.matches('button')) { //checking to see if youre clicking a button on the screen
        console.log(event.target);
        cursor++;
        if (cursor < questions.length) {
            renderQuestion();
        } else {
            endScreen();
        }
    }
});
doneEl.addEventListener('submit', handleInitialSubmit);
init();