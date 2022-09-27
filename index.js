const User = require('./src/models/User');
const Operation = require('./src/models/Operation');

const express = require('express');
const server = express();

const routes = require('./src/routes/index.js');
const db = require('./src/db.js');

server.name = 'API';
server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

server.use( '/', routes );

db.sync({ force: false }).then(() => {
    server.listen(3001, () => {
        console.log('listening at 3001');
        User.hasMany(Operation, {
            foreinkey: "userId",
            sourceKey: "id",
          });
          Operation.belongsTo(User, { foreinkey: "userId", targetId: "id" });
        }   
    );
});

async function test() {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
test();
module.exports = server;