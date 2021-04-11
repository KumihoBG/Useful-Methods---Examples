// Remove trailing zeroes
firstNum = parseFloat(firstNum.toFixed(secondNum));

// Factorial
function factorial(arg) {
    let num = Number(arg);
    let factorial = 1;

    for (let i = num; i >= 2; i--) {
        factorial *= i;
    }
    console.log(factorial);
}

// Inches to centimeters
function inchesCentimeters(param1) {
    let inches = Number(param1);
    let centimeters = inches * 2.54;
    console.log(centimeters);
}

// Deposit calculator
function calculateDeposit(arg1, arg2, arg3) {
    let deposit = arg1;
    let months = Number(arg2);
    let annualInterest = arg3;
    let amountInterest = (deposit * annualInterest) / 100;
    let accumulated = (amountInterest / 12);
    let time = (months * accumulated).toFixed(2);
    let finalAmount = parseFloat(deposit) + parseFloat(time);
    console.log(finalAmount);
}

// Radians to Degrees
function toDegrees(arg1) {
    let radians = Number(arg1);
    let pi = Math.PI;
    let degrees = radians * 180 / pi;
    console.log(degrees.toFixed(0));
}

// Greater number
function greaterNumber(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let isGreater = num1 >= num2;
    if (isGreater == true) {
        console.log(num1);
    }
    if (isGreater == false) {
        console.log(num2);
    }
}

// Product of pair elements in an array
function adjacentElementsProduct(nums) {
    let product = 0;
    let result = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        num1 = nums[i++];
        num2 = nums[i];
        product = num1 * num2;
        if (product > result) {
            result = product;
        } else {
            product = product;
        }
        num1 = nums[i--];
        product = 0;
    }
   console.log(result);;
}



// Even or odd
function evenOrOdd(num) {
    num = Number(num);
    if (num % 2 == 0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}
// Leap year
function leapYear(year){
    if(year % 4 === 0 && year % 100 !== 0){
        console.log('yes');
    } else if (year % 400 === 0){
        console.log('yes');
    } else {
        console.log('no');
    }
}

// Area of figures
function area(arg1, arg2, arg3) {
    let type = arg1;

    if (type === "square") {
        let size = Number(arg2);
        let squareArea = size * size;
        console.log(squareArea.toFixed(3))
    }
    else if (type === "rectangle") {
        let a = Number(arg2);
        let b = Number(arg3);
        let rectangleArea = a * b;
        console.log(rectangleArea.toFixed(3));
    }
    else if (type === "circle") {
        let radius = Number(arg2);
        let circleArea = Math.PI * (radius * radius)
        console.log(circleArea.toFixed(3));
    }
    else if (type === "triangle") {
        let size = Number(arg2);
        let height = Number(arg3);
        let triangleArea = (size * height) / 2;
        console.log(triangleArea.toFixed(3));
    }
}

// Cone area and volume
function cone(radius, height){
    let slantHeight = Math.sqrt(radius * radius + height * height);
    let volume = Math.PI * radius * radius * height / 3;
    let area = Math.PI * radius * (radius + slantHeight);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

// Heron's formula for triangle area
function triangleArea(){
    let input = arguments;
    let sideA = Number(arguments[0]);
    let sideB = Number(arguments[1]);
    let sideC = Number(arguments[2]);
    let semiPerimeter = (sideA + sideB + sideC) / 2;
    let formula = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));
    console.log(formula);
}

// Sum seconds
function sumSeconds(arg1, arg2, arg3) {
    let first = Number(arg1);
    let second = Number(arg2);
    let third = Number(arg3);
    let totalSeconds = first + second + third;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }
    else {
        console.log(`${minutes}:${seconds}`);
    }
}

// Metric convertor
function metricConverter(arg1, arg2, arg3) {
    let number = Number(arg1);
    let metric = arg2;
    let converted = arg3;

    if (metric === "mm") {
        if (converted === "m") {
            number = number / 1000;
        }
        if (converted === "cm") {
            number = number / 10;
        }
    }
    else if (metric === "m") {
        if (converted === "cm") {
            number = number * 100;
        } else if (converted === "mm") {
            number = number * 1000;
        }
    }
    else if (metric === "cm") {
        if (converted === "mm") {
            number = number * 10;
        } else if (converted === "m") {
            number = number / 100;
        }
    }
    console.log(number.toFixed(3))
}

