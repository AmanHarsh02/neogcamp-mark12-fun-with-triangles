const quizForm = document.querySelector("#quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output-div");

const rightAnswers = ['90°', 'right angled', 'equilateral', 'scalene', 'Pythagoras'];

function calculateScore() {
    var score = 0;
    var index = 0;

    const data = new FormData(quizForm);

    for(const value of data.values()) {

        if(value === rightAnswers[index]) {
            score++;
        }
        index++;
    }

    output.innerText = "Your score is " + score;
}

submitBtn.addEventListener("click", calculateScore);