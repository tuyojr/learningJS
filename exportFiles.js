// Using export to Share a Code Block

/*
There are two string-related functions in the editor. Export both 
of them using the method of your choice.
*/

const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase()
}

export { uppercaseString, lowercaseString }


// Creating an Export Fallback with export default

/*
The following function should be the fallback value for the module. 
Please add the necessary code to do so.
*/ 
export default function (x, y) {
    return x - y;
}



