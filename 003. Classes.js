// Class with functions and sorted collection of elements
class List {
    constructor(list = []) {
        this.list = list.sort((a, b) =>  a - b);
        this.size = this.list.length;
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size++;
        return;
    }

    remove(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error(`Index doesn't exist`);
        } else {
            this.list.splice(index, 1);
            this.size--;
            return;
        }
    }

    get(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error(`Index doesn't exist`);
        } else {
            return this.list[index];
        }
    }
}

// Chaining
function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
 
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment = function (comment) {
            this.comments.push(comment);
        }

        toString() {
            let output = super.toString() + '\n';
            output += `Rating: ${this.likes - this.dislikes}\n`;
            if (this.comments.length > 0) {
                output += 'Comments:\n';
                this.comments.forEach(x => output += ` * ${x}\n`);
            }
            return output.trim();
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
        // this makes chaining possible - returning the object itself
        view() {
            this.views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    };
}

// Useful validation 
function solve(){
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }  

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    } 

    class Battery {
        constructor(manufacturer, expectedLife ) {
            this.manufacturer = manufacturer;
            this.expectedLife  = expectedLife;
        }
    } 

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            // How to make abstract class in JS
            if (new.target === Computer) {
                throw new Error('Cannot instantiate this class');
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(battery) {
        // Checks if it is correct instance
            if(battery.constructor.name != 'Battery') {
                throw new TypeError('Invalid type');
            }
            this._battery = battery;
        }
    }

    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(keyboard) {
        // Checks if it is correct instance
            if (keyboard.constructor.name != 'Keyboard') {
                throw new TypeError('Invalid type');
            }
            this._keyboard = keyboard;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(monitor) {
            // Checks if it is correct instance
            if (monitor.constructor.name != 'Monitor') {
                throw new TypeError('Invalid type');
            }
            this._monitor = monitor;
        }
    }

    return {Keyboard, Monitor, Battery, Computer, Laptop, Desktop};
}

// Standard exam task - some, find
class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set budget(value) {
        if (value <= 0) {
            throw new Error("The budget cannot be a negative number");
        } else {
            this._budget = value;
        }
    }

    get budget() {
        return this._budget;
    }

    shopping([type, price]) {
        if (price > this.budget) {
            throw new Error("Not enough money to buy this product");
        } else {
            this._budget -= price;
            this.products.push(type);
            return `You have successfully bought ${type}!`
        }
    }

    recipes({ recipeName, productsList}) {
        if (productsList.some(p => this.products.includes(p) == false)) {
            throw new Error("We do not have this product");
        }
        this.dishes.push({
            recipeName,
            productsList
        });
        return `${recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        // looks inside of an array for some of its elements
        if (!this.dishes.some(d => d.recipeName === dish)) {
            throw new Error("We do not have this dish");
        } else if (this.guests.hasOwnProperty(name)) {
            throw new Error("This guest has already been invited");
        } else {
            this.guests[name] = dish;
            return `You have successfully invited ${name}!`
        }
    }

    showAttendance() {
        // let guestsList = Object.entries(this.guests);
        // let result = [];
        // // printing from an array with objects - ${this.dishes.find(d => d.recipeName == dish).productsList.join(', ')}
        // for (let [guestName, dish] of guestsList) {
        //     result.push(`${guestName} will eat ${dish}, which consists of ${this.dishes.find(d => d.recipeName == dish).productsList.join(', ')}`);
        // }
        // return result.join('\n');
        return Object.entries(this.guests)
        .reduce((accumulator, [guestName, dish]) => accumulator.concat([`${guestName} will eat ${dish}, which consists of ${this.dishes.find(d => d.recipeName == dish).productsList.join(', ')}`]), [])
        .join('\n');
    }
}

// Common task - find, findIndex
class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.capacity === 0) {
            throw new Error("Not enough parking space.");
        }
        this.vehicles.push({ carModel, carNumber, payed: false});
        this.capacity--;
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    // Looking for a string in an object value, nested in an array
    removeCar(carNumber) {
        let carIndex = this.vehicles.findIndex(car => car.carNumber === carNumber);
        if (carIndex < 0) {
            throw new Error(`The car, you're looking for, is not found.`);
        }
        // Accessing the property inside the array
        if (!this.vehicles[carIndex].payed) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }

        this.vehicles.splice(carIndex, 1);
        this.capacity++;
        return `${carNumber} left the parking lot.`;
    }

    // Looking for a string in an object value, nested in an array
    pay(carNumber) {
        let car = this.vehicles.find(car => car.carNumber === carNumber);
        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
        if (car.payed) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }
        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        if (!carNumber) {
            return [
                `The Parking Lot has ${this.capacity} empty spots left.`,
                this.vehicles
                .sort((a, b) => a.carModel.localeCompare(b.carModel))
                .map(car => 
                    `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed': 'Not payed'}`)
                .join('\n')
                ].join('\n');
        }
        let car = this.vehicles.find(car => car.carNumber === carNumber);
        return `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed': 'Not payed'}`;
    } 
}

