var readlineSync = require("readline-sync");

var score = 0;

function welcomeUser() {
    var userName = readlineSync.question("What is your name? ");
    console.log("Hello " + userName + ". Welcome to the Batman quiz!");
}

var qna = [{
        question: "What is the real name of Batman? ",
        answer: "bruce wayne"
    },
    {
        question: "What is the name of Batmans' house? ",
        answer: "wayne manor"
    },
    {
        question: "What colour is the bat suit? ",
        answer: "black"
    },
    {
        question: "Does Batman wear his briefs on top of his pants? ",
        answer: "no"
    },
    {
        question: "What city does Batman live in? ",
        answer: "gotham"
    }
];

function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer == answer) {
        console.log("Correct answer. :)))")
        score = score + 1;
    } else {
        console.log("Sorry incorrect answer. :(");
        score = score - 1;
    }
    console.log("Your current score is: " + score + "!");
};

function quiz() {
    for (var i = 0; i < qna.length; i++) {
        var currentQuestion = qna[i];
        play(currentQuestion.question, currentQuestion.answer);
    }
}

welcomeUser();
quiz();