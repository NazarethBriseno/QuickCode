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
let array = [4, 5, 6, 7, 1];

    function findSmallestInt(args) {
        return Math.min(...args);
    }

       function findSmallestIntBySort(args) {
            args.sort(function(a, b) {
                return a - b; } )
            return args[0];
        }


        let stringArray = ["Hello", "What", "No", "For sure!", "Yes", "Love it", "Course", "Library", "Bible", "Universe", "Earth", "King", "Easter", "Eggs", "Christmas", "New Years", "Water", "Farm", "Food", "Make"];
        function getStringsWithCharacterCount(number, array){
            return array.filter(element => element.length === number);
        }
