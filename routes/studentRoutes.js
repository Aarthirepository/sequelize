const express = require('express')
const router = express.Router()
const studentController = require('../controller/studentController')

router.post('/addingStudentWithCard',studentController.addingValuesToStudentAndIdentityTable)
router.post("/", studentController.addStudent);
router.get("/:id", studentController.getTheStudent);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);
router.get("/", studentController.getAllStudents);

module.exports = router