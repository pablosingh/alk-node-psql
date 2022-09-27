const Person = require('../models/Person');

const deletePerson = async (req, res) => {
    try {
        const { id } = req.body;
        const personToDelete = await Person.destroy({
            where: { id }
        });
        res.json({ msg: "ok", personToDelete });
    } catch (error) {
        return res.status(500).json({ message: error.message });   
    }
};

module.exports = deletePerson;