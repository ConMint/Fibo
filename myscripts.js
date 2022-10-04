function fibsIter(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      arr.push(i);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  return arr;
}

fibsIter(8);

console.log(fibsIter(8));

function fibsRec(n) {
  if (n <= 2) {
    return [0, 1];
  }
  let a = fibsRec(n - 1);
  a.push(a[n - 2] + a[n - 3]);
  return a;
}

fibsRec(8);

console.log(fibsRec(9));

function merge(left, right) {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

function mergeSort(unsortedArr) {
  if (unsortedArr.length === 1) {
    return unsortedArr;
  }
  let middle = Math.floor(unsortedArr.length / 2);
  let leftArr = mergeSort(unsortedArr.slice(0, middle));
  let rightArr = mergeSort(unsortedArr.slice(middle));

  return merge(leftArr, rightArr);
}
