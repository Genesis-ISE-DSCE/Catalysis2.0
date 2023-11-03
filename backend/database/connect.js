
require('dotenv').config()
const mongoose = require('mongoose')
const mongoConnect = mongoose.connect(process.env.DB_URI).then(()=>{
    console.log("connected to the database")
})
.catch((err)=>console.log(err))

module.exports = {mongoConnect}