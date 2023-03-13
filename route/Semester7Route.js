const express=require('express');
const Semester7Controller=require('../controller/Semester7Controller');

const router=express.Router();


router.post('/alterSemester',Semester7Controller.alterSemester);

module.exports=router;