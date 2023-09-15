const http = require('http')
const fs = require('fs')
const port = 8000

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html')

    if (req.url == '/') {
        res.statusCode = 200;
        const data = fs.readFileSync('home.html');
        res.end(data.toString())
    } else if (req.url == '/about.html') {
        res.statusCode = 200;
        const about = fs.readFileSync('about.html');
        res.end(about.toString())
    } else if (req.url == '/contact.html') {
        res.statusCode = 200;
        const contact = fs.readFileSync('contact.html');
        res.end(contact.toString())
    }
    else {
        res.statusCode == 404
        res.end('Page Not Found')
    }

})


server.listen(port, () => {
    console.log(`Server is Listening at port ${port}`);
})