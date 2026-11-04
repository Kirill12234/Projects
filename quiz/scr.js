let selectedPlayers = 1;

let selectedTopic = "MIX";

let selectedQuestion = 3;

let selectedAnswer = null;

let scores = [0, 0, 0, 0];

let currentPlayer = 1;

let currentQuestionIndex = 0;

let currentDeck = [];

const playerColors = ["#125aec", "#00ceF2", "#00a203", "rgb(255, 234, 0)"];

let timeIntervalId;
let timeLeft = 10;

let gameHistory = [];

const quizData = [
    {
        category: "HTML",
        question: "WHICH TAG IS USED TO CREATE A HYPERLINK?",
        options: ["<LINK>", "<A>", "<HREF>", "<URL>"],
        correctAnswer: 1
    },
    {
        category: "HTML",
        question: "WHICH TAG MAKES TEXT BOLD?",
        options: ["<BOLD>", "<STRONG>", "<B-TEXT>", "<FAT>"],
        correctAnswer: 1
    },
    {
        category: "HTML",
        question: "WHICH TAG IS USED TO CREATE AN ORDERED LIST?",
        options: ["<UL>", "<LIST>", "<OL>", "<DL>"],
        correctAnswer: 2
    },
    {
        category: "HTML",
        question: "WHICH TAG IS USED TO INSERT AN IMAGE?",
        options: ["<IMAGE>", "<IMG>", "<SRC>", "<PIC>"],
        correctAnswer: 1
    },
    {
        category: "HTML",
        question: "WHICH TAG REPRESENTS THE LARGEST HEADING?",
        options: ["<H6>", "<HEAD>", "<H1>", "<HEADER>"],
        correctAnswer: 2
    },
    {
        category: "CSS",
        question: "WHICH PROPERTY CHANGES THE TEXT COLOR?",
        options: ["TEXT-COLOR", "COLOR", "FONT-COLOR", "BACKGROUND-COLOR"],
        correctAnswer: 1
    },
    {
        category: "CSS",
        question: "WHICH PROPERTY SETS THE FONT SIZE?",
        options: ["FONT-STYLE", "TEXT-SIZE", "FONT-SIZE", "SIZE"],
        correctAnswer: 2
    },
    {
        category: "CSS",
        question: "HOW DO YOU MAKE TEXT BOLD IN CSS?",
        options: ["FONT-WEIGHT: BOLD;", "TEXT-STYLE: BOLD;", "STYLE: BOLD;", "FONT: BOLD;"],
        correctAnswer: 0
    },
    {
        category: "CSS",
        question: "WHICH PROPERTY IS USED TO CHANGE THE BACKGROUND COLOR?",
        options: ["COLOR", "BG-COLOR", "BACKGROUND-COLOR", "FILL-COLOR"],
        correctAnswer: 2
    },
    {
        category: "CSS",
        question: "HOW DO YOU SET AN INNER PADDING IN CSS?",
        options: ["MARGIN", "PADDING", "SPACING", "INDENT"],
        correctAnswer: 1
    },
    {
        category: "JS",
        question: "HOW DO YOU OUTPUT A MESSAGE TO THE CONSOLE?",
        options: ["PRINT()", "CONSOLE.LOG()", "LOG.CONSOLE()", "ALERT()"],
        correctAnswer: 1
    },
    {
        category: "JS",
        question: "HOW DO YOU DECLARE A VARIABLE IN MODERN JAVASCRIPT?",
        options: ["VARIABLE X;", "V X;", "LET X;", "INT X;"],
        correctAnswer: 2
    },
    {
        category: "JS",
        question: "WHICH METHOD PARSES A STRING TO A FLOATING-POINT NUMBER?",
        options: ["PARSEINT()", "PARSEFLOAT()", "NUMBER()", "TOFLOAT()"],
        correctAnswer: 1
    },
    {
        category: "JS",
        question: "WHICH KEYWORD IS USED TO CREATE A CONSTANT?",
        options: ["LET", "VAR", "CONST", "STATIC"],
        correctAnswer: 2
    },
    {
        category: "JS",
        question: "WHICH FUNCTION DISPLAYS A DIALOG BOX WITH A MESSAGE TO THE USER?",
        options: ["PROMPT()", "CONFIRM()", "ALERT()", "MSG()"],
        correctAnswer: 2
    }
];

