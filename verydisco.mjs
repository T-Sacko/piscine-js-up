import process from 'process'

const input = process.argv[2]

const disco = (word) => {
  const len = Math.ceil(word.length / 2)
  const firstHalf = word.slice(0, len)
  const secondHalf = word.slice(len)
  return `${secondHalf}${firstHalf}`
}

const output = input.split(' ').map(() => 'verydisco').join(' ')
    || input.split(' ').map(disco).join(' ')

console.log(output)
