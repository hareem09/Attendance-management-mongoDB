const express= require('express');
const studentModel=require('./Model/studentmodel.js');
const statusModel=require('./Model/attendanceModel')
const courseModel=require('./Model/courseModel.js')
const app=express();
app.use(express.json());

const PORT= 3000;

//Student Routes

app.post('/student', async (req,res)=>{
    try{
        const student = await studentModel.create(req.body);
        await student.save();
        res.status(200).json(student);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
})


app.get('/allstudents', async (req,res)=>{
    try{
        const students = await studentModel.find().populate('courseId','coursename teacherName');
        res.status(200).json(students);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
})

app.get('/students/:id', async (req,res)=>{
    try{
        const student= await studentModel.findById(req.params.id);
        if(!student){
            res.status(404).json({message:'Student not found'});
        }
        res.status(200).json(student);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
})

app.put('/students/:id',async(req,res)=>{
    try{
        const student = await studentModel.findByIdAndUpdate(req.params.id,req.body, {new:true});
        await student.save();
        res.status(200).json(student);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
})

app.delete('/students/:id',async(req,res)=>{
    try{
        const student = await studentModel.findByIdAndDelete(req.params.id);
        res.status(200).json(student);
    }
    catch(err){
        res.status(400).json({message:err.message});
    }
})
// mark attendance

app.post('/addattendance',async(req,res)=>{
   try{
    let statusStudent=await statusModel.create(req.body)
    await statusStudent.save()
    res.json(statusStudent)
   }
   catch(err){
    res.send({message:err.message})
   }
})
app.get('/allrecords',async(req,res)=>{
    try{
     let statusStudent=await statusModel.find().populate('studentId','Student Roll class')
     
     res.json(statusStudent)
    }
    catch(err){
     res.send({message:err.message})
    }
 })
 
 app.post('/course',async(req,res)=>{
    try{
        let course=await courseModel.create(req.body)
        await course.save()
        res.json(course)
    }
    catch(err){
        res.send({message:err.message})
    }
 })
app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})