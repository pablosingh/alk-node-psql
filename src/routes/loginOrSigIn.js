const Person = require('../models/Person.js');
const Operation = require('../models/Operation.js');

const loginOrSigIn = async (req, res) => {
    const { email, password, name, balance } = req.body;
    try {
        const personFound = await Person.findOne({
            where: { email, password },
            include: Operation
        });
        if(!personFound){
            const newPerson = await Person.create({
                name,
                email,
                password,
                balance
            });
            res.json( { msg: "usuario creado", person: newPerson });
        }else{
            res.json( { msg: "usuario logueado", person: personFound });
        }
        // console.log("login : "+ personFound);
        // res.json(personFound);
    } catch (error) {
        return res.status(500).json({ message: error.message });   
    }
};

module.exports = loginOrSigIn;