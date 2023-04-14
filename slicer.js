function slice(input, startIndex, endIndex) {
    let result;
    // check if the optional end argument was passed to the func, if not ->
    if (endIndex === undefined) {
      // set the end to the length
      endIndex = input.length;
    }
    // check if the start is a negative number
    if (startIndex < 0) {
      // if the start is negative, we adjust the startIndex by adding it to the length of the input
      // thus, we allow negative indices, which count from the end of array
      startIndex = input.length + startIndex;
    }
    if (endIndex < 0) {
      // if the end index is negative, we adjust it by adding to the length of the array
      endIndex = input.length + endIndex;
    }
    // Array.slice(): check if the input is an array
    if (Array.isArray(input)) {
      // initialise an empty array
      result = [];
      // llop through the el-ts of the input array
      for (let i = startIndex; i < endIndex; i++) {
        // add each element to the result variable
        result.push(input[i]);
      }
    }
    // String.slice(): check if the input is a string
    if (typeof input === "string") {
      result = "";
      for (let i = startIndex; i < endIndex; i++) {
        result += input[i];
      }
    }
    return result;
  }