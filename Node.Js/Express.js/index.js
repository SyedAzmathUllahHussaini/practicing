const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.set("view engine", "html");
app.set("variable name", "value")
app.set("views", "./view")
app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req, res) => {
    res.send('Hello World')
    // res.sendFile(path.join(__dirname, "../home.html"))
})
app.get('/home', (req, res) => {
    // res.render('home')
    res.sendFile(path.join(__dirname, "../home.html"))
})
app.get('/about', (req, res) => {
    res.send('About World!')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})