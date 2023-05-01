function round(num) {
  return num >= 0 ? Math.floor(num + 0.5) : Math.ceil(num - 0.5);
}

function ceil(num) {
  return num > 0 ? Math.floor(num + 1) : Math.ceil(num);
}

function floor(num) {
  return num >= 0 ? Math.floor(num) : Math.floor(num);
}

function trunc(num) {
  return num >= 0 ? Math.floor(num) : Math.ceil(num);
}

