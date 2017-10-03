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

//Palindrome
Palindrome = (str) => {
  let nospace = str.replace(' ', '');
  let reverse = nospace.split('').reverse().join('')
  if (nospace === reverse) {
    return true
  }
  return false
}

console.log(Palindrome('racecar'))

//Arith Geo
ArithGeo = (arr) => {
  let arith = []
  let geo = []
  for (var i = 0; i < arr.length - 1 ; i++) {
    arith.push(arr[i+1] - arr[i])
    geo.push(arr[i+1] / arr[i])
  }
  console.log(arith)
  console.log(geo)
  for ( let i = 0; i < arith.length; i++) {
    if (checkSame(arith)) {
      return 'ARITHMATIC'
    } else if (checkSame(geo)) {
      return 'GEOMETRIC'
    } else {
      return -1
    }
  }
}

checkSame = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i+1]) {
      return false
    }
  }
  return true
}

//DivisionStringified
DivisionStringified = (num1, num2) => {
  let result = '' + Math.round(num1/num2);
  result = result.split('')
  for(let i = result.length -3 ; i > 0; i-=3) {
    result.splice(i,0,',')
  }
  return result.join('');
}

//Overlapping Ranges
OverlappingRanges = (arr) => {
  let count = 0;
  let first = []
  let second = []
  for (let i = arr[0]; i <= arr[1]; i++) {
    first.push(i)
  }
  for (let i = arr[2]; i <= arr[3]; i++) {
    second.push(i)
  }
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      count ++
    }
  }
  if (count >= arr[4]) {
    return true;
  }
  return false
}

//MeanMode
MeanMode = (arr) => {
  let mean = arr.reduce(function(accum, curr) { return accum + curr})/arr.length;
  let storage = [];
  for (let i = 0; i < arr.length; i++) {
    let mode = arr[i]
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === mode) {
        count ++
      }
    }
    storage.push([count, mode])
    storage.sort()
  }
  let mode = storage[storage.length - 1][0]
  if (mode === mean) {
    return 1
  }
  return 0
}

//DashInsert
DashInsert = (str) => {
  let result = ''
  let num = str.split('')
  console.log('this is num', num)
  for (let i = 0; i < num.length; i++)  {
    if (isOdd(num[i]) && isOdd(num[i+1]) && num[i+1] !== undefined) {
      result += num[i] + '-'
    } else {
      result += num[i]
    }
  }
 return result
}

isOdd = (num) => {
  if (num % 2 !== 0) {
    return true
  }
  return false
}

//SwapCase
SwapCase = (str) => {
  let result = ''
  for(let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/)) {
      result += str[i].toUpperCase()
    } else {
      result += str[i].toLowerCase()
    }
  }
  return result;
}
