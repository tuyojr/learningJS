/*
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {

    // Create an empty string and add the value of the num to it
    let str = '';
    str += num;

    // Create an empty array that will hold the final roman numerals
    let romanNum = [];
    let romanNum1 = '';
    let romanNum2 = '';
    let romanNum3 = '';
    let romanNum4 = '';

    if (str.length == 0) {
        romanNum = [];
    } else if (str.length > 0) {
        switch (str[str.length - 1]) {

            case "1":
                romanNum1 = "I";
                break;
            case "2":
                romanNum1 = "II";
                break;
            case "3":
                romanNum1 = "III";
                break;
            case "4":
                romanNum1 = "IV";
                break;
            case "5":
                romanNum1 = "V";
                break;
            case "6":
                romanNum1 = "VI";
                break;
            case "7":
                romanNum1 = "VII";
                break;
            case "8":
                romanNum1 = "VIII";
                break;
            case "9":
                romanNum1 = "IX";
                break;
        }
        switch (str[str.length - 2]) {

            case "1":
                romanNum2 = "X";
                break;
            case "2":
                romanNum2 = "XX";
                break;
            case "3":
                romanNum2 = "XXX";
                break;
            case "4":
                romanNum2 = "XL";
                break;
            case "5":
                romanNum2 = "L";
                break;
            case "6":
                romanNum2 = "LX";
                break;
            case "7":
                romanNum2 = "LXX";
                break;
            case "8":
                romanNum2 = "LXXX";
                break;
            case "9":
                romanNum2 = "XC";
                break;
        }

        switch (str[str.length - 3]) {

            case "1":
                romanNum3 = "C";
                break;
            case "2":
                romanNum3 = "CC";
                break;
            case "3":
                romanNum3 = "CCC";
                break;
            case "4":
                romanNum3 = "CD";
                break;
            case "5":
                romanNum3 = "D";
                break;
            case "6":
                romanNum3 = "DC";
                break;
            case "7":
                romanNum3 = "DCC";
                break;
            case "8":
                romanNum3 = "DCCC";
                break;
            case "9":
                romanNum3 = "CM";
                break;
        }
        switch (str[str.length - 4]) {

            case "1":
                romanNum4 = "M";
                break;
            case "2":
                romanNum4 = "MM";
                break;
            case "3":
                romanNum4 = "MMM";
                break;
        }
    }
    romanNum.push(romanNum4, romanNum3, romanNum2, romanNum1);
    return romanNum.join("");
}

console.log(convertToRoman('36'));
