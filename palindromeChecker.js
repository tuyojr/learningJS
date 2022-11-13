/*
Return true if the given string is a palindrome. Otherwise, 
return false.

A palindrome is a word or sentence that's spelled the same 
way both forward and backward, ignoring punctuation, case, 
and spacing.

Note: You'll need to remove all non-alphanumeric characters 
(punctuation, spaces and symbols) and turn everything into 
the same case (lower or upper case) in order to check for 
palindromes.

We'll pass strings with varying formats, such as racecar, 
RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 
2A3 3a2, and 2_A3*3#A2.
*/ 

function palindrome(str) {

    // Use a regExp to exclude unwanted characters
    let regExp = /[\W_]/g;

    // create a variable to hold the value of the str argument in 
    // lower case and using the .replace method, replace the regExp 
    // in that variable with no space (eliminates unwanted characters)
    let strLowerCase = str.toLowerCase().replace(regExp, '');

    // next, we want to check if the reversed version of the str is 
    // the same as the str itself, to do that, we split the strLowerCase 
    // into an array of characters and then use the .reverse method to 
    // reverse the arrangement of the characters and join them with the 
    // .join method.
    let strReversed = strLowerCase.split('').reverse().join('');

    // Lastly, we want to return the value of the strReversed and the 
    // strLowerCase strictly equal to each other, to confirm our palindrome. 
    // It will return true or false
    return strReversed === strLowerCase;
}

console.log(palindrome("eye"));