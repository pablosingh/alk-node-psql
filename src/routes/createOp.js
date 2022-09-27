const Operation = require('../models/Operation');

const createOp = async (req, res) => {
    const { type, amount, balance, userId } = req.body;
    await Operation.create({
        type, amount, balance, userId
    });
    res.json( { msg: "createOp" } );
};

module.exports = createOp;