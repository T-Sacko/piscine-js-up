function round(num) {
  return num >= 0 ? integral(num + 0.5) : integral(num - 0.5);
}

function ceil(num) {
  return num > 0 ? integral(num + 1) : integral(num);
}

function floor(num) {
  return num >= 0 ? integral(num) : integral(num - 1);
}

function trunc(num) {
  return num >= 0 ? integral(num) : integral(num);
}

function integral(num) {
  let intPart = 0;
  let sign = num >= 0 ? 1 : -1;
  num = num * sign;
  while (num >= 1) {
    num -= 1;
    intPart += 1;
  }
  return intPart * sign;
}

