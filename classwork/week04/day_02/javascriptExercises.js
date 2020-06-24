/* 
Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s 
favorite subject in school is (subject).
*/

function MadLib(name, subject) {
    return `${name}'s favorite subject in school is ${subject}`
}

/*
Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) 
and returns the dollar amount for the tip. Based on:

good -> 20% fair -> 15% bad -> 10%
*/

function tipAmount(bill, los) {
    switch (los) {
        case 'good':
        tip = 0.2
        break;
        case 'fair':
        tip = 0.15
        break;
        case 'poor':
        tip = 0.1
        break;
    }
    tipAmount = los * bill
    return tipAmount
}

/*
Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount 
plus the bill amount. This function may make use of tipAmount as a sub-task.
*/

function totalAmount(bill, los) {
    tipAmount = tipAmount(bill, los)
    totalAmount = tipAmount + bill
    return totalAmount
}

/*
Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the 
other, one per line:
*/

function printNumbers(sNumber, eNumber) {
    for (let i = sNumber; i < eNumber; i++) {
        print(i)
    }
}

printNumbers(2,10)

/*
Write a function printSquare which is given a size and prints a square of that size using asterisks.
*/

function printSquare(size) {
    for (let i = 0; i < size; i++) {
        for (let i = 0; i < size; i++) {
            print("*")
        }
        break
    }
}

/*
Write function printBox which is given a width and height and prints a hollow box of those given dimensions.
*/



/*
Write a function printBanner which is given some text and prints a banner with a border surrounding the text. 
The border has to stretch to the length of the text.
*/



/*
Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

A => 4 E => 3 G => 6 I => 1 O => 0 S => 5 T => 7
*/



/*
Write a function, which is given a string, return the result of extending any long vowels to the length of 5.
*/



/*
Write a function positiveNumbers which is given an array of numbers and returns a new array containing 
only the positive numbers within the given array.
*/



/*
Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.
*/



/*
Write a function decipher which is given a string, an offset, and returns the original message.
*/
