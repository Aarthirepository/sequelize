const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connections");

const courses = sequelize.define('courses' ,{
    id:{ 
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,  
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
}

)

module.exports = courses