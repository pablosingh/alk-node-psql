const { request } = require('../..');
const Person = require('../models/Person');
const Operation = require('../models/Operation');

const getPerson = async (req, res) => {
    const { id } = req.body;
    try {
    
        const personFound = await Person.findOne({
            where: { id: id },
            include: Operation
        });
        res.json(personFound);
    } catch (error) {
        return res.status(500).json({ message: error.message });   
    }
};

module.exports = getPerson;