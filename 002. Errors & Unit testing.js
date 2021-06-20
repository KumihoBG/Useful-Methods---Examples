// Useful npm commands
// -- install chai locally      npm install --save-dev chai

// Sum numbers
function subSum(arr, start, end) {
    // check if it is an array
    if (Array.isArray(arr) == false) {
        return NaN;
    }

    if (start < 0) {
        start = 0;
    }

    if (end > arr.length - 1) {
        end = arr.length - 1;
    }
    return arr.slice(start, end + 1).reduce((a, b) => a + Number(b), 0);
}

// Playing cards
function createCard(face, suit) {
    const validFaces = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'A', 'K'];
    const suitToString = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    };

    // Throw errors
    if (validFaces.includes(face) == false) {
        throw new Error('Invalid face');
    } else if (Object.keys(suitToString).includes(suit) == false) {
        throw new Error('Invalid suit');
    };

    return {
        face,
        suit,
        toString() {
            return `${face}${suitToString[suit]}`;
        }
    };
}

// Deck of cards
function printDeckOfCards(cards) {
    let result = [];
    let isInvalid = false;

    function createCard (face, suit){
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suitToString = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        };
    
        if (validFaces.includes(face) == false) {
            throw new Error('Invalid face');
        } else if (Object.keys(suitToString).includes(suit) == false) {
            throw new Error('Invalid suit');
        };
    
        return {
            face,
            suit,
            toString() {
                return `${face}${suitToString[suit]}`;
            }
        };
    }
    
    for (let card of cards) {
        try {
            let start = card.length - 1;
            let suit = card.substring(start);
            let face = card.substring(0, start);
            let resultCard = createCard(face, suit).toString();
            result.push(resultCard); 
        } catch {
            console.log(`Invalid card: ${card}`);
            isInvalid = true;
        }
    }
    if (isInvalid !== true) {
        return result.join(' '); 
    }
    return result;
}

// Unit testing
module.exports = mathEnforcer;

// Typical task
describe('Tests', () => {
    describe("newCarCost", function() {
        it('Returns original price when model unsupported', function() {
           expect(dealership.newCarCost('a', 1)).to.equal(1);
        });

        it('Returns discounted price', function() {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
         });
     });

     describe("carEquipment", function() {
        it("single element, single pick", function() {
            // testing arrays
            expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a']);
        });
        it("single element, single pick", function() {
            expect(dealership.carEquipment(['a', 'b', 'c'], [0, 2])).to.deep.equal(['a', 'c']);
        });
        it("single element, single pick", function() {
            expect(dealership.carEquipment(['a', 'b', 'c'], [1])).to.deep.equal(['b']);
        });
     });

     describe("euroCategory", function() {
        it("category is below treshold", function() {
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
        it("category is above treshold", function() {
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });
        it("category is at treshold", function() {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);
        });
     });
})

// Testing numbers
let mathEnforcer = require('../index');
let { expect } = require('chai');

describe ('mathEnforcer', () => {
    describe('addFive function', () => {
        it('should return correct result with a non-number parameter', () => {
            expect(mathEnforcer.addFive('a')).to.be.equal(undefined);
        });
        it('should return correct result with negative numbers', () => {
            expect(mathEnforcer.addFive(-1)).to.be.equal(4);
        });
        it('should be tested for floating-point numbers', () => {
            expect(mathEnforcer.addFive(1.5)).to.be.closeTo(6.5, 0.00001);
        });
        it('should return correct result with a number parameter', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
    });
    
    describe('substractTen function', () => {
        it('should return correct result with a non-number parameter', () => {
            expect(mathEnforcer.subtractTen('a')).to.equal(undefined);
        });
        it('should return correct result with negative numbers', () => {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });
        it('should be tested for floating-point numbers', () => {
            expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.00001);
        });
        it('should return correct result with a number parameter', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });
    });
    
    describe('sum function', () => {
        it('should return correct result with a non-number parameter', () => {
            expect(mathEnforcer.sum('a', 1)).to.equal(undefined);
        });
        it('should return correct result with negative numbers', () => {
            expect(mathEnforcer.sum(-1, -1)).to.be.equal(-2);
        });
        it('should be tested for floating-point numbers', () => {
            expect(mathEnforcer.sum(1.5, 1.6)).to.be.closeTo(3.1, 0.00001);
        });
        it('should return correct result with a non-number parameter', () => {
            expect(mathEnforcer.sum(1, 'a')).to.equal(undefined);
        });
        it('should return correct result with a non-number parameter', () => {
            expect(mathEnforcer.sum('a', 'a')).to.equal(undefined);
        });
        it('should return correct result with a number parameter', () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
        });
    });
});

// Testing an error in empty object
describe("Tests", function () {
    describe("makeAnOrder(obj)", function () {
        it("Return correct result", function () {
            expect(pizzUni.makeAnOrder({
                orderedPizza: "the name of the pizza",
                orderedDrink: "the name of the drink"
            })).to.equal("You just ordered the name of the pizza and the name of the drink.");
        });

        it("Return confirmation", function () {
            expect(pizzUni.makeAnOrder({
                orderedPizza: "the name of the pizza"
            })).to.equal("You just ordered the name of the pizza");
        });
        // calling anonymous function to get the error status
        it("Return error message", function () {
            expect(function(){
                pizzUni.makeAnOrder({});
            }).to.throw('You must order at least 1 Pizza to finish the order.');
        });
    });

    describe("getRemainingWork(statusArr)", function () {
        it("Confirms status of the order", function () {
            expect(pizzUni.getRemainingWork([{
                pizzaName: 'the name of the pizza',
                status: 'ready'
            }])).to.equal('All orders are complete!');
        });

        it("Confirms status of the order", function () {
            expect(pizzUni.getRemainingWork([{
                pizzaName: 'the name of the pizza',
                status: 'preparing'
            }])).to.equal(`The following pizzas are still preparing: the name of the pizza.`);
        });
    });

    describe("orderType(totalSum, typeOfOrder)", function () {
        it("Checks type of order", function () {
            expect(pizzUni.orderType(2, 'Carry Out')).to.equal(1.8);
        });

        it("Checks type of order", function () {
            expect(pizzUni.orderType(2, 'Delivery')).to.equal(2);
        });
    });
});