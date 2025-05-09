const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// router.post('/', userController.createUser);
// router.get('/', userController.getUsers);
// router.put('/:id', userController.updateUser);
// router.delete('/:id', userController.deleteUser);
router.patch('/findoneupdate/:id', userController.findOneAndUpdateUser);
router.post('/validate', userController.validateUser);
// router.delete('/deleteMany', userController.deleteManyUsers);
// router.put('/updateMany', userController.updateManyUsers);
// router.get('/count', userController.countUsers);
// router.get('/countDocuments', userController.countUserDocs);
// router.put('/replace/:id', userController.replaceUser);

module.exports = router;

