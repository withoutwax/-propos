function template(state) {
    if (state == 'question') {
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

    } else if (state == 'explanation') {
        document.querySelector('.explanation').innerHTML = `
            <h1 id="title">Title</h1>
            <section class="explanation-container">
                <p id="exp-01">Lorem Ipsum text about Will 01</p>
                <img id="exp-img" src="" width="500px">
                <p id="exp-02">Lorem Ipsum text about Will 02</p>
                <p id="exp-03">Lorem Ipsum text about Will 02</p>
            </section>
            <div id="btn-ready" style="cursor: pointer;width:150px;margin-top:100px" onclick="(function() {explanationNext();})()">
                PROCHAIN
            </div>
        `;
    }
}

function explanationNext() {
    currentState = "question";
    setState(currentState);
}