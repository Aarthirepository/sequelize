const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connections");

const IdentityCard= sequelize.define('IdentityCard',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    cardNo:{
        type:DataTypes.INTEGER,
        unique:true,
        allowNull:false
    }
})


module.exports= IdentityCard