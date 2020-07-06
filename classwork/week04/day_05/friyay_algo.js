// Remove duplicates from this array [1,5,7,8,4,3,1,6,9,8,14]
// Check to see if a word is a palindrome (if you reverse a word and it is the same word (mom, dad, bob, racecar, etc)
// How can you find the minimum and maximum numbers in an array?
// Return the length of the longest word in this sentence: “Those who can imagine anything, can create the impossible.”
// (quote from Alan Turing)

function palindrome(word) {
    var splitString = word.split("")
    //["r", "a"]
    var reverseArray = splitString.reverse()
    var newArray = reverseArray.join("");
    if (word == newArray){
        console.log("Your word is a palindrome!")
    } else {
        console.log("This word is not a palindrome")
    }
}
let word = "racecar"
palindrome(word)

// let numbers = [6,7,8,9,4,5,8]
// let max = 0
// let min = 0


// function maxNum(numbers, max) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > max)
//             max = numbers[i]
//         console.log(max)
//         return max
//     }
// }

// function minNum(numbers, min){
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < min)
//             min = numbers[i]
//         console.log(min)
//         return min
//     }
// }

// maxNum(numbers, max)
// minNum(numbers, min)