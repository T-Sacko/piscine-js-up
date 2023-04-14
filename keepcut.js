function cutFirst(str) {
    return str.slice(2);
  }
  // cutLast returns the string with the last 2 characters removed.
  function cutLast(str) {
    return str.slice(0, -2);
  }
  // cutFirstLast returns the string with the first 2 characters and the last 2 characters removed.
  function cutFirstLast(str) {
    return str.slice(2, -2);
  }
  // keepFirst returns only the first 2 characters.
  function keepFirst(str) {
    return str.slice(0, 2);
  }
  // keepLast returns only the last 2 characters.
  function keepLast(str) {
    return str.slice(-2);
  }
  // keepFirstLast returns the first 2 characters, and the last 2 characters.
  function keepFirstLast(str) {
    if (str.length <= 3) {
      return str;
    }
    return str.slice(0, 2) + str.slice(-2);
  }
  