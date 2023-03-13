const Semester5=require('../model/Semester5');

const alterSemester=(req,resp)=>{

    Semester5.findOne({regNum:req.body.regNum}).then(result=>{
            if(result==null) {

                const tempSemester = new Semester5({
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




module.exports={alterSemester}