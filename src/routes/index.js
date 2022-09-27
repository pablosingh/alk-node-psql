const Person = require('../models/Person');
const getOperation = require('../routes/getOperation');
const createOp = require('../routes/createOp');
const createPerson = require('./createPerson');

const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => res.json({ msg: 'test' }) );

router.get('/getOperations/:userId', getOperation );
router.post('/createOp', createOp );
router.post('/createUser', createPerson );
// router.put('/editOp', getOp );
// router.delete('/deleteOp', getOp );
// router.get('/getusers', getOp );

 module.exports = router;