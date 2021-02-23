// Sorts arrays by length of elements inside
function sortByLength(strs) {
    strs.sort(function(a, b){
        return a.length - b.length //switch here for different order
    });
    return strs;
}

// Jumps to avoid obstacles in array
function jumpObstacles(nums){
    let arraySorted = nums.sort();
    let jump = 2;
    
    for (let i = 0; i < arraySorted.length; i++) {
        if (arraySorted[i] % jump == 0) {
            i = -1;
            jump++;
        }
    }
    return jump;
}

// Sort Numbers
function sortNumbers(arg1, arg2, arg3) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let num3 = Number(arg3);
    // Create array from numbers
    let array = [num1, num2, num3];
    // Sort array elements in descending mode
    array.sort(function (a, b) { return b - a });

    // Loop the array elements and print them
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// sort array - ascending order
function sortNumbers(...arr) {
   return arr.sort((a, b) => a - b).join('\n')
}   

// sort array - descending order 
function sortNumbers(...arr) {
  return arr.sort((a, b) => b - a).forEach(el => console.log(el))
}

// Sort array by big and small elements 
function solve(input) {
    let result = [];
    array = input.sort((a, b) => a - b);
    while (array.length !== 0) {
        result.push(array[array.length - 1]) && array.pop();
        result.push(array[0]) && array.shift();
    }
    console.log(result.join(' '));
}

// Sort first two elements in an array
function sortSmallest(arr){
    let sorted = arr.sort((a, b) => {
        return a-b;
    })

    let result = sorted.slice(0,2).join(' ');
    return result;
}

// Sort alphabetically all letters in a string array
arr.sort((a, b) => a.localCompare(b));

// Two criteria sort - length and alphabetical value
function sortArray(input) {
    input.sort(twoCriteriaSort);
    input.forEach(el => console.log(el));

    function twoCriteriaSort(cur, next) {
        if (cur.length === next.length) {
            return cur.localeCompare(next);
        }
        return cur.length - next.length;
    }
}


// sorts negative positive numbers in array
function negativePositive(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        let current = arr[i];
        if(current < 0){
            newArr.unshift(current);
        } else {
            newArr.push(current);
        }
    }
    return newArr;
}

// Hero inventory
function inventory(strArray){
    let heroes = [];
    for (const line of strArray) {
        let [hero, level, items] = line.split(' / ');
        items = items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ');
        let heroObj = {
            Hero: hero,
            level: Number(level),
            Items: items
        }
        heroes.push(heroObj);
    }
    heroes
    .sort((a,b) => a.level - b.level)
    .forEach(h => {
        console.log(`Hero: ${h.Hero}`);
        console.log(`level => ${h.level}`);
        console.log(`items => ${h.Items}`);
    })
}

// Make dictionary
function dictionary(arrStr){
    let dict = {};

    arrStr.forEach(element => {
        element = JSON.parse(element);
        let tuple = Object.entries(element);
        let term = tuple[0][0];
        let definition = tuple[0][1];
        dictionary[term] = definition;
    });

    Object.entries(dictionary)
    // sort alphabetically
    .sort((a,b) => a[0].localeCompare(b[0]))
    .forEach(e => {
        console.log(`Term: ${e[0]} => Definition: ${e[1]}`);
    })
    // see objects in array with Ctrl + F5
    console.log('DEBUG: ' + JSON.stringify(dict));
}