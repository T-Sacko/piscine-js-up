function reverse(arr) {
    if (typeof arr === "string") {
      let result = "";
      for (let i = arr.length - 1; i >= 0; i--) {
        result += arr[i];
      }
      return result;
    } else if (Array.isArray(arr)) {
      let result = [];
      for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
      }
      return result;
    }
  }