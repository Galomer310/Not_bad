// 1
var sentence = "the movie is not that bad, i like it";
console.log(sentence);
// 2
var wordNot = sentence.indexOf("not");
console.log(`The word Not position is ${wordNot}`);
// 3
var wordBad = sentence.indexOf("bad");
console.log(`The Word bad position is ${wordBad}`);
// 4
let newSentence = sentence.replace('not that bad', 'good');

console.log(newSentence);

