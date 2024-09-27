/* Write a program that asks for the user to input a number:
• If the number is even, print "The number is even."
• If the number is odd, print "The number is odd."
• If it is not a number, print "This is not a number." */

while (true) {
    let number = Number(prompt("Please insert your number: "))
if (isNaN(number)) {
    alert("This is not a number. Use digits only to enter your number");
        }
    else if ((number)%2===0) {
        alert("Number is even");
        }
    else if ((number)%2===1) {
        alert("Number is odd");
    }
}