
const jwt=require('jsonwebtoken')



require('dotenv').config()

const protectedroute=async(req,res,next)=>{

    try {
        const token=req.body.ecoapp

        if(!token){
            res.status(400).json({message:"there is no token provided"})


        }
        else{
            jwt.verify(token,process.JWT,(err,decodedToken)=>{
                if(err){
                    return res.status(401).json("token is not valid!")
                }
                else{
                       req.name=decodedToken.name
                       next()
                

                }
            })

        }



        




    } catch (error) {

        console.error('Logout error:', error);
        res.status(500).json({ message: 'Error in token' });
        
    }
}



module.exports=protectedroute