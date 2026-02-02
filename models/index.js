const Students= require('./Students')
const IdentityCard= require('./identityCard')

Students.hasOne(IdentityCard)
IdentityCard.belongsTo(Students)

module.exports = {
    Students,
    IdentityCard
}

