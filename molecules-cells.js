function DNA(s) {
    let res = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "C") {
        res += "G";
      }
      if (s[i] === "G") {
        res += "C";
      }
      if (s[i] === "A") {
        res += "T";
      }
      if (s[i] === "U") {
        res += "A";
      }
    }
    return res;
  }
  function RNA(s) {
    let res = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "G") {
        res += "C";
      }
      if (s[i] === "C") {
        res += "G";
      }
      if (s[i] === "T") {
        res += "A";
      }
      if (s[i] === "A") {
        res += "U";
      }
    }
    return res;
  }