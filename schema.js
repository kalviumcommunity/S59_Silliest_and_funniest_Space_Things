const mongoose = require('mongoose');

const data = new mongoose.Schema({
   
    Color : {
        type : String,
         
    },
    Description : {
        type : String,
        
    },
    Name : {
        type : String,
        
    },
    Shape : {
        type : Array,
    },
    
    Size: {
        type : String
    },
    
    created_by: {
        type : String
    },

    


    
}) 

const dataSet = mongoose.model("spacethings",data);

module.exports = dataSet