const b1 = document.getElementById("b1");
b1.addEventListener("click", function(event){
    event.preventDefault();
    showScreen("players");
})

const b2 = document.getElementById("b2");
b2.addEventListener("click", function(event){
    event.preventDefault();
    showScreen("stats");
})

const b3 = document.getElementById("b3");
b3.addEventListener("click", function(event){
    event.preventDefault();
    showScreen("qs");
})

const b4 = document.getElementById("b4");
b4.addEventListener("click", function(event){
    event.preventDefault();

    currentQuestionIndex = 0;
    currentPlayer = 1;
    scores = [0, 0, 0, 0];
    gameHistory = [];

    if (selectedTopic == "MIX") {
        currentDeck = quizData;
    } else {
        currentDeck = quizData.filter(function (card) {
            return card.category === selectedTopic;
        });
    }

    showScreen("game");
    startGame();
})

const back = document.getElementById("back");
back.addEventListener("click", function(event){
    event.preventDefault();
    showScreen("home");
})

const back1 = document.getElementById("back1");
back1.addEventListener("click", function(event){
    event.preventDefault();
    showScreen("home");
})

const back2 = document.getElementById("back2");
back2.addEventListener("click", function(event){
    event.preventDefault();
    showScreen("players");
})

function showScreen(id){
    const screens = document.querySelectorAll("section");
    screens.forEach(function (screen) {
        screen.classList.add("hidden");
    });
    document.getElementById(id).classList.remove("hidden"); 
}

showScreen("home");

const p1 = document.getElementById("p1");
p1.addEventListener("click", function(event){
    event.preventDefault();
    selectedPlayers = 1;
    console.log("Players: " + selectedPlayers);
    p3.classList.remove("selected2");
    p2.classList.remove("selected1");
    p4.classList.remove("selected3");
    p1.classList.add("selected");
})

const p2 = document.getElementById("p2");
p2.addEventListener("click", function(event){
    event.preventDefault();
    selectedPlayers = 2;
    console.log("Players: " + selectedPlayers);
    p3.classList.remove("selected2");
    p1.classList.remove("selected");
    p4.classList.remove("selected3");
    p2.classList.add("selected1");
})

const p3 = document.getElementById("p3");
p3.addEventListener("click", function(event){
    event.preventDefault();
    selectedPlayers = 3;
    console.log("Players: " + selectedPlayers);
    p2.classList.remove("selected1");
    p1.classList.remove("selected");
    p4.classList.remove("selected3");
    p3.classList.add("selected2");
})

const p4 = document.getElementById("p4");
p4.addEventListener("click", function(event){
    event.preventDefault();
    selectedPlayers = 4;
    console.log("Players: " + selectedPlayers);
    p3.classList.remove("selected2");
    p1.classList.remove("selected");
    p2.classList.remove("selected1");
    p4.classList.add("selected3");
})

const css = document.getElementById("css");
css.addEventListener("click", function(event){
    event.preventDefault();
    selectedTopic = "CSS";
    console.log("Topic: " + selectedTopic);
    html.classList.remove("s2");
    js.classList.remove("s3");
    mix.classList.remove("s4");
    css.classList.add("s1");
})

const html = document.getElementById("html");
html.addEventListener("click", function(event){
    event.preventDefault();
    selectedTopic = "HTML";
    console.log("Topic: " + selectedTopic);
    css.classList.remove("s1");
    js.classList.remove("s3");
    mix.classList.remove("s4");
    html.classList.add("s2");
})

