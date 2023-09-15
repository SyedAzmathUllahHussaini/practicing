// const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let nums = arry.filter((num) => num > 5)
// let mynums = arry.map((numb) => numb * 2)

// let myarr = arry.filter((even) => {
//     return even % 2 == 0
// })

// console.log(nums);
// console.log(mynums);
// console.log(myarr);

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let mynum = myNumbers.map((num) => num + 10)
// console.log(mynum);

// let mynum = myNumbers.forEach((num) => {
//     return num + 10
// })
// console.log(mynum);



// chaining...
// let mynums = myNumbers.map((num) => num * 10).map((num) => num + 2)
// console.log(mynums);

// reduce....

myNumber = [1, 2, 3, 4, 5]

const myTotal = myNumber.reduce(function (acc, currval) {
    console.log(`acc: ${acc} , currval : ${currval} `);
    return acc + currval
}, 0)

console.log(myTotal);


const myScore = myNumber.reduce((acc, currval) => acc + currval, 0)

console.log(myScore);