const db = require("../utils/db-connections");
const Student= require('../models/students')

const addStudent = async (req, res) => {
  try{
    const { name, email } = req.body;
    const student =await Student.create({
            email:email,
            name:name
    })
          res.status(201).send(`User with name ${name} is  created`)

  }catch(err){
    res.status(500).send(`Unable to make an entry `)

  }

};

const getAllStudents = async(req, res) => {
  try {
    const students = await Student.findAll()
    console.log("Retrieved all the students records")
    res.status(200).json(students)
  } catch (error) {
    console.log(error)
    res.status(500).send("Unable to retrieve students records")
  }
};

const getTheStudent = async (req, res) => {
  try {
    const { id } = req.params;
     if(!id){
      return res.status(400).send("Id is required")
     }
    const student = await Student.findByPk(id)
    if(!student){
      return res.status(404).send("Student not found")
    }
    res.status(200).json(student)
    
  } catch (error) {
    console.log(error)
    
  }
res.status(500).send("soething went wrong")

};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    let { name} = req.body;
    
    const student =  await Student.findByPk(id)
    if(!student){
         res.status(404).send("User not found")
    }
    student.name = name
    await student.save()
    res.status(200).send("user hasd been update")
  } catch (error) {
    res.status(500).send("user cannot be updated")
  }
  
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.destroy({
      where:{
        id:id
      }
    })
    
    if(!student){
      res.status(404).send("User not found")
    }
    res.status(200).send("User is deleted")
  } catch (error) {
    res.send(error)
    res.send("Error encountered while deleting")
  }

};
module.exports = {
  addStudent,
  getAllStudents,
  getTheStudent,
  updateStudent,
  deleteStudent,
};
