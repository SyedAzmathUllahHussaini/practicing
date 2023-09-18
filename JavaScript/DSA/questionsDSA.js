// const isPalindrome = (x) => {
//     return x === +x.toString().split('').reverse().join('')
// }
// const res = isPalindrome(121)
// const res1 = isPalindrome(12)
// console.log(res);
// console.log(res1);

// Explaination  what is happening in this program step by step  below

//  121 -->> "121" -->> ["1", "2", "1"] --> ["1", "2", "1"]  ==> "121"

//  +x is used to convert string into number  Ex-  console.log(+"3")  output = 3 i.e, Number
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Q.2 Fibonacci Number....
//  Fibonacci Series -->>  0,1,1,2,3,5,8,13,21,34,55,89,144,233....
//  f(0) = 0   f(1) = 1
//  f(n) = f(n-1) + f(n-2), for n > 1
//  input = 3    --->>> output = 2

// const fib = (n) => {
//     const arr = [0, 1]
//     for (let i = 2; i <= n; i++) {
//         arr.push(arr[i - 1] + arr[i - 2])
//     }
//     // console.log(arr);
//     return arr[n]
// }

// fib(5)


//  same problem by using recursion..
//  fib(0) = 0 ; fib(1) =1 ; fib(2) = 1
// Fibonacci Series -->>  0,1,1,2,3,5,8,13,21,34,55,89,144,233....

// const fib1 = (n) => {
//     if (n <= 1) return 1;
//     return fib1(n - 1) + fib1(n - 2)

// }
// console.log(fib1(3));

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Q.1 Find Second Largest Number
//    Given an  array of size N, print second largest Number
//   distinct element from an array

//  EX [22,11,35,1,2,35.34]    ---->>>> output : 34
//  EX  [10,5,10]              ---->>>> output : 5

// sorting of an array

const unsorted = [9, 5, 6, 8, 7, 3, 2, 1, 4]
unsorted.sort((a, b) => a - b)
// console.log(unsorted);

// for decending order
unsorted1 = unsorted.sort((a, b) => b - a)
// console.log(unsorted1);

//  finding second largest Number in an array
let unique = [12, 35, 1, 10, 34, 1]
let unique1 = [5, 10, 5]
function secondLargest(arr) {
    const uniqueArr = Array.from(new Set(arr))
    // console.log(uniqueArr);
    uniqueArr.sort((a, b) => b - a)
    if (uniqueArr.length >= 2) {
        return uniqueArr[1]
    } else {
        return -1
    }


}
console.log(secondLargest(unique))
console.log(secondLargest(unique1))

// Method -2 :


function methodTwo(arr) {
    let largest = Number.NEGATIVE_INFINITY
    let secondLargest = Number.NEGATIVE_INFINITY

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        } else if (arr[i] != largest && arr[i] > secondLargest) {
            secondLargest = arr[i]
        }

    }
    return secondLargest
}
console.log(methodTwo(unique));
console.log(methodTwo(unique1));
