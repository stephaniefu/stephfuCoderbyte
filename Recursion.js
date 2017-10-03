//MathOps
const mathOps3 = (arr) => {
  const results = [];
  const recurse = (soFar,index) =>{
      if(index === arr.length) {
          results.push(soFar)
      } else {
          recurse(soFar + arr[index], index + 1)
          recurse(soFar - arr[index], index + 1)
          recurse(soFar * arr[index], index + 1)
          recurse(soFar / arr[index], index + 1)
      }
  }
  recurse(arr[0],1)
  return results;
}

console.log(mathOps3([1,2,3]))

//Factorial
factorial = (num) => {
 if (num === 0) {
   return 1
 } else {
   return num * factorial (num - 1)
 }
}
console.log(factorial(3))

//GCD
GCD = (num1, num2) => {
  if (!num2) {
    return num1
  } else {
    return GCD(num2, num1%num2)
  }
}

console.log(GCD(12,6))

