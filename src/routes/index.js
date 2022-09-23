const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => res.json({ msg: 'test' }) );

 module.exports = router;