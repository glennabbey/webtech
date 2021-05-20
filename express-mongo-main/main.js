const express = require("express"); 
const app = express.Router(); 
const PORT = process.env.PORT || 4800;
const mongoose = require("mongoose");   

const connection = mongoose.connect(process.env.mongoURI, { 
 useNewUrlParser, useCreateIndex: true
}).then((res) => { 
    console.log("Mongo Connected")
}).catch(err => { 
     console.log(err);
})

const task = require("./models/task"); 


app.post("/add-task", async (req, res) => { 
 
 try {
    
 } catch (error) {
        
 }

}); 


app.post("/show-task", async (req, res) => { 
 
 try {
        
 } catch (error) {
        
 }

}); 

app.listen(function() { 
 console.log( 
  "Server is running on: " +  PORT); 
})
