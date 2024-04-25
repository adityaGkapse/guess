function checkGuess() {
    // Generate a random number between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    // Get user's guess from the input field
    const userGuess = document.getElementById("userGuess").value;

    // Convert user's guess to a number
    const userGuessNumber = parseInt(userGuess);

    // Get the result message element
    const resultMessage = document.getElementById("resultMessage");

    // Check if the user's guess matches the random number
    if (userGuessNumber >= 1 && userGuessNumber <= 10) {
        if (userGuessNumber === randomNumber) {
            resultMessage.textContent = "Good Work! You guessed the correct number.";
        } else {
            resultMessage.textContent = `Not matched. The correct number was ${randomNumber}.`;
        }
    } else {
        resultMessage.textContent = "Please enter a number between 1 and 10.";
    }
}