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

//? refactor with pointers =>

function sumZeroRefact(arr){
    let left = 0
    let right = arr.length - 1
    while (left<right){
        let sum = arr[left] + arr[right]
        if(sum===0){
            return([arr[left],arr[right]])
        } else if(sum > 0){
            right--
        } else {
            left++
        }
    }
}

//? make a function countUniqueValues()
//?accepts SORTED array, counts unique values.
//? can be negative values, but will always be sorted

function countUniqueValues(arr){
    if(arr.length === 0){
        return 0
    } else if(arr.length===1) {
        return 1
    } else {
    let point1 = 0
    let point2 = 1
    while(point2 < arr.length){
        if(arr[point2] === arr[point1]){
            point2++ 
        } else {
            ++point1
            arr[point1] = arr[point2]
        }
    }
    return arr.slice(0, point1)
    }
}
