const jwt = require('jsonwebtoken');
// const Person = require('../models/Person');
const getOperationByPerson = require('./getOperationByPerson');
const createOperation = require('./createOperation');
const createPerson = require('./createPerson');
const getPerson = require('./getPerson');
const editOperation = require('./editOperation');
const deleteOperation = require('./deleteOperation');
const editPerson = require('./editPerson');
const deletePerson = require('./deletePerson');
const loginOrSigIn = require('./loginOrSigIn');

const { Router } = require('express');
const router = Router();

router.get('/getOperationByPerson/:personId', getOperationByPerson );
router.post('/createOperation', createOperation );
router.put('/editOperation', editOperation );
router.delete('/deleteOperation', deleteOperation);

router.post('/createPerson', createPerson );
router.get('/getPerson', getPerson );
router.put('/editPerson', editPerson );
router.delete('/deletePerson', deletePerson );

router.get('/login', loginOrSigIn );

router.get('/', (req,res)=> res.json({ msg: "ok" }));
router.get('/jwt', (req,res)=> {
    const name = "Pablo";
    const token = jwt.sign( name, "Firma");
    console.log(token);
    res.json({ token });
});

module.exports = router;