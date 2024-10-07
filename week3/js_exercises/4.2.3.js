/*Write a function named helloWorld that:
• Takes 1 argument, a language code (e.g. "es", "de", "en")
• Returns "Hello, World" for the given language, for at least 3 languages. It should default to returning
English.
Call the function for each of the supported languages and log the result to make sure it works.*/

function translateIntoLanguage(wantedLanguage) 
{
    let languages = ["en", "es", "de"];
    let translations = ["Hello world!", "Hola Mundo!", "Hallo Welt!"];
    for (let i = 0; i <= languages.length; i++)
    {
        if (wantedLanguage === languages[i])
        {
            return(translations[i]);
        }
    }
    return(translations[0]);
}

let userInput = prompt("Select the language (en, es, de): \n");
//let userInput = "rrrrr";
console.log(translateIntoLanguage(userInput));
    
