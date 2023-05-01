function multiply(a, b) {
  let result = 0;
  for (let i = 0; i < Math.abs(b); i++) {
    result += a;
  }
  return b < 0 ? -result : result;
}

function divide(a, b) {
  if (b === 0) {
    return null
  }

  let quotient = 0;
  let temp = 0;
  const sign = (a < 0) !== (b < 0)
  a = Math.abs(a);
  b = Math.abs(b);

  while (temp + b <= a) {
    temp += b;
    quotient++;
  }
  
  return sign == true ? -quotient : quotient

}

function modulo(a, b) {
  if (b === 0) {
    return null; 
  }

  let remainder = Math.abs(a);
  b = Math.abs(b);
  while (remainder >= b) {
    remainder -= b;
  }
  return a < 0 ? -remainder : remainder;
}