const Person = require('../models/Person');

const createPerson = async (req, res) => {
    const { name, balance } = req.body;
    await Person.create({
        name,
        balance
    });
    res.json( { msg: "usuario creado" });
};

module.exports = createPerson;