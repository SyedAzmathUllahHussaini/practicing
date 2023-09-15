// function reverseString(str) {
//     return str.split("").reverse("").join("")

// }

// const reverse = reverseString("Hello")
// console.log(reverse);


// function findLongestWord(sentence) {
//     const words = sentence.split("")
//     let longestWord = ""
//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word
//         }
//     }
//     return longestWord
// }
// const longests = findLongestWord("Good Evening")

// console.log(longests);

// function findLongestWord(sentence) {
//     const words = sentence.split(' ');
//     let longestWord = '';

//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }

// const longest = findLongestWord("The quick brown fox");
// console.log(longest); // Output: "quick"



// function reverseString(str) {

//     return str.split("").reverse("").join("")
// }
// const reverse = reverseString("Hello")
// console.log(reverse);


// function findLongestWord(sentence) {
//     const words = sentence.split('')
//     let longestWord = ''
//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word
//         }
//     }
//     return longestWord
// }

// const longest = findLongestWord("this is the argument of the function")

// console.log(longest);

// Q.3 Print FizzBuzz

// function fizzBuzz(N) {
//     for (let i = 1; i <= N; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// fizzBuzz(15);

//  Q.4 Missing Number in an Array ...

// findMissingNumber = (arr) => {
//     const n = arr.length + 1
//     const sum = (n * (n + 1)) / 2;
//     const arrSum = arr.reduce((acc, curr) => acc + curr, 0)
//     return sum - arrSum
// }
// const missing = findMissingNumber([1, 3, 4, 5])
// console.log(missing);

// Q.5  Find Common Elements

// const array1 = [1, 2, 3, 4, 5]
// const array2 = [3, 4, 5, 6, 7]

// const findCommonElement = (arr1, arr2) => {
//     const set1 = new Set(arr1)
//     const common = arr2.filter((item) => set1.has(item))
//     return common

// }
// const commonElement = findCommonElement(array1, array2)
// console.log(commonElement);

//  Q.6 Find the Sum of All Multiples of 3 and 5

// const sumMultiple = (n) => {
//     let sum = 0

//     for (let i = 1; i < n; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i
//         }
//     }
//     return sum
// }

// const multiple = sumMultiple(10)
// console.log(multiple);

//  Q.6 Find the Largest Element in an array

// const array = [1, 2, 5, 9, 6, 7, 8]

// const findLargestElement = (arr) => {
//     let largest = arr[0]
//     for (const num of arr) {
//         if (num > largest) {
//             largest = num
//         }
//     }
//     return largest
// }
// console.log(findLargestElement(array));


// Q.7 Count the number of elements in an Object

// const person = {
//     firstName: "Syed",
//     lastName: "Azmath",
//     Age: 23,
//     country: "INDIA"
// }

// const countElementOfObj = (obj) => {
//     let count = 0
//     for (const keys in obj) {
//         if (obj.hasOwnProperty(keys)) {
//             count++
//         }
//     }
//     return count
// }


// console.log(countElementOfObj(person));



// const syed = [1, 2, 3, 4, 5]
// function reverse(arr) {
//     return arr.reverse();
// }
// console.log(reverse(syed));

// Q.8 filter even number & Odd Number  in an array

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const filterEven = (arr) => {
    return arr.filter((num) => num % 2 == 0)
}

console.log(filterEven(myArray));

const filterOdd = (arr) => {
    return arr.filter((num) => num % 2 !== 0)

}
console.log(filterOdd(myArray));

// Q.9 Filter Strings by Length

// Write a function that uses the filter() method to filter out strings in an array that have a length greater than a specified value.

const words = ["apple", "banana", "cherry", "orange", "mango"]

const filterLength = (arr, minLength) => {
    return arr.filter((str) => str.length <= minLength)
}

console.log(filterLength(words, 5));

// Q.10 Filter by Property Value

// Write a function that uses the filter() method to filter objects in an array based on a specific property value.

const people = [
    { name: "Syed", age: 30 },
    { name: "Ullah", age: 25 },
    { name: "Azmath", age: 30 },
    { name: "Hussaini", age: 30 },
    { name: "SyedFasi", age: 28 },
    { name: "SyedaFareesa", age: 30 },
    { name: "SyedAziz", age: 30 },
    { name: "SyedKareem", age: 33 }
]

const filterAge = (arr, propertyName, propertyValue) => {
    return arr.filter((obj) => obj[propertyName] === propertyValue)

}
console.log(filterAge(people, "age", 30));


// Q.11: Map to Squares

// Write a function that uses the map() method to square each number in an array.

map = [1, 2, 3, 4, 5]

const mapNum = (arr) => {
    return arr.map((num) => num * num)
}
console.log(mapNum(map));


// Q.12: Filter and Map Together

// Write a function that uses both filter() and map() to filter an array of numbers for even values and then square the remaining values.

const myMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const myFunc = (arr) => {
    return arr.filter((num) => num % 2 === 0).map((num) => num * num)
}
console.log(myFunc(myMap));

const myFiltering = [[1, 2, 3, 4], [4, 5, 6, 7], [7, 8, 9, 0]]
const avgNum = (arr) => {
    return arr.map((num) => {
        const sum = num.reduce((acc, curr) => acc + curr, 0)
        return sum / num.length
    })
}
console.log(avgNum(myFiltering));

// Closure//
//   in Js when a function is defined with in the another function and it has the access to the outer function variable and
//   this allows the inner function to remember and access the variable from its containing function even after the outer function has finished executing
//  of outer function known as closuser

function makeFunc() {
    let name = "Syed"

    function displayName() {
        console.log(name);
    }
    return displayName;

}
const myFunct = makeFunc()
myFunct()

// ///////////////////////////////////////////////////////////////////////////////////////
function counter(initialValue = 0) {
    let count = initialValue

    return {
        increment: function () {
            return count++
        },
        reset: function () {
            count = initialValue
        }
    };
}

const createCounter = counter(10)
console.log(createCounter.increment());
console.log(createCounter.increment());
console.log(createCounter.reset());
console.log(createCounter.increment());

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createvalue(addToValue) {
    return function (number) {
        return number + addToValue
    }
}

const addFive = createvalue(5)
console.log(addFive(10));
console.log(addFive(20));
// console.log(addFive(30));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////