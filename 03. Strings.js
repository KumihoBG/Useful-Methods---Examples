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

// removes pattern from string
function removeOccurences(word, text) {
    let old;
    while (old !== text) {
        old = text;
        text = text.replace(word, '');
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

// Pascal Case splitter
function pascalCaseSplit(str) {
    let result = str.match(/[A-Z][a-z]+/g);
    console.log(result.join(", "));
}

function pascalCase(str) {
    let result = [];
    let index = 0;
    for (let i = 1; i < str.length; i++) {
        if (str[i].charCodeAt() >= 60 && str[i].charCodeAt() <= 90) {
            let word = str.substring(index, i);
            result.push(word);
            index = i;
        }
 
    }
    result.push(str.substring(index, str.length))
    console.log(result.join(', '));
}

// Cut reverse string
function cutReverse(str) {
    let index = Math.ceil(str.length / 2);
    let resultOne = str.slice(index).split('').reverse().join('');
    let resultTwo = str.slice(0, index).split('').reverse().join('');
    console.log(resultTwo + '\n' + resultOne);
}

// pushes new words in empty spaces - splice, includes
function hardWord(arr) {
    let str = arr[0];
    let newArr = arr[1];
    str = str.split(' ');
    
    for (let hole of str) {
        if (hole.includes("_")){
            let length = hole.length;
            if(hole.endsWith('.') || hole.endsWith(',')) {
                length -= 1;
            }
            for (let word of newArr) {
                if (word.length == length) {
                let index = str.indexOf(hole);
                if(hole.endsWith('.')) {
                    str.splice(index, 1, word + ".");
                } else if (hole.endsWith(',')){
                    str.splice(index, 1, word + ",");
                } else {
                    str.splice(index, 1, word);
                }
                }
            }
        }
    }  
    console.log(str.join(' '));
}

// Password Generator
function passGenerator(str) {
    let template = str[2];
    let password = str[0].concat(str[1]);
    let count = getVowels(password);

    for (let i = 0; i < template.length; i++) {
        let symbolNew = template[i].toUpperCase();

        for (let k = 0; k < password.length; k++) {
            let char = password[k];
            if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
                password = password.replace(char, symbolNew);

                if (template[i + 1] == undefined) {
                    i = 0;
                    symbolNew = template[i].toUpperCase();
                    continue;
                } else {
                    symbolNew = template[i + 1].toUpperCase();
                    i++;
                }
            }
        }
    }

    password = password.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);

    // count vowels in a string and returns count
    function getVowels(str) {
        var m = str.match(/[aeiou]/gi);
        return m === null ? 0 : m.length;
    }
}

// sum nums inside strings
function lettersChange(input) {
    // take input and filter for more than one empty space for split
    let pairs = input.split(' ').filter(w => w.length > 0);
    let result = 0;
    let totalResult = 0;

    for (let line of pairs) {
        line = Array.from(line);
        let first = line.shift();
        let second = line.pop();
        line = line.join('');
        line = Number(line);
        let position = Number(alphabetPosition(first));
        let positionTwo = Number(alphabetPosition(second))
        
        if (first === first.toUpperCase() || first === first.toUpperCase()) {  
            result = line / position;
        } else {
            result = line * position;
        }
    
        if (second === second.toUpperCase() || second === second.toUpperCase()) {  
            result -= positionTwo;
        } else {
            result += positionTwo;
        }

        totalResult += result;
    }

    console.log(totalResult.toFixed(2));

    // find alphabet position of a letter
    function alphabetPosition(text) {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            let code = text.toUpperCase().charCodeAt(i)
            if (code > 64 && code < 91) {
                result += (code - 64) + " ";
            }
        }
        return result.slice(0, result.length - 1);
    }
}

function valueOfString(str) {
    let totalSum = 0;
    let example = str[0];
    let command = str[1];

    for (let i = 0; i < example.length; i++) {
        let char = example[i];
        let isNum = Number(char);
        // checks if char is symbol other than letter
        if (!((char.charCodeAt() >= 48 && char.charCodeAt() <= 57) ||
            (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) ||
            (char.charCodeAt() >= 97 && char.charCodeAt() <= 122))) {
            continue;
            // checks if char is Number
        } else if (Number.isInteger(isNum)) {
            continue;
        } else {
            let index = example.indexOf(char);
            if (command === "UPPERCASE") {
                // checks if char is uppercase
                if (char === char.toUpperCase()) {
                    let num = Number(example.charCodeAt(index));
                    totalSum += num;
                }
            } else {
                // checks if char is lowercase
                if (char === char.toLowerCase()) {
                    let num = Number(example.charCodeAt(index));
                    totalSum += num;
                }
            }
            index++;
        }
    }

    console.log(`The total sum is: ${totalSum}`);
}

