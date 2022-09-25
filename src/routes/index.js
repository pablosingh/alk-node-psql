const user = require('../models/user');

const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => res.json({ msg: 'test' }) );

async function load () {
    const all = await user.findAll({
        // where: {},
        // include: Type
    });
    console.log(all);
    return all;
};

router.get('/get', async (req, res) => {
    const obj = await load();
    res.json({ obj });
});

 module.exports = router;