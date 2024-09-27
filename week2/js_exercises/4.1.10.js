/* Initialize two variables to hold the string LaunchCode and the array [1, 5, 'LC101', 'blue', 42], then
construct for loops to accomplish the following tasks:

a) Print each element of the array to a new line.*/

let LaunchCode = [1, 5, "LC101", "blue", 42];
for (let item of LaunchCode) {
console.log(item);
}

/*b) Print each character of the string -in reverse order- to a new line.*/
let LaunchCode = "1 5 LC101 blue 42";
let arr = Array.from(LaunchCode);
console.log(arr);


// Input array
let str = "GeeksforGeeks: A computer science portal";

// Getting char array
let arr = Array.from(str);
          
// Display output          
console.log(arr);