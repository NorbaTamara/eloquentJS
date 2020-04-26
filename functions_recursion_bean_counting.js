// https://eloquentjavascript.net/03_functions.html

// Recursion
function isEven(number) {
    const absoluteNumber = Math.abs(number);
    if (absoluteNumber === 0) {
      return true; 
    } else if (absoluteNumber === 1) {
      return false;
    } else {
      return isEven(absoluteNumber - 2);
    }
  }
  // tests:
  console.log(isEven(50));
  console.log(isEven(75));
  console.log(isEven(-50));

  // Bean counting
  function countChar(string, countedChar) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if(string[i] === countedChar) {
         counter += 1;
      }
    }
    return counter;
  }
  // tests:
  console.log(countChar("kakDASCDadsdbkkkdgfgkerlak", "f"));