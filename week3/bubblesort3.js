let myInput = [1000, 2, 3, 1, 2, 5, 6, -99]

function bubbleSort(input)
{
    let nb_comparison = 0;
    let n = input.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            nb_comparison;
            if (input[i] > input[i + 1]) {
                let temp = input[i];
                input[i] = input[i + 1];
                input[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return input
}

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

bubbleSort(myInput);
printArrayInOneLine(myInput);

let result = myInpu.sort;






