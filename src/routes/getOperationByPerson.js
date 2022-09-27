const Operation = require('../models/Operation');

const getOperation = async (req, res) => {
    console.log(req.params.personId);
    // let personId = null;
    let result = [];
    if(req.params.personId){
        // personId = req.params.personId;
        result = await Operation.findAll({
            where: {
                personId: req.params.personId
            }
        });
    }

    res.json( { 
        msg: 'ok', 
        result
    } );
};

module.exports = getOperation;