// Secret number between 0-100
// Prompt user for guess, then print a hint:
// (for example "secret is higher")
// If the guess was right, congratulate the player and end the game!
// Secret number between 0-100
// Prompt user for guess, then print a hint:
// (for example "secret is higher")
// If the guess was right, congratulate the player and end the game!

let number1 = 89;

while (true) {
    let number2 = Number(prompt("Guess the secret number between 1 and 100: \n"));
    if (isNaN(number2)) {
        console.log("Use digits only to enter your number");
        }
    else if (number2 < number1) {
        console.log("Secret number is higher");
        }
    else if (number2 > number1) {
        console.log("Secret number is lower");
        }
    else if (number2 === number1) {
        console.log("You found a secret number");
        break;
    }
 }