// Number operations
function numberOperators(arg1, arg2, arg3) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let operator = arg3;

    if (operator === "+") {
        let result = num1 + num2;
        if (result % 2 === 0) {
            let even = "even";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${even}`);
        }
        else {
            let odd = "odd";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${odd}`);
        }
    }
    else if (operator === "-") {
        let result = num1 - num2;
        if (result % 2 === 0) {
            let even = "even";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${even}`);
        }
        else {
            let odd = "odd";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${odd}`);
        }
    }
    else if (operator === "*") {
        let result = num1 * num2;
        if (result % 2 === 0) {
            let even = "even";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${even}`);
        }
        else {
            let odd = "odd";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${odd}`);
        }
    }
    else if (operator === "/") {
        let result = num1 / num2;
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        }
        else {
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
        }
    }
    else if (operator === "%") {
        let result = num1 % num2;
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        }
        else {
            console.log(`${num1} % ${num2} = ${result}`);
        }
    }
}

// Even powers of 2
function evenNumbers(arg) {
    arg = Number(arg);
    for (let i = 0; i <= arg; i += 2) {
        let result = Math.pow(2, i)
        console.log(result);
    }
}

// N-th power of N-th array index
function power(array, n) {
    let result = 0;
    let limit = array.length;

    for (let i = 0; i <= n; i++) {
        if (n === i) {
            result = Math.pow(array[i], n);
        } else if (n >= limit){
            result = -1;
            break;
        }
    }
    return result;
}

// Numbers divisable by 9
function numbersDivisible9(arg1, arg2) {
    arg1 = Number(arg1);
    arg2 = Number(arg2);
    let sum = 0;
    let numberStrings = "";
    for (let i = arg1; i <= arg2; i++) {
        if (i % 9 == 0) {
            sum += i;
            numberStrings += i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(numberStrings);
}

// Numbers ending in 7
function numbers() {
    for (let i = 1; i <= 997; i++) {
        if (i % 10 === 7) {
            console.log(i);
        }
    }
}

// Divide without remainder
function division(input) {
    let nums = Number(input[0]);
    let divide2 = 0;
    let divide3 = 0;
    let divide4 = 0;

    for (let i = 1; i < input.length; i++) {
        let current = Number(input[i]);
        if (current % 2 === 0) {
            divide2++;
        }
        if (current % 3 === 0) {
            divide3++;
        }
        if (current % 4 === 0) {
            divide4++;
        }
    }
    console.log(`${(divide2 / nums * 100).toFixed(2)}%`);
    console.log(`${(divide3 / nums * 100).toFixed(2)}%`);
    console.log(`${(divide4 / nums * 100).toFixed(2)}%`);
}
// Smallest Number 
function smallestNum(a, b, c){
    let smallest = Number.MAX_SAFE_INTEGER;

    smallest = smaller(a, smallest);
    smallest = smaller (b, smallest);
    smallest = smaller (c, smallest);

    function smaller(x, y) {
        if (x < y) {
            y = x;
        }
        return y;
    }
    return smallest;
}

// Min number
function minNumbers(input) {
    let min_number = 1000000000;

    for (i = 1; i <= input.length; i++) {
        let current = Number(input[i]);
        if (current < min_number) {
            min_number = current;
        }
    }
    console.log(min_number);
}

// Max number
function maxNumber(input) {
    let index = 0;
    let command = input[index++];
    let maxNumber = Number.MAX_SAFE_INTEGER;


    while (command !== "Stop") {
        let currentNum = Number(command);
        if (currentNum < maxNumber) {
            maxNumber = currentNum;
        }
        command = input[index++];
    }
    console.log(maxNumber);
}

// Bigger number
function biggerNumber(arg1, arg2, arg3){
    let array = [arg1, arg2, arg3].sort();
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++){
        let currentNum = Number(array[i]);
        if (currentNum > maxNumber) {
            maxNumber = currentNum;
        }
    }
    console.log(maxNumber);
}

// Max number in an array
function maxNumber(arr) {
    let result = [];
  
    while (arr.length !== 0) {
      let [current, biggest] = [arr.shift(), Math.max(...arr)];
      if (current > biggest) result.push(current);
    }
    console.log(result.join(" "));
  }

// Max sequence in an array 
function maxSequence(input) {
    let newArr = [];
    let counter = 0;
    let winningCounter = 0;
    let element = 0;
    let number = "";

    for (let i = 0; i < input.length - 1; i++) {
        let current = input[i];
        let next = input[i + 1];
        if (current == next) {
            counter++;
            if (counter > winningCounter) {
                winningCounter = counter;
                element = input[i];
                number = input[i];
            }
        } else {
            counter = 0;
        }
    }
    for (let j = 0; j <= winningCounter; j++) {
        newArr.push(number);
    }
    console.log(newArr.join(' '));
}

// Count the words
function countWords(input) {
    let words = input.split(" ");
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        count++;
    }

    if (count > 10) {
        console.log(`The message is too long to be send! Has ${count} words.`);
    }
    else {
        console.log("The message was send successfully!");
    }
}

