function isValid(date) {
    return !isNaN(date.getTime());
  }
  
  function isAfter(date1, date2) {
    return date1 > date2;
  }
  
  function isBefore(date1, date2) {
    return date1 < date2;
  }
  
  function isFuture(date) {
    const now = new Date();
    return isAfter(date, now);
  }
  
  function isPast(date) {
    const now = new Date();
    return isBefore(date, now);
  }
  