// concat - index occurences of a char in a string
function serialize(str) {
    let sequence = str.shift();
    let collection = {};

    for (let i = 0; i < sequence.length; i++) {
        let char = sequence[i];
        // important how to fill an object!!!
        collection[char] = (collection[char] || []).concat(i);
    }

    Object.entries(collection).forEach(([char, keys]) => {
        console.log(`${char}:${keys.join('/')}`);
    });
}

// from array to string
function deserialize(str) {
    let line = str.shift();
    let arr = [];

    while (line !== "end") {
        let [char, indexes] = line.split(':');
        let position = indexes.split('/');
        for (let i = 0; i < position.length; i++) {
            let currentIndex = Number(position[i]);
            arr[currentIndex] = char;
        }
        line = str.shift();
    }
    console.log(arr.join(''));
}

// pattern remove from start and end of string, cut pattern
function melrah(input) {
    let randomStr = input.shift();
    let pattern = input.shift();

    while (pattern.length > 0) {
        let firstMatch = randomStr.indexOf(pattern);
        let lastMatch = randomStr.lastIndexOf(pattern);
        if ((firstMatch > -1 && lastMatch > -1) && firstMatch !== lastMatch) {
            randomStr = randomStr.split('');
            randomStr.splice(firstMatch, pattern.length);
            randomStr = randomStr.join('');
            lastMatch = randomStr.lastIndexOf(pattern);
            randomStr = randomStr.split('')
            randomStr.splice(lastMatch, pattern.length)
            let removeFromPatt = pattern[Math.floor(pattern.length / 2)]
            pattern = pattern.replace(removeFromPatt, '');
            randomStr = randomStr.join('')
            console.log('Shaked it.');
        } else {
            break;
        }
    }
    console.log('No shake.');
    console.log(randomStr);
}

// Typical task
function worldTour(arr) {
    let stops = arr.shift()
    arr.pop()

    for (let line of arr) {
        let [command, ...args] = line.split(':')

        if (command == 'Add Stop') {
            let [index, string] = args
            index = Number(index)
            if (stops[index] !== undefined) {
                let tempStops = stops.split('')
                tempStops.splice(index, 0, string)
                stops = tempStops.join('')
            }
            console.log(stops);
        } else if (command == 'Remove Stop') {
            let [start, end] = args
            start = Number(start)
            end = Number(end)
            if (stops[start] !== undefined && stops[end] !==undefined) {
                stops = stops.split('')
                stops.splice(start, end - start + 1)
                stops = stops.join('')
            }
            console.log(stops);
        } else if (command == 'Switch') {
            let [oldStr, newStr] = args
            if (stops.includes(oldStr)) {
                let re = new RegExp(oldStr, "g")
                stops = stops.replace(re, newStr)
            }
            console.log(stops);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

// Palindrome
function palindrome(input){
    let isPalindrome = false;
    let first = input.slice(1, -1);

    if (first.includes('@')){
        first = first.split('@@');
    } else if(first.includes('#')){
        first = first.split('##');
    }
    let second = first[1].split('').reverse().join('');
    if (first[0] === second) {
        isPalindrome = true;
    }
    return isPalindrome;
}

// Insert, replace, substr, concat
function secretChat(input) {
    let message = input.shift();

    for (let line of input) {
        if (line === "Reveal") {
            console.log(`You have a new text message: ${message}`);
            break;
        }
        let [command, ...arguments] = line.split(':|:');
        if (command === "InsertSpace") {
            let index = Number(arguments[0]);
            let newChar = ' ';
            // inserts char at given position in string
            message = [message.slice(0, index), newChar, message.slice(index)].join('');
            console.log(message);
        } else if (command === "Reverse") {
            let substring = arguments[0];
                if (message.includes(substring)) {
                    // slice a message
                    message = message.replace(substring, '');
                    // reverse replacement
                    substring = substring.split('').reverse().join('');
                    // joins two parts
                    message = message.concat(substring);
                    console.log(message);
            } else {
                console.log('error');
            }
        } else if (command === "ChangeAll") {
            let substring = arguments[0];
            let replacement = arguments[1];
            for (let char of message) {
                // replaces with given char
                message = message.replace(substring, replacement);
            }
            console.log(message);
        }
    };
}