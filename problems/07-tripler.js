/*
Write a function tripler(nums) that takes in an array as an arg. The function
should return a new array containing three times every number of the original
array.
*/

function tripler(arr){
    let newArr = []
    for(let i = 0; i <= arr.length - 1; i++){
       newArr[i] = arr[i] * 3
    } return newArr;
}

// console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
// console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = tripler;