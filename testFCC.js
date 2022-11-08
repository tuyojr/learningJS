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

function checkScope() {

    /*
    make i declared in the if statement is a separate variable than i declared 
    in the first line of the function.
    This exercise is designed to illustrate the difference between how var and 
    let keywords assign scope to the declared variable. When programming a 
    function similar to the one used in this exercise, it is often better to 
    use different variable names to avoid confusion.
    */

    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}


// Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line
    s[0] = 2
    s[1] = 5
    s[2] = 7
    // Using s = [2, 5, 7] would be invalid
    /* this line below supposedly prints out the array orderly 
    (saw this on twitter, couldn't figure out how to try it)
    */
    // for (const elem of s) {
    //     setTimeout(() => console.log(elem), elem);
    // }
    // Only change code above this line
}
editInPlace();



// Prevent Object Mutation

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line

    Object.freeze(MATH_CONSTANTS)

    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();


// Use Arrow Functions to Write Concise Anonymous Functions

const magic = () => {
    return new Date();
};


// Writing arrow functions with parameters

// var myConcat = function(arr1, arr2) {
//   return arr1.concat(arr2);
// };
// Rewrite the myConcat function which appends contents 
//of arr2 to arr1 so that the function uses arrow function syntax.

const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2)
}

console.log(myConcat([1, 2], [3, 4, 5]));


//Set Default Parameters for Your Functions

// Modify the function increment by adding default parameters so 
//that it will add 1 to number if value is not specified.

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line


// Use the Rest Parameter with Function Parameters
/*
Modify the function sum using the rest parameter in such a way
that the function sum is able to take any number of arguments 
and return their sum.
*/
// const sum = (x, y, z) => {
//   const args = [x, y, z];
//   return args.reduce((a, b) => a + b, 0);
// }

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}


// Use the Spread Operator to Evaluate Arrays In-Place

// Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);


// Use Destructuring Assignment to Extract Values from Objects

/*
Replace the two assignments with an equivalent destructuring assignment. 
It should still assign the variables today and tomorrow the values of 
today and tomorrow from the HIGH_TEMPERATURES object.
*/

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Only change code below this line

// const today = HIGH_TEMPERATURES.today
const { today } = HIGH_TEMPERATURES;

// const tomorrow = HIGH_TEMPERATURES.tomorrow
const { tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line



//Use Destructuring Assignment to Assign Variables from Objects

/*
Replace the two assignments with an equivalent destructuring assignment. 
It should still assign the variables highToday and highTomorrow the 
values of today and tomorrow from the HIGH_TEMPERATURES object.
*/ 

const HIGH_TEMPERATURES2 = {
    yesterday1: 75,
    today1: 77,
    tomorrow1: 80
};

// Only change code below this line

// const highToday = HIGH_TEMPERATURES2.today;
const { today1: highToday } = HIGH_TEMPERATURES2

// const highTomorrow = HIGH_TEMPERATURES2.tomorrow;
const { tomorrow1: highTomorrow } = HIGH_TEMPERATURES

// Only change code above this line


// Use Destructuring Assignment to Assign Variables from Nested Objects

/*
Replace the two assignments with an equivalent destructuring assignment. 
It should still assign the variables lowToday and highToday the values 
of today.low and today.high from the LOCAL_FORECAST object.
*/

const LOCAL_FORECAST = {
    yesterday2: { low: 61, high: 75 },
    today2: { low: 64, high: 77 },
    tomorrow2: { low: 68, high: 80 }
};

// Only change code below this line

const { today2: { low: lowToday } } = LOCAL_FORECAST;
const { today2: { high: highToday1 } } = LOCAL_FORECAST;

// Only change code above this line


// Use Destructuring Assignment to Assign Variables from Arrays

/*
Use destructuring assignment to swap the values of a and b so 
that a receives the value stored in b, and b receives the value stored in a.
*/

let a = 8, b = 6;
// Only change code below this line

[a, b] = [b, a]



// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

/*
Use destructuring assignment with the rest parameter to perform an effective 
Array.prototype.slice() so that arr is a sub-array of the original array source 
with the first two elements omitted.
*/

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...arr] = list; // Change this line
    // Only change code above this line
    return arr;
}
const arr = removeFirstTwo(source);



// Use Destructuring Assignment to Pass an Object as a Function's Parameters

/*
Use destructuring assignment within the argument to the function half to 
send only max and min inside the function.
*/

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0;
// Only change code above this line


// Create Strings using Template Literals

/*
Use template literal syntax with backticks to create an array of list 
element (li) strings. Each list element's text should be one of the array
 elements from the failure property on the result object and have a class 
 attribute with the value text-warning. The makeList function should return 
 the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below).
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
*/

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // Only change code above this line

    return failureItems;
}

const failuresList = makeList(result.failure);


// Write Concise Object Literal Declarations Using Object Property Shorthand

/* 
Use object property shorthand with object literals to create and return 
an object with name, age and gender properties.
*/

const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
        name, age, gender
    };
    // Only change code above this line
};


// Write Concise Declarative Functions with ES6

/*
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
Refactor the function setGear inside the object bicycle to use the shorthand 
syntax described above.
*/

// Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);


// Use class Syntax to Define a Constructor Function

/*
Use the class keyword and write a constructor to create the Vegetable class.

The Vegetable class allows you to create a vegetable object with a property 
name that gets passed to the constructor.
*/

// Only change code below this line
class Vegetable {
    constructor(name) {
        this.name = name
    }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'


// Use getters and setters to Control Access to an Object

/*
Use the class keyword to create a Thermostat class. The constructor accepts 
a Fahrenheit temperature.

In the class, create a getter to obtain the temperature in Celsius and 
a setter to set the temperature in Celsius.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is 
the value of temperature in Fahrenheit, and C is the value of the same 
temperature in Celsius.

Note: When you implement this, you will track the temperature inside 
the class in one scale, either Fahrenheit or Celsius.

This is the power of a getter and a setter. You are creating an API 
for another user, who can get the correct result regardless of which one you track.

In other words, you are abstracting implementation details from the user.
*/

// Only change code below this line
class Thermostat {
    constructor(Fahrenheit) {
        this.Fahrenheit = Fahrenheit
    }
    get temperature() {
        return (5 / 9) * (this.Fahrenheit - 32);
    }

