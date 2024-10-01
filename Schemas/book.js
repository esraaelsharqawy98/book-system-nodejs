const mongoose = require('mongoose');
const Schema = mongoose.Schema

const bookSchema = new Schema({
     name:String,
     description:String,
     price:Number,
     author:String,
})


module.exports = mongoose.model("Books" , bookSchema)