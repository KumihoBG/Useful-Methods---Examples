// Count String Occurrences - receive text and searched word, 
// finds all occurences of the word in a string
function countStrings(text, word){
    console.log(text.split(' ')
    .filter(el => el == word).length);
}


