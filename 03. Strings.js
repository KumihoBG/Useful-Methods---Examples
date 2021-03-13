// Count String Occurrences - receive text and searched word, 
// finds all occurences of the word in a string
function countStrings(text, word) {
    console.log(text.split(' ')
        .filter(el => el == word).length);
}

// Finding all positions (indexes) of a word in a sentence
function find(word) {
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
        text = text.replace(word, "*".repeat(word.length));
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

        if (word.startsWith("#") && word.length > 1 && test == false) {
            newWord = word.split("#")[1];
            console.log(newWord);
        }
    }
}

// Reverse string - an array element
let index = 0;
let username = input[index++].toString();
let usernameReverse = "";

for (let i = username.length + 1; i >= 0; i--) {
    usernameReverse += username.charAt(i);
}

// Reverse simple string
function reverseString(string) {
    let result = string.split('').reverse().join('');
    console.log(result);
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

// indexOf - lastIndexOf - find file name and extension
function extractFile(string) {
    let file = string.split('\\').pop();
    let end = file.lastIndexOf(".");
    let fileName = file.slice(0, end);
    let fileExtension = file.slice(end + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

// Clean duplicate chars in a string
function replaceChars(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            result += str[i]
        }

    }
    return result;
}

// Reverse chars in a string
function reverseString(str1, str2, str3) {
    let stringRes = str1 + str2 + str3;
    let result = stringRes.split('').reverse().join(' ');
    console.log(result);
}

// Upper or Lower case
function lowerUpper(input) {
    if (input === input.toUpperCase()) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}

// Function Characters in Range ASCII
function charTable(str1, str2) {
    let printLine = " ";
    let first = str1.charCodeAt();
    let second = str2.charCodeAt();

    if (first > second) {
        printLine = backwards(first, second);
    } else {
        printLine = forwards(first, second);
    }

    function forwards(a, b) {
        for (let i = a + 1; i < b; i++) {
            let currentLetter = String.fromCharCode(i);
            printLine += currentLetter + " ";
        }
        return printLine;
    }

    function backwards(a, b) {
        for (let i = b + 1; i < a; i++) {
            let currentLetter = String.fromCharCode(i);
            printLine += currentLetter + " ";
        }
        return printLine;
    }
    return printLine;
}

// Characters in range
function solve(a, b) {
    let firstSymb = a.charCodeAt(0);
    let secondSymb = b.charCodeAt(0);
    let start = firstSymb < secondSymb ? firstSymb : secondSymb;
    let end = firstSymb > secondSymb ? firstSymb : secondSymb;
    let line = "";
    for (let i = start + 1; i < end; i++) {
        line += String.fromCharCode(i) + " ";
    }
    return line;
}

// Get the next day in a date from calendar
function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    let tomorrow = new Date(year, month - 1, date.getDate() + 1);
    console.log(`${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`);
}

// Gets last digit in a number from an array
function englishName(input) {
    let number = input.toString();
    let lastNumber = number[number.length - 1];
    switch (lastNumber) {
        case "1": console.log("one"); break;
        case "2": console.log("two"); break;
        case "3": console.log("three"); break;
        case "4": console.log("four"); break;
        case "5": console.log("five"); break;
        case "6": console.log("six"); break;
        case "7": console.log("seven"); break;
        case "8": console.log("eight"); break;
        case "9": console.log("nine"); break;
        case "0": console.log("zero"); break;
        default: break;
    }
}

// Calculator
function calculator(num, operator, num2) {
    num = Number(num);
    num2 = Number(num2);
    let result = 0;

    if (operator === "+") {
        result = num + num2;
    }
    else if (operator === "*") {
        result = num * num2;
    }
    else if (operator === "-") {
        result = num - num2;
    }
    else if (operator === "/") {
        result = num / num2;
    }
    console.log(result.toFixed(2));
}

// Sum digits i from a loop which sum is equal to 5,7,11
function specialNums(n) {
    let sum = 0;
    let isSpecial = false;
    let tf = "";

    for (let i = 1; i <= n; i++) {
        i = i.toString();
        for (let j = 0; j < i.length; j++) {
            sum += Number(i[j]);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            isSpecial = true;
            tf = "True";
        } else {
            isSpecial = false;
            tf = "False";
        }
        console.log(`${i} -> ${tf}`);
        sum = 0;
    }
}

