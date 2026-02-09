console.log("Welcome to the Number Guessing Game!");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 10) + 1;

function askGuess() {
  rl.question("Guess a number between 1 and 10: ", function(answer) {
    const guess = Number(answer);

    if (guess === secretNumber) {
      console.log("🎉 Correct! You win!");
      rl.close();
    } else {
      console.log("❌ Wrong guess, try again!");
      askGuess(); // loop back and ask again
    }
  });
}

askGuess();
