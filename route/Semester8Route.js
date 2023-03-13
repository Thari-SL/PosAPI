const express=require('express');
const Semester8Controller=require('../controller/Semester8Controller');

const router=express.Router();


router.post('/alterSemester',Semester8Controller.alterSemester);

module.exports=router;