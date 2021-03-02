// Fill object with key value elements from array input
function getWantedWords(arr){
    let occurances = {};
    arr.shift().split(' ').forEach(word => {
        occurances[word] = 0;
    });;
    return occurances;
}

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