/*
Define a function lessThan5 that takes an array of numbers and returns a NEW
array containing all the numbers in the input array that are less than 5.
*/

function lessThan5(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 5){
            newArr.push(arr[i])
        }
    } return newArr;
}

// let nums1 = [1, -5, 10, 6, 2];
// let filteredNums1 = lessThan5(nums1);
// console.log(filteredNums1);           //=> [1, -5, 2]
// console.log(nums1 === filteredNums1); //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = lessThan5;