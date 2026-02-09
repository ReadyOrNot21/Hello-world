console.log("Welcome to your first JavaScript program!");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", function(name) {
  rl.question("How are you feeling today? ", function(mood) {
    console.log("Nice to meet you, " + name + "!");
    console.log("I'm glad you're feeling " + mood + " today.");
    console.log("You're officially a JavaScript programmer now!");
    rl.close();
  });
});
