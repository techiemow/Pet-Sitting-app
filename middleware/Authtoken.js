const jwt = require('jsonwebtoken')

async function authToken(req,res,next){
    try{
        const token = req.cookies?.token
        const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
       
     
    
        if(!token){
            return res.status(200).json({
                message : "Please Login...!",
                error : true,
                success : false
            })
        }
      
        jwt.verify(token,JWT_SECRET_KEY, function(err, decoded) {
            
            if(err){
                console.log("error auth", err)
            }
             
            
            req.userId = decoded?._id

            next()
        });


    }catch(err){
        res.status(400).json({
            message : err.message || err,
            data : [],
            error : true,
            success : false
        })
    }
}


module.exports = authToken