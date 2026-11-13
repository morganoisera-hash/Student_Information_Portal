let studentName = "John Kamau";
let regNumber = "SCS/0001/2024";
let academicProgramme = "Computer Science";

console.log("Student Name: " + studentName);
console.log("Registration Number: " + regNumber);
console.log("Academic Programme: " + academicProgramme);

function calculateGrade(score) {
    if (score >= 70 && score <= 100) {
        return "A";
    } else if (score >= 60 && score <= 69) {
        return "B";
    } else if (score >= 50 && score <= 59) {
        return "C";
    } else if (score >= 40 && score <= 49) {
        return "D";
    } else {
        return "E";
    }
}

let testScore = 75;
let myGrade = calculateGrade(testScore);
alert("The grade for a score of " + testScore + " is: " + myGrade);

const form = document.getElementById("regForm");

form.addEventListener("submit", function(event) {
    let nameValue = document.getElementById("fullname").value;
    let regValue = document.getElementById("regno").value;
    let emailValue = document.getElementById("email").value;
    let displayArea = document.getElementById("successMessage");

    if (nameValue === "" || regValue === "") {
        alert("Full Name and Registration Number cannot be empty!");
        event.preventDefault();
        return;
    }

    if (!emailValue.includes("@")) {
        alert("Please enter a valid email address containing '@'.");
        event.preventDefault();
        return;
    }

    event.preventDefault();
    displayArea.innerHTML = "Successfully submitted! Name: " + nameValue + " | Reg No: " + regValue;
});