const js = document.getElementById("js");
js.addEventListener("click", function(event){
    event.preventDefault();
    selectedTopic = "JS";
    console.log("Topic: " + selectedTopic);
    html.classList.remove("s2");
    css.classList.remove("s1");
    mix.classList.remove("s4");
    js.classList.add("s3");
})

const mix = document.getElementById("mix");
mix.addEventListener("click", function(event){
    event.preventDefault();
    selectedTopic = "MIX";
    console.log("Topic: " + selectedTopic);
    html.classList.remove("s2");
    js.classList.remove("s3");
    css.classList.remove("s1");
    mix.classList.add("s4");
})

const q3 = document.getElementById("q3");
q3.addEventListener("click", function(event){
    event.preventDefault();
    selectedQuestion = "3";
    console.log("Questions count: " + selectedQuestion);
    q4.classList.remove("sc2");
    q5.classList.remove("sc3");
    q3.classList.add("sc1");
})

const q4 = document.getElementById("q4");
q4.addEventListener("click", function(event){
    event.preventDefault();
    selectedQuestion = "4";
    console.log("Questions count: " + selectedQuestion);
    q3.classList.remove("sc1");
    q5.classList.remove("sc3");
    q4.classList.add("sc2");
})

const q5 = document.getElementById("q5");
q5.addEventListener("click", function(event){
    event.preventDefault();
    selectedQuestion = "5";
    console.log("Questions count: " + selectedQuestion);
    q4.classList.remove("sc2");
    q3.classList.remove("sc1");
    q5.classList.add("sc3");
})

const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const ans4 = document.getElementById("ans4");
const sbmBut = document.getElementById("sbm-but");

sbmBut.addEventListener("click", function(event){
    event.preventDefault();
    clearInterval(timeIntervalId);

    let totalLimit = selectedPlayers * parseInt(selectedQuestion);

    if (currentQuestionIndex >= totalLimit) {
        sbmBut.disabled = true;
        showScreen("stats");
        return;
    }

    let currentQuiz = currentDeck[currentQuestionIndex % currentDeck.length];

    if (selectedAnswer === currentQuiz.correctAnswer){
        scores[currentPlayer - 1] = scores[currentPlayer - 1] + 10;
        console.log("Correct! Scores: " + scores);
    } else {
        console.log("Incorrect! Scores: " + scores);
    }

    gameHistory.push({
        player: currentPlayer,
        question: currentQuiz.question,
        options: currentQuiz.options,
        userAns: selectedAnswer,
        correctAns: currentQuiz.correctAnswer
    });

    sbmBut.disabled = true;

    ans1.classList.remove("selected");
    ans2.classList.remove("selected1");
    ans3.classList.remove("selected2");
    ans4.classList.remove("selected3");
    selectedAnswer = null;

    currentQuestionIndex = currentQuestionIndex + 1;

    if (currentQuestionIndex < totalLimit){
        if(currentPlayer < selectedPlayers){
            currentPlayer = currentPlayer + 1;
        } else {
            currentPlayer = 1;
        }
        startGame();
 } else {
        console.log("Game over. Final scores: " + scores);
        
        document.getElementById("score1").innerText = "Player 1: " + scores[0];
        document.getElementById("score2").innerText = "Player 2: " + scores[1];
        document.getElementById("score3").innerText = "Player 3: " + scores[2];
        document.getElementById("score4").innerText = "Player 4: " + scores[3];
        
        let maxScore = -1;
        let winners = [];

        for (let i = 0; i < selectedPlayers; i++) {
            if (scores[i] > maxScore) {
                maxScore = scores[i];
                winners = [i + 1];
            } else if (scores[i] === maxScore) {
                winners.push(i + 1);
            }
        }

        let winnerTextElement = document.getElementById("winner-text");
        if (winnerTextElement) {
            if (winners.length === 1) {
                winnerTextElement.innerText = "Player " + winners[0] + " Wins!";
            } else {
                winnerTextElement.innerText = "It's a Tie between Players: " + winners.join(", ") + "!";
            }
        }

        
        showScreen("stats");
    }
})

