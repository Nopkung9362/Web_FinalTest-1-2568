window.addEventListener('DOMContentLoaded', randomnumber); // Still call randomnumber on load

function randomnumber() {
    // Get all elements with class 'randomnumber'
    let elements = document.querySelectorAll('.randomnumber');
    elements.forEach(element => {
        let number = Math.floor(Math.random() * (100 - 40 + 1)) + 40;
        element.innerText = number;
    });
}

function grade() {
    // Get all elements with class 'grade' and 'randomnumber'
    let gradeElements = document.querySelectorAll('.grade');
    let randomNumberElements = document.querySelectorAll('.randomnumber');

    // Loop through each grade element and set its innerText to the corresponding grade
    gradeElements.forEach((gradeElement, index) => {
        // Get the corresponding random number from the same row using the index
        let randomNumber = parseInt(randomNumberElements[index].innerText);

        if (randomNumber >= 80) {
            gradeElement.innerText = 'A';
        } else if (randomNumber >= 70) {
            gradeElement.innerText = 'B';
        } else if (randomNumber >= 60) {
            gradeElement.innerText = 'C';
        } else if (randomNumber >= 50) {
            gradeElement.innerText = 'D';
        } else {
            gradeElement.innerText = 'F';
        }
    });
}