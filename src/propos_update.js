function updateExplanation() {
    explanation += 1;
    console.log("explanation", explanation);

    let explanationTitle;
    let exp01 = "";
    let exp02 = "";
    let exp03 = "";
    let expImg;

    switch (explanation) {
        case 1:
            explanationTitle = "Bonjour!";
            exp01 = "Je m'appelle Will Kim!";
            exp02 = "Mon anniversaire est: dix mars! (10 March)";
            exp03 = "Je suis Corée";
            expImg = "../assets/img/will.jpg";
            break;
        case 2:
            explanationTitle = "Correct! Next Topic: Loisir (Hobby)";
            exp01 = "J'aime jouer Guitare basse";
            exp02 = "J'adore étudier la programmation (coding / programming)";
            exp03 = "J'aime étudier différentes langues!";
            expImg = "../assets/img/will.jpg";
            break;
        case 3:
            explanationTitle = "Bien Joué! Next Topic: Enfance (Childhood)";
            exp01 = "J'ai vécu au Koweit 🇰🇼";
            exp02 = "Je suis allé à l'école britannique pour l'école primaire et secondaire";
            exp03 = "J'ai vécu au Koweït pendant 12 ans";
            expImg = "../assets/img/kuwait-towers.jpg";
            break;
        case 4:
            explanationTitle = "Tres Bien! Next Topic: College";
            exp01 = "Je suis entré à l'école à 2012";
            exp02 = "Mais Je suis allé au service militaire 🔫 à 2013, est revenu en 2016.";
            exp03 = "Maintenant, je suis quatrième année. Dans l'école, j'étudie le design (VISCOM) et Art and Tech. Plus, j'étudie le programmation 👨🏻‍💻";
            expImg = "../assets/img/art-institute.jpg";
            break;
    }
    document.querySelector('#title').innerHTML = explanationTitle;
    document.querySelector('#exp-01').innerHTML = exp01;
    document.querySelector('#exp-02').innerHTML = exp02;
    document.querySelector('#exp-03').innerHTML = exp03;
    document.querySelector('#exp-img').src = expImg;
}


function updateQuestion() {

    question += 1;
    console.log("question", question);
    let questionTitle;
    let choice01;
    let choice02;
    let choice03;
    let choice04;
    let choice05;

    switch (question) {
        case 1:
            answer = 3;
            questionTitle = "Question 01 - Quel est l'âge de Will?";
            choice01 = "👶🏻 5";
            choice02 = "👦🏻 23";
            choice03 = "🧑🏻 25";
            choice04 = "👨🏻 27";
            choice05 = "👴🏻 60";
            break;
        case 2:
            answer = 1;
            questionTitle = "Question 02 - Quel est son repas préféré?";
            choice01 = "🍣 Sushi";
            choice02 = "🍲 Nourriture thaï";
            choice03 = "🍫 le Chocolat";
            choice04 = "🍔 McDonalds";
            choice05 = "🥛 Le lait";
            break;
        case 3:
            answer = 3;
            questionTitle = "Question 03 - Combien de langues puis-je parler?";
            choice01 = "Un";
            choice02 = "Deux";
            choice03 = "Trois";
            choice04 = "Quatre";
            choice05 = "Cinq";
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