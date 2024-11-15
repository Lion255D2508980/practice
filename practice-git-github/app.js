const generateProblem = () => {
    const operators = ["+","-","*","/"];
    const num1 = Math.floor(Math.random() * 10) + 1;// random number between one and ten
    const num2 = Math.floor(Math.random() * 10) + 1;// random number between one and ten
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let correctAnswer;
    let problemText = `${num1} ${operator} ${num2}`;

    // calculate the correct answer based on the operator
    switch (operator) {
        case "+":
            correctAnswer = num1 + num2;
            break
        case "_":
            correctAnswer = num1 - num2;
            break
        case "*":
            correctAnswer = num1 * num2;
            break
        case "/":
            correctAnswer = (num1 / num2).toFixed(2) ;
            break

    }
    // display the problem to the user
    document.getElementById('problem').textContent = problemText;
    return correctAnswer;

}

// Store the correct answer for comparison
let correctAnswer = generateProblem();

const checkAnswer = () => {
    const unserAnswer = parseFloat(document.getElementById('user-answer').value);
    const resultMessage = document.getElementById('result-message');

    if (unserAnswer === correctAnswer){
        resultMessage.textContent = "Correct! Well done.";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = `Incorrect. The correct answer was ${correctAnswer}`;
        resultMessage.style.color = "red";
    }
}

// Function to generate a new problem 
const newProble = () => {
    correctAnswer = generateProblem();

    document.getElementById('user-answer').value = ''; // clear the previous answer
    document.getElementById('result-message').textContent = ''; //clear the previous result message

}

//add eventListener to buttons 
document.getElementById('submit-answer').addEventListener('click', ()=>{
    checkAnswer()
})
document.getElementById('new-problem').addEventListener('click',()=>{
    newProble()
})
// Function to generate a random problem
// Random number between 1 and 10
// Random number between 1 and 10
 // Calculate the correct answer based on the operator
 // Round to 2 decimal places
 // Display the problem to the user
 // Store the correct answer for comparison
 // Function to check if the answer is correct
 // Function to generate a new problem
 // Add event listeners to buttons