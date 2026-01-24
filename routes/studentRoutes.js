const express = require('express')
const router = express.Router()
const studentController = require('../controller/studentController')

router.post('/students',studentController.addStudent)
router.get('/students/:id', studentController.getTheStudent)
router.put('/students/:id', studentController.updateStudent)
router.delete('/students/:id', studentController.deleteStudent)
router.get('/students', studentController.getAllStudents)

module.exports = router