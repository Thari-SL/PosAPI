const Student=require('../model/StudentSchema');
//POST
const saveStudent=(req,resp)=> {


    Student.findOne({regNum:req.body.regNum}).then(result=>{
            if(result==null) {

                const tempStudent = new Student({
                    regNum: req.body.regNum,
                    fName: req.body.fName,
                    lName: req.body.lName,
                    address: req.body.address,
                    birthdate: req.body.birthdate,
                    idNum: req.body.idNum,
                    degree: req.body.degree

                });
                tempStudent.save().then(result => {
                    resp.status(201).json({status: true, message: 'Save Successfully...'})
                }).catch(error => {
                    resp.status(500).json(error);
                })
            }else {
                resp.status(400).json({message:'Already Exists'})
            }
        }

    ).catch(error1=>{
        resp.status(500).json(error1);
    })


    /*    const tempStudent = new Student({
            regNum: req.body.regNum,
            fName: req.body.fName,
            lName: req.body.lName,
            address: req.body.address,
            birthdate: req.body.birthdate,
            idNum: req.body.idNum,
            degree: req.body.degree
        });
        tempStudent.save().then(result => {
            resp.status(201).json({status: true, message: 'Saved Successfully...'})
        }).catch(error => {
            resp.status(500).json(error);
        })*/
}
//PUT
const updateStudent=(req,resp)=>{
    Student.updateOne(
        {regNum:req.body.regNum},{
            $set:{
                fName:req.body.fName,
                lName:req.body.lName,
                address:req.body.address,
                birthdate:req.body.birthdate,
                idNum:req.body.idNum,
                degree:req.body.degree
            }
        }
    ).then(result=>{
        if(result.nModified>0){
            resp.status(201).json({status: true, message: 'Update Successfully...'})
        }else {
            resp.status(200).json({status: false, message: 'Try Again...'})
        }
        }

    ).catch(error=>{
        resp.status(500).json(error);
    })

}
//DELETE
const deleteStudent=(req,resp)=>{
/*    const regNum=req.params.regNum;

   // const regNum = req.params;
    console.log(regNum)

    Student.deleteOne({ regNum: regNum })
        .then(result => {
            if (result.deletedCount === 0) { // If no records were deleted, send an error response
                resp.status(400).json({ status: false, message: 'Student not found' });
            } else {
                resp.status(200).json({ status: true, message: 'Student deleted successfully' });
            }
        })
        .catch(error => {
            resp.status(500).json(error);
        });*/


    Student.deleteOne({
        regNum:req.headers.regNum
    }).then(result=>{
        if(result.deletedCount==0){
            resp.status(400).json({status:false,message:'Try Again...'})
        }else {

            resp.status(200).json({status:true,message:'Delete Successfully....'})
        }
    }).catch(error=>{
        resp.status(500).json(error);
    })
}

//GET
const getStudent=(req,resp)=>{

    Student.findOne({
        regNum:req.headers.regNum
    }).then(result=>{
            if(result===null){
                resp.status(404).json({status: false, message: 'Empty result...'})
            }else {
                resp.status(200).json({status: true, data:result})
            }
        }

    ).catch(error=>{
        resp.status(500).json(error);
    })


}
//GET
const getAllStudent=(req,resp)=>{
    Student.find().then(result=>{
        resp.status(200).json({status:true,data:result})
    }).catch(error=>{
        resp.status(500).json(error);
        }

    )

}


module.exports={
    saveStudent,updateStudent,deleteStudent,getStudent,getAllStudent }