const { isValidObjectId } = require("mongoose");
const user= require("../../models/user");

const UserDetails= async(req,res)=>{

    try{
        let userId= req.params.id;
        if(!isValidObjectId(userId)){
           return res.status(400).json({
                "message":"Invalid userId"
            })
        }
        let UserDetails= await user.findOne({_id:userId});

        res.status(200).json({
            "message":"User details fetch",
            "user":UserDetails,
        })
        
    }catch(error){
        res.status(500).json({
            "message":"Internal server error",
            "info":error.message
        })
    }
}

module.exports=UserDetails;