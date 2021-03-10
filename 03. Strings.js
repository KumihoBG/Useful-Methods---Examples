// Count String Occurrences - receive text and searched word, 
// finds all occurences of the word in a string
function countStrings(text, word){
    console.log(text.split(' ')
    .filter(el => el == word).length);
}

// Finding all positions (indexes) of a word in a sentence
function find(word){
    let currentIndex = word.indexOf("Java");

    while (currentIndex !== -1) {
        currentIndex = word.indexOf("Java", currentIndex + 1);
        return currentIndex;
    }
}

// Slice string - substring(startIndex, endIndex)
// endIndex not included and if it -negative, it automatically becomes 1st index=0 and startIndex becomes endIndex
function subString(string, startIndex, count) {
    startIndex = Number(startIndex);
    count = Number(count);
    return string.substring(startIndex, startIndex + count);
}

// Replace - replace(search, replacement)
function solve(text, word) {
    let indexOfMatch = text.indexOf(word);

    while (indexOfMatch !== -1) {
        text = text.replace(word, "*" .repeat(word.length));
        indexOfMatch = text.indexOf(word, indexOfMatch + 1);
    }
    console.log(text);
}

