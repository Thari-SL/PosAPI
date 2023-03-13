const express=require('express');
const Semester6Controller=require('../controller/Semester6Controller');

const router=express.Router();


router.post('/alterSemester',Semester6Controller.alterSemester);

module.exports=router;