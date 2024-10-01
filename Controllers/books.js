const bookSchema = require('../Schemas/book')

exports.getAllBooks = async function(req,res){
    try {
        const books = await bookSchema.find() // return [] if no books
        res.json({message:"Done",data:books})
    } catch (error) {
        res.status(400).json({message:"something went wrong",error:error})
    }

}
exports.getOneBook = async function(req,res){
    try {
        const book = await bookSchema.find({_id:req.params.id})
        res.json({message:"Done",data:book})

    } catch (error) {
        res.status(400).json({message:"something went wrong",error:error})

    }


}
exports.updateBook = async function(req,res){
    try {
         await bookSchema.findByIdAndUpdate(req.params.id,req.body)
        res.json({message:"Done",data:[]})
    } catch (error) {
        res.status(400).json({message:"something went wrong",error:error})

    }


}
exports.deleteBook = async function(req,res){
    try {
        if (req.user.role === "admin"){
            await bookSchema.findByIdAndDelete(req.params.id)
            res.json({message:"Done",data:[]})
        }else{
            res.status(403).json({message:"you dont have permission"})
        }  
    } catch (error) {
        res.status(400).json({message:"something went wrong",error:error})

    }


}
exports.createBook = async function(req,res){
    try {
        if(req.user.role === "admin"){
            const newBook = await bookSchema.create(req.body)
            res.json({message:"Done",data:newBook})
        }else{
            res.status(403).json({message:"you dont have permission"})
        }
    } catch (error) {
        res.status(400).json({message:"something went wrong",error:error})

    }


}