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






