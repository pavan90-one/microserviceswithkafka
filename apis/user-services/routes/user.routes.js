const express = require('express');
const Routes = express.Router();
const userController = require('../controllers/user.controller');

Routes.get('/', userController.getUser);
Routes.post('/create', userController.createUser);
Routes.put('/update', userController.updateUser);
Routes.delete('/delete', userController.deleteUser);    
Routes.get('/get/id/:id', userController.getUserById);
Routes.put('/update/:id', userController.updateUserById);
 Routes.delete('/delete', userController.deleteUser);

module.exports = Routes;