// Sequence 2k + 1
function sequence(input) {
    let index = 0;
    let n = Number(input[index++]);
    let counter = 1;

    while (counter <= n) {
        console.log(counter);
        counter = counter * 2 + 1;
    }
}

// Last K sequence in array
function lastKSeq(n, k){
    let result = [1];
    
    for (let i = 1; i < n; i++){
        let lastK = result.slice(-k);
        let sum = 0;
        
        for (let num of lastK){
            sum += num;   
        }
        result.push(sum);
    }
    console.log(result.join(' '));
}

// last K number sequence
function lastKNumbersSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
         let startIndex = Math.max(0, i - k);
         let currentElement = result.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0);
         result.push(currentElement);
    }
    console.log(result.join(" "));
}

// Sum prime non prime
function numbers(input) {
    let index = 0;
    let num = input[index++];
    let sumPrime = 0;
    let sumNonPrime = 0;

    while (num !== "stop") {
        let currentNum = Number(num);
        if (currentNum < 0) {
            console.log('Number is negative.');
            num = input[index++];
            continue;
        }

        if (currentNum !== 3 && currentNum !== 2 && currentNum !== 0) {
            if (currentNum % 2 === 0 || currentNum % 3 === 0) {
                sumNonPrime += currentNum;
                num = input[index++];
                continue;
            }
        } else if (currentNum === 0) {
            sumNonPrime += currentNum;
            num = input[index++];
            continue;
        }

        if (currentNum % 1 == 0 && currentNum % currentNum == 0 && currentNum === currentNum) {
            sumPrime += currentNum;
        } else {
            sumNonPrime += currentNum;
        }
        num = input[index++];
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);

    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

// Simple prime checker
function primeChecker(num){
    let isPrime = false;
        if (num < 0) {
            isPrime = false;
        }
        if (num % 1 == 0 && num % num == 0 && num === num) {
            isPrime = true;
        }
        if (num % 2 === 0 || num % 3 === 0) {
            isPrime = false;
        }
    console.log(isPrime);
}

// Print and sum
function print(num1, num2) {
    let sum = 0;
    let printLine = "";
    let current = 0;

    for (let i = num1; i <= num2; i++) {
        sum += i;
        current = i.toString();
        printLine += current + " ";
    }

    console.log(printLine);
    console.log(`Sum: ${sum}`);
}

// Sum digits in a number
function sumDigits(num){
    let digit = num.toString();
    let sum = 0;

    for(let i = 0; i < digit.length; i++){
        let currentNum = Number(digit[i]);
        sum += currentNum;
    }
    console.log(sum);
}

// Print triangle
function triangle(n) {
    for (let i = 1; i <= n; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += i + " ";
        }
        console.log(line);
    }
}

// Print Multiplication table
function multiplication(n) {
    for (let a = n; a <= n; a++) {
        for (let b = 1; b <= 10; b++) {
            let result = a * b;
            console.log(`${a} X ${b} = ${result}`);
        }
    }
}

// Extract Matrix Column
function extractMatrixColumn(matrix, column) {
    let extracted = [];

    for (let i = 0; i < matrix.length; i++){
        extracted.push(matrix[i][column]);
    }
    return extracted;
}
// Reduce for sum array indexes
let sum = arr.reduce((a, b) => a + b, 0);

// Magic matrices
function solve(arr) {
    let sumRow = arr.map((col => col.reduce((a,b) => a + b)));
    let sumCol = arr.reduce((r, a) => r.map((b, i) => a[i] + b));
    let allEqual = array => array.every( v => v === array[0]);
    return allEqual(sumRow) && allEqual(sumRow) && sumRow.toString() === sumCol.toString();

}

