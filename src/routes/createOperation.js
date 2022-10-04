const Operation = require('../models/Operation.js');

const createOp = async (req, res) => {
    try{
        const { type, concept, amount, balance, personId, dateOp } = req.body;
        // console.log(req.body);
        const newOperation = await Operation.create({
            type, concept, amount, balance, personId, dateOp
        });
        res.json( { msg: "createOp", op: newOperation, dateOp } );
    } catch (error) {
        return res.status(500).json({ message: error.message });   
    }
};

module.exports = createOp;