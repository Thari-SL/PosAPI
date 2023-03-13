
const UserSchema=require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register=(req,resp)=>{




    UserSchema.findOne({email:req.body.email}).then(result=>{
        if(result==null){

            bcrypt.hash(req.body.password, 10, function(err, hash) {
                // Store hash in your password DB.


                const dto = new UserSchema({
                    name: req.body.name,
                    contact: req.body.contact,
                    email: req.body.email,
                    password: hash
                });


                dto.save().then(response => {
                    resp.status(201).json({status: true,token:'empty', message: 'Success.'})
                }).catch(onerror => {
                    resp.status(500).json(onerror);
                })
            });

            //save
        }else {
            resp.status(400).json({message:'Already Exists'})
        }
        }

    ).catch(error1=>{
        resp.status(500).json(error1);
    })





}

const login=(req,resp)=>{

    UserSchema.findOne({email: req.headers.email}).then(response=>{
        if (response==null){
            resp.status(404).json({message:'Empty Results'})
        }else {
            bcrypt.compare(req.headers.password, response.password, function(err, result) {

                if(result){
                    resp.status(201).json({status: true, message: 'Success.'})
                }else{
                    resp.status(401).json({status: false, message: 'UnAuthorized'})
                }
            });
        }
    })

}

module.exports={
    register,login
}