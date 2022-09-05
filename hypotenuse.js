const sideInputs = document.querySelectorAll(".side-inputs");
const checkHypotenuseBtn = document.querySelector("#check-hypotenuse-btn")
const output = document.querySelector("#output-div");

function calculateSumOfSquares(a, b) {
    const sum = a ** 2 + b ** 2;

    return sum;
}

function calculateHypotenuse() {

    if (sideInputs[0].value && sideInputs[1].value) {
        if(sideInputs[0].value < 0 || sideInputs[1].value < 0) {
            output.innerText = "Please be positive & enter positive values 😀"
        } else {
            const sum = calculateSumOfSquares(Number(sideInputs[0].value), Number(sideInputs[1].value));
            const hypotenuse = Math.sqrt(sum);

            output.innerText = "The length of the Hypotenuse is " + hypotenuse.toFixed(2) + " cm."
        }
    } else {
        output.innerText = "Please enter the length for both the sides."
    }
}

checkHypotenuseBtn.addEventListener("click", calculateHypotenuse);