const planets = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };
  //year = seconds of a year
  function dogYears(planet, age) {
    age = age / 31557600;
    //array of planets
    let array = planets[planet];
    // age divided by array times 7
    age = (age / array) * 7;
    //round answer age
    return Math.round(age * 100) / 100;
  }
