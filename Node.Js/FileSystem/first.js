const fs = require("fs")
// fs.readFile('file.js', 'utf-8', (err, data) => {
//     if (err) {
//         throw err
//     } else {
//         console.log(data, "run completed");
//     }
// })

// console.log("Finished Reading File...");

// fs.watchFile('file.js', (curr, prev) => {
//     console.log(`the current mtime is: ${curr.mtime}`);
//     console.log(`the previous mtime was: ${prev.mtime}`);;
// })

// fs.rename('file.js', 'Second.js', (err, data) => {
//     if (err) {
//         throw err
//     } else {
//         console.log("rename Completed");
//     }
// })

fs.copyFile('Second.js', 'destination.js', (err, data) => {
    if (err) {
        throw err
    } else {
        console.log("copyFile Completed...");
    }
})