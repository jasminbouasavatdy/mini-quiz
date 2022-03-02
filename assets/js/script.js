//created varibles that are linked with the html
var startEl = document.querySelector('#start');
var quiz = document.getElementById('#quiz')
var results = document.getElementById('#results')
var submitbBtn = document.getElementById('#submit')
//created functions so the quiz will work




function questions() {
    var myQuestions = [
        {
            question: "What are the primitive data types?",
            answers: {
                a: "Undefined",
                b: "String",
                c: "Numbers",
                d: "Boolean",
                e: "All of the above",
            },
            correctAnswer: "e"
        },
        {
            question: "When evaluating an expression what does || mean",
            answers: {
                a: "And",
                b: "False",
                c: "True",
                d: "Or",
            },
            correctAnswer: "d"
        },
        {
            question: "To store groups of data in an array what syntax do we use?",
            answers: {
                a: "Parenthesis",
                b: "Double Quotes",
                c: "Brackets",
                d: "Single Quotes"
            },
            correctAnswer: "c"
        },
        {
            question: "What are functions?",
            answers: {
                a: "Functionable functions",
                b: "False",
                c: "Resusable blocks of code",
                d: "None of the above",
            },
            correctAnswer: "c"
        },
        {
            question: "What does the (!) do to an expression?",
            answers: {
                a: "Nothing just a warning",
                b: "Turns the expression false",
                c: "Turns the expression to true",
                d: "Turns the expression to true or false and vice versa",
            },
            correctAnswer: "d"
        },
    ]
};

submitbBtn.addEventListener('click', showResults);