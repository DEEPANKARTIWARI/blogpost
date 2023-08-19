function calculate(marks, lowCount, highCount) {
  let sortedArr = marks.sort((a, b) => {
    return a - b;
  });
  if (lowCount > 0) sortedArr.splice(0, lowCount);

  if (highCount > 0) sortedArr.splice(highCount);

  return sortedArr.reduce((acc, val) => acc + val, 0) / sortedArr.length;
}
