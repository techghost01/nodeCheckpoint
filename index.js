// In this task, you will:

// create a server  
// Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000


const http = require('http');
const PORT = 3000;


const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello Node!!!!</h1>\n');

})

server.listen(PORT)