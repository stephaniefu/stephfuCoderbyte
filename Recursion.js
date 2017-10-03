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