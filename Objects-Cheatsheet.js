// Fill object with key value elements from array input
function getWantedWords(arr){
    let occurances = {};
    arr.shift().split(' ').forEach(word => {
        occurances[word] = 0;
    });;
    return occurances;
}

// get Obj length
let length = Object.entries(myObj).length;

// Copy an object with spread operator
let cat1 = { ...cat2};

// Delete object KVP - don't use it often
delete obj.someProperty;

// Iteration through objects and associative arrays
function solve(input) {
    let contacts = {};

    for (const line of input) {
        let [name, phone] = line.split(' ');
        // assigning key and value to the empty object
        contacts[name] = phone;
    }
    // Accessing all object's keys and printing them plus their values
    Object.keys(contacts).forEach(key => console.log(`${key} -> ${contacts[key]}`));
}

// For in - keys
for (let key in yourobject) {
    console.log(key, yourobject[key]);
}

// for of KVP
for (let [key, value] of Object.entries(yourobject)) {
    console.log(key, value);
}

function solve(input) {
    let contacts = {};
    let arrayFromObject = [];

    for (let contact of input) {
        let name = contact.split(' ')[0];
        let phone = contact.split(' ')[1];
        contacts[name] = phone;
    }
    // iteration of objects - for in only!
    for (const key in contacts) {
        console.log(`${key} -> ${contacts[key]}`);
        // Creates array from the object keys or values, or tuples 
        arrayFromObject = Array.from(Object.keys(contacts));
    }

    console.log(arrayFromObject);

    // Very important method which searches through the object's properties
    if (contacts.hasOwnProperty('Peter')) {
        console.log('Found');
    } else {
        console.log('Not Found!');
    }

    // Another way to search through the object's properties
    if (contacts['Peter']) {
        console.log('Found');
    } else {
        console.log('Not Found!');
    }
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);

