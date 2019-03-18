let explanation = 0;
let question = 0;
let currentState;
let answer = undefined;
let lives = 3;

function initialize() {
    // REMOVING THE INITIAL INTRODUCTION
    let introductionFade = document.querySelector('.introduction');
    goneAwayAnim(introductionFade);

    // FIRST START WITH EXPLANATION ABOUT ME!
    currentState = 'explanation';
    setState(currentState);
}

// Check & set the state to either question or explanation.
function setState(curState) {
    if (curState == 'question') {

        // Remove any explanations from previous state
        document.querySelector('.explanation').innerHTML = ``;

        // NEW QUESTIONS
        document.querySelector('.lifeUI').innerHTML = `
            <h2>Lives:</h2>
            <h2 id="life">🇫🇷🇫🇷🇫🇷</h2>
        `;
        
        template(curState);
        updateQuestion();
        
    } else {
        // REMOVE ANY QUESTION ELEMENTS
        document.querySelector('.lifeUI').innerHTML = ``;
        document.querySelector('.questions').innerHTML = ``;

        template(curState);
        updateExplanation();
    }
}

function guessAnswer(guess) {
    if (question == undefined) {
        return;
    }

    if (guess == answer) {
        console.log('Correct!');
        currentState = "explanation"
        setState(currentState);
    } else {
        console.log('Incorrect!');
        lives -= 1;

        if (lives < 1) {
            console.log('Game Over');
            gameOver();
        }
        updateLife(lives);
    }
}
function nextExplanation() {
    updateExplanation();
}

function updateLife(lifeCount) {
    let unicorn_ui = '';
    for (let i = 0; i < lifeCount; i++) {
        unicorn_ui += "🇫🇷";
    }
    document.querySelector('#life').innerHTML = unicorn_ui;
}



function gameOver() {
    question = 'gameover';
    let gameOverQuestions = document.querySelector('.questions');
    gameOverQuestions.classList.add('hide-gone');
    document.querySelector('.gameOver').innerHTML = `
        <h1 id="gameover-heading">GAME OVER</h1>
        <h2>Restart?</h2>
        <div id="btn-ready" style="cursor: pointer" onclick="(function() {location.reload();})()">
            RESTART
        </div>
    `;
}


function fadeOutAnim(id) {
    id.classList.add('hide-fade');
    id.classList.remove('appear-fade');
}

function goneAwayAnim(id) {
    id.classList.add('hide-gone');
}

function appearAgainAnim(id) {
    id.classList.add('appear-fade');
    id.classList.remove('hide-fade');
}