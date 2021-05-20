const mongooes = require("mongoose"); 
const Schema = mongooes.Schema;
//mongooes acts as an object relational model for mongo database 

const task = Schema({ 
 title: { 
   type: String  
 }, 
 
 start_period: { 
   type: String  
 },

 end_period: { 
  type: String
 },

 completed: { 
   type: Boolean, 
   default: false
 }, 
 
}); 

module.exports = mongooes.model('task', task);