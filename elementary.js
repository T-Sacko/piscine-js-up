// Function to mimic the * operator
function multiply(a, b) {
    // Base case: when b is 0, return 0
    if (b === 0) {
      return 0;
    }
    
    // Recursive case: add a to the result of multiplying (a, b-1)
    return a + multiply(a, b - 1);
  }
  
  // Function to mimic the / operator for integer division
  function divide(a, b) {
    // Base case: when a is less than b, return 0
    if (a < b) {
      return 0;
    }
    
    // Recursive case: add 1 to the result of dividing (a-b) by b
    return 1 + divide(a - b, b);
  }
  
  // Function to mimic the % operator
  function modulo(a, b) {
    // Base case: when a is less than b, return a
    if (a < b) {
      return a;
    }
    
    // Recursive case: find the modulo of (a-b) by b
    return modulo(a - b, b);
  }
  