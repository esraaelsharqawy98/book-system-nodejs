const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const userRouter = require('./Routers/users')
const bookRouter = require('./Routers/books')

app.use(bodyParser.json());

const url = "mongodb+srv://eamhel98:12345@mag.e3pup.mongodb.net/?retryWrites=true&w=majority&appName=mag";
const connectToDB = async()=>{
  try{
    mongoose.set("strictQuery", false)
    await mongoose.connect(url);
    console.log("connected")
  }
  catch(err){
    console.log(err);
    process.exit()
  }
}
connectToDB()

app.use('/' , userRouter)
app.use('/' , bookRouter)

app.listen(9093);