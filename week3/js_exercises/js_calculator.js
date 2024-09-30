// Let`s build a calculator

let firstNumber, secondNumber, result, operation;

//firstNumber = Number(prompt("Enter the first number: "));
//if (isNaN(firstNumber)) {
//    console.log("You didn`t type a number")
//}
//Instead of if in the above case we can use "do" and "while":

do {
    firstNumber = Number(prompt("Enter the first number: "));
} while (isNaN(firstNumber));

//secondNumber = Number(prompt("Enter the second number: "));
do {
    secondNumber = Number(prompt("Enter the second number: "))
} while (isNaN(secondNumber));

operation = prompt("Choose an operation (+, -, *, /): ");

if(operation === "+") {
    result = firstNumber + secondNumber;
}
else if (operation === "-") {
    result = firstNumber - secondNumber;
}
else if (operation === "/") {
    //result = firstNumber / secondNumber;
    // What about secondNumber === 0?
    result = secondNumber === 0 ? "You cannot divide by zero." :
    firstNumber / secondNumber;
}
    //Or it is possible to use 4 more simple lines of code below:
    //if (secondNumber === 0) {
    //    console.log("You cannot divide by zero.")
    //}
    //else if {result = firstNumber / secondNumber;
    //}

else if (operation === "*") {
    result = firstNumber * secondNumber;
}

console.log(`The result is: ${result}`)