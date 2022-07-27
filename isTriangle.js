const angleInputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output-div");

function sumOfAngles(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    
    return sum;
}

function isTriangle() {
    const sum = sumOfAngles(Number(angleInputs[0].value), Number(angleInputs[1].value), Number(angleInputs[2].value));

    if(angleInputs[0].value && angleInputs[1].value && angleInputs[2].value) {
        if(sum === 180) {
            output.innerText = "Yay! The angles form a Triangle...";
        } else {
            output.innerText = "Oops! The angles don't form a Triangle...";
        }
    }else {
        output.innerText = "Please enter all the angles.";
    }
}

isTriangleBtn.addEventListener("click", isTriangle);