const user = require('../models/User');
const getOperation = require('../routes/getOperation');
const createOp = require('../routes/createOp');
const createUser = require('../routes/createUser');

const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => res.json({ msg: 'test' }) );

async function load () {
    const all = await user.findAll({
        // where: {},
        // include: Type
    });
    console.log(all);
    return all;
};

router.get('/getOperations/:userId', getOperation );
router.post('/createOp', createOp );
router.post('/createUser', createUser );
// router.put('/editOp', getOp );
// router.delete('/deleteOp', getOp );
// router.get('/getusers', getOp );

 module.exports = router;