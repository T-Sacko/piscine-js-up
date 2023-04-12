function words(str) {
    return str.split(" ");
  }
  function sentence(arrStr) {
    return arrStr.join(" ");
  }
  function yell(str) {
    return str.toUpperCase();
  }
  function whisper(str) {
    return "*" + str.toLowerCase() + "*";
  }
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }