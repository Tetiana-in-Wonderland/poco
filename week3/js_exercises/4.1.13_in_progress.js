//Create an array of five numbers. Write a for loop to sum the numbers.

let result = "";
let myInput = [10, 13, 18, 22, 14];

function sumofArray(array) {
    for (let i = 0; i < array.length; i++) 
        {
        result = array[i-1] + array[i];
        if (i !== array.length -1) 
            {
            result = result + array[i];
        }
    }
    console.log(result);
}

sumofArray(myInput)



/* Print array in one line.
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
    //text = text + "]"
    console.log(text);
}*/