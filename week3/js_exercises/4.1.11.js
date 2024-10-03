//• Create an array with the names of five cities. Access and log the third city in the array.

let myArray1 = ["Zurich", "Lausanne", "Bern", "Bex", "Sion"];
console.log(myArray1[2]);

//• Create an array of numbers [5, 10, 15, 20]. Add a number at the end, remove the first number, and log
//the final array.

let myArray2 = [5, 10, 15, 20];
myArray2.shift(); //removes 1st element of array
myArray2.push(25); //adds last element into array

function printArrayInOneLine(array, separator = ", ")
{
    let text = "";
    for (let i = 0; i < array.length; i++) 
        {
        text = text + array[i];
        if (i !== array.lenth -1) 
        {
            text = text + separator;
        }
    }
console.log(text);
}

printArrayInOneLine(myArray2, ", ")

//• Create an object representing a book with properties title, author, and year. Log the book’s title
let book = {
    title: "For Whom The Bell Tolls",
    author: "Ernest Hemingway", 
    year: 1940,
}
console.log(book.title + " by " + book.author + ".")
