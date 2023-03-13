const Semester9=require('../model/Semester9');

const alterSemester=(req,resp)=>{

    const tempSemester = new Semester9({
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
}




module.exports={alterSemester}