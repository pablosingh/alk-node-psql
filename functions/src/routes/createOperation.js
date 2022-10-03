const Operation = require('../models/Operation.js');

const createOp = async (req, res) => {
    try{
        const { type, amount, balance, personId } = req.body;
        const newOperation = await Operation.create({
            type, amount, balance, personId
        });
        res.json( { msg: "createOp", op: newOperation } );
    } catch (error) {
        return res.status(500).json({ message: error.message });   
    }
};

module.exports = createOp;