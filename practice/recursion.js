//Basic count down recursion:

function countDown(num){
    if(num <=0){
        console.log("All Done!")
        return
    }
    console.lof(num)
    num--
    countDown(num)
}

function sumRange(num){
    if (num=== 1) return 1
    return num + sumRange(num-1)
}

function factorial(num){
if(num === 1) return 1
return num * factorial(num-1)
}