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

const updateStudent = (req, res) => {
  const { id } = req.params;
  let { name, email, age } = req.body;
  if (!id) {
    return res.status(400).send("ID is required");
  }

  name = name ?? null;
  email = email ?? null;
  age = age ?? null;

  const updateQuery = ` UPDATE Students SET name=?, email=?,age=? 
  WHERE id =? `;

  db.execute(updateQuery, [name, email, age, id], (err, results) => {
    if (err) {
      console.log(err.message);
      res.status(404).send(err.message);
    }

    if (results.affectedRows === 0) {
      return res.status(404).send("Student record not found");
    }

    res.status(200).send(`Student ${id}  ${name} ${email} ${age} is updated`);
  });
};

const deleteStudent = (req, res) => {
  const { id } = req.params;
  const deleteQuery = `DELETE FROM Students 
      WHERE id = ?`;

  db.execute(deleteQuery, [id], (err, results) => {
    if (err) {
      console.log(err.message);
      res.status(404).send(err.message);
      connection.end();
    }
    if (results.affectedRows === 0) {
      return res.status(404).send("Student record not found");
    }

    console.log(`Deleted student with ID: ${id}`);
    res.status(200).send(`Student ${id} is deleted`);
  });
};
module.exports = {
  addStudent,
  getAllStudents,
  getTheStudent,
  updateStudent,
  deleteStudent,
};
