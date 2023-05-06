const input = process.argv[2]
const words = input.split(' ')

const result = words.map(word => {
  const len = Math.ceil(word.length / 2)
  const firstHalf = word.slice(0, len)
  const secondHalf = word.slice(len)
  const reversed = secondHalf + firstHalf
  return reversed
}).join('verydisco ').replace(/\p{Emoji_Presentation}/gu, '')

console.log(result)