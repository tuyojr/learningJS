/*
One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the 
letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters 
are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns 
a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic 
character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
    let characterCode = 0;
    // Store the str passed as argument in an empty arr, using the .split method
    let arr = [];
    arr = str.split('');

    // Iterate the array using for loop
    for (let i = 0; i < arr.length; i++) {

        // take the ASCII char code of the first index and store it in a variable
        characterCode = arr[i].charCodeAt();

        // check if the ASCII value consists of Capital alphabets. 
        // If the condition is true, then check again with another if 
        // statement, if ASCII value is greater than 77 i.e greater than 'M' , 
        // if it is true then subtract 13 from the ascii value , else if it is 
        // less than 77 than add 13 to the ascii value
        if (characterCode >= 65 && characterCode <= 90) {
            if (characterCode > 77) {
                characterCode = characterCode - 13;
            }
            else {
                characterCode = characterCode + 13;
            }
            // Next, we have to replace the character at that index with the 
            // corresponding new ASCII code obtained from step 5 using splice and 
            // String.fromCharCode, and finally return the joined arr.
            arr.splice(i, 1, String.fromCharCode(characterCode));
        }
    }
    return arr.join('');
}

console.log(rot13("SERR PBQR PNZC"));