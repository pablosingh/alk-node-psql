const { request } = require('../..');
const Person = require('../models/Person');

const getPerson = async (req, res) => {
    const { id } = req.body;
    const personFound = await Person.findOne({
        where: { id: id },
    });
    res.json(personFound);
};

module.exports = getPerson;