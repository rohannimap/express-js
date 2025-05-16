const arr =  [1,-2,3,2,-1]
const result = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === 0) {
      result.push(arr[i], arr[j]);
      break;
    }
  }
}

console.log(result); 