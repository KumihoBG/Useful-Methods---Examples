// Company
class Company {
    constructor() {
        this.departments = new Map();
    }
    
    addEmployee(username, salary, position, department) {
 
        if (!username || !salary || salary < 0 || !position || !department) {
            throw new Error("Invalid input!");
        }
 
        let newEmployee = { username, salary, position, department };
 
        if (this.departments.has(department)) {
            this.departments.get(department).push(newEmployee);
        } else {
            this.departments.set(department, [newEmployee]);
        }
 
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }
 
    bestDepartment() {
        let totalSalary = (department) => {
            let totalSalary = department[1].reduce((acc, b) => { return acc += b.salary }, 0);
            let averageSalary = (totalSalary / department[1].length).toFixed(2);
            department.push(averageSalary);
            return averageSalary;
        };
        let bestDepartment = [...this.departments].sort((a, b) => totalSalary(b) - totalSalary(a))[0];
        let sortBySalaryAndName = bestDepartment[1].sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));
 
        let result = `Best Department is: ${bestDepartment.shift()}\n`;
        result += `Average salary: ${bestDepartment.pop()}\n`;
        sortBySalaryAndName.forEach(e => result += `${e.username} ${e.salary} ${e.position}\n`);
 
        return result.trim();
    }
}

// Inherit object properties
function cars(cmnds) {
    const objects = {};

    const getProperties = (obj = {}) => {
        const output = [];
        for (const prop in obj) {
            output.push(`${prop}:${obj[prop]}`);
        }
        return output.join(', ');
    };

    const commands = {
        create: (name1, inherit, name2) => {
            let obj = {};
            if (inherit) {
                obj = objects[name2];
            }
            objects[name1] = Object.create(obj);
        },
        set: (name, prop, val) => {
            objects[name][prop] = val;
        },
        print: (name) => {
            console.log(getProperties(objects[name]))
        },
    };
    // Splitting input and creating an object which has commands as keys
    for (const el of cmnds) {
        let [cmd, ...args] = el.split(' ')
        commands[cmd](...args)
    }

}

// Copy object and take key values from library
function factory(library, orders) {
    let fulfilledOrders = [];
  
    for (let order of orders) {
      const copyObj = Object.assign({}, order.template);
      for (let part of order.parts) {
        copyObj[part] = library[part];
      }
      fulfilledOrders.push(copyObj);
    }
    return fulfilledOrders;
}

// using arguments and typeof
function solve() {
    let result = [];
    let count = {};
    [...arguments].forEach(argument => {
        let type = typeof argument;
        result.push({ type, value: argument});

        if (!count[type]) {
            count[type] = 0;
        }

        count[type]++;
    });

    result.forEach(r => console.log(`${r.type}: ${r.value}`));
    let sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
    sorted.forEach(el => {
        console.log(`${el[0]} = ${el[1]}`);
    })
} 

// Common task
function heroicInventory(input) {
    let heroes = [];
    let items = [];

    for (let line of input) {
        let [name, level, attributes] = line.split(' / ');
        level = Number(level);
        // very important! how to destructuring array items
        attributes = attributes ? attributes.split(', ') : [];
        for (let el of attributes) {
            items.push(el);
        }
        // we can push an object in array this way too
        heroes.push({ name, level, items });
        items = [];
    }
    // print array of objects as JSON representation
    console.log(JSON.stringify(heroes));
}

// New kind of tasks
function solve() {
    const canFight = state => ({
        fight: () => {
        state.stamina--;
        console.log(`${state.name} slashes at the foe!`);
        }
    });

    const canCast = state => ({
        cast: (spell) => {
            state.mana--;
            console.log(`${state.name} cast ${spell}`);
        }
    });

    const fighter = name => {
        let state = {
            name,
            health: 100,
            stamina: 100,
        }
        return Object.assign(state, canFight(state));
    }

    const mage = name => {
        let state = {
            name,
            health: 100,
            mana: 100,
        }
        return Object.assign(state, canCast(state));
    }

    return { mage: mage, fighter: fighter };
}

// Sorted list
function createSortedList() {
    let collection = [];

    let list = {
        size: 0,
        add,
        remove,
        get,
    };

    function add(element) {
        collection.push(element);
        this.size++;
        collection.sort((a, b) => a - b);
    }

    function remove(index) {
        if (index >= 0 && index < collection.length) {
            collection.splice(index, 1);
            this.size--;
        }
    }

    function get(index) {
        let element = collection[index];
        if (index >= 0 && index < collection.length) {
            return element;
        }
    }
    return list;
}

// Fill object with key value elements from array input
function getWantedWords(arr){
    let occurances = {};
    arr.shift().split(' ').forEach(word => {
        occurances[word] = 0;
    });;
    return occurances;
}