// Filter, find, sort
class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length-1} others like this story!`;
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error('You can\'t like the same story twice!');
        }
        if (this.creator === username) {
            throw new Error(`You can't like your own story!`);
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error('You can\'t dislike this story!');
        }
        const index = this._likes.indexOf(username);
        this._likes.splice(index, 1);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        // CHECK IF filter returns correct result
        if (id == undefined || this._comments.filter(e => e.id == id).length == 0) {
            //undefined or comment dont have equal ID for reply                        
            let comment = {
                id: this._comments.length + 1,
                username: username,
                content: content,
                replies: []
            };
            this._comments.push(comment);
            return `${username} commented on ${this.title}`;
        } else {
            //create a reply to specific comment
            let indexForComment = this._comments.indexOf(this._comments.find(e => e.id == id));
            if (this._comments[indexForComment].replies == undefined) {
                this._comments[indexForComment].replies = [];
            }
            let newReply = {
                id: this._comments[indexForComment].replies.length + 1,
                username: username,
                content: content
            }
            this._comments[indexForComment].replies.push(newReply);
            return `You replied successfully`;
        }
    }

    toString(sortingType) {
        let result = `Title: ${this.title}\n`;
        result += `Creator: ${this.creator}\n`;
        result += `Likes: ${this._likes.length}\n`;
        result += `Comments:\n`;

        if (sortingType == 'asc') {
            for (let likeItem of this._comments) {
                result += `-- ${likeItem.id}. ${likeItem.username}: ${likeItem.content}\n`;
                if (likeItem.replies.length > 0) {
                    for (const key of likeItem.replies) {
                        result += `--- ${likeItem.id}.${key.id}. ${key.username}: ${key.content}\n`;
                    }
                }
            }
            result = result.trimEnd();
        }


        if (sortingType == 'desc') {
            let reversedComments = this._comments.reverse();
            for (let likeItem of reversedComments) {
                result += `-- ${likeItem.id}. ${likeItem.username}: ${likeItem.content}\n`;
                if (likeItem.replies.length > 0) {
                    let reverseReplies = likeItem.replies.reverse();
                    for (const key of reverseReplies) {
                        result += `--- ${likeItem.id}.${key.id}. ${key.username}: ${key.content}\n`;
                    }
                }
            }
            result = result.trimEnd();
        }

        if (sortingType == 'username') {
            let userSorted = this._comments.sort((a, b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0));
            for (let likeItem of userSorted) {
                result += `-- ${likeItem.id}. ${likeItem.username}: ${likeItem.content}\n`;
                if (likeItem.replies.length > 0) {
                    let userReplySorted = likeItem.replies.sort((a, b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0));
                    for (const key of userReplySorted) {
                        result += `--- ${likeItem.id}.${key.id}. ${key.username}: ${key.content}\n`;
                    }
                }
            }
            result = result.trimEnd();
        }

        return result;
    }
}