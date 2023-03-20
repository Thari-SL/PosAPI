const express=require("express");
const mongoose=require("mongoose");
require('dotenv').config();
const cors=require('cors');

const StudentRoute=require('./route/StudentRoute');
const UserRoute=require('./route/UserRoute');
const Semester1Route=require('./route/Semester1Route');
const Semester2Route=require('./route/Semester2Route');
const Semester3Route=require('./route/Semester3Route');
const Semester4Route=require('./route/Semester4Route');
const Semester5Route=require('./route/Semester5Route');
const Semester6Route=require('./route/Semester6Route');
const Semester7Route=require('./route/Semester7Route');
const Semester8Route=require('./route/Semester8Route');
const Semester9Route=require('./route/Semester9Route');

const app=express();
app.use(express.json({limit:'50mb'}));
app.use(cors())

const serverPort=process.env.SERVER_PORT;

mongoose.connect(
    "mongodb://localhost:27017/pos",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,

    }


).then(()=>{
    app.listen(serverPort,()=>{
        console.log(`API Service is Up and Running on ${serverPort}`)
    })

}).catch(error=>{
    console.log(error);
})

app.use('/api/v1/studentRoute',StudentRoute);
app.use('/api/v1/userRoute',UserRoute);
app.use('/api/v1/semester1Route',Semester1Route);
app.use('/api/v1/semester2Route',Semester2Route);
app.use('/api/v1/semester3Route',Semester3Route);
app.use('/api/v1/semester4Route',Semester4Route);
app.use('/api/v1/semester5Route',Semester5Route);
app.use('/api/v1/semester6Route',Semester6Route);
app.use('/api/v1/semester7Route',Semester7Route);
app.use('/api/v1/semester8Route',Semester8Route);
app.use('/api/v1/semester9Route',Semester9Route);

