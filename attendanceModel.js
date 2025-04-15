const mongodb=require('mongoose')
mongodb.connect('mongodb://localhost:27017/data')
let statusSchema=new mongodb.Schema({
    status:String,
    date:String
})
module.exports = mongodb.model('attendance',statusSchema);