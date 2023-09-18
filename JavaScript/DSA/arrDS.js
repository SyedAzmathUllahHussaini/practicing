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
