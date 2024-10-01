/* Array:
- List
- Has elements / items that can be repeated
- Collection
- Indexed (starting from 0)
- It has length
- Is  a type of value in JS */

let myArray = [1, 2, 3, -1];
//let numberOfElements = myArray.length;

//console.log(myArray[4]); - log will be "undefined"
//console.log(myArray[-1]); - log will be "undefined"

/*console.log(myArray); //prints number of elements in array and all its elements
console.log(myArray[0]); //prints 1st element of array
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);*/

//Print my array length
let text = "";
for (let i = 0; i < myArray.length; i++) {
    text = text + myArray[i];
    if (i !== myArray.lenth -1) {
    text = text + ", ";
    }
}
console.log(text);

//Print my array in one line
//function printArrayInOneLine(myArray)
//function printArrayInOneLine(myArray,";") //?
//letOtherArray = [];
//function printArrayInOneLine(10, 20, 3, 15); 


//let separator = ",";
function printArrayInOneLine(array, separator = ", ")
{
    if (separator === undefined) {
        throw "Argument separator not set";
    }
    let text = "";
    for (let i = 0; i < myArray.length; i++) {
    text = text + myArray[i];
    if (i !== myArray.lenth -1) {
    text = text + separator;
    }
}
console.log(text);
}
