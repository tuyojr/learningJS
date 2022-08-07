// if/else if statements I (Under Basic JavaScript)

function test(num){
    if (num > 15){
        return "Bigger than 15";
    } else if (num < 5 ){
        return "Less than 5";
    } else {
        return "Between 5 and 15";
    }
}

console.log(test(16));



// if/else if statements II
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

    // Only change code below this line
    
    if (strokes === 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes === par - 1) {
        return names[2];
    } else if (strokes === par) {
        return names[3];
    } else if (strokes === par + 1) {
        return names[4];
    } else if (strokes === par + 2) {
        return names[5]
    } else if (strokes === par + 3) {
        return names[6]
    } else if (strokes >= par + 3) {
        return names[6];
    } else {
        return "Strike the ball."
    }

    // Only change code above this line
}

golfScore(5, 4);


// switch statements I

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha"
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    // Only change code above this line
    return answer;
}

console.log(caseInSwitch(1));


// switch statements II

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
        case "a":
            answer = "apple"
            break;
        case "b":
            answer = "bird"
            break;
        case "c":
            answer = "cat"
            break;
        default:
            answer = "stuff"
            break;
    }

    // Only change code above this line
    return answer;
}

switchOfStuff(1);


// switch statements III

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low"
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid"
            break;
        case 7:
        case 8:
        case 9:
            answer = "High"
            break;
    }


    // Only change code above this line
    return answer;
}

sequentialSizes(1);

// switch statements IV

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line

    switch (val) {
        case "bob":
            answer = "Marley"
            break;
        case 42:
            answer = "The Answer"
            break;
        case 1:
            answer = "There is no #1"
            break;
        case 99:
            answer = "Missed me by this much!"
            break;
        case 7:
            answer = "Ate Nine"
            break;
    }

    // if (val === "bob") {
    //   answer = "Marley";
    // } else if (val === 42) {
    //   answer = "The Answer";
    // } else if (val === 1) {
    //   answer = "There is no #1";
    // } else if (val === 99) {
    //   answer = "Missed me by this much!";
    // } else if (val === 7) {
    //   answer = "Ate Nine";
    // }

    // Only change code above this line
    return answer;
}

chainToSwitch(7);


// return early pattern for functions

function myFun() {
    console.log("Hello");
    return "World";
    console.log("bye") //will not display because the function exits at the return statement 
}
console.log(myFun())


//return early pattern for functions II

// Setup
function abTest(a, b) {
    // Only change code below this line

    if (a < 0 || b < 0) {
        return undefined
    //the function abTest will immediately exit with a value of undefined if a or b are less than 0.
    }

    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

//counting cards

let count = 0;

function cc(card) {
    // Only change code below this line

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

// build JS objects

const myDog = {
    // Only change code below this line

    "name": "Snow",
    "legs": 4,
    "tails": 1,
    "friends": ["man", "park", "food", "sleep"]

    // Only change code above this line
};



// Accessing Object Properties with Dot Notation (.)

// Setup
const testObj1 = {
    "hat": "ball-cap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj1.hat;      // Change this line
const shirtValue = testObj1.shirt;    // Change this line


// Accessing Object Properties with Bracket Notation ([])

// Setup
const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj2["an entree"];   // Change this line
const drinkValue = testObj2["the drink"];    // Change this line


//Accessing Object Properties with Variables

// Setup
const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj3[playerNumber];   // Change this line


// Updating Object Properties

// Setup
const myDog2 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line

//myDog.name = "Happy Coder" (dot notation)
myDog2["name"] = "Happy Coder" //bracket notation


// Add New Properties to a JavaScript Object

const myDog3 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

//myDog["bark"] = "woof" (bracket notation)
myDog3.bark = "woof" //dot notation


//Delete Properties from a JavaScript Object

// Setup
const myDog4 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

// Only change code below this line

delete myDog4.tails


//Using Objects for Lookups

// Setup
function phoneticLookup(val) {
    let result = "";

    // Only change code below this line

    // switch(val) {
    //   case "alpha":
    //     result = "Adams";
    //     break;
    //   case "bravo":
    //     result = "Boston";
    //     break;
    //   case "charlie":
    //     result = "Chicago";
    //     break;
    //   case "delta":
    //     result = "Denver";
    //     break;
    //   case "echo":
    //     result = "Easy";
    //     break;
    //   case "foxtrot":
    //     result = "Frank";
    // }

    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    result = lookup[val]

    // Only change code above this line
    return result;
}

phoneticLookup("charlie");


//Testing Objects for Properties

function checkObj(obj, checkProp) {
    // Only change code below this line

    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }

    // Only change code above this line
}


// Manipulating Complex Objects

const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    }, //added code here
    {
        "artist": "J.Cole",
        "title": "Love Yourz",
        "release_year": 2014,
        "formats": [
            "CD",
            "Digital",
            "8T"
        ]
    } //stopped here
];


// Accessing Nested Objects

const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];    // Changed this line


// Accessing Nested Arrays

const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

//setting the variable secondTree to the second item in the trees list from the myPlants object
const secondTree = myPlants[1].list[1];


//Record Collection

// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
/*
Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
*/
function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
        records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
        records[id][prop].push(value);
    } else if (value === "") {
        delete records[id][prop];
    }
    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');


// Iterate with JavaScript While Loops

// Setup
const myArray = [];

// Only change code below this line
// myArray should equal [5, 4, 3, 2, 1, 0].
let i = 5
while (i >= 0) { 
    myArray.push(i)
    i--
}

// Iterate with JavaScript For Loops

// Setup
const myArray1 = [];

// Only change code below this line
// Use a for loop to push the values 1 through 5 onto myArray
for (let i = 1; i < 6; i++) {
    myArray1.push(i)
}


// Iterate Odd Numbers with a for loop

// Setup
const myArray2 = [];

// Only change code below this line
// Push the odd numbers from 1 through 9 to myArray using a for loop.
for (let i = 1; i < 10; i += 2) {
    myArray2.push(i)
}

//Count Backwards With a For Loop

// Setup
const myArray3 = [];

// Only change code below this line
// Push the odd numbers from 9 through 1 to myArray using a for loop.
for (let i = 9; i > 0; i -= 2) {
    myArray3.push(i)
}


//Iterate Through an Array with a For Loop

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
/* Declare and initialize a variable total to 0.
Use a for loop to add the value of each element of the myArr array to total.
*/
let total = 0

for (let i = 0; i < myArr.length; i += 1) {
    total += myArr[i]
}


// nesting for loops

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    /*
    Modify function multiplyAll so that it returns the product 
    of all the numbers in the sub-arrays of arr.
    */ 

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j]
        }
    }
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


// Iterate with JavaScript Do...While Loops

// Setup
const myArray4 = [];
let k = 10;

// Only change code below this line
/*
Change the while loop in the code to a do...while loop so the 
loop will push only the number 10 to myArray, and k will be 
equal to 11 when your code has finished running.
*/
do {
    myArray4.push(k);
    k++;
} while (k < 5) 


// Replace Loops using Recursion

function sum(arr, n) {
    // Only change code below this line

    /*
    The if statement checks to see if sum is evaluating 
    the base case, n <= 0, or not. If it is, then sum returns 
    the answer, 0 - the sum of elements from 0 to 0 inclusive. 
    Otherwise, it recurses by evaluating a simpler function call, 
    sum(arr, n - 1). Once that returns it adds a single array 
    element, arr[n - 1], to it and returns that sum.
    */ 

    if (n <= 0) {
        return 0
    } else {
        return sum(arr, n - 1) + arr[n - 1]
    }

    // Only change code above this line
}

console.log(sum([2,3,4,5], 3))


// Profile Lookup

// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    /*
    The for loop runs, starting at the first object in the contacts list.
    If the firstName parameter passed into the function matches the value 
    of the "firstName" key in the first object, the if statement passes.
    Then, we use .hasOwnProperty() method (checks if there’s a given 
    property and returns a boolean) with prop as an argument.
    If it’s true, the value of prop is returned.
    If the second if statement fails, No such property is returned.
    If the first if statement fails, the for loop continues on to 
    the next object in the contacts list.
    If the firstName parameter isn’t matched by the final contacts object, 
    the for loop exits and No such contact is returned.
    */
    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";

    // Only change code above this line
}

lookUpProfile("Akira", "likes");


// Generate Random Fractions

function randomFraction() {

    // Only change code below this line

    return Math.random();

    // Only change code above this line
}

console.log(randomFraction())


// generate random whole numbers

function randomWholeNum() {

    // Only change code below this line

    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum())

// generate random whole numbers within a range

function randomRange(myMin, myMax) {
    // Only change code below this line

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    
    // Only change code above this line
}

console.log(randomRange(2, 10))

// the parseInt Function

function convertToInteger(str) {
    return parseInt(str)
}

convertToInteger("56");

// Use the parseInt Function with a Radix

function convertToInteger(str) {
    // this converts the str to a base 2 integer
    return parseInt(str, 2)
}

console.log(convertToInteger("10011"));

// Use the Conditional (Ternary) Operator

function checkEqual(a, b) {
    // a ? b : c
    /*
    a = condition
    b = code that runs if condition is true
    c = code that runs if condition is false
    */ 
    return a == b ? "Equal" : "Not Equal"
}

checkEqual(1, 2);

// Use Multiple Conditional (Ternary) Operators

function checkSign(num) {
    return num > 0 ? "positive"
        : num < 0 ? "negative"
            : "zero";
}

checkSign(10);

//Use Recursion to Create a Countdown

// Only change code below this line
function countdown(n) {
    if (n < 1) {
        return []
    } else {
        const countArray = countdown(n - 1)
        countArray.unshift(n)
        return countArray
    }
}

console.log(countdown(5))
// Only change code above this line


// Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {

    if (endNum - startNum === 0) {
        return [startNum];
    } else {
        const arr = rangeOfNumbers(startNum, endNum - 1);
        arr.push(endNum);
        return arr;
    }

};

console.log(rangeOfNumbers(1, 5))


// Compare Scopes of the var and let Keywords (under ECMAScript6 or ES6)
// (ECMA = European Computer Manufacturers Association)









