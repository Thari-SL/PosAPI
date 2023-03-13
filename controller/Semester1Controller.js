const Semester1=require('../model/Semester1');


const alterSemester1=(req,resp)=>{

/*    Semester1.updateOne(
        {regNum:req.body.regNum},{
            $set:{
                subject1: req.body.subject1,
                subject2: req.body.subject2,
                subject3: req.body.subject3,
                subject4: req.body.subject4,
                subject5: req.body.subject5,
                subject6: req.body.subject6,
                subject7: req.body.subject7,
                subject8: req.body.subject8,
                subject9: req.body.subject9
            }
        }
    ).then(result=>{
        if(result.nModified>0){
            resp.status(201).json({status: true, message: 'Update Successfully...'})
        }else {
            resp.status(200).json({status: false, message: 'Try Again...'})
        }

    }).catch(error=>{
        resp.status(500).json(error);
    })*/

    Semester1.findOne({regNum:req.body.regNum}).then(result=>{
        if(result==null) {

            const tempSemester = new Semester1({
                regNum: req.body.regNum,
                subject1: req.body.subject1,
                subject2: req.body.subject2,
                subject3: req.body.subject3,
                subject4: req.body.subject4,
                subject5: req.body.subject5,
                subject6: req.body.subject6,
                subject7: req.body.subject7,
                subject8: req.body.subject8,
                subject9: req.body.subject9

            });
            tempSemester.save().then(result => {
                resp.status(201).json({status: true, message: 'Alter Successfully...'})
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

}




module.exports={alterSemester1}