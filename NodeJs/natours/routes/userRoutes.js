const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.route('/').post(userController.createUser).get(userController.getAllUsers);
router.route('/:id').get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser);

module.exports = router;