const Person = require('../models/Person.js');

const editPerson = async (req, res) => {
    try {
        const { id } = req.body;
        // BODY DEBE CONTENER 
        // name, balance
        const personToEdit = await Person.findOne({
            where: { id }
        });
        personToEdit.set(req.body);
        await personToEdit.save();
        res.json(personToEdit);
    } catch (error) {
        return res.status(500).json({ message: error.message });   
    }
};

module.exports = editPerson;