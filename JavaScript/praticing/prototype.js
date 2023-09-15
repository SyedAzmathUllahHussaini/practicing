//  Prototypes are the mechanism by which JavaScript objects inherit features from one another.
//  In this article, we explain what a prototype is, how prototype chains work,
//     and how a prototype for an object can be set.


// Call

function setUsername(username) {
    this.username = username
    // console.log("called");

}

function createUser(username, email, password) {
    setUsername.call(this, username)
    this.email = email
    this.password = password

}

const parameter = new createUser("syed", "syed@gmail.com", "123@abcd")
console.log(parameter);

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

const myFunc = makeFunc()
myFunc()


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


function createvalue(addToValue) {
    return function (number) {
        return number + addToValue
    }
}

const addFive = createvalue(5)
console.log(addFive(10));
console.log(addFive(20));
// console.log(addFive(30));
