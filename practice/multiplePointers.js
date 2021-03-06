//! Creating pointers (values) that correspond to
//! an index or position and move
//! towards beginning, middle, or end
//! based on a certain condition

//! this is very efficient space complexity as well

//? write a function called sumZero
//? which accepts a SORTED array of
//? integers. Find the FIRST pair where
//? the sum is 0. Return an array that
//? includes both values that sum 0, or
//? undefined if a pair does not exist

function sumZero(arr){
    for (let i=0; i< arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
        if(arr[1] + arr[2] === 0)
        return [arr[1], arr[2]]
        }
    }
    return undefined
}