    set temperature(celsius) {
        this.Fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius


//Created a module script in the index.html file


// // Using export to Share a Code Block

// /*
// There are two string-related functions in the editor. Export both 
// of them using the method of your choice.
// */

// const uppercaseString = (string) => {
//     return string.toUpperCase();
// }

// const lowercaseString = (string) => {
//     return string.toLowerCase()
// }

// export { uppercaseString, lowercaseString }


// Reuse JavaScript Code Using import

/*
Add the appropriate import statement that will allow the current 
file to use the uppercaseString and lowercaseString functions you 
exported in the previous lesson. These functions are in a file 
called exportFiles.js, which is in the same directory as the current file.
*/ 

import { uppercaseString, lowercaseString } from './exportFiles.js';

// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");



// Using * to Import Everything from a File

/*
The code in this file requires the contents of the file: exportFiles.js, 
that is in the same directory as the current file. Use the import * as 
syntax to import everything from the file into an object called stringFunctions.
*/

import * as stringFunctions from './exportFiles.js'
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");


// Creating an Export Fallback with export default in exportFiles.js



// Importing a default export

/*
In the following code, import the default export from the exportFiles.js file, 
found in the same directory as this file. Give the import the name subtract.
*/

// without the curly braces, default export is imported into the variable subtract

import subtract from './math_functions.js'
// Only change code above this line

subtract(7, 4);


// Creating a JavaScript Promise

/*
Create a new promise called makeServerRequest. Pass in a function with resolve 
and reject parameters to the constructor.
*/

const makeServerRequest = new Promise((resolve, reject) => {

})


// Completing a Promise with resolve and reject

/*
Make the promise handle success and failure. If responseFromServer is true, 
call the resolve method to successfully complete the promise. Pass resolve a 
string with the value We got the data. If responseFromServer is false, use the 
reject method instead and pass it the string: Data not received.
*/

const makeServerRequest1 = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if (responseFromServer) {
        // Change this line
        resolve("We got the data")
    } else {
        // Change this line
        reject("Data not received")
    }
});



// Handle a Fulfilled Promise with then

/*
Add the then method to your promise. Use result as the parameter of its 
callback function and log result to the console.
*/

const makeServerRequest2 = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest2.then(result => {
    console.log(result)
})


// Handling a Rejected Promise with catch

/*
Add the catch method to your promise. Use error as the parameter of its callback function 
and log error to the console.
*/

const makeServerRequest3 = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

makeServerRequest3.then(result => {
    console.log(result);
});

makeServerRequest3.catch(error => {
    console.log(error)
})



// Using the Test method (under REGULAR EXPRESSIONS)

/*
Apply the regex myRegex on the string myString using the .test() method.
*/ 

let myString = "Hello, World!";
let myRegex = /Hello/;
let result1 = myRegex.test(myString); // Change this line



// Match Literal Strings

/*

Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.
*/

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);
console.log(result2);


// Matching a Literal String with Different Possibilities

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result3 = petRegex.test(petString);


// Ignore Case While Matching

/*
Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any 
abbreviations or variations with spaces.
*/

let myString1 = "freeCodeCamp";
let fccRegex = /Freecodecamp/i; // Change this line
let result4 = fccRegex.test(myString1);



// Extract Matches

/*
Apply the .match() method to extract the string coding.
*/

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/i; // Change this line
let result5 = extractStr.match(codingRegex); // Change this line



// Finding More Than the First Match

/*
Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

Note
You can have multiple flags on your regex like /search/gi
*/

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result6 = twinkleStar.match(starRegex); // Change this line



// Match Anything with Wildcard Period

/*
Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. 
Your regex should use the wildcard character.
*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result7 = unRegex.test(exampleStr);



// Matching a Single Character with Multiple Possibilities

/*
Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the 
vowels in the string quoteSample.

Note: Be sure to match both upper- and lowercase vowels.
*/

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result8 = quoteSample.match(vowelRegex); // Change this line



// Match Letters of the Alphabet

/*
Match all the letters in the string quoteSample.

Note: Be sure to match both uppercase and lowercase letters.
*/

let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result9 = quoteSample1.match(alphabetRegex); // Change this line



// Match Numbers and Letters of the Alphabet

/*
Create a single regex that matches a range of letters between h and s, and a 
range of numbers between 2 and 6. Remember to include the appropriate flags 
in the regex.
*/

let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/ig; // Change this line
let result10 = quoteSample2.match(myRegex1); // Change this line



// Match Single Characters Not Specified

/*
Create a single regex that matches all characters that are not a number or a vowel.
Remember to include the appropriate flags in the regex.
*/ 

let quoteSample3 = "3 blind mice.";
let myRegex2 = /[^aeiou0-5]/ig; // Change this line
let result11 = quoteSample3.match(myRegex2); // Change this line



// Matching Characters that Occur One or More Times

/*
You want to find matches when the letter s occurs one or more times in Mississippi. 
Write a regex that uses the + sign.
*/

let difficultSpelling = "Mississippi";
let myRegex3 = /s+/g; // Change this line
let result12 = difficultSpelling.match(myRegex3);



// Matching Characters that Occur Zero or More Times

/*
For this challenge, chewieQuote has been initialized as the string Aaaaaaaaaaaaaaaarrrgh! 
behind the scenes. Create a regex chewieRegex that uses the * character to match an 
uppercase A character immediately followed by zero or more lowercase a characters in 
chewieQuote. Your regex does not need flags or character classes, and it should not match 
any of the other quotes.
*/

// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result13 = chewieQuote.match(chewieRegex);



// Find Characters with Lazy Matching

/*
Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". 
Remember the wildcard . in a regular expression matches any character. Use lazy matching
*/

let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<[a-z0-5]*?>/; // Change this line
let result14 = text.match(myRegex4);



// Find One or More Criminals in a Hunt

/*
A group of criminals escaped from jail and ran away, but you don't know how many. 
However, you do know that they stay close together when they are around other people. 
You are responsible for finding all of the criminals at once.

Here's an example to review how to do this:

The regex /z+/ matches the letter z when it appears one or more times in a row. 
It would find matches in all of the following strings:

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
But it does not find matches in the following strings since there are no letter z characters:

""
"ABC"
"abcabc"

Write a greedy regex that finds one or more criminals within a group of other people. 
A criminal is represented by the capital letter C.

Your regex should match one criminal (C) in the string C
Your regex should match two criminals (CC) in the string CC
Your regex should match three criminals (CCC) in the string P1P5P4CCCcP2P6P3.
Your regex should match five criminals (CCCCC) in the string P6P2P7P4P5CCCCCP3P1
Your regex should not match any criminals in the empty string ""
Your regex should not match any criminals in the string P1P2P3
Your regex should match fifty criminals (CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC) 
in the string P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3.
*/


let reCriminals = /C+/; // Change this line



// Match Beginning String Patterns

/*
Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.
*/

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result15 = calRegex.test(rickyAndCal);


// Match Ending String Patterns

/*
Use the anchor character ($) to match the string caboose at the end of the string caboose.
*/

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result16 = lastRegex.test(caboose);



// Match All Letters and Numbers

/*
Use the shorthand character class \w to count the number of alphanumeric characters in 
various quotes and strings.
*/

let quoteSample4 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result17 = quoteSample.match(alphabetRegexV2).length;



// Match Everything But Letters and Numbers

/*
Use the shorthand character class \W to count the number of non-alphanumeric characters 
in various quotes and strings.
*/ 

let quoteSample5 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result18 = quoteSample.match(nonAlphabetRegex).length;


// Match All Numbers

/*
Use the shorthand character class \d to count how many digits are in movie titles. 
Written out numbers ("six" instead of 6) do not count.
*/

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result19 = movieName.match(numRegex).length;


// Match All Non-Numbers

/*
Use the shorthand character class for non-digits \D to count how many non-digits are 
in movie titles.
*/

let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result20 = movieName.match(noNumRegex).length;



// Restrict Possible Usernames

/*
Usernames are used everywhere on the internet. They are what give users a unique 
identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users 
have to follow when creating their username.

Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them 
at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can only use 
alphabet letters as characters.

Change the regex userCheck to fit the constraints listed above.
*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result21 = userCheck.test(username);

/*
^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input
i - both upper and lower case characters
*/



// Match Whitespace

/*
Change the regex countWhiteSpace to look for multiple whitespace characters in a string.
*/

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result22 = sample.match(countWhiteSpace);


// Match Non-Whitespace Characters

/*
Change the regex countNonWhiteSpace to look for multiple non-whitespace characters in a string.
*/

let sample1 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result23 = sample.match(countNonWhiteSpace);



// Specify Upper and Lower Number of Matches

/*
Change the regex ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.
*/

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; // Change this line
let result24 = ohRegex.test(ohStr);




// Specify Only the Lower Number of Matches

/*
Change the regex haRegex to match the word Hazzah only when it has four or more letter z's.
*/

let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i; // Change this line
let result25 = haRegex.test(haStr);




// Specify Exact Number of Matches

