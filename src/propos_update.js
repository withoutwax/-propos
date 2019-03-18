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
            expImg = "../assets/img/will-bass-guitar.jpg";
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
            exp03 = "Maintenant, je suis quatrième année.";
            expImg = "../assets/img/art-institute.jpg";
            break;
        case 5:
            explanationTitle = "D'accord! Next Topic: Portefeuille (Portfolio)";
            exp01 = "J'adore étudier la programmation";
            exp02 = "https://www.openprocessing.org/sketch/426667";
            exp03 = "https://withoutwax.github.io/Games/";
            expImg = "../assets/img/snake-game.png";
            break;
        case 6:
            explanationTitle = "Merçi Beaucoup!";
            exp01 = "BONUS QUESTION!";
            break;
        case 7:
            explanationTitle = "TRES BIEN!";
            exp01 = "BONUS QUESTION 02!";
            break;
        case 8:
            explanationTitle = "Correct!";
            exp01 = "BONUS QUESTION 03!";
            break;
        case 9:
            let gameOverExplanation = document.querySelector('.explanation');
            gameOverExplanation.classList.add('hide-gone');
            // let gameOverQuestions = document.querySelector('.questions');
            // gameOverQuestions.classList.add('hide-gone');
            document.querySelector('.win').innerHTML = `
                <h1 id="win-header">Bien Joué!</h1>
                <p>Nous Avons fini!</p>
            `;
            return;
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
            answer = 4;
            questionTitle = "Question 04 - Qu'est-ce que j'étudie à l'école?";
            choice01 = "📷 La photographie";
            choice02 = "🖌 Désign'";
            choice03 = "🍽 Cuisine";
            choice04 = "💻 La programmation";
            choice05 = "😕 Rien (nothing)";
            break;
        case 5:
            answer = 1;
            questionTitle = "Question 05 - Who do I want to be?";
            choice01 = "🛠 Ingénieur logiciel (Software Engineer)";
            choice02 = "🎨 Le Designer";
            choice03 = "💰 Homme riche (Rich man)";
            choice04 = "👨🏻‍🏫 Le Professeur!";
            choice05 = "🧙🏻‍♂️ Le Sorcier (Wizard)";
            break;
        case 6:
            answer = 1;
            questionTitle = "Question Bonus! - Qu'est-ce que je déteste le plus?";
            choice01 = "🍫 Le Chocolat";
            choice02 = "🥛 Yaourt";
            choice03 = "🥖 Pain Baguette";
            choice04 = "🦄 Licorne";
            choice05 = "🍅 Soupe à la tomate";
            break;
        case 7:
            answer = 2;
            questionTitle = "Question Bonus 02! - Quand je suis stressé, je ...";
            choice01 = "👾 Jouer Starcraft 2";
            choice02 = "👨‍💻 La Programmation (really...?)";
            choice03 = "😴 Dormir - avec ASMR";
            choice04 = "🐎 Ride a horse";
            choice05 = "🎸 Jouer de la guitare basse";
            break;
        case 8:
            answer = 5;
            questionTitle = "Question Bonus 03! - Quelle est ma langue préférée?";
            choice01 = "🇺🇸 Anglais";
            choice02 = "🇰🇷 Korean";
            choice03 = "🇰🇼 Arabe";
            choice04 = "🇩🇪 Allemand";
            choice05 = "🇫🇷 Français";
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