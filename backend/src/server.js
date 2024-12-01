const express=require('express')
const app=express()
const cors=require('cors')
const cookieParser = require('cookie-parser');
const {connecToDB}=require('../libs/db')
const router=require('../Routers/authuser')
require('dotenv').config()
const PORT=process.env.PORT||5000


app.use(express.json())
app.use( cookieParser())

app.use(cors({
    origin: 'https://localhost:3000', 
    credentials: true, 
  }));
app.use('/api/auth',router)

app.listen(PORT,()=>{
    console.log(`the server is running at port ${PORT}`)
    connecToDB()
})


