/* Want to find out how old you’ll be? Calculate it!
• Use prompt() and alert().
• Ask user for birth year.
• Ask user for a future year.
• Calculate the 2 possible ages for the given year.
• Output them to the screen/console like so: "I will be either NN or NN in YYYY", substituting the values.
For example, if you were born in 1988, then in 2026 you’ll be either 37 or 38, depending on what month it is in
2026.
Additional Task: Ask for precise dates.*/

let birth_year = Number(prompt("Type your birth year: \n"));
let future_year = Number(prompt("Type the future year: \n"));
let age1 = birth_year +1
let age2 = birth_year +2
alert("You will be either " + age1 + " or "+ age2 + " in " + "future_year")