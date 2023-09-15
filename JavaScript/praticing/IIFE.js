// IIFE is a Immediately Invoked Function Expression is a design partten that involves in function
//  defining and execution immediately after it's creation. IIFE is enclosed in paranthesis to prevent
//  it from polluting global scope. it's pften used to create a private scope, encapsulate code, and avoid variable naming conflicts.

// Q.1 Basic IIFE Example ---> known as named IIFE  

(function () {
    console.log("Hello, This is Basic IIFE");
})();

// Q.2 Sum of a and b using IIFE
const sum = ((a, b) => {
    return a + b
})(4, 6);

console.log(sum);

// other way  ---> known as simple IIFE

const sum1 = ((a, b) => a + b)(3, 5);

console.log(sum1);

((a, b) => console.log(a + b))(5, 6)    /*simple oneline code*/