// Map - iterate, print
function solve(arrStr) {
    let storage = new Map();

    arrStr.forEach(line => {
        let [item, quantity] = line.split(' ');
        quantity = Number(quantity);

        if (storage.has(item)) {
            let oldQuantity = storage.get(item);
            storage.set(item, oldQuantity + quantity);
        } else {
            storage.set(item, quantity);
        }
    });

    // Standard printing
    // for (const key of storage.keys()) {
    //     console.log(`${key} -> ${storage.get(key)}`); 
    // }

    // KVP Printing = KEY VALUE PAIR
    for (const kvp of storage.entries()) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

// Set unique elements from array to set and back to array
function setF() {
    let names = ['Pesho', 'Gosho', 'Pesho'];
    let uniqueNames = new Set(names);
    // add new elements to the set
    uniqueNames.add('Petko');
    uniqueNames.delete('Gosho');
    // prints elements in set on new line
    uniqueNames.forEach(name => console.log(name));
    let backToArray = Array.from(uniqueNames);
    // prints the array
    console.log(backToArray);
}

// Sort map
function sortMap() {
    let numbers = new Map();
    numbers.set('Three', 3);
    numbers.set('One', 1);
    numbers.set('Two', 2);

    // for map
    let mapEntries = Array.from(numbers.entries());
    // for object
    // let objectEntries = Object.entries(numbers);

    let sortedMap = mapEntries.sort((a, b) => {
        return a[1] - b[1];
    })
    for (const kvp of sortedMap) {
        console.log(`${kvp[1]}`);
    }

}

// Delete Object 
let obj = {
    name = "Pesho",
    age = 20,
};

delete obj.name;

// Get average number
function getAverageGrade(grades){
    let gradesSum = grades.reduce((a, b) => a + b, 0);
    return gradesSum / grades.length;
}

// Find word occurrences in obj - sort descending
function wordOccurrences(input) {
    let words = {};
    let initialValue = 1;

    for (const line of input) {
        let word = line.split(',').toString();
        if (words.hasOwnProperty(word)){
            words[word] = words[word] + 1;
        } else {
            words[word] = initialValue;
        }
    }
    let sortedObj = Object.entries(words).sort((a, b) => b[1] - a[1]);
    
    for (const kvp of sortedObj) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}

// Neighbourhood
function solve(input) {
    let map = new Map();
    let neighborhoods = input.shift().split(', ');

    for (let neighborhood of neighborhoods) {
        map.set(neighborhood, []);
    }

    while (input.length > 0) {
        let current = input.shift().split(' - ');
        let neighborhood = current[0];
        let person = current[1];
        if (neighborhoods.includes(neighborhood)) {
            map.get(neighborhood).push(person);
        }
    }

    let sorted = Array.from(map)
        .sort((a, b) => { return b[1].length - a[1].length; });

    for (let neighborhood of sorted) {
        let neighborhoodName = neighborhood[0];
        let persons = neighborhood[1];
        console.log(`${neighborhoodName}: ${persons.length}`);
        for (let j = 0; j < persons.length; j++) {
            console.log(`--${persons[j]}`);
        }
    }
}

// Party time guests list
function partyTime(input) {
    let index = input.indexOf("PARTY");
    let guestList = input.slice(0, index);
    let guestsArrived = input.slice(index + 1);
    let reservations = generateList(guestList);

    guestsArrived.forEach(guest => {
        let status = checkVip(guest);
        let correctList = status ? "vip" : "regular";
        let currentGuest = reservations[correctList].find(o => o.guest == guest);
        if (status && currentGuest){
            currentGuest.isHere = true;
        } else if (!status && currentGuest){
            currentGuest.isHere = true;
        }
    });

    let vips = reservations.vip.filter(o => o.isHere === false);
    let regulars = reservations.regular.filter(o => o.isHere === false);
    console.log(vips.length + regulars.length);
    vips.concat(regulars).forEach(el => console.log(el.guest));

    function generateList(guests) {
        let obj = {
            vip: [],
            regular: [],
        };

        guests.forEach((guest) => {
            let guestObj = { guest, isHere: false }
            if (checkVip(guest)) {
                obj.vip.push(guestObj);
            } else {
                obj.regular.push(guestObj);
            }
        });

        return obj;
    }

    function checkVip(guest) {
        return !isNaN(Number(guest[0]));
    }
}

// Card game - set, split, unique arrays in an object
function cardGame(input) {
    let players = generatePlayers(input);
    let cardMapper = {
        p: {
            "J": 11,
            "Q": 12,
            "K": 13,
            "A": 14,
        },
        t: {
            "S": 4,
            "H": 3,
            "D": 2,
            "C": 1,
        }
    }

    Object.keys(players).forEach(player => {
        console.log(`${player}: ${totalPlayerResult(players[player])}`);
    });

    function totalPlayerResult(set) {
        let totalPower = 0;
        set.forEach(card => {
            let currentCard = card.split('');
            let value = currentCard.slice(0, currentCard.length - 1).join('');
            let suit = currentCard.slice(-1).join('');
            let p = 0;
        
            if (!cardMapper.p[value]) {
                p = Number(value);
            } else {
                p = cardMapper.p[value];
            }

            totalPower += (p * cardMapper.t[suit]);
        })
        return totalPower;
    }

    function generatePlayers(arr) {
        let obj = {};
        arr.forEach(playerInfo => {
            let [playerName, playerCards] = playerInfo.split(': ');
            let currentCardsList = playerCards.split(', ');
            if (!obj[playerName]) {
                obj[playerName] = new Set(currentCardsList);
            } else {
               playerCards.split(', ').forEach(card => {
                   obj[playerName].add(card);
               });
            }
        });
        return obj;
    }
}

// Object creation, trim, double sort
function travelTime(arr) {
    let result = {};

    for (let line of arr) {
        let [state, town, price] = line.split(" > ").map(x => x.trim());
        town = town.charAt(0).toUpperCase() + town.slice(1);

        if (!result.hasOwnProperty(state)) {
            result[state] = {};
        }
        if (!result[state].hasOwnProperty(town)) {
            result[state][town] = Number.POSITIVE_INFINITY;
        }
        if (result[state].hasOwnProperty(town)) {
            if (result[state][town] > Number(price)) {
                result[state][town] = Number(price);
            }
        }
    }
    let sortedStates = Object.keys(result).sort((a, b) => {
        "use strict";
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    for (let state of sortedStates) {
        let innerResult = "";
        innerResult += (state + " -> ");

        let sortedTownsByPrice = Object.keys(result[state]).sort((t1, t2) => {
            "use strict";
            return result[state][t1] - result[state][t2];
        });

        for (let obj of sortedTownsByPrice) {
            innerResult += (obj + " -> ");
            innerResult += (result[state][obj] + " ");
        }

        console.log(innerResult.trim());
    }
}

// Sum object values on iterration
function solve(input) {
    let resources = {};
    let material = "";
    let quantity = 0;
  
    for (let k = 0; k < input.length; k++) {
    // gets even and odd positions
      if (k % 2 === 0) {
        material = input[k];
      } else {
        quantity = Number(input[k]);
        if (resources.hasOwnProperty(material)) {
            // sums every value of the same key in an object
          resources[material] += quantity;
        } else {
          resources[material] = quantity;
        }
      }
    }
  
    for (let [key, value] of Object.entries(resources)) {
      console.log(`${key} -> ${value}`);
    }
  }


  // Flights - check status - create object with object property
  function flightSchedule(input) {
    let flights = {};
    input[0].forEach(line => {
        let [numberFly, destination] = line.split(' ')
        flights[numberFly] = {
            Destination: destination,
            Status: 'Ready to fly'
        }
    });
    input[1].forEach(line => {
        let [numberFly, status] = line.split(' ');
        if (flights.hasOwnProperty(numberFly)) {
            flights[numberFly].Status = status;
        }
    });
    for (let fly in flights) {
        if (flights[fly].Status === String(input[2])) {
            console.log(flights[fly]);
        }
    }
}


// school register
function studentsRegister(arr) {
    let schoolRegister = {};
    for (let line of arr) {
        let tokens = line.split(', ');
        let grade = Number(tokens[1].split(': ')[1]) + 1;
        let name = tokens[0].split(': ')[1];
        let score = Number(tokens[2].split(': ')[1]);
        if (score > 3) {
            let student = {name, score};
            if (!schoolRegister.hasOwnProperty(grade)) {
                schoolRegister[grade] = [];
            }
            schoolRegister[grade].push(student);
        }
    }
    let sortedGrades = Object.keys(schoolRegister).sort((a,b) => a - b);
    for (let grade of sortedGrades) {
        let students = schoolRegister[grade];
        console.log(`${grade} Grade`);
        console.log(`List of students: ${students.map(s => s.name).join(', ')}`);
        console.log(`Average annual grade from last year: ${average(students.map(s => s.score)).toFixed(2)}`);
        console.log();
    }

    function average(arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
}

// Find duplicate arrays in array
function sequences(matrix) {
    let obj = {};
    let storage = [];

    for (let line of matrix) {
        line = JSON.parse(line);
        if (!obj.hasOwnProperty(line)){
            obj[line] = line;
        }
    }
    // sort values by array length
    let sortedObj = Object.values(obj).sort((a,b) => a.length - b.length);
    
    for (let arr of sortedObj) {
        // sort value arrays in descending order
        let sortedDes = arr.sort((a,b) => b - a);
        storage.push(sortedDes);
    }
    // find duplicate arrays in array!!!
    let result = Array.from(new Set(storage.map(JSON.stringify)), JSON.parse);
    
    // print result
    for (let el of result) {
        console.log(`[${el.join(', ')}]`);
    }
}


// Arena Gladiators - sort, reduce
function solve(input) {
    let list = {}
    for (let el of input) {
        if (el === 'Ave Cesar') {
            break
        } else if (el.includes(' -> ')) {
            add(el)
        } else if (el.includes(' vs ')) {
            battle(el)
        }
    }

    let gladiatorsList = Object.entries(list)
    let array = []
    for (let elem of gladiatorsList) {
        let name = elem[0]
        let pow = Object.entries(elem[1])
        let sum = pow.map(a => a[1]).reduce((a, b) => a + b)
        array.push([name, pow, sum])
    }
    // Sort object properties - an array element
    array.sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]))

    // Print
    for (let part of array) {
        console.log(`${part[0]}: ${part[2]} skill`);
        part[1]
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .map(x => console.log(`- ${x[0]} <!> ${x[1]}`))
    }


    // Create object and add elements to it
    function add(el) {
        let [gladiator, skill, power] = el.split(' -> ')
        power = Number(power)
        if (!list.hasOwnProperty(gladiator)) {
            list[gladiator] = {}
            list[gladiator][skill] = power
        } else {
            if (!list[gladiator].hasOwnProperty(skill)) {
                list[gladiator][skill] = power
            } else {
                let oldPow = list[gladiator][skill]
                if (power > oldPow) {
                    list[gladiator][skill] = power
                }
            }
        }
    }

    // Compare two properties of an object
    function battle(el) {
        let [gladiatorA, gladiatorB] = el.split(' vs ')
        if (list.hasOwnProperty(gladiatorA) && list.hasOwnProperty(gladiatorB)) {
            let skillA = list[gladiatorA]
            let skillB = list[gladiatorB]
            for (let elA in skillA) {
                for (let elB in skillB) {
                    if (elA === elB) {
                        if (skillA[elA] > skillB[elB]) {
                            delete list[gladiatorB]
                        } else if (skillA[elA] < skillB[elB]) {
                            delete list[gladiatorA]
                        }
                    }
                }
            }
        }
    }
}