const express = require('express');
const router = express.Router();
const taskCtrl = require('../controllers/task.controller');
const auth = require('../middlewares/auth.middleware');
const { checkPermission } = require('../middlewares/role.middleware');

router.post('/', auth, checkPermission('task', 'create'), taskCtrl.createTask);
router.get('/', auth, checkPermission('task', 'read'), taskCtrl.getTasks);
router.put('/:id', auth, checkPermission('task', 'update'), taskCtrl.updateTask);
router.delete('/:id', auth, checkPermission('task', 'delete'), taskCtrl.deleteTask);

module.exports = router;
