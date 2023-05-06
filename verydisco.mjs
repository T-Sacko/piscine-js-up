const args = process.argv.slice(2);
const emoji = "🕺🏼";

function makeVeryDisco(str) {
  return str
    .split(" ")
    .map((word) => {
      const halfLength = Math.ceil(word.length / 2);
      const firstHalf = word.slice(0, halfLength);
      const secondHalf = word.slice(halfLength);
      return secondHalf + firstHalf;
    })
    .join(" verydisco ");
}

console.log(makeVeryDisco(args.join(" ")), emoji);