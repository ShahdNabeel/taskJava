//MIN 5 PROBLEMS

//number 1

function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

const array = [10, 20, 5, 25, 30, 15];
const secondLargest = findSecondLargest(array);
console.log("Second largest element is:", secondLargest);

//number 2

function findLargestThree(arr) {
    if (arr.length < 3) {
        return "Array should have at least three elements.";
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            thirdLargest = secondLargest;
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            thirdLargest = secondLargest;
            secondLargest = arr[i];
        } else if (arr[i] > thirdLargest && arr[i] !== secondLargest && arr[i] !== firstLargest) {
            thirdLargest = arr[i];
        }
    }

    return [firstLargest, secondLargest, thirdLargest];
}

const array1 = [10, 20, 5, 25, 30, 15];
const largestThree = findLargestThree(array1);
console.log("Largest three elements are:", largestThree);

//number 4

//const array2 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5,1];
function hasUniqueValues(arr) {
    const seen = {};
    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            return false;
        }
        seen[arr[i]] = true;
    }
    return true;
}
if (hasUniqueValues(array2)) {
    console.log("All of array values are unique.");
}else{
    console.log("array has one or more ununiqe values");
}

//number 5

function findMissingNumbers(arr) {
    const allNumbers = Array.from({ length: 100 }, (_, i) => i + 1);
    const missingNumbers = [];

    for (let i = 0; i < allNumbers.length; i++) {
        if (!arr.includes(allNumbers[i])) {
            missingNumbers.push(allNumbers[i]);
        }
    }

    return missingNumbers;
}

const numbersArray = [];
for (let i = 5; i <= 100; i++) {
    numbersArray.push(i);
}

const missingNumbers = findMissingNumbers(numbersArray);
console.log("Missing numbers are:", missingNumbers);

//number 8

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const array4 = [1, 2, 3, 4, 5];
const sum = calculateSum(array4);
console.log("Sum of elements:", sum);

//MIN 15 PROBLEM 

//number 11

function printOddNumbersLessThan100() {
    for (let i = 1; i < 100; i += 2) {
        console.log(i);
    }
}

printOddNumbersLessThan100();

//number 12

function printMultiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        console.log(`7 * ${i} = ${7 * i}`);
    }
}

printMultiplicationTable();

//number 13

function calculateSsum() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    return sum;
}

const result = calculateSsum();
console.log("Sum of numbers from 1 to 10:", result);

//number 14

function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

const the_result = calculateFactorial(10);
console.log("10! (factorial of 10) is:", the_result);

//number 15

function calculateSumOfEvenNumbers() {
    let sum = 0;
    for (let i = 12; i < 30; i += 2) {
        sum += i;
    }
    return sum;
}

const results = calculateSumOfEvenNumbers();
console.log("Sum of even numbers greater than 10 and less than 30:", results);

//number 16

function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
}

const celsiusTemperature = 20;
const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);

//number 17

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
}

const fahrenheitTemperature2 = 68;
const celsiusTemperature2 = fahrenheitToCelsius(fahrenheitTemperature2);
console.log(`${fahrenheitTemperature}°F is equal to ${celsiusTemperature2}°C`);

//number 18

function ccalculateSum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const numbers = [1, 2, 3, 4, 5];
const sumarr = ccalculateSum(numbers);
console.log("Sum of numbers:", sumarr);

//number 19

function calculateAverage(arr) {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / arr.length;
}

const numberss = [1, 2, 3, 4, 5];
const average = calculateAverage(numberss);
console.log("Average of numbers:", average);

//number 20

function getPositiveNumbers(arr) {
    return arr.filter(number => number > 0);
}

const numbers2 = [-1, 2, -3, 4, -5, 6];
const positiveNumbers = getPositiveNumbers(numbers2);
console.log("Positive numbers:", positiveNumbers);