let explanation;
let question;
let currentState;
let answer = undefined;
let lives = 3;

function initialize() {
    
    currentState = 'explanation';
    checkState(currentState);


    

}

// Check whether the current state is question or explanation.
function checkState(curState) {
    if (curState == 'question') {

        // Remove any explanations from previous state
        document.querySelector('.explanation').innerHTML = ``;

        // NEW QUESTIONS
        document.querySelector('.lifeUI').innerHTML = `
            <h2>Lives:</h2>
            <h2 id="life">🇫🇷🇫🇷🇫🇷</h2>
        `;
        question = 1;
        let introductionFade = document.querySelector('.introduction');
        goneAwayAnim(introductionFade);

        document.querySelector('.questions').innerHTML = `
        <h1 id="question">Question</h1>
        <p class="question-instruction">**Use the numbers on the Keyboard to choose an answer!**</p>
        <ol>
            <li id="select-01">🍣</li>
            <li id="select-02">🍲</li>
            <li id="select-03">🍫</li>
            <li id="select-04">🍔</li>
            <li id="select-05">🦄</li>
        </ol>
        `;
    answer = 1;
    } else {
        // REMOVE ANY QUESTION ELEMENTS
        document.querySelector('.lifeUI').innerHTML = ``;
        document.querySelector('.questions').innerHTML = ``;
    }
}

