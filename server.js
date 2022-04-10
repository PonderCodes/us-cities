const http = require('http');
const app = require('./app');
const port = process.env.port || 8080;
const server = htttp.createServer(app);
server.listen(port);
