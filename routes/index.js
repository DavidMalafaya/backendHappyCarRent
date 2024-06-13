const router = require('express').Router();
const frotaRouter = require('./frota');
const lojasRouter = require('./lojas');

router.use('/frota', frotaRouter);
router.use('/lojas', lojasRouter);

module.exports = router;