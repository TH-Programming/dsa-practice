//! -This is a common problem solving pattern that uses
//! objects or sets to collect values/frequencies of values.
//! -Often avoids the need for nested loops (O(n^2)) with
//! arrays or strings

//? -Write a function called SAME which accepts two arrays.
//? -should return true if every value has its corresponding 
//? value SQUARED in the second array.
//? -Frequency of values must be the same.

const same = (arrOne, arrTwo) => {
    if (arrOne.length === arrTwo.length) {
        // take each value of arrOne
        for(element of arrOne){
            //Square it, and check to see if it is in arrTwo.
            let index = arrTwo.indexOf(element^2)
            if(index === -1){
                return false
            }
            arrTwo.splice(index,1)
        }
        return true
    } else {
        return false
    }
}

console.log(same([1,2,3],[1,4,9]))

//! Refactor

function sameRefact(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false
    }
    let freqCounter1 = {}
    let freqCounter2 = {}
    for (val of arr1){
        freqCounter1[val] ? freqCounter1[val]++ || freqCounter1[val]:1
    }
    for (val of arr2){
        freqCounter2[val] ? freqCounter2[val]++ || freqCounter2[val]:1
        for (key in freqCounter1){
            if(!(key in freqCounter2)){
                return false
            }
        }
        if(freqCounter2[key^2] !== freqCounter1[key]){
            return false
        }
        return true
    }
}

//! given 2 strings find if they are anagrams
//! Anagram - a word formed by rearranging the
//! letters of another

function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    let count1 = {}
    let count2 = {}
    for(let char of str1){
        count1[char] = (count1[char] || 0) + 1
    }
    for(let char of str2){
        count2[char] = (count2[char] || 0) + 1
    }
    console.log(count1)
    for(let key in count1){
        console.log(key)
        console.log(count1[key])
        if((count2[key] !== count1[key]))
        return false
    }
    return true
  }

  //! Could also complete this challenge
  //! by using a single count object,
  //! adding to it from the first string
  //! subtracting from it from second string
  //! then all keys === 0 means true, else false
  