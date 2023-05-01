function slice(input, start, end) {
  const isString = typeof input === 'string'
  const result = isString ? '' : [];

  if (start < 0){
    start +=input.length
  }

  if (end<0){
    end+=input.length
  }

  for (let i = start; i < end && i < input.length; i++) {
      isString ? (result+=input[i]) : result.push(input[i])
  }
  
  return result

  
  
}
const ting = ['one','two', 'three', 'four', 'five']
console.log(slice(ting,1,3))