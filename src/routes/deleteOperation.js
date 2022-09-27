const Operation = require('../models/Operation');

const deleteOperation = async (req, res) => {
    try {
        const { id } = req.body;
        const operatioToDelete = await Operation.destroy({
            where: { id }
        });
        res.json({ msg: "ok", operatioToDelete });
    } catch (error) {
        return res.status(500).json({ message: error.message });   
    }
};

module.exports = deleteOperation;