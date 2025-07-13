const { isValidObjectId } = require("mongoose");
const user= require("../../models/user");

const UpdateUser = async(req,res)=>{

    try{
        let userId=req.body.id;

            if(! isValidObjectId(userId)){
                return res.status(400).json({
                    "message":"Invalid user id"
                })
            }
            let payload=req.body;
        let updatedUser= await user.findOneAndUpdate({_id:userId},{$set:{...payload}});

        if(updatedUser){
            res.status(200).json({
                "message":"user details updated",
                "UpdatedUser":updatedUser
            })
        }
      

    }catch(error){
        res.status(500).json({
            "Message":"Internal server error",
            "info":error.Message
        })
    }
}

module.exports=UpdateUser;