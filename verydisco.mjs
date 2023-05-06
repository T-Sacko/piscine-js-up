const words = input.trim().split(' ');
if (words.length === 1) {
  const word = words[0];
  const halfLength = Math.ceil(word.length / 2);
  const firstHalf = word.slice(0, halfLength);
  const secondHalf = word.slice(halfLength);
  return secondHalf + firstHalf;
}
