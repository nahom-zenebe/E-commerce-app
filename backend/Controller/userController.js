const User=require('../models/User')
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')
require('dotenv').config()

module.exports.signup=async(req,res)=>{
    const {name,email,password}=req.body




    try {
        const exisitinguser=await User.findOne({email})
        if( exisitinguser) {
            return res.status(400).json({ message: 'User already exists.' })
        }
        const salt=await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
       

        const newUser= new User({
            name,
            email,
            password: hashedPassword,
        }) 
        await newUser.save()

        const token=await jwt.sign({_id:newUser._id},process.env.JWT)
        res.cookie('ecoapp',token,{httpOnly: true,
            maxAge: 3600000, 
            sameSite: 'Strict',
       })
        res.status(200).json({
            status:'success',
            message:"Account created sucessfully",
            user:{
                _id:newUser._id,
                name:newUser.name,
                email:newUser.email
            }
        })


      
        
    } catch (error) {

        console.error(error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
   

        
    }



}



module.exports.login=async(req,res)=>{
    const {email,password}=req.body


    try {
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({ message: 'User not found' });
        }
  const isMatch=await bcrypt.compare(password,user.password)

  if(!isMatch){
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  const token=await jwt.sign({_id:user._id},process.env.JWT)
  res.cookie('ecoapp',token,{httpOnly: true,
      maxAge: 3600000, 
      sameSite: 'Strict',
 })
  res.status(200).json({
      status:'success',
      message:"Account created sucessfully",
      user:{
          _id:user._id,
          name:user.name,
          email:user.email
      }
  })



        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, please try again later.' })
        
    }



}


module.exports.logout=async(req,res)=>{


    try {
        res.cookie('ecoapp','')
        res.status(200).json({ message: 'Logged out successfully' });
        
    } catch (error) {
        
        console.error('Logout error:', error);
        res.status(500).json({ message: 'Error logging out' });
    }



}


