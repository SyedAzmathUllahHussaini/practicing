// string = "HELLO world"
// console.log(string)
// console.log(string.indexOf)
// console.log(string.length)
// console.log(string.charAt(2))
// console.log(string.indexOf("L"))
// console.log(string.subString())

// newString = string.concat
// const mySym = Symbol("keys1")
// const JsUsers = {
//     name: "Syed",
//     age: "22",
//     [mySym]: "keys1",
//     email: "talktosyedazmath@outlook.com",
//     location: "Hyderabad",
//     isLoggedIn: "false",
//     lastLoginDays: ["Monday", "Saturday"],
//     myfunc: function () {
//         console.log(`Hello JS Users, ${this.name} `);
//     }

// }

// console.log(JsUsers.myfunc())
// console.log(JsUsers.email)
// console.log(JsUsers["email"]);
// console.log(JsUsers["lastLoginDays"])
// console.log(JsUsers[mySym])
// console.log(JsUsers)

// JsUsers.greeting = function () {
//     console.log("Hello Js Users");
// }
// JsUsers.greetingTwo = function () {
//     console.log(`Hello Js Users, ${this.name}`);
// }
// console.log(JsUsers.greeting());
// console.log(JsUsers.greetingTwo());

// const user = {
//     name: "Syed",
//     age: 23
// }

// function handleObject(anyObject) {
//     console.log(`Hello ${anyObject.name} your age is ${anyObject.age}`)

// }
// // handleObject(user)
// handleObject({
//     name: "Syed",
//     age: 23
// })

// const myArry = [1, 2, 3, 4, 5]

// function myArray(access) {
//     return access[2]
// }

// console.log(myArray(
//     [1, 2, 30, 4, 5, 6]
// ));

// const myObject = {
//     name: "Syed",
//     age: 22
// }

// function handleObect(anyObject) {
//     console.log(`Hello ${anyObject.name} your age is ${anyObject.age}`);
// }
// handleObect(myObject)


// const user = {
//     userName: "Syed",
//     price: 999,
//     welcomeMessage: function () {
//         console.log(`${this.userName}, Welcome to myStore.....`);
//         // console.log(this);

//     }
// };

// user.welcomeMessage()
// user.userName = "Syed Azmath"
// user.welcomeMessage()
// console.log(this); --------------------------------------------- browser me sab se ziada golbal object hai window obejct


// function chai() {
//     let userName = "syed"
//     console.log(this.userName)
// }

// chai()
// inside the function we can't use this it will give undefined....

// const chai = () => {
//     let userName = "Syed"
//     console.log(this.userName);
// }

// chai()

// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(2, 2))
// --------------------------------------------------------------------------------------------------------------------------------------------------

// IIFE

// (function chai() {
//     //  named IIFE
//     console.log(`DB connected `);

// })();

// (() => (console.log(`DB connected Two`)))();
// Simple IIFE


((name) => {
    console.log(`Hello, ${name} studing in 4 class in National English High School...`);
})("Syed Abdur Rahman")
