const User_bank = require('../models/User');


const createUser = async (req, res) => {

    const { id, username, balance } = req.body;
    await User_bank.create({
        // id,
        username,
        balance
    });
    res.json( { msg: "usuario creado" });
};

module.exports = createUser;