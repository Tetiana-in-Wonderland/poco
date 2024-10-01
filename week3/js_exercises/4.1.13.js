//Create an array of five numbers. Write a for loop to sum the numbers.

let myInput = [10, 13, 18, 22, 14];


    for (let i = 0; i < input.length; current_index++)
        input[currentIndex] + input[currentIndex +1]


printArrayInOneLine(myInput, ", ")

// Print array in one line.
function printArrayInOneLine(array, separator = ", ")
{
    // if (separator === undefined) {
    //     throw "Argument separator not set.";
    // }
    let text = "";
    for (let i = 0; i < array.length; i++) {
        text = text + array[i];
        if (i !== array.length - 1) {
            text = text + separator;
        }
    }
    text = text + "]"
    console.log(text);
}