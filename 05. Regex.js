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