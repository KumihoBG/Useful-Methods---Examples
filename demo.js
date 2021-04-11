function solve(input) {
    let message = input.shift();
    let command = input.shift().split(' ');
    while (command[0] !== "End") {
        if (command.includes("End")) {
            break;
        }
        if (command.includes("Translate")) {
            let char = command[1];
            let replacement = command[2];
            for (let ch of message) {
                message = message.replace(char, replacement);
            }
            console.log(message);
        }
        else if (command.includes("Includes")) {
            let string = command[1];
            if (message.includes(string)) {
                console.log('True');
            }
            else {
                console.log('False');
            }
        }
        else if (command.includes("Start")) {
            let string = command[1];
            if (message.startsWith(string)) {
                console.log('True');
            } else {
                console.log('False');
            }
        }
        else if (command.includes("Lowercase")) {
            message = message.toLowerCase();
            console.log(message);
        }
        else if (command.includes("FindIndex")) {
            let char = command[1];
            let lastIndex = message.lastIndexOf(char);
            console.log(lastIndex);
        }
        else if (command.includes("Remove")) {
            let startIndex  = Number(command[1]);
            let count = Number(command[2]);
            let result = message.substr(startIndex, count);
            message = message.replace(result, '');
            console.log(message);
        }
        command = input.shift().split(' ');
    }
}

solve(["//Thi5 I5 MY 5trING!//",

    "Translate 5 s",

    "Includes string",

    "Start //This",

    "Lowercase",

    "FindIndex i",

    "Remove 0 10",

    "End"]);