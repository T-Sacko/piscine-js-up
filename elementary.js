function multiply(a, b) {
    let res;
    if (a == 0 || b == 0) {
      res = 0;
    } else {
      if (b < 0) {
        a = -a;
        b = -b;
      }
      res = a + multiply(a, b - 1);
    }
    return res;
  
  }
  
  function divide(a, b) {
    let res;
    if (a === 0) {
      res = 0;
    } else if (b === 1) {
      res = a;
    } else if (b === -1) {
      res = -a;
    } else if (b === 0) {
      return Infinity;
    } else {
      let neg;
      if (a < 0) {
        a = Math.abs(a);
        neg = true;
      }
      if (b < 0) {
        b = Math.abs(b);
        neg ? (neg = false) : (neg = true);
      }
      let count = 0;
      while (a >= b) {
        a -= b;
        count++;
      }
      res = neg ? -count : count;
    }
    return res;
  }
  function modulo(a, b) {
    let flag = false;
    if (a < 0) {
      a = -a;
      flag = true;
    }
    if (b < 0) {
      b = -b;
    }
    let answer = a;
    let divisor = b;
    let count = 1;
    while (b < answer) {
      answer = answer - divisor;
      count++;
    }
    if (flag) {
      answer = -answer;
    }
    return answer;
    //   q = parseInt(a / b); //finding quotient (integer part only)
    //   p = q * b; //finding product
    //   return a - p; //finding modulus
  }