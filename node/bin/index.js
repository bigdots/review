const http = require('http');
const port = 8080;
const servFn = require('../app')

const server = http.createServer(servFn);
server.listen(port);