const Students= require('./students')
const IdentityCard= require('./identityCard')
const Department= require('./department')

const courses = require('./courses')
const studentCourses = require('./studentCourses')


//one to one
Students.hasOne(IdentityCard)
IdentityCard.belongsTo(Students) 

//one to many
Department.hasMany(Students)
Students.belongsTo(Department)

//many to many
Students.belongsToMany(courses, {through:studentCourses });
courses.belongsToMany(Students,{through:studentCourses})

module.exports = {
    Students,
    IdentityCard,
    Department,
    courses,
    studentCourses
}

