const sideInputs = document.querySelectorAll(".side-inputs");
const checkAreaBtn = document.querySelector("#check-area-btn");
const output = document.querySelector("#output-div");

function calculateArea() {

    if (sideInputs[0].value && sideInputs[1].value) {
        const area = (Number(sideInputs[0].value) * Number(sideInputs[1].value)) / 2;

        output.innerText = "The area of the triangle is " + area + " cm²";
    } else {
        output.innerText = "Please enter both the fields."
    }
}

checkAreaBtn.addEventListener("click", calculateArea);