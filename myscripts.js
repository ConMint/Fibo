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
