// remove occurences
function removeOccurrences() {
    let word=arguments['0'];
    let text = arguments['1'];
     let regex = new RegExp(`[\^${word}]`,'g');
     let removed = text.match(regex)
     console.log(removed.join(''));
 }

 // Substring and replace
 function changeAll(subStr, replacement) {
    subStr = subStr.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
    let pattern = new RegExp(subStr, 'g');
    message = message.replace(pattern, replacement);
}

 // Typical solution
 function furniture(arr){
    let command = arr.shift();
    let pattern = />>(?<name>[A-Z]+[a-z]*)<<(?<price>\d+[\.|\d]\d*)!(?<count>\d+)/;
    let test = "";
    let result = "";
    let spendMoney = 0;
    let total = 0;
    console.log(`Bought furniture:`);

    while (command !== "Purchase") {
        test = pattern.test(command);
        if (test === true) {
            // let result = String(el).match(pattern)
            while ((result = pattern.exec(command)) !== null){
                let name = result.groups['name'];
                let price = Number(result.groups['price']);
                let count = Number(result.groups['count']);
                spendMoney = price * count;
                total += spendMoney;
                console.log(`${name}`);
                break;
            }
        }
        command = arr.shift();
    }
    console.log(`Total money spend: ${total.toFixed(2)}`);
}

// Common regex from solutions
let breaksString = />>(?<name>[A-Z]+[a-z]*)<<(?<price>\d+[\.|\d]\d*)!(?<count>\d+)/;
let takesLettersOnly = /[A-Za-z]+/g;
let takesDigitsOnly = /[\d]/g;
let breaksIntoMultiple = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*.*[|](?<count>[\d]+)[|][^|$%.\d]*[^\d]*(?<price>[\d]+\.?[\d]+)[$]/g;
let patternPlanetMessage = /@(?<name>[A-Za-z]+)[^@:!\->]*:(?<population>\d+)[^@:!\->]*!(?<command>[A|D])![^@:!\->]*\->(?<soldier>\d+)/g;
let plusMinus = /[^0-9.\/+*-]/g;
let digitFloat = /[+-]?\d+\.?\d*/g;
let multiplyOrDivide = /\*|\//g;
//input.split(',').map(x => x.trim()) 
let splitPatternTrim = / *, */g;
let anotherSplitTrim = /\s*,\s*/g; 
let emailPattern = /((?<=\s)[a-zA-Z0-9]+([-.]\w*)*@[a-zA-Z]+?([.-][a-zA-Z]*)*(\.[a-z]{2,}))/gi;

function addAstra(input) {
    let totalCalories = 0;
    let caloriesPerDay = 2000;
    let days = 0;
    let items = []; // using an array to push the values because there might be occurences which could be rewritten(mistake)
    // very useful pattern using groups for char pairs
    let pattern = /([#|])(?<item>[A-Za-z\s]+)\1(?<expiration>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>(\d){1,5})\1/g;

    let result = "";
    while ((result = pattern.exec(input[0])) !== null) {
        let item = result.groups['item'];
        let expiration = result.groups['expiration'];
        let calories = Number(result.groups['calories']);
        // pushing items inside
        items.push({ item, expiration, calories });
        totalCalories += calories;
    }

    days = Math.floor(totalCalories / caloriesPerDay);
    console.log(`You have food to last you for: ${days} days!`);
    if (days > 0) {
        // line is actually an object but we use for of because items is an array
        for (let line of items) {
            console.log(`Item: ${line.item}, Best before: ${line.expiration}, Nutrition: ${line.calories}`);
        }
    }
}

// Palindromes
function mirrorWords(input) {
    let str = input[0];
    let pattern = /([@#])[A-Za-z]{3,}\1{2}[A-Za-z]{3,}\1/g;
    let hiddenPairs = '';
    let pairs = [];
    let palindromes = [];
    let printLine = [];

    while ((hiddenPairs = pattern.exec(str)) != null) {
        let hiddenPair = hiddenPairs[0];
        pairs.push(hiddenPair);
    }

    if (pairs.length == 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${pairs.length} word pairs found!`);
    }

    for (let pair of pairs) {
        if (palindrome(pair)) {
            palindromes.push(pair);
        }
    }

    if (palindromes.length === 0) {
        console.log(`No mirror words!`);
    } else {
        console.log("The mirror words are:");
        for (let pal of palindromes) {
            // slice, split by 2 symbols, remove empty spaces and join them again by <=>
            pal = pal.slice(1, -1).split(/@|#{2}/g).filter(x => x.length > 0);
            pal = pal.join(' <=> ');
            printLine.push(pal);
        }
        console.log(printLine.join(', '));
    }

    function palindrome(input) {
        let isPalindrome = false;
        let first = input.slice(1, -1);

        if (first.includes('@')) {
            first = first.split('@@');
        } else if (first.includes('#')) {
            first = first.split('##');
        }
        let second = first[1].split('').reverse().join('');
        if (first[0] === second) {
            isPalindrome = true;
        }
        return isPalindrome;
    }
}

// Fancy barcodes
function fancyBarcodes(input) {
    let count = Number(input.shift());
    let mainPattern = /(@#+)([A-Z][A-Za-z\d]{4,}[A-Z])(@#+)/g;
    let product = '';
    let digit = '';
    let barcodes = [];
    let isValid = false;

    for (let i = 0; i < count; i++) {
        let line = input[i];
        let result = mainPattern.exec(line);
        // if it is valid barcode
        if (result !== null) {
            barcodes.push(result[0]);
            isValid = true;
            // if it is NOT a valid barcode
        } else {
            isValid = false;
            console.log('Invalid barcode');
        }

        // execute only of the barcodes are valid
        if (isValid == true) {
            while (result !== null) {
                let secondPattern = /\d/g;
                let secondResult = secondPattern.exec(line);
                if (secondResult !== null) {
                    for (let char of line) { 
                        // here we check if char is number
                        if (!isNaN(char)) {
                            digit += char;
                            isValid = true;
                        }
                    }
                    console.log(`Product group: ${digit}`);
                    digit = '';
                } else {
                    product = "00";
                    console.log(`Product group: ${product}`);
                }
                break;

            } result = mainPattern.exec(line);
        }
    }
}

// Pascal Case splitter
function pascalCaseSplit(str) {
    let result = str.match(/[A-Z][a-z]+/g);
    console.log(result.join(", "));
}