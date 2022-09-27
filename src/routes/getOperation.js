
const getOperation = (req, res) => {
    console.log(req.params);
    res.json( { msg: 'ok' } );
};

module.exports = getOperation;