
// Odd index position, map, filter, reverse
function oddNumbers(arr){
    let result = arr.filter((v, i) => (i % 2) == 1);
    let newArr = result.map(element => element * 2);
    newArr.reverse();
    return newArr.join(' ');
}

// Remove duplicate array elements / filter array elements
function distinct(arr){
    let unique = arr.filter(onlyUnique);

    function onlyUnique(value, index, self) { // the function itself!!!
        return self.indexOf(value) === index;
      }

    console.log(unique.join(' '));
}

// Filter array by index 
function extractEachKth(nums, index) {
    const result = nums.filter(num => num % index != 0);
    return result;
}

// Add max elements to new array filter
function maxSequence(arr) {
    let max = arr[0];
    let result = arr.filter(el => {
        if (el >= max) {
            max = el;
        }
        return el >= max;
    });
    console.log(result.join(' '));
}