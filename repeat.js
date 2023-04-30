function repeat(str, num) {
    // when num is 0
    if (num === 0) {
      return '';
    }
    
    return str + repeat(str, num - 1);
  }
  