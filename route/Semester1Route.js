const express=require('express');
const Semester1Controller=require('../controller/Semester1Controller');

const router=express.Router();


router.post('/alterSemester1',Semester1Controller.alterSemester1);

module.exports=router;