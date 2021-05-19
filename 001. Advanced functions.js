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