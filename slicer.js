function slice(input, start, end) {
  const isString = typeof input === 'string';
  let result = isString ? '' : [];

  if (start < 0) {
    start += input.length;
  } else if (start === undefined) {
    start = 0;
  }

  if (end < 0) {
    end += input.length;
  } else if (end === undefined) {
    end = input.length;
  }

  for (let i = start; i < end && i < input.length; i++) {
    isString ? (result += input[i]) : result.push(input[i]);
  }

  return result;
}

console.log((() => slice('abcdef', 2))());
