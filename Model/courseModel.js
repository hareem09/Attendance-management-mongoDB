const mongoose = require('mongoose');
// mongoose.connect('mongoose://localhost:27017/data')
const courseSchema= new mongoose.Schema({
    coursename:{
        type:String,
        required:true
    },
    teacherName:{
            type: String,
            required: true 
    }
})

module.exports= mongoose.model('course',courseSchema);