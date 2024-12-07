const express=require('express')
const app=express()
const cors=require('cors')
const cookieParser = require('cookie-parser');
const {connecToDB}=require('../libs/db')
const router=require('../Routers/authuser')
const stripe=require('../Routers/Striperouter')
require('dotenv').config()
const PORT=process.env.PORT||5000

app.use(cors({
  origin: 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, 
}));

app.use(express.json())
app.use( cookieParser())



app.use('/api/auth',router)
app.use('/payment',stripe)

app.listen(PORT,()=>{
    console.log(`the server is running at port ${PORT}`)
    connecToDB()
})


