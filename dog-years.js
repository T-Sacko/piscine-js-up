function dogYears(plan, age) {

  let secs = 31557600
  let mult = 7

  const periods = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  }

  const eyears = age/secs
  let planet=plan.toLowerCase()
  let planyears = eyears/periods[planet];
  planyears=planyears*mult

  return parseFloat(planyears.toFixed(2));

  
}

const yhh = dog_years('earth',1000000000)
console.log(yhh)