// Print n * n matrix
function matrix(num) {
    let res = "";
   
    for (let i = 1; i <= num; i++) {
      res += num + " ";
    }
   
    for (let j = 1; j <= num; j++) {
      console.log(`${res}`);
    }
}

// Array Rotation - shift push
function arrayRotate(input, rotator){

    for (let i = 0; i < rotator; i++){
       let newEl = input.shift()
       input.push(newEl);
    }
    console.log(input.join(' ').toString());
}

// Rotate array backwards
function rotateArray(arr)
{
    let rotations = +arr[arr.length - 1];
    arr.pop();
    for(let i = 1; i <= rotations; i++)
    {
        let current = arr.pop();
        arr.unshift(current);
    }
    console.log(arr.join(' '));
}

// Merge arrays - even odd
function mergeArrays(arr1, arr2){
    let merged = [];
    let currentOne = "";
    let currentTwo = "";
    let sumEven = 0;
    let sumOdd = 0;
    let index = 0;
    
    for (let i = 0; i < arr1.length; i++){
        currentOne = arr1[i];
        while (true){
            currentTwo = arr2[index];
            if (index > i){
                break;
            }
            if (i == 0 && index == 0 || i % 2 == 0 && index % 2 == 0){
                sumEven = Number(currentOne) + Number(currentTwo);
                merged.push(sumEven);
            }
            else {
                sumOdd = currentOne + currentTwo;
                merged.push(sumOdd);
            } 
            currentTwo = arr2[index++];   
        }
    }
    console.log(merged.join(" - "));
}

// Sum of array elements
function sumOfTwo(nums1, nums2, value) {
    let sum = 0;
    let result = false;
    for (let i = 0; i < nums1.length; i++){
        if (result == true){
            break;
        }
        let currentOne = nums1[i];
        for (let j = 0; j < nums2.length; j++){
            let currentTwo = nums2[j];
            sum = currentOne + currentTwo;
            if (sum == value){
                result = true;
                break;
            } else {
                result = false;
            }
        }
    }
    return result;
}

// Sum array elements - magic number 
function magicNum(input, magicNum){
    let sum = 0;
    for (let i = 0; i < input.length-1; i++){
        let current = input[i];
        for (let j = i + 1; j < input.length; j++){
            let next = input[j];
            sum = current + next;
            if (sum == magicNum){
                console.log(`${current} ${next}`);
            }
        }

    }
}

// Get distance between 2 points x and y
function distance(x1, y1, x2, y2) {
    let firstPoint = x2 - x1;
    let secondPoint = y2 - y1;
    let powerOne = Math.pow(firstPoint, 2);
    let powerTwo = Math.pow(secondPoint, 2);
    let distance = Math.sqrt(powerOne + powerTwo);
    console.log(distance);
}

// Fibonacci Odd numbers sum
function fibonacciOddNums(num) {
    let prevNum = 0;
    let currNum = 1;
    let sum = 0;

    while (currNum <= num) {
        if (currNum % 2 !== 0) {
          sum += currNum;
        }
        currNum += prevNum;
        prevNum = currNum - prevNum;
      }
      return sum;
}

// Split array in two parts
function splitArray(values, size) {
    const nested = [];
    let count = 0;
    
    while(count < values.length) {
        nested.push(values.slice(count, count += size));
    }
    console.log(nested);
    return nested;
}

//Reverse an array of n-numbers - join()
function reverseArray(n, arr){
    n = Number(n);
    let result = arr.splice(0, n);
    let reversed = result.reverse();
    let output = reversed.join(' ');
    console.log(output);
}

// Add remove array elements
function addRemove(arr){
    let newArr = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "add"){
            newArr.push(i + 1);
        } else if (arr[i] === 'remove'){
            newArr.pop();
        } 
    }
    if (newArr.length == 0){
        console.log("Empty");
    } else {
        console.log(newArr.join(' '));
    }
}

// Condense array to numbers
function condenseArray(nums){
    while (nums.length > 1) {
        let condensed = Array(nums.length-1);
        for (let i = 0; i < nums.length - 1; i++) {
            condensed[i] = Number(nums[i]) + Number(nums[i + 1]);
        }
        nums = condensed;
    }
    console.log(nums[0])
}

// Max difference in an array
function arrayMaxDifference(nums){
    let result = 0;
    let maxDifference = 0;

    for (let i = 0; i < nums.length; i++) {
        result = Math.abs(nums[i] - nums[i + 1]);
        if (result > maxDifference){
            maxDifference = result;
        } else {
            result = maxDifference;
        }
    }
console.log(maxDifference);
}

