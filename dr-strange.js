function addWeek(date) {
    const secondWeek = [
         "Monday",
         "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
         "Saturday",
         "Sunday",
        "secondMonday",
        "secondTuesday",
        "secondWednesday",
         "secondThursday",
        "secondFriday",
         "secondSaturday",
         "secondSunday",
    ];
  
    const epoch = new Date("0001-01-01")
    const daysSince = Math.floor((date - epoch) / (1000*60*60*24))
    const index = daysSince %14
      return secondWeek[index] ;
    
}

function timeTravel({date, hour, minute, second}) {

    return new Date(date.setHours(hour,minute,second)).toString()
}

