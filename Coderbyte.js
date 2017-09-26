//First Reverse
const firstReverse = (str) => {
  return str.split('').reverse().join('')
}

console.log(firstReverse('Hello how are you'))

//First Factorial
function FirstFactorial(num) { 
  let result = 1;
  for (let i = num; i > 0; i--) {
    result = result * i
  }
  return result;       
  }

console.log(FirstFactorial(4))

//Longest Word
function LongestWord(sen) { 
  let arr = sen.replace(/[^a-zA-Z ]/g,'').split(' ')
  console.log(arr)
  let longest = arr[0] 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i]
    }
  }
  return longest
}

console.log(LongestWord('Hello!!!! how ar!e youuuu!!'))
  
//Letter Change