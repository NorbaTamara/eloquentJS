function range(start, end, step = 1) {
  let range = [];
  if (start < end) {
    if (step < 0) step = -step;
    for (let i = start; i <= end; i += step) {
     range.push(i);
    }
  } else if (start > end) {
    if (step > 0) step = -step;
    for (let i = start; i >= end; i += step) {
     range.push(i);
    }
  }
  return range;
}

function sum (range) {
  let sum = 0;
  range.forEach(number => {
    sum += number;
  });
  return sum;
}

 console.log(range(1, 10));
 console.log(range(-4, -2, 1));
 console.log(sum(range(1, 20)));