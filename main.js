const fs = require('fs');

// TODO: Use commander https://www.npmjs.com/package/commander to improve the CLI
const WORDS = '-w'
const SYMBOLS = '-s'

// Write a JS program that finds the most commonly used words in your code i.e 'let', 'const', 'true'
// and the most commonly used symbols i.e '=', '&', '$'



const countWordsInFile = (file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.error(`[Error] File '${file}' not found.`)
        return;
      } else {
        console.error(err);
        return;
      }
    };
    const words = data.split(/\W+/);
    const count = getWordsCount(words)
    outputCount(count)
  })
}

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

const outputCount = (counts) => {
  counts.forEach(count => {
    console.log(`${count.count} ${count.word}`)
  })
}

const main = () => {
  const args = process.argv.slice(2)

  if (args.length !== 2) {
    console.error('Usage: node main.js -w|-s file');
    return;
  }

  const targetFile = args[1];
  const option = args[0];

  switch (option) {
    case WORDS:
      countWordsInFile(targetFile);
      break;
  }
}

main();
