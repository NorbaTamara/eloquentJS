// https://eloquentjavascript.net/04_data.html

// The sum of a range
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
// tests:
 console.log(range(1, 10));
 console.log(range(-4, -2, 1));
 console.log(sum(range(1, 20)));

// Reversing an array
function reverseArray(array){
  const reversedArray = [];
  for (let i = 0; i < array.length; i++) {
    reversedArray[i] = array[(array.length-1) - i]
  }
  return reversedArray;
}

function reverseArrayInPlace(array){
  const initialArray = [...array];
  for (let i = 0; i < array.length; i++) {
    array[i] = initialArray[(initialArray.length-1) - i]
  }
  return array;
}
// tests:
const firstTestArray = ["A", "B", "C"];
console.log(reverseArray(firstTestArray));
console.log(firstTestArray);
let secondTestArray = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(secondTestArray));
console.log(secondTestArray);