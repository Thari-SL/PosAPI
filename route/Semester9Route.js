const express=require('express');
const Semester9Controller=require('../controller/Semester9Controller');

const router=express.Router();


router.post('/alterSemester',Semester9Controller.alterSemester);

module.exports=router;