import {createServer} from 'http';
import 'dotenv/config'
// console.log(process.env.PORT)
const PORT = process.env.PORT || 8000;

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Jim Doe' },
];

// Logger Middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

// JSON Middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    // const user = users[(id-1)]
    // ******** OR ******** 
    const user = users.find((user) => user.id === parseInt(id));

    if (user) {
    res.write(JSON.stringify(user));
    } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: 'User not found' }));
    }
};

// Route handler for POST /api/users
const createUserHandler = (req, res) => {
  let body = '';
  // Listen for data
  req.on('data', (chunk) => {
    body += chunk.toString();
  });
  req.on('end', () => {
    if(!body){
        res.statusCode = 405;
        res.write(JSON.stringify({ message: 'No data provided!' }));
        res.end()
        return;
    }
    // console.log(body);
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

// Route Not found handler
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: 'Route not found' }));
  res.end()
};

const server = createServer((req, res) => {
  logger( req, res, () => {

    // Rather than using it here, we should use a middleware
    // res.setHeader('Content-Type', 'application/json'); 
    
    jsonMiddleware(req, res, () => {
        if(req.method == 'GET') {
            if(req.url == '/api/users') {
                res.write(JSON.stringify(users));
            } else if( req.url.match(/\/api\/users\/[0-9]+/)) {
                getUserByIdHandler(req, res);
            } else {
                notFoundHandler(req, res)
            }
            res.end()
        } else {
            if (req.url === '/api/users' && req.method === 'POST') {
                createUserHandler(req, res);
                console.log(res.statusCode);
            } else{
                notFoundHandler(req, res)
            }
        }
    })
  })
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})