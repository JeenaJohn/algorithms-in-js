let array = [38, 27, 43, 3, 9, 82, 10];

function merge(left, right) {
  let results = [];
  while (left.length && right.length) {
    left[0] < right[0]
      ? results.push(left.shift())
      : results.push(right.shift());
  }
  return [...results, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid)); // first half
  let right = mergeSort(arr.slice(mid)); //second half
  return merge(left, right);
}

console.log(mergeSort(array));