// Add substract numbers
function sum(num1, num2, num3){
    let result = add(num1, num2);
 
    function add(a, b) {
        return a + b;
    }
    return result - num3;
}

// Add substract array elements
function addSubstract(arr) {
    let modifiedArr = [];
    let sum = 0;
    let totalSum = 0;
    let newSum = 0;

    for (let i = 0; i < arr.length; i++){
        totalSum += arr[i];
        if (arr[i] % 2 == 0){
            sum = arr[i] + arr.indexOf(arr[i]);
            modifiedArr.push(sum);
            newSum += sum;
        } else if (arr[i] % 2 != 0){
            sum = arr[i] - arr.indexOf(arr[i]);
            modifiedArr.push(sum);
            newSum += sum;
        }
    }
    console.log(modifiedArr);
    console.log(totalSum);
    console.log(newSum);
}

// Compare array elements
function commonElements(arr1, arr2){
    let first = "";
    let second = "";
    let match = "";

    for (let i = 0; i < arr1.length; i++){
        first = arr1[i];
        for (let j = 0; j < arr2.length; j++){
            second = arr2[j];
            if (first === second){
                match = first;
                console.log(match);
            }
        }
    }
}

// Finds lesser index in an array - unshift()
let newArr = [];
for (let i = 0; i < nums.length; i++){
    let currentNum = nums[i];
    let previousNum = nums[i-1];
    if (i == 0){
        newArr.unshift(-1);
    } else if (previousNum < currentNum){
        newArr.unshift(previousNum);
    }
    else if (previousNum > currentNum){
        newArr.unshift(-1);
    }
}
return newArr.reverse();

// Check equal array sum 
function equalSums(arr) {
    let hasEqualSum = false;

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = i - 1; j >= 0; j--) {
            leftSum += arr[j];
        }
        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];

        }
        if (leftSum === rightSum) {
            console.log(i);
            hasEqualSum = true;
        }
    }
    if (!hasEqualSum) {
        console.log('no');
    }
}

