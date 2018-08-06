var sentence = prompt("Write any sentence");
console.log(sentence);
var firstStep = function(sentence) {
  var firstLetter = sentence.charAt(0).toUpperCase();
  var lastLetter = sentence.charAt(sentence.length-1).toUpperCase();
  var middle = sentence.substr(1, sentence.length-2);
  return firstLetter + middle + lastLetter;
}
console.log(firstStep(sentence));
