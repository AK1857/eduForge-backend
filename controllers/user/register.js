const user= require("../../models/user")

const RegisterUser=async(req,res)=>{
    try{
        let payload= req.body;
        let newUser= new user(payload);
        let savedUser= await newUser.save();
        if(savedUser){
            res.status(201).json({
                "message":"Register user successfully",
                'user':savedUser
            })
        }else{
            res.status(204).json({
                "message":"Error during user registration"
            })
        }
    }catch(error){

        res.status(500).json({
            "message":"Internal serer error",
            "info":error.message
        })

    }
}

module.exports=RegisterUser;