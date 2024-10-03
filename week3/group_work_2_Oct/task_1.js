//An RNA string is a string formed from the alphabet containing 'A', 'C', 'G', and 'U'.
//Given a DNA string t corresponding to a coding strand, its transcribed RNA string u is formed by replacing all occurrences of 'T' in t with 'U' in u.
//Given: A DNA string t having length at most 1000 nt.
//Return: The transcribed RNA string of t.

let DNA = '' // some string with letters A, C, G, U

const transcribeDnaToRna = (dna) => {
    let validCharsArray = ['A', 'C', 'G', 'T'];
    let isValid = false;
    let RNA = '';
    const charArray = dna.split('');
    
    while (!isValid) {
        if (dna === undefined) {
            console.error('Error_message: DNA string shouldn\'t be empty');
            dna = prompt('DNA string is not correct. Please enter a valid string!\nNew DNA string: ');
        } else if (dna.length > 1000) {
            console.error('Error_message: DNA string should be less then 1000 nt');
            dna = prompt('DNA string is not correct. Please enter a valid string!\nNew DNA string: ');
        } else if (isValidCharacter(charArray, validCharsArray)) {
            console.error('Error_message: DNA contains not allowed characters!');
            dna = prompt('DNA string is not correct. Please enter a valid string!\nNew DNA string: ');
        } else {
            isValid = true
        }
    }
    
    charArray.forEach((char, index) => {
        char.toUpperCase();
        
        if (char === 'T') {
            char = 'U';
        }
        
        RNA += char;
    });
    
    return `Transcribed RNA string:
${RNA}`;
}

function isValidCharacter(charArray, validCharArray) {
        for (let i = 0; i < charArray.lenght - 1; i++) {
            if (!validCharArray.includes(charArray[i])) {
                return false
            }
        }
        
        return true;
    }


const userInput = prompt('Write a DNA string: ');

console.log(transcribeDnaToRna(userInput));