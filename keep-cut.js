function cutFirst(str) {
    return str.slice(2);
  }
  function cutLast(str) {
    return str.slice(0, -2);
  }
  function cutFirstLast(str) {
    return str.slice(2, -2);
  }
  function keepFirst(str) {
    return str.slice(0, 2);
  }
  function keepLast(str) {
    return str.slice(-2);
  }
  // keepFirstLast returns the first 2 characters, and the last 2 characters.
  function keepFirstLast(str) {
    
    return str.slice(0, 2) + str.slice(-2);
  }
  