// Triples of latin letters ACII table -> aaa, aab, aac... combinations
function trippleLetters(n) {
    // charCodeAt(0) - from sybmol to ASCII
    for (let i = 0; i < n; i++) {
        let firstLetter = String.fromCharCode(i + 97); // from ASCII to symbol
        for (let j = 0; j < n; j++) {
            let secondLetter = String.fromCharCode(j + 97);
            for (let k = 0; k < n; k++) {
                let thirdLetter = String.fromCharCode(k + 97);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}

// Password validator
function passwordValidation(pass) {
    let chars = pass.toString().split("");
    let digits = 0;
    let isValid = false;
    let isInvSymbol = false;
    let hasDigits = false;

    // Checks if the char is a num and if it has 2 digits at least
    for (let i = 0; i < chars.length; i++) {
        let current = Number(chars[i]);
        if (Number.isInteger(current)) {
            digits++;
            if (digits >= 2) {
                hasDigits = true;
            }
        }
    }

    // Checks if a char is letter or digit only
    for (let j = 0; j < chars.length; j++) {
        let currChar = chars[j];
        if ((currChar.charCodeAt() >= 48 &&
            currChar.charCodeAt() <= 57) ||
            (currChar.charCodeAt() >= 65 &&
                currChar.charCodeAt() <= 90) ||
            (currChar.charCodeAt() >= 97 &&
                currChar.charCodeAt() <= 122)) {
            isInvSymbol = false;
        } else {
            isInvSymbol = true;
            break;
        }
    }
    if (pass.length < 6 || pass.length > 10) {
        isValid = false;
    } else {
        isValid = true;
    }
    if (isValid == true && isInvSymbol == false && hasDigits == true) {
        console.log('Password is valid');
    }
    if (isValid == false) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (isInvSymbol == true) {
        console.log('Password must consist only of letters and digits');
    }

    if (hasDigits == false) {
        console.log('Password must have at least 2 digits');
    }
}

// Character sequence
function characters(arg) {
    let sequence = arg;
    for (let i = 0; i < sequence.length; i++) {
        let letter = sequence[i];
        console.log(letter);
    }
}

// Replace char from one string
function rightPlace(str, char, result){
    let word = str.replace("_", char);
    if (word === result){
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

// Finds a different char in a string
function differentSymbolsNaive(str) {
    let charArr = str.split('');
    let set = new Set();
    for(let char of charArr) {
        set.add(char);
    };
   console.log(set.size);
}


// Looks for char in a string = includes()
function intFloat(num1, num2, num3){
    let sum = num1 + num2 + num3;
    let result = sum + "";
    if (result.includes('.')){
        console.log(`${sum} - Float`);
    } else {
        console.log(`${sum} - Integer`);
    }
}

// Vowel sum
function sum(arg) {
    let vowels = arg;
    let sum = 0;
    for (i = 0; i < vowels.length; i++) {
        switch (vowels.charAt(i)) {
            case "a": sum += 1; break;
            case "e": sum += 2; break;
            case "i": sum += 3; break;
            case "o": sum += 4; break;
            case "u": sum += 5; break;
            default: break;
        }
    }
    console.log(sum);
}

// Reverse array of strings
function reverseArrayStr(arr){
    let reversed = arr.reverse();
    let output = reversed.join(' ');
    console.log(output);
}

// Sum even nums in string array
function sumEvenNums(str){
    let sum = 0;

    for (i = 0; i < str.length; i++){
        let currentNum = Number(str[i]);
        if (currentNum % 2 == 0){
            sum += currentNum;
        }
    }
    console.log(sum);
}

// Insert dashes
function insertDashes(arr) {
    let index = 0;
    let newArray = arr.toString();
    let finalArray = newArray[index++];
    for (i = 0; i < newArray.length-1; i++){
        if (newArray[i] % 2 != 0 && newArray[i + 1] % 2 != 0){
            finalArray += '-';
        }
        finalArray += newArray[index++];
    }
   console.log(finalArray);
}