import http from 'http';

// Can use this dotenv npm package to store env variables configuration
import 'dotenv/config'
import { error } from 'console';
// console.log(process.env.PORT)

// Also can use the --require (-r) command line option to preload dotenv. 
// By doing this, we don't need to require and load dotenv in the application code.

const PORT = process.env.PORT || 8000;
// const server = http.createServer((req, res) => {
//     // res.setHeader('Content-Type', 'text/plain');
//     // res.write('Hello World!');
//     // res.end('<h1>Hello World!</h1>')

//     // res.setHeader('Content-Type', 'text/html');
//     // res.statusCode = 404;
//         // Another way to write abobe is by using writeHead() method
//     // res.writeHead(404, {'Content-Type': 'text/html'})
//     // res.end('<h1>Hello World in HTML</h1>')

//     console.log(req.url);
//     console.log(req.method);

//     res.writeHead(500, {'Content-Type': 'application/json'})

//     res.end(JSON.stringify({message: 'Server Error'}));
// });

// Routing
const server = http.createServer((req, res) => {
    try {
        // Check if GET request
        if(req.method === 'GET') {
            if(req.url == '/') {
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.end('<h1>Homepage!</h1>')
            } else if(req.url == '/about') {
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.end('<h1>About!</h1>')
            } else {
                res.writeHead(404, {'Content-Type': 'text/html'})
                res.end('<h1>Not Found!</h1>')
            }
        } else {
            throw new Error('Method not allowed!')
        }
    } catch (error) {
        res.writeHead(405, {'Content-Type': 'text/html'})
        res.end(`Bad request - ${error}`)
    }
});

server.listen(PORT, ()=> {
    console.log(`Server is listening on port ${PORT}`);
})