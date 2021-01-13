let array = [2, 4, 1, 6, 1, 40, 1, 2, 4, 10, 1];

function mostFrequent(arr) {
  let hashMap = {};
  let mostFreq = { value: undefined, count: 0 };
  for (let i = 0; i < arr.length; i++) {
    if (!hashMap[arr[i]]) {
      hashMap[arr[i]] = 1; //set count to 1 initially
    } else {
      ++hashMap[arr[i]]; //increment count
    }
    if (mostFreq.count < hashMap[arr[i]]) {
      //make the new element the most frequent one
      mostFreq.value = arr[i];
      mostFreq.count = hashMap[arr[i]];
    }
  }
  return mostFreq.value;
}

console.log(mostFrequent(array));
