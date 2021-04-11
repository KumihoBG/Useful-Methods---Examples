function solve(input) {
    let people = {};
    let commands = input.shift();

    while (commands !== "Results") {
        let [command, ...info] = commands.split(':');
        if (command === "Add") {
            let person = info[0];
            let health = Number(info[1]);
            let energy = Number(info[2]);
            if (!people.hasOwnProperty(person)){
                people[person] = {
                    health,
                    energy,
                }
            } else {
                people[person].health += health;
            }
        } else if (command === "Attack") {
            let attackerName = info[0];
            let defenderName = info[1];
            let damage = Number(info[2]);
            if (people.hasOwnProperty(attackerName) && people.hasOwnProperty(defenderName)){
                people[defenderName].health -= damage;
                people[attackerName].energy -= 1;
                if (people[defenderName].health <= 0) {
                    delete people[defenderName];
                    console.log(`${defenderName} was disqualified!`);
                }
                if (people[attackerName].energy <= 0) {
                    delete people[attackerName];
                    console.log(`${attackerName} was disqualified!`);
                }
            } else {
                people[username].health += count;
            }
        } else if (command === "Delete") {
            let username = info[0];
            if (people.hasOwnProperty(username)){
                delete people[username];
            }
            if (username === "All") {
                people = {};
            }
        }
        commands = input.shift();
    }

    let sorted = Object.entries(people);
    sorted.sort((a, b) => {
        if (b[1].health === a[1].health) {
            return a[0].localeCompare([b[0]]);
        } else {
            return b[1].health - a[1].health;
        }
    })
    console.log(`People count: ${sorted.length}`);
    for (let name of sorted) {
        console.log(`${name[0]} - ${name[1].health} - ${name[1].energy}`);
    }
}


// solve((["Add:Mark:1000:5", 

// "Add:Clark:1000:3", 

// "Attack:Clark:Mark:500", 

// "Add:Allison:2500:5", 

// "Attack:Clark:Mark:300", 

// "Add:Charlie:4000:10", 

// "Attack:Clark:Mark:500", 

// "Results"]));

solve((["Add:Bonnie:3000:5", 
"Add:Johny:4000:10", 
"Delete:All", 

"Add:Bonnie:3333:3", 
"Results"]))