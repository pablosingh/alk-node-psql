const Operation = require('../models/Operation.js');

const getOperation = async (req, res) => {
    try {
        console.log(req.params.personId);
        let result = [];
        if(req.params.personId){
            result = await Operation.findAll({
                where: {
                    personId: req.params.personId
                }
            });
        }

        res.json( { result } );
    } catch (error) {
        return res.status(500).json({ message: error.message });   
    }
};

module.exports = getOperation;