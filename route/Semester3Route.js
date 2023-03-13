const express=require('express');
const Semester3Controller=require('../controller/Semester3Controller');

const router=express.Router();


router.post('/alterSemester',Semester3Controller.alterSemester);

module.exports=router;