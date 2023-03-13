const express=require('express');
const Semester4Controller=require('../controller/Semester4Controller');

const router=express.Router();


router.post('/alterSemester',Semester4Controller.alterSemester);

module.exports=router;