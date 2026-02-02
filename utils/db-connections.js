
const {Sequelize} = require('sequelize')
const sequelize = new Sequelize(
    'testdb', 'root','Time2Win',{
        host:"localhost",
        dialect:'mysql'
    }
);

(async()=>{
    try{
    await sequelize.authenticate()
    console.log("Connection to the database  has been created")

}catch(error){
    console.log(error)

}})()

module.exports = sequelize  












































// const mysql = require('mysql2')

// const  connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Time2Win",
//   database: "testdb",
// });

// connection.connect((err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log("connection has  been created")
// })


// const createStudenttableQuery = `CREATE TABLE  IF NOT EXISTS Students(
//  id INT AUTO_INCREMENT PRIMARY KEY,
//  name VARCHAR(20),
//  email VARCHAR(20) UNIQUE,
//  age INT
// )`

// connection.execute(createStudenttableQuery, (err)=>{
//      if(err){
//         console.log(err)
//         connection.end()
//         return
//      }
//      console.log("Student table is created")
// })

// module.exports =connection
