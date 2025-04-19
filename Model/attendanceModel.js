const mongoose = require('mongoose');
// mongoose.connect('mongoose://localhost:27017/data')
const attendanceSchema= new mongoose.Schema({
    date:{
        type:Date,
        default:Date.now()
    },
    status:{
            type: String,
            enum: ['present', 'absent', 'late'],
            required: true 
    },
    studentId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'student',
         required: true

    }
})

module.exports= mongoose.model('attendances',attendanceSchema);