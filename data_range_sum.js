function range(start, end, step = 1) {
  let range = [];
  if (start < end) {
    if (step < 0) {
      return new Error('Not valid step value.\n It has to be number bigger than 0 for given start and end composition');
    }
    for (let i = start; i <= end; i += step) {
     range.push(i);
    }
  } else if (start > end) {
    if (step > 0) {
      return new Error('Not valid step value.\n It has to be number lower than 0 for given start and end composition');
    };
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