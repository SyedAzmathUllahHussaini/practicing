let person = {
    name: "Syed",
    palce: "Hyderabad"

}

let arr = ["apple", "banana", "orange", "mango", person]

// console.log(arr[2]);
// console.log(arr[4].palce);
// console.log(arr.length)
// arr.push("cherry")
// console.log(arr);
// arr.pop()
// console.log(arr);

// Add to the top of array

// arr.unshift("pinapple")
// console.log(arr);

// Remove to the top of array
// arr.shift()
// console.log(arr);

// merging two arrays using concat() or spread operator

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [6, 7, 8, 9, 0]
// let arr3 = [11, 12, 13, 14, 15]

// let finalArray = arr1.concat(arr2)
// console.log(finalArray);

// let finalOne = [...arr1, ...arr2, ...arr3]
// console.log(finalOne);

// unique elements

let unique = [1, 2, 3, 4, 5, 1, 3]

function secondLargest(arr) {
    const uniqueArr = new Set(arr)
    const uniqueArray = Array.from(new Set(arr))
    // console.log(uniqueArr);
    // console.log(uniqueArray);

}
secondLargest(unique)

// :- the console.log(uniqueArr); return an object to convert that object into an array we have a method
//  Array.from() :- it converts object into an array above Example

// Flatten array :-- Nested Array into Single array


// const nestedArray = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10, 11], 12], 13, 14]

// function flattenArray(arr) {
//     const result = []

//     for (const item of arr) {
//         if (Array.isArray(item)) {
//             result.push(...flattenArray(item))

//         } else {
//             result.push(item)
//         }

//     }
//     return result
// }

// console.log(flattenArray(nestedArray));

// ///////////////////////////////////////////////////////////////////////////////////////////////

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function findMax(arr) {
    if (arr.length === 0) return undefined

    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }

    }
    return max;
}

// console.log(findMax(array));

// ///////////////////////////////////////////////////////////////////////////////////////////////////////

const minNum = [1, 2, 3, 4, 5, 6, 7, 8]

function findMin(arr) {

    if (arr.length === 0) return undefined
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }

    }
    return min;
}

// console.log(findMin(minNum));

////////////////////////////////////////////////////////////////////////////////////

// const maxMinArray = [1, 2, 3, 4, 5, 6, 15, 7, 8, 9, 10]

// function findMax(arr) {
//     if (arr.length === 0) return undefined

//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) [
//             max = arr[i]
//         ]

//     }
//     return max;
// }

// function findMin(arr) {
//     if (arr.length === 0) return undefined

//     let min = arr[0]
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] < min) {
//             min = arr[j]
//         }

//     }
//     return min;

// }

// function sumArray(arr) {
//     return arr.reduce((curr, acc) => curr + acc, 0)
// }


// console.log(findMax(maxMinArray));
// console.log(findMin(maxMinArray));
// console.log(sumArray(maxMinArray));

// ///////////////////////////////////////////////////////////////////////////////////////////////////

// Finding Unique Array
// const uniqueArray = [1, 2, 2, 3, 4, 4, 5]

// function removeDuplicate(arr) {
//     let uniqueArr = []

//     for (let i = 0; i < array.length; i++) {
//         let isDuplicate = false;

//         for (let j = 0; j < array.length; j++) {
//             if (arr[i] === uniqueArr[j]) {
//                 isDuplicate = true;
//             }

//         }
//         if (!isDuplicate) {
//             uniqueArr.push(arr[i])
//         }

//     }
//     return uniqueArr

// }

// console.log(removeDuplicate(uniqueArray));

// //////////////////////////////////////////////////////////////////////////////////////

// second largest Element in an array

const second = [1, 2, 4, 6, 8, 9]

function secondLargest(arr) {

    arr.sort((a, b) => b - a)

    arr = arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
    })

    if (arr.length < 2) {
        return "No Element "
    }
    return arr[1]

}
// console.log(secondLargest(second));

// //////////////////////////////////////////////////////////////////////////////////////////

// Reverse Array

// Method -1 built-in

const reverse = [1, 2, 3, 4, 5, 6]

function reverseArray(arr) {
    return arr.reverse()

}
// console.log(reverseArray(reverse));

// Method -2 without built- in

function reversedArray(arr) {
    const reversed = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i])

    }
    return reversed
}
// console.log(reversedArray(reverse));

// ////////////////////////////////////
// Finding Common Element in an array

array1 = [1, 2, 3, 4, 5]
array2 = [3, 4, 5, 6, 7]

function commonElement(arr1, arr2) {
    const set1 = new Set(arr1)
    const common = arr2.filter((item) => set1.has(item))
    return common
}

// console.log(commonElement(array1, array2));

