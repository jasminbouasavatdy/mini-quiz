var startEl = document.querySelector('#start');
var gameEl = document.querySelector('#game');
var endEl = document.querySelector('#end');
var questionsEl = document.querySelector('#questions');
var titleEl = document.querySelector('#title')



var beginBtn = document.querySelector('#begin');
var initialsInput = document.querySelector('#initials');
// declared the variable timer
var timer;
var seconds = 90;

var timeEl = document.querySelector('.time')
var mainEl = document.querySelector('.main')
var position = 0; //index postion of whatever page you are on



var questions = [
    {
        text: ['What is primitive data types?'],
        possible: ['String', 'Numbers', 'Booleans', 'All of the above'],
        correct: 'All of the above',
    },
    {
        text: ['What does || mean in Javascript?'],
        possible: ['Yes', 'Both', 'Or', 'I dont know'],
        correct: 'Or',
    },
    {
        text: ['What are the two values of a boolean?'],
        possible: ['Sun and sky', 'True', 'False', 'True and False'],
        correct: 'True and False',
    },
    {
        text: ['How do you name a variable?'],
        possible: ['Var', 'Car', 'Mar', 'Zar'],
        correct: 'Var',
    },
    {
        text: ['Bonus: What is our instructors name?'],
        possible: ['Kim K', 'Anthony', 'Pete D', 'Ye-Kanye West'],
        correct: 'Anthony',
    },
];

// screen displays .. what happens at each screen
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
        answerBtn.value = item;
        answerBtn.textContent = i + 1 + '. ' + item;
        questionsEl.appendChild(answerBtn);
    }
}
function checkAnswer(choice) {
    //check if they got the right answer
    var correctAnswer = questions[position].correct
    //checking that there is a value in choice
    if (choice.length > 0 && choice !== correctAnswer) {
        // subtract 10 sec from timer
        seconds -= 10;
    }
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
function handleSubmit(event) {
    event.preventDefault();
//storing the final score in local storage in which seconds left is you score
    var stored = JSON.parse(localStorage.getItem('highScores')) || [];
    var updatedScores = stored.concat({
        //in local storage you will see time remaining in seconds which is your score
        score: `${seconds} score`,
        initials: initialsInput.value
    });

    localStorage.setItem('highScores', JSON.stringify(updatedScores));
    for( var i = 0; i < updatedScores.length; i++){
        var scoreItem = updatedScores[i];
        console.log(scoreItem);
        var pEl = document.createElement('p');
        pEl.textContent = scoreItem.initials +': '+ scoreItem.score
        endEl.append(pEl);
    }
}

function init() {
    startingScreen();
}

 
beginBtn.addEventListener('click', questionScreen);

gameEl.addEventListener('click', function (event) {
    if (event.target.matches('button')) {
        checkAnswer(event.target.value);
        position++;
        if (position < questions.length) {
            loadQuestion();
        } else {
            endGame();
        }
    }
});
endEl.addEventListener('submit', handleSubmit);
init();

