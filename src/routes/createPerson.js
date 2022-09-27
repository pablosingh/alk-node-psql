const Person = require('../models/Person');

const createPerson = async (req, res) => {
    const { name, balance } = req.body;
    const newPerson = await Person.create({
        name,
        balance
    });
    res.json( { msg: "usuario creado", person: newPerson });
};

module.exports = createPerson;