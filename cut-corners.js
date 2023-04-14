function round(n) {
    let negative = false;
    if (n < 0) {
      negative = true;
      n = -n;
    }
    let counter = 0;
    while (!(n < 1 && n > -1)) {
      // subtract 1 from the integer
      n -= 1;
      // and add 1 to counter, until the integer is between -1 and 1 (exclusive)
      counter++;
    }
    // if integer is less than 0.5 ->
    if (n < 0.5) {
      if (negative) {
        return -counter;
      } else {
        return counter;
      }
      // if int is greater or equal to 0.5 -> it means that the int is closer to the next int than the prev int
    } else {
      if (negative) {
        return -counter - 1;
      } else {
        return counter + 1;
      }
    }
  }
  // ceil: which behaves similar to Math.ceil() -  rounds a number UP to the nearest integer
  // if n = 3.1:
  function ceil(n) {
    // if n is falsy
    if (!n) return 0;
    let negative = false;
    // since 3.1 is positive, the negative remains false
    if (n < 0) {
      negative = true;
      n = -n;
    }
    // intCopy = 3.1
    let intCopy = n;
    let counter = 0;
    // the while loop condition is true
    // the 1st iteration of the while loop: intCopy is subtracted by 1 (2.1) and counter is incremented by 1 (1)
    // the 2nd iteration: inCopy = 1.1, counter = 2
    // the 3rd iteration: inCopy = 0.1, counter = 3 - and then it stops since intCopy is now less than 1 and greater than or equal to 0
    while (!(intCopy < 1 && intCopy >= 0)) {
      intCopy -= 1;
      counter++;
    }
    // Since the original input was positive, the function returns counter + 1, which is 4
    if (negative) {
      return -counter;
    } else {
      return counter + 1;
    }
  }
  // floor: which behaves similar to Math.floor() - rounds a number DOWN to the nearest integer
  function floor(n) {
    let negative = false;
    // if the int is negative:
    if (n < 0) {
      // set the negative to true and
      negative = true;
      // convert the int to its absolute value
      n = -n;
    }
    let intCopy = n;
    // This is necessary because the while loop that follows will modify the value of intCopy,
    // and we want to preserve the original value of int for later use
    // enter a while loop because intCopy is greater than or equal to 1
    let counter = 0;
    while (!(intCopy < 1 && intCopy > -1)) {
      // in each iteration we substract 1 from intCopy
      intCopy -= 1;
      counter++;
      // The loop repeats until intCopy is between -1 and 1 (exclusive).
      // After the loop finishes, intCopy will be a value between 0 and 1 (exclusive).
    }
    // if the negative is true ->
    if (negative) {
      return -counter - 1;
    } else {
      return counter;
    }
    // the intCopy variable is necessary because we need to preserve the original value of int while still being able to modify its copy in the loop.
    // This is because we want to count how many times we can subtract 1 from intCopy before it becomes less than 1. This count is stored in the counter variable,
    // which is ultimately used to return the floor value of the input. By using intCopy as a copy of int, we can modify intCopy without changing the original int value
  }
  // trunc: which behaves similar to Math.trunc() - returns the integer part of a number by removing any fractional digits
  function trunc(n) {
    let counter = 0;
    if (n > 0xfffffffff) {
      n -= 0xfffffffff;
      counter += 0xfffffffff;
    }
    let neg = false;
    if (n < 0) {
      neg = true;
      n = -n;
    }
    let intCopy = n;
    while (!(intCopy < 1 && intCopy > -1)) {
      intCopy -= 1;
      counter++;
    }
    if (neg) {
      return -counter;
    }
    return counter;
  }