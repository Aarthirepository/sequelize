const Students= require('./students')
const IdentityCard= require('./identityCard')
const Department= require('./department')


//one to one
Students.hasOne(IdentityCard)
IdentityCard.belongsTo(Students)

//one to many
Department.hasMany(Students)
Students.belongsTo(Department)

module.exports = {
    Students,
    IdentityCard,
    Department
}

