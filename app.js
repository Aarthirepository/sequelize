const express = require('express')
const db = require('./utils/db-connections')
const studentRoutes = require('./routes/studentRoutes')

const app = express()

app.use(express.json());

require('./models')

app.get("/", (req, res) => res.send("Hello World"));

app.use('/students', studentRoutes)
  
db.sync({force:true}).then(()=>{
    app.listen(3000, ()=>{
        console.log('Server is connected')
    })

}).catch((err)=>{
    console.log(err) 
})
