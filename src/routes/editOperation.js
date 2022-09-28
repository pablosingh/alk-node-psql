const Operation = require('../models/Operation.js');

const editOperation = async (req, res) => {
    try {
        const { id } = req.body;
        //  BODY DEBE CONTENER TODOS LOS DATOS A EDITAR
        //     id, type, amount, balance, personId
        const operatioToEdit = await Operation.findOne({
            where: { id }
        });
        operatioToEdit.set(req.body);
        await operatioToEdit.save();
        res.json(operatioToEdit);
    } catch (error) {
        return res.status(500).json({ message: error.message });   
    }
};

module.exports = editOperation;