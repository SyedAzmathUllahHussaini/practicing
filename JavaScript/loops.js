// arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let even = arry.filter(num => {
//     return num % 2 == 0
// })


// console.log(even);
// console.log(squrt);


// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value. ${i}`)
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner loop value: ${j}, and outerloop value: ${i}`)
//         console.log(i + '*' + j + '=' + i * j)
//     }

// }


// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World!!!"

// for (const greet of greetings) {
//     console.log(greet);

// }

const map = new Map()
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('USA', "United State Of America")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
}