const express= require('express')
const app=express()
const statusModel=require('./Model/attendanceModel')

app.use(express.json());
const Port=3000
app.get('/',(req,res)=>{
    res.send('Hello World')
})
// Marking attendance
app.post('/attendance',async(req,res)=>{
   try{
    let statusStudent=await statusModel.create(req.body)
    await statusStudent.save()
    res.json(statusStudent)
   }
   catch(err){
    res.send({message:err.message})
   }
})
//Reading all attendance
app.get('/attendance',async(req,res)=>{
    try{
        let statusStudents=await statusModel.find()
        res.json(statusStudents)
       }
       catch(err){
        res.send({message:err.message})
       }
})
//Viewing by id
app.get('/attendance/:id',async(req,res)=>{
    try{
        let statusStudent=await statusModel.findById(req.params.id)
        res.json(statusStudent)
       }
       catch(err){
        res.send({message:err.message})
       }
})
//Viewing by date
app.get('/attendance/date/:date',async(req,res)=>{
    try{
        let statusStudent=await statusModel.findOne(req.params.date)
        res.json(statusStudent)
       }
       catch(err){
        res.send({message:err.message})
       }
})
//Update by id
app.put('/updateattendance/:id',async(req,res)=>{
        try{
            let statusStudent=await statusModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
            await statusStudent.save()
            res.json(statusStudent)
           }
           catch(err){
            res.send({message:err.message})
           }
})

//Deleting using id
app.delete('/attendance/:id',async(req,res)=>{
    try{
        let statusStudent=await statusModel.findByIdAndDelete(req.params.id)
        res.json(statusStudent)
       }
       catch(err){
        res.send({message:err.message})
       }
})
app.listen(Port,()=>{
    console.log(`server is running on port ${Port}`);
    
})
