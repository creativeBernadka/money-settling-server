const http = require('http');
const app = require('./src/app');

const port = process.env.NODE_PORT || 3000;

const server = http
    .createServer(app)
    .listen({
        port
    }, () => {
        console.log("Node server started at", port);
    });

module.exports = server;

