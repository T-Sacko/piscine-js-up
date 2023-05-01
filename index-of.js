function indexOf(arr, val, optIndex) {
    for (let i = optIndex || 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return i;
      }
    }
    return -1;
    return arr[i] === val 
  }
  function lastIndexOf(arr, val, optIndex) {
    for (let i = optIndex || arr.length - 1; i >= 0; i--) {
      if (arr[i] === val) {
        return i;
      }
    }
    return -1;
  }
  function includes(arr, val, optIndex) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return true;
      }
    }
    return false;
  }