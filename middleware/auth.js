const jwt = require('jsonwebtoken')
module.exports = (req,res,next)=>{
      try{
        const fullToken = req.headers.authorization
        const token = fullToken.split(' ')[1]
        if (!token)  res.status(400).json({message:"Access Denied"})
        const decoded = jwt.verify(token,"secret")
        req.user = decoded
        next()
      }
      catch(error){
        res.status(400).json({message:"Invalid token"})
      }
}