var startEl = document.querySelector('#start');
var gameEl = document.querySelector('#game');
var endEl = document.querySelector('#end');
var questionsEl = document.querySelector('#questions');
var titleEl = document.querySelector('#title')
var isEndGame = false;

var beginBtn = document.querySelector('#begin');
var initialsInput = document.querySelector('#initials');
// declared the variable timer
var timer;

var timeEl = document.querySelector('.time')
var mainEl = document.querySelector('.main')
var position = 0; //index postion of whatever page you are on
var score = 100;
var seconds = 90;

var questions = [
    {
        text: ['How much wood could a woodchuck chuck?'],
        possible: ['Answer 23', 'Answer 2', 'Answer 3', 'Answer 4'],
        correct: 'Answer 4',
    },
    {
        text: ['meats or poatoes'],
        possible: ['Answer 24', 'Answer 2', 'Answer 3', 'Answer 4'],
        correct: 'Answer 4',
    },
    {
        text: ['chicken or steak?'],
        possible: ['Answer 25', 'Answer 2', 'Answer 3', 'Answer 4'],
        correct: 'Answer 4',
    },
    {
        text: ['cheese or queso'],
        possible: ['Answer 25', 'Answer 2', 'Answer 3', 'Answer 4'],
        correct: 'Answer 4',
    },
    {
        text: ['dogs or cats'],
        possible: ['Answer 25', 'Answer 2', 'Answer 3', 'Answer 4'],
        correct: 'Answer 4',
    },
];


// //instructor provided
function startingScreen() {
    startEl.style.display = 'block';
    gameEl.style.display = 'none';
    endEl.style.display = 'none';
}
//instructor provied
function questionScreen() {
    console.log('question screen');
    startEl.style.display = 'none';
    gameEl.style.display = 'block';
    endEl.style.display = 'none';
    loadQuestion();
    timeEl.textContent = seconds;
    //initialized the var timer
    timer = setInterval(function () {
        seconds--;
        timeEl.textContent = seconds;
        // if timer gets to 0 the timer will stop
        if (seconds < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function loadQuestion() {
    var question = questions[position];
    questionsEl.innerHTML = '';
    titleEl.textContent = question.text;
    for (var i = 0; i < question.possible.length; i++) {
        var item = question.possible[i];
        var answerBtn = document.createElement('button');
        answerBtn.textContent = i + 1 + '. ' + item;
        questionsEl.appendChild(answerBtn);
    }
}
function checkAnswer(choice) {
    //check if they got the right answer
    var correctAnswer = quizQuestions[questionIndex].correct
    if (choice !== correctAnswer) {
        // tell them it's wrong
        rightOrWrong.textContent = 'WRONG!';
        // subtract 10 sec from timer
        secondsLeft = Math.max(secondsLeft - 15, 0);
    }
    else {
        // correct answer!
        rightOrWrong.textContent = 'CORRECT!';
    }
    resultDiv.style.display = "block";
}
//instructor provided
function endGame() {
    console.log("end game");
    startEl.style.display = 'none';
    gameEl.style.display = 'none';
    endEl.style.display = 'block';
    // when end game the timer will stop
    clearInterval(timer);

}
//this is so you can save the scores in local storage..DO NOT COPY COMPlETELY.
function handleInitialSubmit(event) {
    event.preventDefault();

    var stored = JSON.parse(localStorage.getItem('highScores')) || [];
    var updatedScores = stored.concat({
        score: score,
        initials: initialsInput.value
    });

    localStorage.setItem('highScores', JSON.stringify(updatedScores));
}

function init() {
    startingScreen();
}

function handleAnswerClick(event) {
    if (event.target.matches('button')) {
        console.log(event.target);
        position++;
        if (position < questions.length) {
            loadQuestion();
        } else {
            endGame();
        }
    }
}

beginBtn.addEventListener('click', questionScreen);
gameEl.addEventListener('click', function (event) {
    if (event.target.matches('button')) {
        console.log(event.target);
        position++;
        if (position < questions.length) {
            loadQuestion();
        } else {
            endGame();
        }
    }
});
endEl.addEventListener('submit', handleInitialSubmit);
init();

//how to adjust score
//how to do the points for score
//how to add a timer that subtracts time
// how to determine if your answer is wronf or right