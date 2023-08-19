var fibonacci_series = function (n, sum) {
  if (n === 1) {
    return [0, 1];
  } else {
    var s = fibonacci_series(n - 1);

    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(
  fibonacci_series(10).reduce((acc, val) => {
    if (val % 2 === 0) {
      return acc + val;
    }
    return acc;
  })
);
