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
function LetterChanges(str) { 
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'z') {
      result = result + 'a'
    } else if (str[i].match(/[^a-zA-Z]/)) {
      result = result + str[i]
    } else {
      result = result + alpha[alpha.indexOf(str[i]) + 1]      
    }
  }
  return result.replace(/[aeiou]/g, (letter) => { return letter.toUpperCase() })
}  

console.log(LetterChanges('hze!lloz'))

//Simple Adding
function SimpleAdding(num) { 
  let result = 0;
  for (let i = 0; i <= num; i++ ) {
    result = result + i
  } 
  return result
}  
console.log(SimpleAdding(4))

//Letter Capitalize
function LetterCapitalize(str) { 
  let word = str.split(' ')
  let result = ''
  for (let i = 0; i < word.length; i++) {
    result = result + word[i][0].toUpperCase() + word[i].slice(1) + ' '
  }
  return result;
}  

console.log(LetterCapitalize('hello how are you'))

//Simple Symbols
function SimpleSymbols(str) {
  let result = true
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-zA-Z]/g)) {
      if (str[i-1] !== '+' || str[i+1] !== '+') {
        result = false;
      }
    }
  }
  return result
}  

console.log(SimpleSymbols('++d+==+c+=a+'))

//Check Nums
function CheckNums(num1,num2) {
  if (num1 === num2) {
    return '-1'
  } 
  return num2 > num1 ? 'true' : 'false'
} 

console.log(CheckNums(4,4))

//Time Convert
function TimeConvert(num) {
  let hour = Math.floor(num/60)
  let minutes = num % 60
  return hour + ":" + minutes
}

console.log(TimeConvert(120))

//Alphabet Soup
function AlphabetSoup(str) {
  let arr = str.toLowerCase().split('')
  return arr.sort().join('')
}

console.log(AlphabetSoup('Hello'))

//AB CHeck
function ABCheck(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      if (str[i+4] === 'b') {
        return true;
      }
    }
    if (str[i] === 'b') {
      if (str[i+4] === 'a') {
        return true;
      }
    }
  }
  return false;
}

function ABCheck(str) {
  let aTob = /a...b/
  let bToa = /b...a/
  return str.match(aTob) || str.match(bToa) ? "true" : "false"
}
console.log(ABCheck('lane borrowed'))

//Vowel Count
function VowelCount(str){
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[aeiou]/)) {
      count++
    }
  }
  return count
}

console.log(VowelCount('all cows eat grass and moo'))

//Word Count
wordCount = (str) => {
  return str.split(' ').length
}

console.log(wordCount('never eat shreded wheat or cake'))

//ExOh
ExOh = (str) => {
  let x = 0
  let o = 0
  for (let i = 0; i < str.length; i++){
    str[i] === 'x' ? x++ : o++
  }
  return x === o ? true : false
}

console.log(ExOh('xxooxoo'))