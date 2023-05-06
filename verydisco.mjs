const args = process.argv.slice(2)

const makeVeryDisco = (word) => {
  const len = Math.ceil(word.length / 2)
  const firstHalf = word.slice(0, len)
  const secondHalf = word.slice(len)
  return `${secondHalf}${firstHalf}`
}

const output = args.map(word => 'verydisco'.repeat(word.split(' ').length))
  .map((verydisco, i) => args[i].split(' ')
  .map(makeVeryDisco)
  .join(' ')
  .trim())
  .join(' ')

console.log(output)
