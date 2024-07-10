function checkAnswer() {
    // Declare the correct answer
    let correctAnswer = "4";

    // Retrieve the user's answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        // Display feedback for the correct answer
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        // Display feedback for the incorrect answer
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
