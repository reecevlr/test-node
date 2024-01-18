const http = require('http')

// req = request; res = response
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('This is the homepage!')
    }
    if (req.url === '/about') {
        res.end('About page! Ladida!')
    }
    res.end(`
    <h1>Woopsie!</h1>
    <p>That's an error, hun...</p>
    <a href="/">Let's go back home</a>
    `)
})

// The port (parameter) is ambiguous. 
server.listen(3000)