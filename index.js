const user = require('./src/models/user');
const operation = require('./src/models/operation');

const express = require('express');
const server = express();

const routes = require('./src/routes/index.js');
const db = require('./src/db.js');

server.name = 'API';
server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

server.use( '/', routes );



db.sync({ force: false }).then(() => {
    server.listen(3001, () => {
        console.log('listening at 3001');

        user.hasMany(operation);
        operation.belongsTo(user);

        }   
    );
});

module.exports = server;