// Strange price comparison in object
function lowestPrice(input) {
    let products = {};
    let result = [];

    for (let line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (!products[product]) {
            products[product] = {
                town,
                price,
            };
        } else {
            products[product] = products[product].price <= price ? products[product] : { town, price };
        }
    }

    for (let product in products) {
        result.push(`${product} -> ${products[product].price} (${products[product].town})`)
    }
    return result.join('\n');
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


// Standard task
function pianist(input) {
    let pieces = Number(input.shift());
    let pianist = {};

    for (let i = 0; i < pieces; i++) {
        let [piece, composer, key] = input.shift().split('|');
        pianist[piece] = { composer, key };
    }

    let line = input.shift();
    while (line !== "Stop") {
        let [command, first, second, third] = line.split("|");
        switch (command) {
            case "Add":
                let piece = first;
                let composer = second;
                let key = third;
                if (!pianist.hasOwnProperty(piece)) {
                    pianist[piece] = { composer, key };
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${piece} is already in the collection!`);
                }
                break;

            case "Remove":
                if (pianist.hasOwnProperty(first)) {
                    delete pianist[first];
                    console.log(`Successfully removed ${first}!`);
                } else {
                    console.log(`Invalid operation! ${first} does not exist in the collection.`);
                }
                break;
            case "ChangeKey":
                let newKey = second;
                if (pianist.hasOwnProperty(first)) {
                    pianist[first].key = newKey;
                    console.log(`Changed the key of ${first} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${first} does not exist in the collection.`);
                }
                break;
        }
        line = input.shift();
    }
    let sorted = Object.entries(pianist).sort((a, b) => a[0].localeCompare(b[0])) || ((a, b) => a[1].composer.localeCompare(b[1].composer));

    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> Composer: ${kvp[1].composer}, Key: ${kvp[1].key}`);
    }
}

// Hard task - sort, reduce, regex, commands
function plantDiscovery(arr) {
    arr.pop()
    let numberOfPlant = arr.shift()
    let plantObj = {}

    while (numberOfPlant--) {
        const [plan, rarity] = arr.shift().split('<->')
        plantObj[plan] = { rarity, 'rating': [] }
    }

    while (arr.length > 0) {
        const [command, plan, points] = arr.shift().match(/[^:\s-]+/g)
        if (!plantObj.hasOwnProperty(plan)) {
            console.log('error')
            continue
        }
        command == 'Rate' ? plantObj[plan].rating.push(+points) : command == 'Reset' ? plantObj[plan].rating = [] : plantObj[plan].rarity = points
    }

    for (const [key, val] of Object.entries(plantObj)) {
        let getLength = val.rating.length
        try {
            plantObj[key].rating = val.rating.reduce((a, b) => a + b) / getLength;
        } catch {
            plantObj[key].rating = 0;
        }
    }

    let sortObj = Object.entries(plantObj).sort((a, b) => b[1].rarity - a[1].rarity || b[1].rating - a[1].rating)
    console.log('Plants for the exhibition:')
    for (const key of sortObj) {
        console.log(`- ${key[0]}; Rarity: ${key[1].rarity}; Rating: ${key[1].rating.toFixed(2)}`);
    }
}

// Need for speed
function needForSpeed(input) {
    let cars = {};
    let carsNum = Number(input.shift());
    for (let i = 0; i < carsNum; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        fuel = Number(fuel);
        mileage = Number(mileage);
        cars[car] = { fuel, mileage };
    }

    let commands = input.shift();
    while (commands !== "Stop") {
        let [command, carName, ...carInfo] = commands.split(' : ');
        if (command === "Drive") {
            let distance = Number(carInfo[0]);
            let fuel = Number(carInfo[1]);
            if (cars[carName].fuel < fuel) {
                console.log('Not enough fuel to make that ride');
            } else {
                cars[carName].mileage += distance;
                cars[carName].fuel -= fuel;
                console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }
            if (cars[carName].mileage > 100000) {
                console.log(`Time to sell the ${carName}!`);
                delete cars[carName];
            }
        } else if (command === "Refuel") {
            let fuel = Number(carInfo[0]);
            let oldFuel = cars[carName].fuel;
            if (oldFuel + fuel > 75) {
                cars[carName].fuel = 75;
                console.log(`${carName} refueled with ${75 - oldFuel} liters`);
            } else {
                cars[carName].fuel += fuel;
                console.log(`${carName} refueled with ${fuel} liters`);
            }
        } else if (command === "Revert") {
            let kilometers = Number(carInfo[0]);
            cars[carName].mileage -= kilometers;
            if (cars[carName].mileage < 10000) {
                cars[carName].mileage = 10000;
            } else {
                console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
            }
        }
        commands = input.shift();
    }
    let sorted = Object.entries(cars);
    
    // good sorting function
    sorted.sort((a, b) => {
        if (b[1].mileage === a[1].mileage){
            return a[0].localeCompare(b[0]);
        } else {
            return b[1].mileage - a[1].mileage;
        }
    })
    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> Mileage: ${kvp[1].mileage} kms, Fuel in the tank: ${kvp[1].fuel} lt.`);
    }
}