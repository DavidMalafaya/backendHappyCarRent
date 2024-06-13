const frotaRouter = require('express').Router();
const controller = require('../controllers/frota');

//frota CRUD
frotaRouter.get('/', controller.getAll); //read all
frotaRouter.get('/:number', controller.getById); //read one by his id (frota number)
frotaRouter.post('/create', controller.create); //create new frota
frotaRouter.put('/update', controller.update); //update frota
frotaRouter.delete('/delete/:number', controller.delete); //delete frota

module.exports = frotaRouter;