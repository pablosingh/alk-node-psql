const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const Person = require('./src/models/Person.js');
const Operation = require('./src/models/Operation.js');
const express = require('express');
const server = express();
const routes = require('./src/routes/index.js');
const { db } = require('./src/db.js');
const port = process.env.PORT || 3001;
server.name = 'API';
server.use(express.json());

server.get('/', (req, res) => res.send('Hello World!'));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

server.use( '/', routes );

async function test() {
    try {
        await db.authenticate();
        return 'Connection: OK';
    } catch (error) {
        return 'Error Connection: ' +error;
    }
};

db.sync({ force: false }).then(() => {
    server.listen(port, async() => {
        console.log( await test() + ' || listening at '+ port);
        }   
    );
});
// module.exports = server;
exports.app = functions.https.onRequest(server);