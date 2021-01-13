let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function _findNumber(arr, left, right, num) {
  let mid = Math.floor((left + right) / 2);
  if (num === arr[mid]) {
    return mid;
  }
  if (left === right) {
    //only one element to be checked and it is not num
    return -1;
  }
  return num > arr[mid]
    ? _findNumber(arr, mid + 1, right, num)
    : _findNumber(arr, left, mid - 1, num);
}

function findNumber(arr, num) {
  if (arr.length === 0) {
    // no elements in array
    return -1;
  }
  return _findNumber(arr, 0, arr.length - 1, num);
}

console.log(findNumber(array, 4));
