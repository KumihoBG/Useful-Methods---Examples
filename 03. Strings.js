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

// tests if string contains a number
let test = /\d/.test(word); // returns true or false

// finds hash tags and cuts them from words
function hashTag(str) {
    let newWord = "";
    let sentence = str.split(' ');


    for (let word of sentence) {
        let test = /\d/.test(word);

        if (word.startsWith("#") && word.length > 1 && test == false){
            newWord = word.split("#")[1];
            console.log(newWord);
        }
    }
}

// reveals censored words
function revealWords(param1, param2) {
    let samples = param1.split(", ");
    let sentence = param2;
    let result = "";

    for (let word of samples) {
        let length = word.length;
        for (let el of sentence.split(' ')) {
            if (el.length === length) {
                if (el.includes("*")) {
                    result = sentence.replace(el, word);
                    sentence = result;
                }
            }
        }
    }
    console.log(result);
}
