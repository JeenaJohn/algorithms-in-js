let array = [1, 2, 3, [4, 5], [6, 7, [8, 9], [10,11]]];

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
      sum += findSum(arr[i]); //nested array
    } else {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(findSum(array));
