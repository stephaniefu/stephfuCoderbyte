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
//NumberAddition
NumberAddition = (str) => {
    var numbers = str.match(/[0-9]+/g);
    var total = 0;
    for (var i =0; i < numbers.length; i++) {
      total += Number(numbers[i])
    }
    return total;         
  }

  //ThirdGreatest
  ThirdGreatest = (strArr) => {
    return strArr.sort((a,b) => {return a.length - b.length})[2]
  }

  //SecondGreatlow
  SecondGreatLow = (arr) => {
    if(arr.length === 2) {
      return [arr[1], arr[0]]
    }
    arr.sort((a,b) => {return a-b})
    let smallest = arr[0]
    let largest = arr[arr.length -1]
    let secondSmall, secondLarge;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > smallest) {
        secondSmall = arr[i]
        break;
      }
    }
    for(let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] < largest) {
        secondLarge = arr[i];
        break;
      }
    }
    return [secondSmall, secondLarge]
  }

  //PowersOfTwo
  PowersofTwo = (num) => {
    while (num > 1) {
      num = num / 2
    }
    if (num === 1) {
      return true
    }
    return false;
  }

  //AdditivePersistence
  AdditivePersistence = (num) => {
    let count = 0;
    while (num.toString().length > 1) {
      num = num.toString().split('')
      num = num.reduce((a,b) => {return Number(a) + Number(b)})
      count++
    }
    return count;
  }

  //Multiplicative Persistence
  MultiplicativePersistence = (num) => {
    let count = 0;
    while(num.toString().length > 1) {
      num = num.toString().split('').reduce((a,b) => {return Number(a) * Number(b)})
      count++
    }
    return count;
  }

  //LetterCountI
  LetterCountI = (str) => {
    let arr = str.split(' ');
    console.log(arr)
    let count = 0;
    let result;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        let curr = arr[i][j]
        let temp = 0;
        for(let k = 0; k < arr[i].length; k++) {
          if (arr[i][k] === curr) {
            temp++
          }
        }
        if (temp > count) {
          count = temp;
          result = arr[i]
        }
        console.log(curr)
      }  
    }
    return result
  }

  //ChangingSequence
  ChangingSequence = (arr) => {
    //check if it is initially increasing or decreasing
    //if increasing 
      //return index when it starts to decrease
    //if decreasing
      //return index when it starts to increase
    //return -1
    let pattern;
      if (arr[1] > arr[0]) {
        pattern = 'increasing'
      } else {
        pattern = 'decreasing'
      }
    console.log(pattern)
    if (pattern === 'increasing') {
      for(let i = 0; i <arr.length; i++) {
        if (arr[i+1] < arr[i]) {
          return i;
        }
      }
    } else if (pattern === 'decreasing') {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i+1] > arr[i]) {
          return i;
        }
      }
    }
    return -1
  }

  //Superincreasing
  Superincreasing = (arr) => {
    //for each iteration through, update total to the sum up to the index
    //check if the current item is greater than total
       //if not, return false
     //return true
     let total = 0;
     for (let i = 0; i < arr.length; i++) {
       if (arr[i] < total) {
         return false
       }
       total += arr[i];
     }
     return true;
   }

   //HammingDistance
   HammingDistance = (strArr) => {
    let one = strArr[0];
    let two = strArr[1];
    let count = 0;
    for (let i = 0; i < one.length; i++) {
      if (one.charAt(i) !== two.charAt(i)) {
        count++
      }
    }
    return count;
  }

  //OtherProducts
  OtherProducts = (arr) => {
    //iterate through the array and splice out the index/ keep reference to it
      //reduce to find the product, push into result array
      //insert the spliced out back in 
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let spliced = arr.splice(i,1);
      result.push(arr.reduce((a,b) => {return a*b}))
      arr.splice(i,0,spliced)
    }
    return result;
  }
  
  //ArrayMatching
  ArrayMatching = (strArr) => {
    let result = []
    let first = strArr[0];
    console.log(first)
    let second = strArr[1];
    for (let i = 0; i < first.length; i++) {
      let sum = Number(first[i]) + Number(second[i])
      if (sum) {
        result.push(sum)
      }
    }
    return result.join('-')
  }

  //EVENPAIRS

  //Nonrepeating Characters
  NonrepeatingCharacter = (str) => {
    for(let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
        return str[i]
      }
    }
  }

  //ArrayAddition
  ArrayAddition = (arr) => {
    arr = arr.sort((a,b) => {return a-b});
    console.log(arr)
    let largest = arr.pop();
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
      for(let j = 0; j < arr.length; j++) {
        if (i != j) {
          sum += arr[j];
          if (sum === largest) {
            return true;
          }
        }
      }
      for (let k = 0; k < arr.length; k++) {
        if (k != i) {
          sum -= arr[k];
          if (sum === largest) {
            return true
          }
        }
      }
      sum = 0;
    }
    return false;
  }

//NextPalindrome
NextPalindrome = (num) => {
  let curr = num
  let reverse = curr.toString().split('').reverse().join('')
  while (reverse !== curr) {
    curr++
    reverse = Number(curr.toString().split('').reverse().join(''))
  } 
  return curr;
}

//closestenemy
ClosestEnemy = (arr) => {
  let index = arr.indexOf(1);
  let twos = [];
  let smallest;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      twos.push(i)
    }
  }
  for (let i = 0; i < twos.length; i++) {
    if (!smallest) {
      smallest = Math.abs(twos[i] - index)
    } else if (Math.abs(twos[i] - index) < smallest) {
      smallest = Math.abs(twos[i] - index)
    }
  }
  return smallest
}

//BitwiseOne
BitwiseOne = (strArr) => {
  let one = strArr[0].split('')
  let two = strArr[1].split('')
  console.log(one)
  let result = ''
  for(let i = 0; i < one.length; i++) {
    if (Number(one[i]) === 0 && Number(two[i]) === 0) {
      result += 0
    } else {
      result += 1
    }
  }
  return result
}