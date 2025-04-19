const mongodb=require('mongoose')
mongodb.connect('mongodb://localhost:27017/data')
let studentSchema=new mongodb.Schema({
    Student:String,
    Roll:String,
    class:String,
    courseId:{
            type: mongodb.Schema.Types.ObjectId,
            ref:'course',
             required: true
    
        }
})
module.exports = mongodb.model('student',studentSchema);