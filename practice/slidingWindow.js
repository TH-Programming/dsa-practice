/* Write a function called maxSubarraySum
which accepts an array of integers, and a 
number called n. Calculate the max sum of
n consecutive elements in the array.
*/

function maxSubarraySum(array, n){
    let maxSum = 0;
    let tempSum = 0
    if (array.length < n) return null
    for(let i=0; i < n; i++){
        maxSum += arr[i]
    }
    for(let i=n; i<arr.length; i++){
        tempSum = tempSum - arr[i-n] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}