ans1.addEventListener("click", function(event){
    event.preventDefault();
    selectedAnswer = 0;
    ans2.classList.remove("selected1");
    ans3.classList.remove("selected2");
    ans4.classList.remove("selected3");
    ans1.classList.add("selected");
    sbmBut.disabled = false;
})

ans2.addEventListener("click", function(event){
    event.preventDefault();
    selectedAnswer = 1;
    ans1.classList.remove("selected");
    ans3.classList.remove("selected2");
    ans4.classList.remove("selected3");
    ans2.classList.add("selected1");
    sbmBut.disabled = false;
})

ans3.addEventListener("click", function(event){
    event.preventDefault();
    selectedAnswer = 2;
    ans1.classList.remove("selected");
    ans2.classList.remove("selected1");
    ans4.classList.remove("selected3");
    ans3.classList.add("selected2");
    sbmBut.disabled = false;
})

ans4.addEventListener("click", function(event){
    event.preventDefault();
    selectedAnswer = 3;
    ans2.classList.remove("selected1");
    ans3.classList.remove("selected2");
    ans1.classList.remove("selected");
    ans4.classList.add("selected3");
    sbmBut.disabled = false;
})

function startGame() {
    let currentQuiz = currentDeck[currentQuestionIndex % currentDeck.length];

    document.getElementById("question1").innerText = currentQuiz.question;
    document.getElementById("ans1").innerText = currentQuiz.options[0];
    document.getElementById("ans2").innerText = currentQuiz.options[1];
    document.getElementById("ans3").innerText = currentQuiz.options[2];
    document.getElementById("ans4").innerText = currentQuiz.options[3];
    
    let plrText = document.getElementById("cur-plr"); 
    plrText.innerText = "Player " + currentPlayer + "'s turn";
    plrText.style.color = playerColors[currentPlayer - 1]; 
    
    sbmBut.disabled = true;
    startTimer();
}

function startTimer() {
    timeLeft = 10;
    document.getElementById("timer").innerText = timeLeft;

    clearInterval(timeIntervalId);

    timeIntervalId = setInterval(function() {
        timeLeft = timeLeft - 1;
        document.getElementById("timer").innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timeIntervalId);
            sbmBut.disabled = false;
            sbmBut.click();
        }
    }, 1000);
}

q3.classList.add("sc1");

document.getElementById("go-review").addEventListener("click", function(event) {
    event.preventDefault();
    buildReview(); 
    showScreen("review"); 
});

document.getElementById("back-to-stats").addEventListener("click", function(event) {
    event.preventDefault();
    showScreen("stats"); 
});

function buildReview() {
    const board = document.getElementById("review-board");
    board.innerHTML = ""; 

    gameHistory.forEach(function(item, index) {
        let uAns = item.userAns !== null ? item.options[item.userAns] : "Time's up!";
        let cAns = item.options[item.correctAns];

        uAns = uAns.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        cAns = cAns.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        let isCorrect = item.userAns === item.correctAns;

        board.innerHTML += `
            <div class="review-card">
                <p style="color: ${playerColors[item.player - 1]}; margin-bottom: 10px; font-size: 16px; font-weight: bold; text-shadow: 1px 1px 2px #000;">
                    Question ${index + 1} (Player ${item.player}): ${item.question}
                </p>
                <p style="color: ${isCorrect ? '#00ff00' : '#ff003c'}; margin-bottom: 5px;">
                    Your answer: ${uAns}
                </p>
                ${!isCorrect ? `<p style="color: #00ff00; margin-top: 5px;">Correct answer: ${cAns}</p>` : ""}
            </div>
        `;
    });
}