const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

//Pass in app as our request handler
const server = http.createServer(app);

server.listen(port);
