var sentence = prompt("Write any sentence");
console.log(sentence);
var firstStep = function(sentence) {
  var firstLetter = sentence.charAt(0).toUpperCase();
  var lastLetter = sentence.charAt(sentence.length-1).toUpperCase();
  return firstLetter + lastLetter;
}

var secondStep = function(letters){
  var firstLetter = letters.charAt(0);
  var lastLetter = letters.charAt(1);
  return lastLetter + firstLetter;
}

var thirdStep = function(sentence) {
  return sentence+secondStep(firstStep(sentence));
}

var fourthStep = function(sentence){
  var length = sentence.length;
  var halfLength = length/2;
  var divided = halfLength - halfLength % 1;
  var halfChar = sentence.charAt(divided);
  var result = halfChar + thirdStep(sentence);

  var array = result.split("").reverse();
  return array.join("");
}

var result = fourthStep(sentence);

$(document).ready(function() {
  $("#photo1").click(function(){
    alert(sentence);
  });

  $("#photo2").click(function(){
    alert(result);
  });
});
