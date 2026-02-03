const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connections");


const studentCourses = sequelize.define('studentCourses', {
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    }
})

module.exports = studentCourses