function guessAnswer(guess) {
    if (question == undefined) {
        return;
    }

    if (guess == answer) {
        console.log('Correct!');
        updateQuestion();
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

function updateLife(lifeCount) {
    let unicorn_ui = '';
    for (let i = 0; i < lifeCount; i++) {
        unicorn_ui += "🇫🇷";
    }
    document.querySelector('#life').innerHTML = unicorn_ui;
}

function updateQuestion() {

    question += 1;
    console.log(question);
    let questionTitle;
    let choice01;
    let choice02;
    let choice03;
    let choice04;
    let choice05;

    switch (question) {
        case 2:
            answer = 1;
            questionTitle = "Question 02 - What is Will's least favorite food?";
            choice01 = "🍫 Chocolate";
            choice02 = "🥛 Yogurt";
            choice03 = "🥯 Bagel";
            choice04 = "🦄 Unicorn horn";
            choice05 = "🍅 Tomato soup";
            break;
        case 3:
            answer = 2;
            questionTitle = "Question 03 - What do you think Will do when Will is stressed out?";
            choice01 = "👾 Play Starcraft 2";
            choice02 = "👨‍💻 Code (really...?)";
            choice03 = "😴 Sleep - with ASMR";
            choice04 = "🐎 Ride a horse, no I mean unicorn 🦄";
            choice05 = "🎸 Play his bass guitar";
            break;
        case 4:
            answer = 3;
            questionTitle = "Question 04 - FUN FACTS ABOUT WILL! What do you think is the wrong one in here?";
            choice01 = "💬 Will can speak 3 languages";
            choice02 = "🍭 Will's team name for Adobe Creative Jam Competition was 'Willy Wonka'";
            choice03 = "🍻 Will enjoys drinking Alcohol, especially Beer with fried Chicken";
            choice04 = "💻 Will has experience teaching people programming!";
            choice05 = "🇰🇼 Will is Korean but lived in Kuwait for 12 years";
            break;
        case 5:
            answer = 5;
            questionTitle = "Question 05 - Will is working on a project. But he needs an inspriation...! What do you think he do?";
            choice01 = "🎨 Good artists borrow, great artists steal";
            choice02 = "🌲 Walks mindlessly in the forest hoping for something to hit him";
            choice03 = "😴 Sleep";
            choice04 = "📦 Screw inpsiration - Will just make things up!";
            choice05 = "📝 Refer to his inspiration notes where he collected sudden ideas that popped in his head randomly.";
            break;
        case 6:
            answer = 1;
            questionTitle = "Question 06 - It's Will's first day of his internship!! But suddenly his manager asks him to do something that's out his duty. What do you think Will will do?";
            choice01 = "😆 Get's excited because Will thinks he can learn something new from this task.";
            choice02 = "🙃 Stand up, walk away slowly... and never come back...";
            choice03 = "🖐 Slap his manager on the face";
            choice04 = "☕️ First, go out and get some coffee and don't come back for 43 minutes.";
            choice05 = "💩 Do the work, but make it shitty.";
            break;
        case 7:
            answer = 4;
            questionTitle = "Question 07 - Still on his first day of internship, Will found one of his teammate annoying. But his manager puts Will and the person on the same team! What does Will do?";
            choice01 = "🤓 Will pretends he is doing work, but do nothing and make his enemy do the work";
            choice02 = "☕️ First, go out (again) and get some coffee and don't come back for another 43 minutes.";
            choice03 = "🤪 Play stupid!";
            choice04 = "😎 Once enemies, now friends. Will plays cool and tries to do his best with his new friend.";
            choice05 = "💩 Do the work, but make it shitty, again.";
            break;
        case 8:
            answer = 3;
            questionTitle = "Question 08 - Man, digitas indeed seems to be a amazing workplace! On his first day of work, Will is partnered with this massively famous client! (What a gut for digitas letting intern to do this). Okay, Will. This is your chance, don't screw it up. What do you think Will's thought process looks like?";
            choice01 = "😩 Blatantly tell his friend his working with this crazy client and play weak to ask for help";
            choice02 = "💸 Time is gold! Other process takes too much time! Will start make final prototype right away.";
            choice03 = "💪 Will seeks for few things: 1. What are the strength of the client? 2. What is the problem are we trying to solve? 3. What are the different methods for solving the problem? Will tries to find a connection between the problem with potential solutions.";
            choice04 = "📺 Procrastination is the best teacher. Will goes to watch Netflix (BLACK MIRROR!) and comes out with 1 day left in deadline.";
            choice05 = "👾 Time to play Starcraft 2!";
            break;
        case 9:
            answer = 2;
            questionTitle = "Question 09 - Surely, Will must got a goal for his internship at digitas. What do you think his goal is?";
            choice01 = "💰 Will is actually a Robinhood. He is here for the money!";
            choice02 = "🤝 Meet amazing people (it's digitas, anyone he randomly bumps to must be amazing), learn great and new things (and best practices), and enjoy the experience.";
            choice03 = "👽 Man, life is all about connection. Will is here to a most influential person and make his friend (screw the others).";
            choice04 = "🌮 Free foods! What's better than free food?";
            choice05 = "📄 Will finally has something to put on his resume. He got what he wants, so doesn't care about other things.";
            break;
        case 10:
            answer = 1;
            questionTitle = "Question 10 - Finally, last question! Do you think Will is going to get be selected as an intern?";
            choice01 = "🙌 Yes - he seems to be funny guy who works hard and party hard. Perfect balance!";
            choice02 = "😕 Nah";
            choice03 = "😫 Nope, we don't need party animal here. Work, work, work";
            choice04 = "😡 Don't think so... Will seems to be pretty big in size, he's going to eat all the free food for himself.";
            choice05 = "🤯 Never! he didn't do what his told (instead of making 90 seconds video, he made us go through this). We don't need someone who takes risks. We need people who follows orders!";
            break;
        case 11:
            let gameOverQuestions = document.querySelector('.questions');
            gameOverQuestions.classList.add('hide-gone');
            document.querySelector('.win').innerHTML = `
                <h1 id="win-header">Well Done!</h1>
                <p>You are almost at the end of the rabbithole... Follow the Unicorn for the last time...</p>
                <a href="../assets/prize/end_of_the_rabbit_hole.mp4" download>CLICK TO CLAIM PRIZE</a>
            `;
            return;

    }
    document.querySelector('#question').innerHTML = questionTitle;
    document.querySelector('#select-01').innerHTML = choice01;
    document.querySelector('#select-02').innerHTML = choice02;
    document.querySelector('#select-03').innerHTML = choice03;
    document.querySelector('#select-04').innerHTML = choice04;
    document.querySelector('#select-05').innerHTML = choice05;
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