const words = input.trim().split(' ');
const result = [];
for (let i = 0; i < words.length; i++) {
  const word = words[i];
  const halfLength = Math.ceil(word.length / 2);
  const firstHalf = word.slice(0, halfLength);
  const secondHalf = word.slice(halfLength);
  result.push(secondHalf + firstHalf);
}
return result.join(' ');
