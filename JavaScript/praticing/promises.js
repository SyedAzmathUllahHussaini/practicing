const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("Async Task is completed");
        resolve()
    }, 2000)
})

promiseOne.then(function () {
    setTimeout(function () {
        // console.log("Promise resolve.");
    }, 4000)
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        // console.log("New Promise..");
        resolve()
    }, 2000)
}).then(function () {
    // console.log("new resolved..");
})


const promisethree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // resolve({ username: "syed", useremail: "syed@gmail.com", })
    }, 1000)
})

promisethree.then(function (user) {
    // console.log(user);
})


const promisefour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // let error = true
        let error = false
        if (!error) {
            resolve({ username: "syed", email: "syed@example.com" })
        } else {
            reject("ERROR : Something went wrong..")
        }
    })
})

promisefour.then(function (user) {
    console.log(user);
    return user.username
}).then((username) => console.log(username)).catch(function (error) {
    console.log("error");
}).finally(() => console.log("Something is happening either resolve or reject"))
