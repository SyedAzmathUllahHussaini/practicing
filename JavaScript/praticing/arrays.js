// const myArray = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(myArray);

// methods :-
// pop():- pop removes the last element from the array.

// myArray.pop()
// console.log(myArray);

// push() :- push add the element in the array at the end

// myArray.push(9)
// console.log(myArray);
// length :- gives the length of the array

// console.log(myArray.length);

//  concat() concatinate :- merging of an array

// const array_1 = [1, 2, 3, 4]
// const array_2 = [5, 6, 7, 8]
// console.log(array_1.concat(array_2));

// toString() :- convert array to string

// const arry = [1, 3, 4, 5, 6, 7,]
// console.log(arry.toString());

// Splicing and Slicing Arrays
// The splice() method adds new items to an array.

// The slice() method slices out a piece of an array.

// const fruits = ["apple", "banana", "kiwi"]
// fruits.splice(2, 0, "blackberry", "grapes")
// console.log(fruits);
// fruits.slice(2, 2)
// console.log(fruits);

// finding duplicate of arrays----

// const array = [1, 2, 3, 3, 5, 4, 6, 7, 2, 5, 8, 9, 6, 2]
// const duplicateEle = array.filter((item, index, array) => array.indexOf(item) !== index)
// const uniqueEle = array.filter((item, index, array) => array.indexOf(item) === index)
// console.log(duplicateEle);
// console.log(uniqueEle);


// myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

function findMissingNumber(arr) {
    const n = arr.length + 1
    const sum = (n * (n + 1)) / 2;
    const arrSum = arr.reduce((acc, curr) => acc + curr, 0)
    return sum - arrSum

}
const missing = findMissingNumber([1, 3, 4, 5])
console.log(missing);
