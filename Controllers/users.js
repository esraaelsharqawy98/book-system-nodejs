const userModel = require('../Schemas/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.register = async function(req , res){
     try {
        const newUser = new userModel(req.body)
        const hashPassword = await bcrypt.hash(req.body.password , 10)
        newUser.password = hashPassword
        const createUser = await newUser.save()
        res.json({message:"user is added successfully" , User:createUser})
     } catch (error) {
        res.status(400).json({message:"error"})
     }
}
exports.login = async function(req , res){
    try {
        let user = await userModel.findOne({email:req.body.email})
        if(!user){
            res.status(401).json({message:"Invalid Email or Password"})
        }
        let passwordCheck = await user.comparePasswords(req.body.password)
        if(passwordCheck === false){
            res.status(401).json({message:"Invalid Email or Password"})
        }
        const token = jwt.sign({_id:user._id , name:user.name , role:user.role} , "secret")
        res.status(200).json({message:"login successfully"  , user:{name:user.name , eamil:user.email , token , role:user.role}})
    } catch (error) {
        res.status(400).json({message:"error"})
    }

}