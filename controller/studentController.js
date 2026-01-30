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

const getAllStudents = (req, res) => {
  const retrieveQuery = ` SELECT * FROM Students`;
  db.execute(retrieveQuery, (err, results) => {
    if (err) {
      console.log(err.message);
      res.status(404).send("err.message");
      connection.end();
      return;
    }
    console.log("Retrieved all the  student record");
    res.status(200).json(results);
  });
};

const getTheStudent = (req, res) => {
  const { id } = req.params;
  console.log("id", id);

  if (!id) {
    return res.status(400).send("ID is required");
  }
  const getStudentQuery = `SELECT  * FROM Students 
       WHERE  id = ?`;

  db.execute(getStudentQuery, [id], (err, results) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    if (results.length === 0) {
      return res.status(404).send("Student not found");
    }

    res.status(200).json(results[0]);
  });
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
