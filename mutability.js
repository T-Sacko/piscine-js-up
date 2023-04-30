const person = {
  country: 'f',
  age: 5,

}

const clone1 = {
 ...person,
}

const clone2= {
  ...person,
}

const samePerson = person


person.age++
person.country = 'FR'
console.log(person['country'])

