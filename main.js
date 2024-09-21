// 1
var sentence = "the hot dog stand in the city center is not so bad";
console.log(sentence);
// 2

var wordNot = sentence.indexOf("not");
console.log(`The word Not is at position ${wordNot}`);
// 3
var wordBad = sentence.indexOf("bad");
console.log(`The Word bad is at position ${wordBad}`);
// 4
let newSentence = sentence.replace('not', '');
let newSentence1 = newSentence.replace('bad', 'good');
console.log(newSentence1);

