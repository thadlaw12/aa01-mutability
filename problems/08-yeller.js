/*
Define a function yeller that takes in an array of words. The function should
return a NEW array where each element of the original array is yelled.
*/

function yeller(arr){
    let newArr = []
    for(let i = 0; i <= arr.length - 1; i++){
        newArr[i] = arr[i].toUpperCase() + '!'
    } return newArr;
}


// let words1 = ['hello', 'world'];
// let yelled1 = yeller(['hello', 'world']);
// console.log(yelled1);              //=> [ 'HELLO!', 'WORLD!' ]
// console.log(words1 === yelled1);   //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = yeller;