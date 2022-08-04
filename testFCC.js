// if/else if statements I

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
const testObj = {
    "hat": "ball-cap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line


// Accessing Object Properties with Bracket Notation ([])











