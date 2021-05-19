// Area and volume calculator
function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

// Input as two constructor functions and array of objects
function solve(area, vol, input) {
    // Defining the figure
    const figures = JSON.parse(input);
    //Using map to loop through the coordinates of the figure
    const result = figures.map(figure => ({
        // The call() method calls a function with a given this value and arguments provided individually.
        area: Math.abs(area.call(figure)),
        // The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
        volume: Math.abs(vol.apply(figure))
    }));

    return result;
}


// simple add function 
function solution(num) {
    let numOne = Number(num);
    return function(secondNum) {
        return numOne + secondNum;
    }
}

// Currency formatter
function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
    let formatter = function (value) {
        return currencyFormatter(separator, symbol, symbolFirst, value);
    }
    return formatter;
}

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345)); // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709)); // $ 2,71

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}