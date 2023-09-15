const isPalindrome = (x) => {
    return x === +x.toString().split('').reverse().join('')
}
const res = isPalindrome(121)
const res1 = isPalindrome(12)
console.log(res);
console.log(res1);

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

const fib1 = (n) => {
    if (n <= 1) return 1;
    return fib1(n - 1) + fib1(n - 2)

}
console.log(fib1(3));