// Equal arrays - sum
function equalArrays(str1, str2) {
    let sum = 0;
    let areEqual = true;

    for (let i = 0; i < str1.length; i++) {
        str1[i] = Number(str1[i]);
    }
    for (let i = 0; i < str2.length; i++) {
        str2[i] = Number(str2[i]);
    }

    for (let i = 0; i < str2.length; i++) {
        if (str1[i] !== str2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
        if (str1[i] === str2[i]) {
            areEqual = true;
        }
    }

    if (areEqual == true) {
        for (i = 0; i < str1.length; i++) {
            let current = Number(str1[i]);
            sum += current;
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

// Binary to decimal
function binary(binary){
    binary = binary;
    let decimal = 0;
    let sumDigits = 0;
    let power = binary.length - 1;

    for(let i = 0; i < binary.length; i++){
        let current = Number(binary[i]);
        sumDigits = current * Math.pow(2, power);
        decimal += sumDigits;
        power--;
    }
    console.log(decimal);
}

// Calculator arrow function
function calculator(numOne, numTwo, operator) {
    switch (operator) {
        case "multiply":
            let multiply = (numOne, numTwo) => numOne * numTwo;
            console.log(multiply(numOne, numTwo)); break;
        case "divide":
            let divide = (numOne, numTwo) => numOne / numTwo;
            console.log(divide(numOne, numTwo)); break;
        case "add": let add = (numOne, numTwo) => numOne + numTwo;
            console.log(add(numOne, numTwo)); break;
        case "subtract": let substract = (numOne, numTwo) => numOne - numTwo;
            console.log(substract(numOne, numTwo)); break;
    }
}

// Check positive or negative product
function signChec(num1, num2, num3) {
    if((num1 < 0 && num2 > 0 && num3 > 0) ||
       (num1 > 0 && num2 < 0 && num3 > 0) ||
       (num1 > 0 && num2 > 0 && num3 < 0) ||
       (num1 < 0 && num2 < 0 && num3 < 0)) {
        console.log('Negative');
    } else if(num1 == 0 || num2 == 0 || num3 == 0) {
        console.log("Positive");
    } else {
        console.log('Positive');
    }
}

// Palindrome - first = last arr element
function palindrom(input){
    let isPal = false;
    for (let i = 0; i < input.length; i++){
        let current = input[i].toString();
        for (let j = 0; j < current.length; j++){
            let first = current[0];
            let last = current[current.length-1];
            if (first == last){
                isPal = true;
                break;
            } else {
                isPal = false;
                break;
            }
        }
        console.log(isPal);
    }
}

// Perfect number
function perfectNum(num) {
    let temp = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            temp += i;
        }
    }

    if (temp === num && temp !== 0) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }
}

// Geometry points validator
function points(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    let checkFirstPoint = firstPoint(arr);
    let checkSecondPoint = secondPoint(arr);
    let checkThirdPoint = thirdPoint(arr);

    if (checkFirstPoint === Math.trunc(checkFirstPoint)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (checkSecondPoint === Math.trunc(checkSecondPoint)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (checkThirdPoint === Math.trunc(checkThirdPoint)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function firstPoint() {
        let checkOne = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
        return checkOne;
    }

    function secondPoint() {
        let checkTwo = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
        return checkTwo;
    }

    function thirdPoint() {
        let checkThree = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
        return checkThree;
      }
}

// print DNA
function dnaPrint(number) {
    let str = "ATCGTTAGGG";
    let counter = 0;
    for (let i = 0; i < number; i++) {
        if (i % 4 == 0) {
            console.log(`**${str[counter % 10]}${str[(counter % 10) + 1]}**`);
        } else if (i % 4 == 1) {
            console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
        } else if (i % 4 == 2) {
            console.log(`${str[counter % 10]}----${str[(counter % 10) + 1]}`);
        } else if (i % 4 == 3) {
            console.log(`*${str[counter % 10]}--${str[(counter % 10) + 1]}*`);
        }
        counter += 2;
    }
}

// Sums first last array elements
function sumArrayElements(arr){
    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());
    let result = firstElement + lastElement;
    return result;
}

// Array manipulation
function arrayManipulation(arr, commands) {

    for (let i = 0; i < commands.length; i++) {
        let splited = commands[i].split(' ');
        let command = splited[0];
        if (command === 'add') {
            add();
        }
        else if (command === 'addMany') {
            addMany();
        }
        else if (command === 'contains') {
            contains();
        }
        else if (command === 'remove') {
            remove();
        }
        else if (command === 'shift') {
            shift();
        }
        else if (command === 'sumPairs') {
            sumPairs();
        }
        else if (command === 'print') {
            print();
            break;
        }
        function add() { //adds element at the specified index (elements right from this position inclusively are shifted to the right)
            let index = parseInt(splited[1]);
            let element = parseInt(splited[2]);
            arr.splice(index, 0, element);
        }
        function addMany() { // adds a set of elements at the specified index
            let index = parseInt(splited[1]);
            for (let j = splited.length - 1; j >= 2; j--) {
                let element = parseInt(splited[j]);
                arr.splice(index, 0, element);
            }
        }
        function contains() { // prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
            let element = parseInt(splited[1]);
            console.log(arr.indexOf(element));
        }
        function remove() { // removes the element at the specified index
            let index = parseInt(splited[1]);
            arr.splice(index, 1);
        }
        function shift() { // shifts every element of the array the number of positions to the left (with rotation).
            let position = parseInt(splited[1]);
            for (let a = 0; a < position; a++) {
                let first = arr.shift();
                arr.push(first);
            }
        }
        function sumPairs() { // sums the elements in the array by pairs (first + second, third + fourth, …).
            arr = arr.map((e, i, arr) => i < arr.length - 1 ? (arr[i] += arr[i + 1]) : arr[i] = arr[i]).filter((e, i) => i % 2 === 0);
        }
        function print() { // prints the array
            console.log('[ ' + arr.join(', ') + ' ]');
        }
    }
}

// Array manipulation
function arrayManipulation(commands) {
    let arr = commands.shift().split(' ').map(Number);
    for (let i = 0; i < commands.length; i++) {
        if (i > commands.length-1){
            break;
        }
        let [command, firstNum, secondNum] = commands[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case 'Add':
                add(firstNum);
                break;
            case 'Remove':
                remove(firstNum);
                break;
            case 'RemoveAt':
                removeAt(firstNum);
                break;
            case 'Insert':
                insert(firstNum, secondNum);
                break;
        }
    }
    function add(el) { //adds new element at the end of the array
        arr.push(el);
    }
    function remove(num) { // filters and looks for num in an array
        arr = arr.filter(el => el !== num);
    }
    function removeAt(index) { // removes 1 element from index position
        arr.splice(index, 1);
    }
    function insert(num, index) { // inserts element - index, delete count, item
        arr.splice(index, 0, num);
    }
    return arr.join(' ');
}

// Manipulate array elements - guest house - splice
function houseParty(arr) {
    let guestList = [];
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        let guest = arr.shift();
        let name = guest.split(' ').shift();
        let action = guest.split(' ').slice(1).join(' ');
        if (action.includes('not')) {
            if (guestList.includes(name)) {
                guestList.splice(guestList.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        }
    }
    console.log(guestList.join('\n'));
}

// Search for numbers in array
function search(arr1, arr2) {
    let elements = arr2.shift();
    let deleteCount = arr2[0];
    let searchNum = arr2[1];
    let counter = 0;
    let result = arr1.splice(0, elements);
    result.splice(0, deleteCount);
    for (let i = 0; i < result.length; i++) {
        if (result[i] === searchNum) {
            counter++;
        }
    }
    console.log(`Number ${searchNum} occurs ${counter} times.`);
}

// Objects and classes - split, destruct array
function towns(strArr){
   
    let splitArr = strArr.toString().split(",");
    for (let i = 0; i < splitArr.length; i++){
        let [town, latitude, longitude] = splitArr[i].split(" | ");
        let newObj = {
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        };
        console.log(newObj);
    };
}

function store(stock, products) {
    // Създаваме празен обект, който да държи всички стоки
    let totalStock = {};
    // Въртим цикъл през първи масив през 2 стъпки, за да хванем четните индекси - вида на стоката
    for (let i = 0; i < stock.length; i += 2) {
        // взимаме вида на стоката
        const name = stock[i];
        // добавяме стоката към обекта с пропърти name, взимаме количеството с i+1 и парсваме към число
        totalStock[name] = Number(stock[i + 1]);
    }
    for (let j = 0; j < products.length; j += 2) {
        const name = products[j];
        // Ако обекта (магазина) не съдържа в себе си това пропърти
        if (!totalStock.hasOwnProperty(name)) {
            // добавяме го към него, но със стойност 0
            totalStock[name] = 0;
        }
        // обновяваме количеството му според наличното в масивите
        totalStock[name] += Number(products[j + 1]);
    }
    // взимаме ключовете на обекта и за всеки един принтираме ключ -> всяко пропърти на обекта
    Object.keys(totalStock).forEach(key => {
        console.log(`${key} -> ${totalStock[key]}`);
    })
}

// includes, push, substring, find
function movies(movies) {
    let list = [];
    for (const movie of movies){
        
        if (movie.includes('addMovie')){
            let currentMovie = {};
            // substring() returns the part of the string between the start and end indexes, or to the end of the string.
            let name = movie.substring(9); // реже от 9 символ нататък
            currentMovie.name = name;// когато е с точка, създава пропърти в обект, който се казва точно така, както сме писали след точката. Ако беше с [], тогава щеше да създаде променлива в обекта с такова име
            list.push(currentMovie);
        } else if (movie.includes('directedBy')){
            let arrLeft = movie.split(' directedBy ');
            let [name, directorName] = arrLeft;
            let myMovie = list.find(x => x.name === name);
            if (myMovie){
                myMovie.director = directorName;
            }
        } else {
            let [name, movieDate] = movie.split(' onDate ');
            //  find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfies the testing function, undefined is returned.
            let myMovie = list.find(x => x.name === name);
            if (myMovie){
                myMovie.date = movieDate;
            }
        }
    }
    list.forEach(m => {
        if (m.name && m.director && m.date){
            //  converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
            console.log(JSON.stringify(m));
        }
    })
}

// JSON to object
function convertToObject(jsonFormat){
    let person = JSON.parse(jsonFormat);
    for (let [keys, value] of Object.entries(person)){
        console.log(`${keys}: ${value}`);
    }
}

// Object to JSON
function toJson(name, lastName, hairColor){
    let myObj = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    };
    let person = JSON.stringify(myObj);
    console.log(person);
}

// train wagons function
function train(input) {
    let numbers = input
        .shift()
        .split(" ")
        .map((x) => Number(x));
    //   console.log(numbers);

    let max = Number(input.shift()); // for each wagon in the train
    //   console.log(max);

    for (let i = 0; i < input.length; i++) {
        let arrNew = input[i].split(" ");
        let command = arrNew[0];
        let firstValue = arrNew[1];

        // console.log(arrNew);
        // console.log(command);
        // console.log(firstValue);
        if (arrNew.length === 2 && command === "Add") {
            numbers.push(firstValue);
        } else {
            let passengers = Number(arrNew[0]);
            for (let j = 0; j < numbers.length; j++) {
                if (passengers + numbers[j] <= max) {
                    numbers[j] += passengers;
                    break;
                }
            }
        }
    }
    console.log(numbers.join(" "));
}

// the lift / wagons / 
function theLift(arr) {
    let people = Number(arr[0]);
    let wagons = arr[1].split(' ').map(Number);
 
    while (people !== 0 && isFree(wagons)) {
        wagons = wagons.map(w => {
            let n = 4 - w;
            if (n > people) {
                n = people;
            }
            people -= n;
            w += n;
            return w;
        })
    }
    if (isFree(wagons)) {
        console.log(`The lift has empty spots!`);
    }
    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }
    console.log(`${wagons.join(' ')}`);
 
    function isFree(array) {
        return array.filter(x => x < 4).length > 0
    }
}

// Array manipulation and array modify
function arrayModifier(arrayInt) {
    let line = arrayInt.shift().split(" ").map(Number);
    let numberArr = [];

    for (let lines of arrayInt) {
        let [command, index1, index2] = lines.split(" ");
        if (command === "end") {
            break;
        } else if (command === "swap") {
            [line[index1], line[index2]] = [line[index2], line[index1]];
        } else if (command === "multiply") {
            line[index1] = line[index1] * line[index2];
        } else {
            numberArr = line.map(x => x - 1);
            line = numberArr;
        }
    }
    console.log(line.join(', '));
}

// Array manipulation - split, shift, remove, sum, print, add, contains
function arrayManipulation(arr, commands) {
    for (let i = 0; i < commands.length; i++) {
        let splited = commands[i].split(' ');
        let command = splited[0];
        if (command === 'add') {
            add();
        }
        else if (command === 'addMany') {
            addMany();
        }
        else if (command === 'contains') {
            contains();
        }
        else if (command === 'remove') {
            remove();
        }
        else if (command === 'shift') {
            shift();
        }
        else if (command === 'sumPairs') {
            sumPairs();
        }
        else if (command === 'print') {
            print();
            break;
        }
        function add() {
            let index = parseInt(splited[1]);
            let element = parseInt(splited[2]);
            arr.splice(index, 0, element);
        }
        function addMany() {
            let index = parseInt(splited[1]);
            for (let j = splited.length - 1; j >= 2; j--) {
                let element = parseInt(splited[j]);
                arr.splice(index, 0, element);
            }
        }
        function contains() {
            let element = parseInt(splited[1]);
            console.log(arr.indexOf(element));
        }
        function remove() {
            let index = parseInt(splited[1]);
            arr.splice(index, 1);
        }
        function shift() {
            let position = parseInt(splited[1]);
            for (let a = 0; a < position; a++) {
                let first = arr.shift();
                arr.push(first);
            }
        }
        function sumPairs() {
            arr = arr.map((e, i, arr) => i < arr.length - 1 ? (arr[i] += arr[i + 1]) : arr[i] = arr[i]).filter((e, i) => i % 2 === 0);
        }
        function print() {
            console.log('[ ' + arr.join(', ') + ' ]');
        }
    }
}

// Splice, destructuring
function movingTarget(arr) {
    arr.pop()
    let targets = arr.shift().split(' ').map(Number)

    while (arr.length > 0) {
        // If not a number, it makes it to number
        const [command, index, power] = arr.shift().split(' ').map(el => isNaN(el) ? el : Number(el))

        if (command === 'Shoot') {
            if (index >= 0 && index < targets.length)
                targets[index] = targets[index] - power
            if (targets[index] <= 0)
                targets.splice(index, 1)
        }

        if (command == 'Strike') {
            let radius = power
            if (index + radius < targets.length && index - radius >= 0)
                targets.splice(index - radius, radius * 2 + 1)
            else
                console.log('Strike missed!')
        }

        if (command === 'Add') {
            if (index >= 0 && index < targets.length)
                targets.splice(index, 0, power)
            else
                console.log('Invalid placement!')
        }
    }

    console.log(targets.join('|'))
}

// Greatest common divisor
function divisor(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        let t = y;
        y = x % y;
        x = t;
    }
    return x;
}