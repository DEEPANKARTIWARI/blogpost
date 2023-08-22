function getApples(cordX, cordY, days, howMany) {
  let count = 0;
  let appleCount = 0;
  for (ele of days) {
    if (
      cordX[count] >= 0 &&
      cordX[count] <= 100 &&
      cordY[count] >= 0 &&
      cordY[count] <= 100
    ) {
      appleCount++;
    }
    count++;
    if (appleCount === howMany) {
      return ele;
    }
  }
  return -1;
}

function randomGenerator(days, howMany) {
  if (howMany >= 1 && howMany <= days && days >= 1 && days <= 50) {
    let arrX = [];
    let arrY = [];
    let arrDays = [];
    for (let x = 0; x < days; x++) {
      arrX.push(
        Math.ceil(Math.random() * 1000) - Math.ceil(Math.random() * 1000)
      );
      arrY.push(
        Math.ceil(Math.random() * 1000) - Math.ceil(Math.random() * 1000)
      );
      arrDays.push(Math.ceil(Math.ceil(Math.random() * 10) * 36.5));
    }
    console.log(arrX, arrY, arrDays, howMany);
    return getApples(arrX, arrY, arrDays, howMany);
  }
  return "Please follow the constrains";
}

for (let y = 0; ; ) {
  let result = randomGenerator(50, 2);
  console.log(result);
  if (result !== -1) {
    break;
  }
}
