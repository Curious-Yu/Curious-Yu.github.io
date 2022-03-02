
const numWords = document.getElementById('allSkills');

const wordCount = numWords.children.length;

var word = document.getElementsByClassName("theSkills");

//alert(wordCount);

for (var i = 0; i < wordCount; i++){
  word[i].style.animationDelay = i + "s";
};
