console.log(
  getMaxSubSum([-1, 2, 3, -9]) == 5 &&
    getMaxSubSum([2, -1, 2, 3, -9]) == 6 &&
    getMaxSubSum([-1, 2, 3, -9, 11]) == 11 &&
    getMaxSubSum([-2, -1, 1, 2]) == 3 &&
    getMaxSubSum([100, -9, 2, -3, 5]) == 100 &&
    getMaxSubSum([1, 2, 3]) == 6 &&
    getMaxSubSum([-1, -2, -3]) == 0
);

function getMaxSubSum(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    const sum = getInnerSum(arr, i);
    if (sum > maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}

// console.log(getInnerSum([-1, 2, 3, -9], 0));
// console.log(getInnerSum([2, -1, 2, 3, -9], 0));
// console.log(getInnerSum([-1, 2, 3, -9, 11], 1));
// console.log(getInnerSum([-2, -1, 1, 2], 1));
// console.log(getInnerSum([-2, -1, 1, 2], 2));

function getInnerSum(arr, pivot) {
  let sum = 0;
  let maxSum = sum;
  for (let j = pivot; j < arr.length; j++) {
    sum += arr[j];
    if (sum >= maxSum) {
      maxSum = sum;
    }
  }
  return maxSum;
}
