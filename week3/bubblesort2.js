function bubbleSort(input)
{
    let swapped = false;
    do {
        swapped = false;
        let current_index = 0;
    
        do {
            if (input[current_index] > input[current_index + 1]) {
                swapped = true; 
                let temp = input[current_index];
                input[current_index] = input[current_index + 1]
                input[current_index + 1] = temp
            }
            current_index = current_index + 1
        }
        while (current_index < input.length - 1)
    }
    while (swapped )
    // TODO: implement bubble sort in here.
}

let myInput = [6, 3, 1, 5, -6]
bubbleSort(myInput);
printArrayInOneLine(myInput);


// Print array in one line.
function printArrayInOneLine(array, separator = ", ")
{
    // if (separator === undefined) {
    //     throw "Argument separator not set.";
    // }
    let text = "[";
    for (let i = 0; i < array.length; i++) {
        text = text + array[i];
        if (i !== array.length - 1) {
            text = text + separator;
        }
    }
    text = text + "]"
    console.log(text);
}