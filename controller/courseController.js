 const { Students, courses } = require('../models')
const Course = require('../models/courses')




const addCourse = async (req,res)=>{
  try {
      const {name}= req.body
      const course = await  Course.create({"name":name})
      res.status(200).json(course)

  } catch (error) {
    res.status(500).json({'error':error.message})
  }
}


// const addStudentsToCourses = async (req,res)=>{
//     try {
//       const {studentId, courseIds} =req.body
//       const student = await Students.findByPk(studentId)   
//       const course =await courses.findAll({
//         where:{
//             id:courseIds
//         }
//       } )  

//       await student.addCourse(course)
//       const updatedStudent = await Students.findByPk(studentId, {include:course})
//       res.status(200).json(updatedStudent)
//     } catch (error) {
        
//     }
// }
const addStudentsToCourses = async (req, res) => {
  try {
    const { studentId, courseIds } = req.body;

    const student = await Students.findByPk(studentId);
    if (!student) return res.status(404).json({ message: "Student not found" });

    const coursesToAdd = await courses.findAll({
      where: { id: courseIds },
    });
    if (!coursesToAdd.length)
      return res.status(404).json({ message: "No courses found" });

    // Add multiple courses
    await student.addCourses(coursesToAdd);

    // Fetch updated student with courses
    const updatedStudent = await Students.findByPk(studentId, {
      include: courses,
    });

    res.status(200).json(updatedStudent);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

module.exports= {
    addCourse,addStudentsToCourses
}