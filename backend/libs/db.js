const mongoose=require('mongoose')
require('dotenv').config()

module.exports.connecToDB=()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to databse successfully")
    })
    .catch((error)=>console.log(error))
}