/*
Change the regex timRegex to match the word Timber only when it has four letter m's.
*/

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result26 = timRegex.test(timStr);




// Check for All or None

/*
Change the regex favRegex to match both the American English (favorite) and the British 
English (favourite) version of the word.
*/

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result27 = favRegex.test(favWord);




// Positive and Negative Lookahead

/*
Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, 
and have two consecutive digits.
*/

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
/*
The first lookahead checks if the password is greater than 5 characters \w = [A-Za-z0-9]
The secon lookahead checks if [A-Za-z0-9] has characters that occur zero or more times (*)
and if these characters has two consecutive digits i.e. \d{2} = [0-9]{2} 2 characters between 0 and 9.
*/
let result28 = pwRegex.test(sampleWord);




// Check For Mixed Grouping of Characters

/*

Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case 
sensitive manner and it should make concessions for middle names.

Then fix the code so that the regex that you have created is checked against myString and either 
true or false is returned depending on whether the regex matches.
*/

let myString3 = "Eleanor Roosevelt";
let myRegex5 = /(Franklin|Eleanor).*Roosevelt/; // Change this line
let result29 = myRegex5.test(myString3); // Change this line
// After passing the challenge experiment with myString and see how the grouping works



// Reuse Patterns Using Capture Groups

/*
Use capture groups in reRegex to match a string that consists of only the same number repeated exactly 
three times separated by single spaces.
*/

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result30 = reRegex.test(repeatNum);



// Use Capture Groups to Search and Replace

/*
Write a regex fixRegex using three capture groups that will search for each word in the 
string one two three. Then update the replaceText variable to replace one two three with 
the string three two one and assign the result to the result variable. Make sure you are 
utilizing capture groups in the replacement string using the dollar sign ($) syntax.
replaceText should use parenthesized submatch string(s) (i.e. the nth parenthesized 
    submatch string, $n, corresponds to the nth capture group).
*/

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result31 = str.replace(fixRegex, replaceText);




// Remove Whitespace from Start and End

/*

Write a regex and use the appropriate string methods to remove whitespace at the beginning 
and end of strings.

Note: The String.prototype.trim() method would work here, but you'll need to complete this 
challenge using regular expressions.
*/

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result32 = hello.replace(wsRegex, ""); // Change this line






// DEBUGGING
// Use the JavaScript Console to Check the Value of a Variable

/*
Use the console.log() method to print the value of the variable a where noted in the code.
*/

let a1 = 5;
let b1 = 1;
a++;
// Only change code below this line
console.log(a1)

let sumAB = a1 + b1;
console.log(sumAB);



// Understanding the Differences between the freeCodeCamp and Browser Console

/*
First, open your browser console so you can see the logs. To do that, you can right-click 
the freeCodeCamp navigation bar at the top and click inspect on most browsers. Then find 
the console tab in the window that opens.

After that, use console.log to log the output variable. View the two consoles to see the log. 
Finally, use console.clear after your log to clear the browser console. View the difference 
in the two consoles.
*/

let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output)
console.clear()




// Use typeof to Check the Type of a Variable

/*
Add two console.log() statements to check the typeof each of the two variables seven and three in the code.
*/

let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof seven)
console.log(typeof three)




// Catch Misspelled Variable and Function Names

/*
Fix the two spelling errors in the code so the netWorkingCapital calculation works.
*/

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables; //fix the spelling errors
console.log(`Net working capital is: ${netWorkingCapital}`);




// Catch Unclosed Parentheses, Brackets, Braces and Quotes

/*
Fix the two pair errors in the code.
SyntaxError: unknown: Unexpected token, expected "," (1:22)

> 1 | let myArray = [1, 2, 3;
    |                       ^
  2 | let arraySum = myArray.reduce((previous, current =>  previous + current);
  3 | console.log(`Sum of array values is: ${arraySum}`);
*/

