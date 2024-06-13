const lojasRouter = require('express').Router();
const controller = require('../controllers/lojas');

//lojas CRUD
lojasRouter.get('/', controller.getAll); //read all
lojasRouter.get('/:number', controller.getById); //read one by his id (number)
lojasRouter.post('/create', controller.create); //create new 
lojasRouter.put('/update', controller.update); //update 
lojasRouter.delete('/delete/:number', controller.delete); //delete 

module.exports = lojasRouter;