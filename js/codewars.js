//Takes an array and adds a counter for each index
function numbers(array){
    let newArray = [];
    array.forEach((element, index) => {
        element = index + 1 + ": " + element;
        newArray.push(element);
    });
    return newArray;
}
//Simpler version with .map
let nugimbersWithMap = (a) => a.map((element, index) => `${index + 1}: ${element}`);