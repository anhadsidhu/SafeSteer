const express = require('express')
const router = express.Router()
const studentsCtrl = require('../controllers/students')

// router.use(require('../config/auth'));
router.get('/', studentsCtrl.index),
// router.get('/new', studentsCtrl.new);
router.get('/:id', studentsCtrl.show);
router.post('/create', studentsCtrl.create);
// router.delete('/:id', studentsCtrl.delete);
// router.get('/:id/edit', studentsCtrl.edit);
// router.put('/:id', studentsCtrl.update)

module.exports = router
