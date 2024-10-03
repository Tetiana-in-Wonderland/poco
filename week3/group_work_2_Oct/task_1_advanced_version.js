//An RNA string is a string formed from the alphabet containing 'A', 'C', 'G', and 'U'.
//Given a DNA string t corresponding to a coding strand, its transcribed RNA string u is formed by replacing all occurrences of 'T' in t with 'U' in u.
//Given: A DNA string t having length at most 1000 nt.
//Return: The transcribed RNA string of t.

//TODO: refactor it later
let notValidChar;

/**
 * Function to transcribe user NT string to opposite type.
 **/
const transcribeNt = () => {
    const stringNt = prompt('Write a string to transcribe: ');
    let isValidTranscribeType = false;
    let transcribeType;
    
    /**
     * Validate user input NT type. 
     * @params validate until user hasn't input a valide NT type.
     **/
    while (!isValidTranscribeType) {
        transcribeType = prompt('\nIs that a DNA or RNA NT string? : ');
        
        if (transcribeType.toUpperCase() === 'DNA') {
            isValidTranscribeType = true;
            transcribeType = 'DNA'
        } else if(transcribeType.toUpperCase() === 'RNA') {
            isValidTranscribeType = true;
            transcribeType = 'RNA'
        } else {
            console.error(`Type '''${transcribeType}''' is invalid transcribe type!`);
            transcribeType = prompt('Write a valid trascribe type!\n Valid types is DNA OR RNA: ');
        }
    }
    
    /**
     * Valid character, based on NT string type 
     **/
    let validCharsArray = [
        'A', 
        'C', 
        'G',
        `${transcribeType === 'DNA' ? 'T' : 'U'}`,
    ];
    
    let isValid = false;
    let transcribeResult = '';
    let charArray;
    let secondArray = [];
    
    /**
     * Validate user input NT string, until condition will not be satisfied.
     **/
    while (!isValid) {
        charArray = !secondArray.length 
        ? 
        stringNt.split('')
        : 
        secondArray.split('');
        
        let error = validateString(charArray, validCharsArray);
        
        if (error === null) {
            isValid = true;
        } else {
            console.error(error.error_message);
            secondArray = prompt(error.prompt_message);
        }
    }
    
    /**
     * Transcribe each char at array and create a new transcribed string. 
     **/
    charArray.forEach(char => {
        const searchValue = transcribeType === 'DNA' ? 'T' : 'U';
        const replacedValue = transcribeType === 'DNA' ? 'U' : 'T'
        char.toUpperCase();
        
        if (char === searchValue) {
            char = replacedValue;
        }
        
        transcribeResult += char;
    });
    
    return `\nTranscribed ${transcribeType === 'RNA' ? 'RNA to DNA' : 'DNA to RNA'} string:
    
${transcribeResult}`;
}

/**
 * accepting user input @array userInputArray typeof char[]
 * and @array validCharsArray typeof char[], this array includes only valid characters.
 * 
 * return @object ErrorMessage(
                  error_message typeof string;
                  prompt_message typeof string;
                ) 
 * 
 * If not errors return null, thats mean the string is valid.
 **/
const validateString = (userInputArray, validCharsArray) => {
    if (arrayIsEmpty(userInputArray)) {
            /**
             * return @object ErrorMessage(
             *      error_message typeof string;
             *      prompt_message typeof string;
             * ) 
             **/
            return new ErrorMessage(
                'Error_message: DNA string shouldn\'t be empty',
                'DNA string is not correct. Please enter a valid string!\nNew DNA string: '
                );
                
        } else if (arrayLengthIsHuge(userInputArray)) {
            
            return new ErrorMessage(
                'Error_message: DNA string should be less then 1000 nt',
                'DNA string is not correct. Please enter a valid string!\nNew DNA string: '
                );
                
        } else if (isOnlyValidCharacters(
                userInputArray, 
                validCharsArray
            )) {
            
            return new ErrorMessage(
                    `Error_message: DNA contains not allowed '''${notValidChar}''' character!`,
                    'DNA string is not correct. Please enter a valid string!\nNew DNA string: '
                );
        } 
        
        return null;
}

// function isValidCharacter(charArray, validCharArray) {
//         for (let i = 0; i < charArray.lenght - 1; i++) {
//             if (!validCharArray.includes(charArray[i])) {
//                 return false
//             }
//         }
//     return true;
// }

class ErrorMessage {
    constructor(error_message, prompt_message) {
        this.error_message = error_message;
        this.prompt_message = prompt_message;
    }
}

function isOnlyValidCharacters(charArray, validCharArray) {
    return charArray.some(ch => {
        notValidChar = ch
        return !validCharArray.includes(ch.toUpperCase())
    });
}

function arrayIsEmpty(array) {
    return array === undefined 
    || 
    array.length === 0
}

function arrayLengthIsHuge(array) {
    return array.length > 1000
}

console.log(transcribeNt());
