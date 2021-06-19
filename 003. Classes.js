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