// //Takes an array and adds a counter for each index
// function numbersCounter(array){
//     let newArray = [];
//     array.forEach((element, index) => {
//         element = index + 1 + ": " + element;
//         newArray.push(element);
//     });
//     return newArray;
// }
// //Simpler version with .map
// let numbersWithMap = (a) => a.map((element, index) => `${index + 1}: ${element}`);
// let array = [4, 5, 6, 7, 1];
//
// function findSmallestInt(args) {
//     return Math.min(...args);
// }
//
// function findSmallestIntBySort(args) {
//         args.sort(function(a, b) {
//             return a - b; } )
//         return args[0];
//     }
//
//
// let stringArray = ["Hello", "What", "No", "For sure!", "Yes", "Love it", "Course", "Library", "Bible", "Universe", "Earth", "King", "Easter", "Eggs", "Christmas", "New Years", "Needle", "Water", "Farm", "Food", "Make"];
// //Takes a number and an array, it will return all the string with the length of the number that is inputted
// function getStringsWithCharacterCount(number, array){
//     return array.filter(element => element.length === number);
// }
//
//
// //Find the index of the word "needle" in an array of strings, does not work for capital letters
// function findTheNeedle(hayStackArray){
//     return `found the needle in the haystack at position number ${hayStackArray.indexOf("needle")}`
// }
//
// //This array filters through an array of true or false and gets the amount of true
// function countSheep(arrayOfSheep) {
//     return arrayOfSheep.filter(Boolean).length;
// }
//
// for(let i = 0; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FIZZBUZZ");
//     } else if(i % 5 === 0){
//         console.log("BUZZ");
//      } else if (i % 3 === 0){
//         console.log("FIZZ");
//     } else {
//         console.log(i);
//     }
// }

//Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//Return the running sum of nums.
let numArray = [1, 2, 3, 4, 5, 6, 7, 8];
function runningSum(nums) {
    for(let i = 1 ; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i-1];
        console.log(nums);
    }
    return nums;
}

//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''));
// }

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//     You can return the answer in any order.

// function twoSum (nums, target){
//     for(let i =0; i < nums.length; i++){
//         for(let j =i + 1; j < nums.length; j++){
//             if (nums[i] + nums[j] === target){
//                 return [i, j];
//             }
//         }
//     }
//
// }
//
// function isPalindrome(num){
//     return num.toString().split('').reverse().join('') === num.toString();
// }

//Remove spaces from a string
function removeSpacesFromString(string){
    return x.split(" ").join("");
}

//An array with a mixture of ints and String Ints, return the total added up together
function sumMix(x){
    return x.reduce(function(total, num){
        return total + parseInt(num);
    }, 0)
}