function randomSentences() {
  const readline = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let names = ["Peter", "Borislava", "Diana", "Stefani"];
  let places = ["Ruse", "Sofia", "Sevlievo", "Varna"];
  let verbs = ["eats", "plays with", "sleeps with", "holds", "holds"];
  let nouns = ["ball", "pizza", "unicorn", "baloon", "pineapple"];
  let adverbs = ["slowly", "sadly", "happily"];
  let details = ["at home", "in the garden", "near the playground"];

  function getRandomWord(array) {
    let word = array[Math.floor(Math.random() * array.length)];
    return word;
  }

  let randomName = getRandomWord(names);
  let randomPlaces = getRandomWord(places);
  let randomVerbs = getRandomWord(verbs);
  let randomNouns = getRandomWord(nouns);
  let randomAdverbs = getRandomWord(adverbs);
  let randomDetails = getRandomWord(details);

  let who = `${randomName} from ${randomPlaces}`;
  let action = `${randomAdverbs} ${randomVerbs} ${randomNouns}`;

  let sentence = `${who} ${action} ${randomDetails}`

  console.log(`Hello, this is your first random-generated sentance:`);
  console.log(sentance);

//   let recursiveAsyncReadLine = function (){
//     readline.question(`Click [Enter] to generate a new one`, string => {
//     }
  
}

randomSentences()