const express=require('express');
const StudentController=require('../controller/StudentController');

const router=express.Router();

router.post('/saveStudent',StudentController.saveStudent);
router.put('/updateStudent',StudentController.updateStudent);
router.delete('/deleteStudent',StudentController.deleteStudent); /*/:regNum*/
router.get('/getStudent',StudentController.getStudent);
router.get('/getAllStudent',StudentController.getAllStudent);

module.exports=router;