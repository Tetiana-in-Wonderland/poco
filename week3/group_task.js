//Code challenge in groups of 2: Write a function that takes an array of numbers and returns the sum of all even numbers.

let input = [44, 0, 14, 20, 79, 99, 38, 62, 60, 96, 55, 57, 36, 75, 58, 45, 15, 10, 24, 75, 92, 74, 78, 37, 25, 2, 41, 48, 4, 65];

function sumNumber(array)
{
    let sum = 0;
    for (i = 0; i < input.length; i++)
    { 
        if (input[i] % 2 === 0)
        {
           sum += input[i];
        }
    }
    return sum; //we dont need brackets and ; with return, but they also work if we put them
}

console.log(sumNumber(input));
