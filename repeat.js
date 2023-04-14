function repeat(str, num) {
    // Base case: when num is 0, return an empty string
    if (num === 0) {
      return '';
    }
    
    // Recursive case: concatenate the string with the result of repeating the string (num - 1) times
    return str + repeat(str, num - 1);
  }
  