let myArray5 = [1, 2, 3];
let arraySum = myArray5.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum}`);




// Catch Mixed Usage of Single and Double Quotes

/*
Fix the string so it either uses different quotes for the href value, 
or escape the existing ones. 
Keep the double quote marks around the entire string.
*/

let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);




// Catch Use of Assignment Operator Instead of Equality Operator

/*
Fix the condition so the program runs the right branch, and the appropriate 
value is assigned to result.
*/

let x = 7;
let y = 9;
let result33 = "to come";

if (x == y) {
    result33 = "Equal!";
} else {
    result33 = "Not equal!";
}

console.log(result33);





// Catch Missing Open and Closing Parenthesis After a Function Call

/*
Fix the code so the variable result is set to the value returned from calling 
the function getNine.
*/

function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
}

let result34 = getNine();
console.log(result34);




// Catch Arguments Passed in the Wrong Order When Calling a Function

/*
The function raiseToPower raises a base to an exponent. Unfortunately, it's not called properly 
- fix the code so the value of power is the expected 8.
*/

function raiseToPower(b, e) {
    return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);





// Catch Off By One Errors When Using Indexing

/*
Fix the two indexing errors in the following function so all the numbers 1 through 5 
are printed to the console.
*/

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i < len; i++) {
        // Only change code above this line
        console.log(firstFive[i]);
    }
}

countToFive();




// Use Caution When Reinitializing Variables Inside a Loop

/*
The following function is supposed to create a two-dimensional array with m rows and n columns 
of zeroes. Unfortunately, it's not producing the expected output because the row variable isn't 
being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns 
a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].
This error occurs due to the row[] array being declared as a global variable outside of the nested for loop.
However, to fill the matrix correctly the row[] array must be reset after each iteration of the outer loop.
*/

function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray
        row = [];
        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);





//Prevent Infinite Loops with a Valid Terminal Condition

/*
The myFunc() function contains an infinite loop because the terminal condition i != 4 
will never evaluate to false (and break the looping) - i will increment by 2 each pass, 
and jump right over 4 since i is odd to start. Fix the comparison operator in the terminal 
condition so the loop only runs for i less than or equal to 4.
*/

function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
        console.log("Still going!");
    }
}

console.log(myFunc())





// Use an Array to Store a Collection of Data

/*
We have defined a variable called yourArray. Complete the statement by assigning an array 
of at least 5 elements in length to the yourArray variable. Your array should contain at 
least one string, one number, and one boolean.
*/

let yourArray = ["J.Cole", "Dave", "2pac", 8, true]; // Change this line




// Accessing an Array's Contents Using Bracket Notation

/*
In order to complete this challenge, set the 2nd position (index 1) of myArray to anything 
you want, besides the letter b.
*/

let myArray6 = ["a", "b", "c", "d"];
// Only change code below this line
myArray6[1] = "bee"
// Only change code above this line
console.log(myArray6);




// Adding Items to an Array with push() and unshift()

/*
We have defined a function, mixedNumbers, which we are passing an array as an argument. 
Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning 
of the array and 7, 'VIII', 9 to the end so that the returned array contains representations 
of the numbers 1-9 in order.
*/

function mixedNumbers(arr) {
    // Only change code below this line
    arr.push(7, "VIII", 9)
    arr.unshift("I", 2, "three")
    // Only change code above this line
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));



// Remove Items from an Array with pop() and shift()

/*
We have defined a function, popShift, which takes an array as an argument and returns a new array. 
Modify the function, using pop() and shift(), to remove the first and last elements of the argument 
array, and assign the removed elements to their corresponding variables, so that the returned array 
contains their values.
*/

function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));




// Removing Items Using splice()

/*
We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains 
elements that sum to the value of 10.
*/

const arr3 = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr3.splice(1, 4)
// Only change code above this line
console.log(arr3);




// Adding Items Using splice()

/*
We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. 
Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' 
and 'BlanchedAlmond' in their respective places.
*/

function htmlColorNames(arr4) {
    // Only change code below this line
    arr4.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    // Only change code above this line
    return arr4;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));



// Copy Array Items Using slice()

/*
We have defined a function, forecast, that takes an array as an argument. Modify the function using 
slice() to extract information from the argument array and return a new array that contains the string 
elements warm and sunny.
*/

function forecast(arr5) {
    // Only change code below this line
    let newArr = arr5.slice(2, 4)
    return newArr;
}

// Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));




// Copy an Array with the Spread Operator

/*
We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. 
The function is supposed to return a new array made up of num copies of arr. We have done most of 
the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so 
that it works correctly (hint: another method we have already covered might come in handy here!).
*/

function copyMachine(arr6, num1) {
    let newArr1 = [];
    while (num1 >= 1) {
        // Only change code below this line
        let obj1 = [...arr6]
        newArr1.push(obj1)
        // Only change code above this line
        num1--;
    }
    return newArr1;
}

console.log(copyMachine([true, false, true], 2));



// Combine Arrays with the Spread Operator

/*
We have defined a function spreadOut that returns the variable sentence. 
Modify the function using the spread operator so that it returns the array 
['learning', 'to', 'code', 'is', 'fun'].
*/

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
    return sentence;
}

console.log(spreadOut());




// Check For The Presence of an Element With indexOf()

/*
indexOf() can be incredibly useful for quickly checking for the presence of an 
element on an array. We have defined a function, quickCheck, that takes an array 
and an element as arguments. Modify the function using indexOf() so that it 
returns true if the passed element exists on the array, and false if it does not.
*/

function quickCheck(arr7, elem1) {
    // Only change code below this line
    if (arr7.indexOf(elem1) >= 0) {
        return true
    } else {
        return false
    }
    // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));




// Iterate Through All of an Array's Items Using For Loops

/*
We have defined a function, filteredArray, which takes arr, a nested array, 
and elem as arguments, and returns a new array. elem represents an element 
that may or may not be present on one or more of the arrays nested within arr. 
Modify the function, using a for loop, to return a filtered version of the 
passed array such that any array nested within arr containing elem has been 
removed.
filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3) should return []
*/

function filteredArray(arr8, elem) {
    let newArr2 = [];
    // Only change code below this line
    for (let d = 0; d < arr8.length; d++) {
        if (arr8[d].indexOf(elem) == -1) {
            newArr2.push(arr8[d])
        }
    }
    // Only change code above this line
    return newArr2;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));




// Creating complex multi-dimensional arrays

/*
We have defined a variable, myNestedArray, set equal to an array. 
Modify myNestedArray, using any combination of strings, numbers, 
and booleans for data elements, so that it has exactly five levels 
of depth (remember, the outer-most array is level 1). Somewhere on 
the third level, include the string deep, on the fourth level, include 
the string deeper, and on the fifth level, include the string deepest.
*/

let myNestedArray = 
// level 1
[
    // Only change code below this line
    
    // level 2
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    [
        // level 3
        ['deep'],
        [
            // level 4
            ['deeper'],
            [
                // level 5
                ['deepest']
            ]
        ]
    ],
    ['loop', 'shift', 6, 7, 1000, 'method'],
    ['concat', false, true, 'spread', 'array'],
    ['mutate', 1327.98, 'splice', 'slice', 'push'],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
    // Only change code above this line
];





// Adding Key-Value Pairs to JavaScript Objects

/*
A foods object has been created with three entries. Using the syntax 
of your choice, add three more entries to it: bananas with a value of 
13, grapes with a value of 35, and strawberries with a value of 27.
*/

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

// Only change code below this line
foods.bananas = 13

const fruit = 'grapes'
foods[fruit] = 35

foods.strawberries = 27
// Only change code above this line

console.log(foods);




// Modifying an Object Nested Within an Object

/*
Here we've defined an object userActivity, which includes another 
object nested within it. Set the value of the online key to 45.
*/

let userActivity = {
    id1: 23894201352,
    date1: 'January 1, 2017',
    data1: {
        totalUsers1: 51,
        online1: 42
    }
};

// Only change code below this line
userActivity.data1.online1 = 45
// Only change code above this line

console.log(userActivity);




// Accessing Property Names with Bracket Notation

/*
We've defined a function, checkInventory, which receives a scanned 
item as an argument. Return the current value of the scannedItem key 
in the foods object. You can assume that only valid keys will be 
provided as an argument to checkInventory.
*/

let foods1 = {
    apples1: 25,
    oranges1: 32,
    plums1: 28,
    bananas1: 13,
    grapes1: 35,
    strawberries1: 27
};

function checkInventory1(scannedItem1) {
    // Only change code below this line
    let inventory1 = foods1[scannedItem1]

    return inventory1
    // Only change code above this line
}

console.log(checkInventory1("apples"));




// Using the delete Keyword to Remove Object Properties

/*
Use the delete keyword to remove the oranges, plums, and strawberries 
keys from the foods object.
*/

let foods2 = {
    apples2: 25,
    oranges2: 32,
    plums2: 28,
    bananas2: 13,
    grapes2: 35,
    strawberries2: 27
};

// Only change code below this line
delete foods2.oranges2

delete foods2.plums2

delete foods2.strawberries2
// Only change code above this line

console.log(foods2);



// Checking if an Object has a Property

/*
Finish writing the function so that it returns true if the object 
passed to it contains all four names, Alan, Jeff, Sarah and Ryan 
and returns false otherwise.
*/

let users1 = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    // Only change code below this line
    if (userObj.hasOwnProperty("Alan") &&
        userObj.hasOwnProperty("Jeff") &&
        userObj.hasOwnProperty("Sarah") &&
        userObj.hasOwnProperty("Ryan")) {
        return true
    } else {
        return false
    }
    // Only change code above this line
}

console.log(isEveryoneHere(users1));




// Iterate Through the Keys of an Object with a for...in Statement

/*
NOTE: Objects do not maintain an ordering to stored keys like arrays do; thus 
a key's position on an object, or the relative order in which it appears, is 
irrelevant when referencing or accessing that key.

We've defined a function countOnline which accepts one argument (a users object). 
Use a for...in statement within this function to loop through the users object 
passed into the function and return the number of users whose online property is 
set to true. An example of a users object which could be passed to countOnline is 
shown below. Each user will have an online property with either a true or false value.
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
*/

const users2 = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
    // Only change code below this line
    let onlineUser = 0;
    for (let user in usersObj) {
        if (usersObj[user].online === true) {
            onlineUser++;
        }
    }
    return onlineUser;
    // Only change code above this line
}

console.log(countOnline(users2));



// Generate an Array of All Object Keys with Object.keys()

/*
Finish writing the getArrayOfUsers function so that it returns an array 
containing all the properties in the object it receives as an argument.
*/

let users3 = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj1) {
    // Only change code below this line
    return Object.keys(obj1)
    // Only change code above this line
}

console.log(getArrayOfUsers(users3));



// Modify an Array Stored in an Object

/*
Take a look at the object we've provided in the code editor. 
The user object contains three keys. The data key contains five keys, 
one of which contains an array of friends. From this, you can see how 
flexible objects are as data structures. We've started writing a function 
addFriend. Finish writing it so that it takes a user object and adds the 
name of the friend argument to the array stored in user.data.friends and 
returns that array.
*/

let user4 = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj1, friend) {
    // Only change code below this line
    user4.data.friends.push(friend)
    return userObj1.data.friends
    // Only change code above this line
}

console.log(addFriend(user4, 'Pete'));




// BASIC ALGORITHM SCRIPTING

// Convert Celsius to Fahrenheit

/*
The formula to convert from Celsius to Fahrenheit is the temperature 
in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. 
Use the variable fahrenheit already defined and assign it the Fahrenheit 
temperature equivalent to the given Celsius temperature. Use the formula 
mentioned above to help convert the Celsius temperature to Fahrenheit.
*/

function convertCtoF(celsius) {
    let fahrenheit;
    fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit;
}

console.log(convertCtoF(30));



// Reverse a String

/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

/*
Starting at the last character of the string passed to the function, 
you build a new string reversedStr from str.

During each iteration of the for loop, reversedStr gets concatenated 
with itself and the current character.

Finally, you return the final value of reversedStr.
*/

function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(reverseString("hello"));



// Factorialize a Number

/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product 
of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/

function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
        product *= i;
    }
    return product;
}

console.log(factorialize(5));

/*
Since the return values for the function will always be greater than or equal to 1, 
product is initialized at one. For the case where the number is 0, the for loop 
condition will be false, but since product is initialized as 1, it will have the 
correct value when the return statement is executed.

For all numbers passed to the function which are greater than one, the simple for 
loop will increment i by one each iteration and recalculate product up to the value num.

You know your solution should return 1 when the number passed to the function is 0 or 1. 
Also, the final value returned will be the product of all the numbers between 1 and the 
number (inclusive). If you initialize the value for the product to 1, then think how you 
could start at the given number and continue decrementing this number until a specific 
value while multiplying the product by the number at each step.

Recursive Solution

This one starts easily since 0! = 1, so you can go ahead and simply return 1 there.

We can use that as an if in order to break the loop we’re going to create using a recursive 
function. It will check if the number you gave the function is 0 (which would be the end of 
your factorial chain). Functions “end” when they return anything. In fact, all functions 
without an explicit return statement will return undefined.

This is also why instead of having “finished”, a function is always said to “have returned”. 
And now this…

- Understanding recursion

Recursion refers to a function repeating (calling) itself. In this case we are basically 
returning the given number (i.e. 5), multiplied by the function itself but this time the 
value passed to the num parameter is num-1 (which initially translates to 4). The very 
function is going to run inside itself interesting, eh?

- Understanding the flow

The first returned value can be visualized better if you think about those parenthesis 
operations you did in secondary school where you do the math inside every parenthesis from 
inside out, bracket and square bracket until you get a final result (a total). This time 
it’s the same thing, look at the program flow:

During the first execution of the function:

[num = 5]

Is 5 equal to 1 or 0? No —> Oki doki, let’s continue…

Returns:

(5 _(second execution: 4 _(third execution: 3 _(fourth execution: 2 _fifth execution: 1))))

What it returns can be viewed as (5*(4*(3*(2*1)))) or just 5 * 4 * 3 * 2 * 1, and the function 
will return the result of that operation: 120. Now, let’s check what the rest of the executions do:

During the rest of the executions:

Second Execution: num = 5-1 = 4 → is num 0 or 1? No

→ return the multiplication between 4 and the next result when num is now 4-1.

Third Execution: num = 4 - 1 = 3 → is num 0 or 1? No

→ return the multiplication between 3 and the next result when num is now 3-1.

Fourth Execution: num = 3-1 = 2 → is num 0 or 1? No

→ return the multiplication between 2 and the next result when num is now 2-1.

Fifth Execution: num = 2-1 = 1 → is num 0 or 1? Yep

→ return 1. And this is where the recursion stops because there are no more executions.
*/




// Find the Longest Word in a String

/*
Return the length of the longest word in the provided sentence.

Your response should be a number. 
*/

function findLongestWordLength(str) {
    // Take the string and convert it into an array of words.
    let word = str.split(' ');

    /*
    Declare a variable to keep track of the maximum length and loop 
    from 0 to the length of the array of words.
    */
    let strLength = 0;

    /*
    Then check for the longest word by comparing the current word to the 
    previous one and storing the new longest word. At the end of the loop 
    just return the number value of the variable maxLength.
    */
    for (let i = 0; i < word.length; i++) {
        if (word[i].length > strLength) {
            strLength = word[i].length;
        }
    }

    return strLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));




// Return Largest Numbers in Arrays

/*
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access 
each member with array syntax arr[i].
*/

function largestOfFour(arr) {
    // Create a variable to store the results as an array.
    const newArr = []

    // Create an outer loop to iterate through the outer array.
    for (let k = 0; k < arr.length; k++) {

        /* Create a second variable to hold the largest number and initialize 
        it with the first number. This must be outside an inner loop so it won’t 
        be reassigned until we find a larger number.
        */
        let largestNum = arr[k][0]

        // Create said inner loop to work with the sub-arrays.
        for (let b = 1; b < arr[k].length; b++) {

            /*
            Check if the element of the sub array is larger than the currently 
            stored largest number. If so, then update the number in the variable.
            */
            if (arr[k][b] > largestNum) {
                largestNum = arr[k][b]
            }

            /*
            After the inner loop, save the largest number in the corresponding 
            position inside of the results array
            */
        }
        newArr[k] = largestNum
    }
    // And finally return said array.
    return newArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));



// Confirm the Ending of a string

/*
Check if a string (first argument, str) ends with the given 
target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was 
introduced in ES2015. But for the purpose of this challenge, we would 
like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
    /*
    We need to make a pattern from the target variable that exists 
    at the end of the string str.

    Since we will use a variable that will change the pattern each 
    time the function is called, we will use the constructor of the 
    regular expression object new RegExp(pattern[, flags]), so we 
    start with: new RegExp(target).

    Then we have to check at the end of the string, so we concatenate 
    to the target variable the $ character to match the end: 
    new RegExp(target+'$').

    We use the flag i to ignore the case of the pattern and we have 
    our completed RegExp: new RegExp(target+'$','i'), or we can 
    omit the flag entirely.

    Finally, we are using our regular expression with the test method 
    to the given string, to check if the string ends with the pattern 
    and return true or false accordingly.
    (c)freeCodeCamp
    */
    let re = new RegExp(target + "$", "i");

    return re.test(str);
}

confirmEnding("Bastian", "n");




// Repeat a String Repeat a String

/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. For the purpose of 
this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {

    // create a variable and store the new string
    let newStr = ""

    // create a loop to count the number of times the string should be repeated and add it to the new str
    for (let i = 0; i < num; i++) {
        newStr += str
    }

    return newStr;
}

console.log(repeatStringNumTimes("abc", 3));




// Truncate a String

/*
Truncate a string (first argument) if it is longer than the given maximum 
string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {

    //create a new string for the truncated string
    let truncStr = " "

    /*
    create an if statement to determine if the string length is greater than 
    the num we want to truncate it, we return a slice of our string starting 
    at character 0, and ending at num. We then append our '...' to the end 
    of the string.
    */
    if (str.length > num) {
        return str.slice(0, num) + "..."
    } else {
        return str;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));



// Finders Keepers

/*
Create a function that looks through an array arr and returns the first element 
in it that passes a 'truth test'. This means that given an element x, the 
'truth test' is passed if func(x) is true. If no element passes the test, 
return undefined.
*/

function findElement(arr, func) {

    let num = 0;

    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }

    return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));




// Boo Who

/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function booWho(bool) {
    if (bool === true || bool === false) {
        return true
    } else {
        return false
    }
}

console.log(booWho(null));




// Title Case a Sentence

/*
Return the provided string with the first letter of each 
word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize 
connecting words like the and of.
*/

function titleCase(str) {

    /*
    spilt the string by WhiteSpaces and create a variable to track this 
    updated title
    */
    const newTitle = str.split(" ")
    const updatedTitle = []

    /*
    use a loop to turn turn the first character of the word to uppercase 
    and the rest to lowercase by creating concatenated string composed of 
    the whole word in lowercase with the first character replaced by its 
    uppercase
    */
    for (let strings in newTitle) {
        updatedTitle[strings] = newTitle[strings][0].toUpperCase() 
        + newTitle[strings].slice(1).toLowerCase();
    }
    /*
    Array.join() Adds all the elements of an array into a string, 
    separated by the specified separator string.
    */
    return updatedTitle.join(" ")
}

console.log(titleCase("I'm a little tea pot"));



// Slice and Splice

/*
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same 
after the function runs.
*/

function frankenSplice(arr1, arr2, n) {

    /*
    Using the slice() function we can create an exact replica of arr2 and assign the result of the operation to a variable, newArray
    */
    let newArray = arr2.slice()

    /*
    Now that we have an array that we can mutate on, we can iterate through every item in the first array. For each item in the first array we can use the splice() function to insert the item into index n of newArray
    */
    for (let i = 0; i < arr1.length; i++) {
        newArray.splice(n, 0, arr1[i]);

        /*
        We increment the index n by one. This will ensure that every item from the arr1 is inserted into newArray in the proper index position
        */
        n++;
    }

    return newArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));




// Falsy Bouncer

/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {

    // create a new empty array
    let newArray2 = []

    /*
    We use a for cycle to iterate over all elements of the provided array (arr)
    */
    for (let i = 0; i < arr.length; i++) {

        /*
        use an if statement to check if the element is "falsy"
        If the element is not false, we push it to the new array (newArray2). 
        This result in the new array (newArray2) containing only true elements.
        */
        if (arr[i]) newArray2.push(arr[i]);

    }
    return newArray2
}

console.log(bouncer([7, "ate", "", false, 9]));

/*
another solution is to use the Array.prototype.filter method which expects 
a function that returns a Boolean value. It takes a single argument 
and returns true for a truthy value or false for a falsy value. 
Hence we pass the built-in Boolean function.

function bouncer(arr) {
  return arr.filter(Boolean);
}
*/



// Where do I belong

/*
Return the lowest index at which a value (second argument) should 
be inserted into an array (first argument) once it has been sorted. 
The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because 
it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once 
the array has been sorted it will look like [3,5,20] and 19 is less 
than 20 (index 2) and greater than 5 (index 1).
*/

function getIndexToIns(arr, num){
    /*
    First, sort the array using .sort(callbackFunction) to sort it by 
    lowest to highest, from left to right
    */
    arr.sort((a, b) => a - b)

    /*
    Then, use a for loop to compare the items in the array starting 
    from the smallest one. When an item on the array is greater than 
    the number we are comparing against, then we return the index.
    */
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num)
            return i;
    }

    return arr.length
}

console.log(getIndexToIns([40, 60], 50))



// Mutation

/*
Return true if the string in the first element of the array 
contains all of the letters of the string in the second 
element of the array.

For example, ["hello", "Hello"], should return true because 
all of the letters in the second string are present in the 
first, ignoring case.

The arguments ["hello", "hey"] should return false because 
the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of 
the letters in line are present in Alien.
*/

function mutation(arr) {

    /*
    First we make the two strings in the array lowercase. 
    test will hold what we are looking for in target.
    */ 
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();

    /*
    Then we loop through our test characters and if any of 
    them is not found we return false.
    */
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) return false;
    }

    /*
    If they are all found, the loop will finish without 
    returning anything and we get to return true.
    */
    return true;
}

console.log(mutation(["hello", "hey"]));




// Chunky Monkey

/*
Write a function that splits an array (first argument) into 
groups the length of size (second argument) and returns them 
as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
    /*
    let’s start by first creating two new arrays 
    to store the temporary array and the new 
    smaller arrays
    */
    let tempArr = []
    let newArrays = []

    /*
    Next we’ll need a for loop to loop through arr
    Our for loop loops until i is equal to or more
    than the length of the array
    */
    for (let i = 0; i < arr.length; i++) {

        /*
        Inside our loop, we push to tempArr using 
        tempArr.push(arr[i])
        if the remainder of i / size is not equal to size - 1.
        */
        if (i % size !== size - 1) tempArr.push(arr[i]);

        /*
        Otherwise, we push to tempArr, push tempArr to the
        newArrays variable and reset tempArr to an empty array.
        */
        else {
            tempArr.push(arr[i]);

            /*
            Next, if tempArr isn’t an empty array, 
            we push it to newArrays.
            */
            newArrays.push(tempArr);
            tempArr = [];
        }
    }
    if (tempArr.length !== 0) newArrays.push(tempArr);

    /*
    Finally, we return the value of newArrays.
    */
    return newArrays;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));




// OBJECT ORIENTED PROGRAMMING
// Create a Basic JavaScript Object

/*
Create a dog object with name and numLegs properties, and set 
them to a string and a number, respectively.
*/

let dog = {
    name: "Bucky",
    numLegs: 4
};

console.log(dog.name)



// Use Dot Notation to Access the Properties of an Object

/*
Print both properties of the dog object to your console.
*/

let dog1 = {name: "Chappie", numLegs: 4}

console.log("My dog's name is " + dog1.name + ".")
console.log("Like every other dog, he has " + dog1.numLegs + " legs.")



// Create a Method on an Object

/*
Using the dog object, give it a method called sayLegs. 
The method should return the sentence This dog has 4 legs.
*/

let dog2 = {
    name: "Erik",
    numLegs: 4,
    sayLegs: function(){ return "This dog has " + dog2.numLegs + " legs." }
}

console.log(dog2.sayLegs());



// Make Code More Reusable with the `this` Keyword

/*
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};

Modify the dog.sayLegs method to remove any references to dog. 
Use the duck example for guidance.
*/

let dog3 = {
    name: "Ghost",
    numLegs: 4,
    sayLegs: function() {return this.name + " has " + this.numLegs + " legs."}
}

console.log(dog3.sayLegs());



// Define a Constructor Function

/*
Create a constructor, Dog, with properties name, color, and numLegs 
that are set to a string, a string, and a number, respectively.
*/

function Dog() {
    this.name = "Zeus"
    this.color = "grey"
    this.numLegs = 4
}



// Use a Constructor to Create Objects

/*
Use the Dog constructor from the last lesson to create a new instance of Dog,
assigning it to a variable hound.
*/

function Dog2() {
    this.name = "Hermano"
    this.color = "brown"
    this.numLegs = 4
}

let hound = new Dog2()

console.log(hound)



// Extend Constructors to Receive Arguments

/*
Create another Dog constructor. This time, set it up to take 
the parameters name and color, and have the property numLegs 
fixed at 4. Then create a new Dog saved in a variable terrier. 
Pass it two strings as arguments for the name and color 
properties.
*/

function Dog3(name, color){
    this.name = name
    this.color = color
    this.numLegs = 4
}

let terrier = new Dog3("Basim", "brown")

console.log(terrier)



// Verify an Object's Constructor with instanceof

/*
Create a new instance of the House constructor, calling it myHouse
and passing a number of bedrooms. Then, use instanceof to verify 
that it is an instance of House.
*/

function House(numberOfBedrooms){
    this.numberOfBedrooms = numberOfBedrooms
}

let myHouse = new House(8)

console.log(myHouse instanceof House)



// Understand Own Properties

/*
Add the own properties of canary to the array ownProps.
let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
*/

function Birds(name, color) {
    this.name = name
    this.color = color
    this.numLegs = 2
}

let canary = new Birds("Jasper", "yellow")
let ownProps = []

for (let prop in canary){
    if(canary.hasOwnProperty(prop)){
        ownProps.push(prop)
    }
}

console.log(ownProps)




// Use Prototype Properties to Reduce Duplicate Code

/*
Add a numLegs property to the prototype of Dog
*/

function Dog4(name) {
    this.name = name
}

Dog4.prototype.numLegs = 4

let shepherd = new Dog4("Kratos")

console.log(shepherd)




// Iterate Over All Properties

/*
Add all of the own properties of beagle to the array ownProps. 
Add all of the prototype properties of Dog to the array 
prototypeProps.
*/

function Dog5(name) {
    this.name = name
}

Dog5.prototype.numLegs = 4

let beagle = new Dog5("Snoopy")

let ownProps2 = []
let prototypeProps = []

for (let property in beagle) {
    if(beagle.hasOwnProperty(property)){
        ownProps2.push(property)
    } else {
        prototypeProps.push(property)
    }
}

console.log(ownProps2)
console.log(prototypeProps)



// Understand the Constructor Property

/*
Write a joinDogFraternity function that takes a candidate 
parameter and, using the constructor property, return true 
if the candidate is a Dog, otherwise return false.
*/

function Dog6(name){
    this.name = name
}

function joinDogFraternity(candidate){
    if (candidate.constructor === Dog6){
        return true
    } else {
        return false
    }
}



// Change the Prototype to a New Object

/*
Add the property numLegs and the two methods eat() 
and describe() to the prototype of Dog by setting 
the prototype to a new object.
*/

function Dog7(name) {
    this.name = name;
}

Dog7.prototype = {
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom")
    },
    describe: function () {
        console.log("My name is " + this.name)
    }
}



// Remember to Set the Constructor Property when Changing the Prototype

/*
Define the constructor property on the Dog prototype. 
*/

function Dog8(name) {
    this.name = name
}

Dog8.prototype = {
    constructor: Dog8,
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom")
    },
    describe: function () {
        console.log("My name is " + this.name)
    }
}



// Understand Where an Object’s Prototype Comes From

/*
Use isPrototypeOf to check the prototype of beagle.
*/

function Dog9(name) {
    this.name = name
}

let beagle2 = new Dog9("Chappie")

console.log(Dog9.prototype.isPrototypeOf(beagle2))



// Understand the Prototype Chain

/*
Modify the code to show the correct prototype chain.
*/

function Dog10(name) {
    this.name = name
}

let beagle3 = new Dog10("Charlie")

console.log(Object.prototype.isPrototypeOf(Dog.prototype))



// Use Inheritance So You Don't Repeat Yourself

/*
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};
The eat method is repeated in both Cat and Bear. 
Edit the code in the spirit of DRY by moving the 
eat method to the Animal supertype.
*/

function Cat(name){
    this.name = name
}

Cat.prototype = {
    constructor: Cat,
}

function Bear(name){
    this.name = name
}

Bear.prototype = {
    constructor: Bear,
}

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function(){
        console.log("nom nom nom")
    }
}



// Inherit Behaviors from a Supertype

/*
Use Object.create to make two instances of 
Animal named duck and beagle.
*/

function Animal1() { }

Animal1.prototype = {
    constructor: Animal1,
    eat: function(){ console.log("nom nom nom") }
}

function duck(name){
    this.name = name
}

function beagle4(name){
    this.name = name
}

let duck = Object.create(Animal1.prototype)
let beagle4 = Object.create(Animal1.prototype)



// Set the Child's Prototype to an Instance of the Parent

/*
Modify the code so that instances of Dog inherit from Animal.

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line


let beagle = new Dog();
*/

function Animal2() { }

Animal2.prototype = {
    constructor: Animal2,
    eat: function () { console.log("nom nom nom") }
}

function Dog11(name) { this.name = name }

Dog11.prototype = Object.create(Animal2.prototype)

let Dog11 = new Dog11("Harry")



// Reset an Inherited Constructor Property

/*
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line



let duck = new Bird();
let beagle = new Dog();
Fix the code so duck.constructor and beagle.constructor 
return their respective constructors.
*/

function Animal3() { }

Animal3.prototype = { 
    constructor: Animal3, 
    eat: function() {
        console.log("nom nom nom")
    }
}

function Bird4(name){ this.name = name }
function Dog12(name) { this.name = name }

Bird4.prototype = Object.create(Animal3.prototype)
Dog12.prototype = Object.create(Animal3.prototype)

Bird4.prototype.constructor = Bird4
Dog12.prototype.constructor = Dog12

let duck1 = new Bird4("geese")
let beagle5 = new Dog12("Sharon")

console.log(duck1.constructor, beagle5.constructor)



// Add Methods After Inheritance

/*
Add all necessary code so the Dog object inherits from 
Animal and the Dog's prototype constructor is set to Dog. 
Then add a bark() method to the Dog object so that beagle 
can both eat() and bark(). The bark() method should print 
Woof! to the console.
*/

function Animal4 () { }

Animal4.prototype = {
    constructor: Animal4,
    eat: function () { console.log("nom nom nom") }
}

function Dog13(name) { this.name = name }

Dog13.prototype = Object.create(Animal4.prototype)

Dog13.prototype.constructor = Dog13

Dog13.prototype.bark = function () { console.log("Woof!") }

let beagle6 = new Dog13("Grace")



// Override Inherited Methods

/*
Override the fly() method for Penguin so that it returns
the string Alas, this is a flightless bird.
*/

function Bird5 () {  }

Bird5.prototype.fly = function () { return "I'm flying!" }

function Penguin(name) { this.name = name }

Penguin.prototype = Object.create(Bird5)
Penguin.prototype.constructor = Penguin

Penguin.prototype.fly = function () {
    return "Alas, this is a flightless bird."
}

let penguin = new Penguin("Hoe G")

console.log(penguin.fly())



// Use a Mixin to Add Common Behavior Between Unrelated Objects

/*
Create a mixin named glideMixin that defines a method glide.
Then use the glideMixin to give both bird and boat the
ability to glide
*/

let bird1 = {
    name: "Donald",
    numLegs: 2
}

let boat = {
    name: "Warrior",
    type: "race-boat"
}

let glideMixin = function(obj){
    obj.glide = function() {
        console.log("This object glides!")
    }
}

glideMixin(bird1)
glideMixin(boat)



/*
Use Closure to  Protect Properties Within an Object from
Being Modified Externally

TASK:
Change how weight is declared in the Bird function so it is
a private variable. Then, create a method getWeight that
returns the value of weight 15.
*/

function Bird6() {
    let weight = 15
    
    this.getWeight = function() { return weight + "Kg"}
}

let duckie = new Bird6()
console.log(duckie.getWeight())



// Understand the Immediately Invoked Function Expression
// (IIFE)

/*
Rewrite the function makeNest and remove its call so instead
it's an anonymous immediately invoked function expression
(IIFE).

function makeNest(){
    console.log("A cozy nest is ready!")
}
*/

(function() {
    console.log("A cozy nest is ready!")
})()



// Use an IIFE to Create a Module

/*
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

Create a module named funModule to wrap the two mixins
isCuteMixin and singMixin.funModule should return an object.
*/

let funModule = (function () {
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                return true
            }
        },
        singMixin: function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune.")
            }
        }
    }
})()



// // Functional Programming

// Learn about Functional Programming

/*
The members of freeCodeCamp happen to love tea.

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).

const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Only change code below this line
const tea4TeamFCC = null;
// Only change code above this line

In the code above, the prepareTea and getTea functions 
are already defined for you. Call the getTea function to 
get 40 cups of tea for the team, and store them in the 
tea4TeamFCC variable.
*/

const prepareTea = () => 'greenTea'

const getTea = (numOfCups) => {
    const teaCups = []

    for (let cups = 1; cups <= numOfCups; cups+=1){
        const teaCup = prepareTea()
        teaCups.push(teaCup)
    }
    return teaCups
}

const tea4TeamFCC = getTea(40)

console.log(tea4TeamFCC) // prints 'greenTea' 40 times



// Understand Functional Programming Terminology

/*
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).

const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = null;
const tea4BlackTeamFCC = null;
// Only change code above this line

console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
);

Prepare 27 cups of green tea and 13 cups of black tea 
and store them in tea4GreenTeamFCC and tea4BlackTeamFCC 
variables, respectively. Note that the getTea function 
has been modified so it now takes a function as the 
first argument.

Note: The data (the number of cups of tea) is supplied 
as the last argument. We'll discuss this more in later 
lessons.
*/

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea1 = (prepareTea1, numOfCups) => {
    const teaCups1 = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup1 = prepareTea1();
        teaCups1.push(teaCup1);
    }
    return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea1(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea1(prepareBlackTea, 13);
// Only change code above this line

console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
);



// Understand the Hazards of Using Imperative Code

/*
Examine the code in the editor. It's using a method that has side 
effects in the program, causing incorrect behavior. 
The final list of open tabs, stored in finalTabs.tabs, should be 
['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 
'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] 
but the list produced by the code is slightly different.

// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
// Your mailbox, drive, and other work sites
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); 
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);

Change Window.prototype.tabClose so that it removes the correct tab.
*/

// tabs is an array of titles of each site open within the window
const Window = function (tabs) {
    this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

    // Only change code below this line

    const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
    const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

    // Only change code above this line

    return this;
};

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
    .tabOpen() // Open a new tab for cat memes
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);




// Avoid Mutations and Side Effects Using Functional Programming

/*
Fill in the code for the function incrementer so it returns the value of the 
global variable fixedValue increased by one.

// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line


  // Only change code above this line
}
*/

let fixedValue = 4

function incrementer() {
    let newValue = fixedValue + 1
    return newValue
}

console.log(incrementer()) // prints 5
console.log(fixedValue) // prints 4



// Pass Arguments to Avoid External Dependence in a Function

/*
Let's update the incrementer function to clearly declare its dependencies.

// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer() {


  // Only change code above this line
}

Write the incrementer function so it takes an argument, and then returns 
a result after increasing the value by one.
*/


let fixedValue1 = 4

function incrementer1(num){
    num = 1
    let value = num + fixedValue1
    return value
}

console.log(incrementer1()) // prints 5
console.log(fixedValue1) // prints 4

// a better way to do this is

let fixedValue2 = 4

function incrementer2(num) {
    return num + 1
}

console.log(incrementer2(fixedValue2)) // prints 5
console.log(fixedValue1) // prints 4



// Refactor Global Variables Out of Functions

/*
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookName) {

  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}

Rewrite the code so the global array bookList is not changed inside 
either function. The add function should add the given bookName to 
the end of the array passed to it and return a new array (list). 
The remove function should remove the given bookName from the array 
passed to it.

Note: Both functions should return an array, and any new parameters 
should be added before the bookName parameter.
*/

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", 
                    "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {

    // Copy the global array of books into a new variable
    let newBooks = [...arr]

    // Push the new books into the variable
    newBooks.push(bookName)

    // Return the new books
    return newBooks

    // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {

    // Copy the global array of books into a new variable
    let newBooks = [...arr]

    // Check if the bookName is in the newBooks array
    if (newBooks.indexOf(bookName) >= 0) {

        // Remove the book from the available list of newBooks
        newBooks.splice(newBooks.indexOf(bookName), 1)

        // Return the new books
        return newBooks

        // Change code above this line
    }
}

var newBooks1 = add(bookList, 'Mr. Sherlock Holmes')
var newBooks2 = remove(newBooks1, 'Mr. Sherlock Holmes')

console.log(bookList);
console.log(newBooks1)
console.log(newBooks2)



// Use the map Method to Extract Data from an Array

/*

// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

const ratings = [];
for (let i = 0; i < watchList.length; i++) {
  ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
}

// Only change code above this line

console.log(JSON.stringify(ratings));

The watchList array holds objects with information on several movies. 
Use map on watchList to assign a new array of objects to the ratings 
variable. Each movie in the new array should have only a title key 
with the name of the film, and a rating key with the IMDB rating. 
The code in the editor currently uses a for loop to do this, so you 
should replace the loop functionality with your map expression.

*/

// The global variable
const watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// Only change code below this line

const ratings = watchList.map(watchList =>
({
    title: watchList.Title,
    rating: watchList.imdbRating
}));


// for (let i = 0; i < watchList.length; i++) {
//   ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
// }

// Only change code above this line

console.log(JSON.stringify(ratings));



// Implement map on a Prototype

/*

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

Write your own Array.prototype.myMap(), which should behave 
exactly like Array.prototype.map(). You should not use the 
built-in map method. The Array instance can be accessed in 
the myMap method using this.
*/

// The global variable
const s1 = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    const newArray3 = [];
    // Only change code below this line

    // first lets use a for loop to iterate over the values in the array
    for(let i = 0; i < s.length; i++){

        // Next apply the callback function to the array's items and push the new items into a new variable
        newArray3.push(callback(s[i]));
    }

    // Only change code above this line
    return newArray3;
};

const new_s1 = s1.myMap(function (item) {
    return item * 2;
});

console.log(new_s1)



// Use the filter Method to Extract Data from an Array

/*
// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

const filteredList = "";

// Only change code above this line

console.log(filteredList);

The variable watchList holds an array of objects with information 
on several movies. Use a combination of filter and map on watchList 
to assign a new array of objects with only title and rating keys. 
The new array should only include objects where imdbRating is greater 
than or equal to 8.0. Note that the rating values are saved as strings 
in the object and you may need to convert them into numbers to perform 
mathematical operations on them.
*/

// The global variable
const watchList1 = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// Only change code below this line

/* 
First filter out the movies with required ratings and then
map the array to the return the required info 
*/
const filteredList = watchList1
    .filter(watchList1 => watchList1.imdbRating >= 8.0)
    .map(watchList1 =>
    ({
        title: watchList1.Title,
        rating: watchList1.imdbRating
    }));

// Only change code above this line

console.log(filteredList);




// Implement the filter Method on a Prototype

/*
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});


Write your own Array.prototype.myFilter(), which should behave 
exactly like Array.prototype.filter(). You should not use the 
built-in filter method. The Array instance can be accessed in 
the myFilter method using this.

*/

// The global variable
const s2 = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback1) {
    // Only change code below this line
    const newArray5 = [];

    // first lets use a for loop to iterate over the values in the array
    for (let i = 0; i < s2.length; i++) {

        /*
        check if the callback condition is true and push into the new array
        */
        if (callback1(s2[i]) === true) {
            newArray5.push(s1[i]);
        }
    }

    // Only change code above this line
    return newArray5;
};

const new_s2 = s2.myFilter(function (item2) {
    return item2 % 2 === 1;
});

console.log(new_s2)




// Return Part of an Array Using the slice Method

/*
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line


  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

Use the slice method in the sliceArray function to return 
part of the anim array given the provided beginSlice and 
endSlice indices. The function should return an array.
*/

function sliceArr(anim, beginSlice, endSlice){
    return anim.slice(beginSlice, endSlice);
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];

console.log(sliceArr(inputAnim, 1, 3));




