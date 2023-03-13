const express=require('express');
const Semester2Controller=require('../controller/Semester2Controller');

const router=express.Router();


router.post('/alterSemester',Semester2Controller.alterSemester);

module.exports=router;