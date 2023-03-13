const express=require('express');
const Semester5Controller=require('../controller/Semester5Controller');

const router=express.Router();


router.post('/alterSemester',Semester5Controller.alterSemester);

module.exports=router;