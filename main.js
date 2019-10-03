const fs = require('fs');

// Write a JS program that finds the most commonly used words in your code i.e 'let', 'const', 'true'
// and the most commonly used symbols i.e '=', '&', '$'

fs.readFile('sample.js', 'utf8', (err, data) => {
  let words = data.split(/\W+/);
  const count = getWordsCount(words)
  console.log(count);
})

const getWordsCount = (words) => {
  let counter = {}
  words.forEach(word => {
    if (counter[word]) {
      counter[word] = {
        word: word,
        count: counter[word].count + 1
      }
    } else {
      counter[word] = {
        word: word,
        count: 1
      }
    }
  })

  // Sort by count
  const counts = Object.values(counter);
  const sortedByCount = counts.sort((a, b) => b.count - a.count);
  return sortedByCount;
}
