/*The intended behavior is to increment by one but why is this function not working? Can you fix this? (try to solve this on paper first and then debug the code)

Expected behaviour: Input -> Output
1 incrementItems ([0 , 1, 2 , 3]) -> [1 , 2 , 3 , 4]
2 incrementItems ([2 , 4, 6 , 8]) -> [3 , 5 , 7 , 9]
3 incrementItems ([ -1 , -2 , -3 , -4]) -> [0 , -1 , -2 , -3]
*/

function incrementItems(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + 1
    }
    return array;
}

function printArrayInOneLine(array, separator = ", ")
{
    let text = "";
    for (let i = 0; i < array.length; i++) {
        text = text + array[i];
        if (i !== array.length -1) {
            text = text + separator;
        }
    }
    console.log(text);
}

arr1 = [0 , 1, 2 , 3];
arr2 = [2 , 4, 6 , 8];
arr3 = [ -1 , -2 , -3 , -4];

incrementItems(arr1) && printArrayInOneLine(arr1);
incrementItems(arr2) && printArrayInOneLine(arr2);
incrementItems(arr3) && printArrayInOneLine(arr3);