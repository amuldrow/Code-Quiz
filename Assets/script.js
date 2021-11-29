var questions = [{
    title: "What element contains the information that helps the browser understand what the page is about?",
    choices:["footer()","head()","body()"],
    answer:"head()"
},
{
    title:"When committing work to github , what comes after the commit-m command ?",
    choices:["git add()","git push()","git pull()"]
    answer:"git push()"
}
]

var score = 0;
var currentquestion = -1;
var timeleft = 0;
var timer ;

// start button starts the timer
function start-game () {
    timeleft= 80;
    document.getElementById("timeleft").innerHTML = timeleft;

    timer= setInterval(function() {
        timeleft --;
        document.getElementById("timeleft").innerHTML = timeleft;

        if(timeleft <= 0) {
            clearInterval(timer);
            endgame();
        }
    }, 1000);

    next();
}

function endgame() {
    clearInterval(timer);

    var quizcontent =
    <h2>Game Over!</h2>
    <h3>You received a ' + score + '/100! </h3>
    <input type="text" id="name" placeholder="initials"/>

    document.getElementById("quizbody").innerHTML = quizcontent;
}

function setscore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscorename", document.getElementById('name').value");
    getscore()
}


function getScore() {
    var quizContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
    
    `;

    document.getElementById("quizBody").innerHTML = quizContent;
}
function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName",  "");

    resetGame();
}
function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;

    document.getElementById("timeLeft").innerHTML = timeLeft;
}

function incorrect() {
    timeLeft -= 15; 
    next();
}

function correct() {
    score += 20;
    next();
}

function next() {
    currentQuestion++;

    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }