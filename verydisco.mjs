const result = [];
words.forEach((word) => {
  const halfLength = Math.ceil(word.length / 2);
  const firstHalf = word.slice(0, halfLength);
  const secondHalf = word.slice(halfLength);
  const newWord = secondHalf + firstHalf;
  result.push(newWord);
});
return result.join(' ');
