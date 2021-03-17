// remove occurences
function removeOccurrences() {
    let word=arguments['0'];
    let text = arguments['1'];
     let regex = new RegExp(`[\^${word}]`,'g');
     let removed = text.match(regex)
     console.log(removed.join(''));
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