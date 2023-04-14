// Function to mimic the * operator
function multiply(a, b) {
    // Base case: when either a or b is 0, return 0
    if (a === 0 || b === 0) {
      return 0;
    }
  
    // Recursive case:
    // If both a and b are positive, add a to the result of multiplying (a, b-1)
    // If both a and b are negative, add the negation of a to the result of multiplying (-a, -b-1)
    // If either a or b is negative, add the result of multiplying (-a, b-1) or (a, -b-1) respectively
    if (a > 0 && b > 0) {
      return a + multiply(a, b - 1);
    } else if (a < 0 && b < 0) {
      return -a + multiply(-a, -b - 1);
    } else if (a < 0) {
      return multiply(-a, b - 1);
    } else {
      return multiply(a, -b - 1);
    }
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
  